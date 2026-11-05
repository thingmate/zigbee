import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type {
  PrefilteredZCLGeneralCommandCommandFrame,
  PrefilteredZCLGeneralCommandStream,
  PrefilteredZCLGeneralCommandStreamArguments,
} from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import type { ZCLReadAttributesActionResult } from './z-c-l-read-attributes-action-result.ts';
import { ZCLReadAttributesAction } from './z-c-l-read-attributes-action.ts';

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

describe('ZCLReadAttributesAction', (): void => {
  test('reads attributes through the cached prefiltered commands.', async (): Promise<void> => {
    const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();
    const action: ZCLReadAttributesAction = new ZCLReadAttributesAction(mock.stream);

    const promise: Promise<ZCLReadAttributesActionResult> = action.call(
      new AbortController().signal,
      { cluster: 0x0006, attributes: [0x0000] },
    );

    await wait(150);

    expect(mock.sent).toEqual([
      [
        {
          cluster: 0x0006,
          payload: new Uint8Array([0x00, 0x00]),
          clusterSpecific: false,
          direction: 'client-to-server',
          command: 0x00,
        },
      ],
    ]);

    mock.emit({
      cluster: 0x0006,
      payload: new Uint8Array([0x00, 0x00, 0x00, 0x10, 0x01]),
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x01,
    });

    expect(await promise).toEqual([{ id: 0x0000, status: 0x00, type: 0x10, value: true }]);
  });
});
