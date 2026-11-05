import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import { ZCLReadAttributesCommand } from '../../commands/built-in/0x00-read-attributes/z-c-l-read-attributes-command.ts';
import { ZCLReadAttributesResponseCommand } from '../../commands/built-in/0x01-read-attributes-response/z-c-l-read-attributes-response-command.ts';
import type {
  PrefilteredZCLGeneralCommandCommandFrame,
  PrefilteredZCLGeneralCommandStream,
  PrefilteredZCLGeneralCommandStreamArguments,
} from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import type { ZCLReadAttributesActionResult } from './z-c-l-read-attributes-action-result.ts';
import { ZCLReadAttributesActionRaw } from './z-c-l-read-attributes-action-raw.ts';

interface ZCLGeneralCommandStreamMock {
  readonly stream: PrefilteredZCLGeneralCommandStream;
  readonly sent: PrefilteredZCLGeneralCommandStreamArguments[];
  readonly emit: (commandFrame: PrefilteredZCLGeneralCommandCommandFrame) => void;
}

function createZCLGeneralCommandStreamMock(): ZCLGeneralCommandStreamMock {
  const sent: PrefilteredZCLGeneralCommandStreamArguments[] = [];

  const emitters: EmitValue<PrefilteredZCLGeneralCommandStreamArguments>[] = [];

  return {
    sent,
    emit: (commandFrame: PrefilteredZCLGeneralCommandCommandFrame): void => {
      for (const emitValue of emitters) {
        emitValue([commandFrame]);
      }
    },
    stream: {
      send: new AsyncFunction<PrefilteredZCLGeneralCommandStreamArguments, void>(
        async (
          _signal: AbortSignal,
          commandFrame: PrefilteredZCLGeneralCommandCommandFrame,
        ): Promise<void> => {
          sent.push([commandFrame]);
        },
      ),
      observe: new ObservableAsyncFunction<PrefilteredZCLGeneralCommandStreamArguments>(
        async (): Promise<ListenerResource<PrefilteredZCLGeneralCommandStreamArguments>> => {
          return new ListenerResource(
            (emitValue: EmitValue<PrefilteredZCLGeneralCommandStreamArguments>): (() => void) => {
              emitters.push(emitValue);
              return (): void => {
                const index: number = emitters.indexOf(emitValue);
                if (index !== -1) {
                  emitters.splice(index, 1);
                }
              };
            },
          );
        },
      ),
    },
  };
}

function wait(ms: number): Promise<void> {
  return new Promise<void>((resolve: (value: void) => void): void => {
    setTimeout(resolve, ms);
  });
}

function createResponseCommandFrame(
  payload: Uint8Array,
  cluster: number = 0x0006,
): PrefilteredZCLGeneralCommandCommandFrame {
  return {
    cluster,
    payload,
    clusterSpecific: false,
    direction: 'server-to-client',
    command: 0x01,
  };
}

const READ_ATTRIBUTES_REQUEST_COMMAND_FRAME: PrefilteredZCLGeneralCommandCommandFrame = {
  cluster: 0x0006,
  payload: new Uint8Array([0x00, 0x00, 0x01, 0x00]),
  clusterSpecific: false,
  direction: 'client-to-server',
  command: 0x00,
};

const SUCCESS_RECORD_0: readonly number[] = [0x00, 0x00, 0x00, 0x10, 0x01];

const SUCCESS_RECORD_1: readonly number[] = [0x01, 0x00, 0x00, 0x20, 0x2a];

const SUCCESS_RECORD_0_AND_1: readonly number[] = [...SUCCESS_RECORD_0, ...SUCCESS_RECORD_1];

function createZCLReadAttributesActionRaw(debounceMs: number): {
  readonly action: ZCLReadAttributesActionRaw;
  readonly mock: ZCLGeneralCommandStreamMock;
} {
  const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();

  return {
    mock,
    action: new ZCLReadAttributesActionRaw({
      readAttributesCommand: new ZCLReadAttributesCommand(mock.stream),
      readAttributesResponseCommand: new ZCLReadAttributesResponseCommand(mock.stream),
      debounceMs,
    }),
  };
}

describe('ZCLReadAttributesActionRaw', (): void => {
  test('sends and receives without grouping when the debounce is disabled.', async (): Promise<void> => {
    const { action, mock } = createZCLReadAttributesActionRaw(0);

    const promise: Promise<ZCLReadAttributesActionResult> = action.call(
      new AbortController().signal,
      { cluster: 0x0006, attributes: [0x0000, 0x0001] },
    );

    await wait(0);

    expect(mock.sent).toEqual([[READ_ATTRIBUTES_REQUEST_COMMAND_FRAME]]);

    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0]), 0x0008));
    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0])));
    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0_AND_1])));

    expect(await promise).toEqual([
      { id: 0x0000, status: 0x00, type: 0x10, value: true },
      { id: 0x0001, status: 0x00, type: 0x20, value: 0x2a },
    ]);
  });

  test('groups concurrent calls targeting the same cluster.', async (): Promise<void> => {
    const { action, mock } = createZCLReadAttributesActionRaw(10);

    const promise1: Promise<ZCLReadAttributesActionResult> = action.call(
      new AbortController().signal,
      { cluster: 0x0006, attributes: [0x0000] },
    );
    const promise2: Promise<ZCLReadAttributesActionResult> = action.call(
      new AbortController().signal,
      { cluster: 0x0006, attributes: [0x0001] },
    );

    await wait(30);

    expect(mock.sent).toEqual([[READ_ATTRIBUTES_REQUEST_COMMAND_FRAME]]);

    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0])));
    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0_AND_1])));

    expect(await promise1).toEqual([{ id: 0x0000, status: 0x00, type: 0x10, value: true }]);
    expect(await promise2).toEqual([{ id: 0x0001, status: 0x00, type: 0x20, value: 0x2a }]);
  });

  test('aborts the batch when the only waiting call aborts.', async (): Promise<void> => {
    const { action, mock } = createZCLReadAttributesActionRaw(10);

    const controller: AbortController = new AbortController();
    const promise: Promise<ZCLReadAttributesActionResult> = action.call(controller.signal, {
      cluster: 0x0006,
      attributes: [0x0000],
    });
    const rejection: Promise<void> = expect(promise).rejects.toThrow();

    controller.abort();

    await rejection;

    expect(mock.sent).toEqual([]);
  });

  test('keeps the batch alive when another waiting call remains.', async (): Promise<void> => {
    const { action, mock } = createZCLReadAttributesActionRaw(10);

    const controller1: AbortController = new AbortController();
    const controller2: AbortController = new AbortController();
    const promise1: Promise<ZCLReadAttributesActionResult> = action.call(controller1.signal, {
      cluster: 0x0006,
      attributes: [0x0000],
    });
    const promise2: Promise<ZCLReadAttributesActionResult> = action.call(controller2.signal, {
      cluster: 0x0006,
      attributes: [0x0001],
    });
    const rejection1: Promise<void> = expect(promise1).rejects.toThrow();

    controller1.abort();

    await wait(30);

    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0_AND_1])));

    await rejection1;
    expect(await promise2).toEqual([{ id: 0x0001, status: 0x00, type: 0x20, value: 0x2a }]);
  });

  test('throws when an attribute is missing from the shared result.', async (): Promise<void> => {
    const { action, mock } = createZCLReadAttributesActionRaw(10);

    const attributes: number[] = [0x0000];
    const promise: Promise<ZCLReadAttributesActionResult> = action.call(
      new AbortController().signal,
      { cluster: 0x0006, attributes },
    );

    attributes.push(0x0001); // mutated after the call: not part of the grouped request

    await wait(30);

    mock.emit(createResponseCommandFrame(new Uint8Array([...SUCCESS_RECORD_0])));

    await expect(promise).rejects.toThrow('Missing attribute 0x0001 in read attributes response.');
  });
});
