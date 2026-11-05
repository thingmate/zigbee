import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type {
  PrefilteredZCLGeneralCommandCommandFrame,
  PrefilteredZCLGeneralCommandStream,
  PrefilteredZCLGeneralCommandStreamArguments,
} from '../../../general/commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import type { ZCLAttributeMapper } from './mapper/z-c-l-attribute-mapper.ts';
import { ZCLClusterAttribute } from './z-c-l-cluster-attribute.ts';

const MAPPER: ZCLAttributeMapper<unknown> = {
  inOut: (value: unknown): unknown => value,
  outIn: (value: unknown): unknown => value,
};

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

describe('ZCLClusterAttribute', (): void => {
  test('reads the attribute through the static cluster and attribute id, and maps the received value.', async (): Promise<void> => {
    const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();
    const attribute: ZCLClusterAttribute<unknown> = new ZCLClusterAttribute<unknown>(
      mock.stream,
      0x0006,
      0x0000,
      MAPPER,
    );

    const promise: Promise<unknown> = attribute.read.call(new AbortController().signal);

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
      payload: new Uint8Array([0x00, 0x00, 0x00, 0x20, 0x2a]),
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x01,
    });

    expect(await promise).toBe(0x2a);
  });

  test('observes the reported values of the static cluster and attribute id, and maps them.', async (): Promise<void> => {
    const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();
    const attribute: ZCLClusterAttribute<unknown> = new ZCLClusterAttribute<unknown>(
      mock.stream,
      0x0006,
      0x0001,
      MAPPER,
    );

    const resource: ListenerResource<unknown> = await attribute.observe.call(
      new AbortController().signal,
    );

    const received: unknown[] = [];
    resource.listen((value: unknown): void => {
      received.push(value);
    });

    mock.emit({
      cluster: 0x0006,
      payload: new Uint8Array([
        0x00,
        0x00,
        0x10,
        0x01, // attribute 0x0000: filtered out
        0x01,
        0x00,
        0x20,
        0x2a, // attribute 0x0001: received
      ]),
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x0a,
    });

    mock.emit({
      cluster: 0x0000, // different cluster: filtered out
      payload: new Uint8Array([0x01, 0x00, 0x20, 0x2b]),
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x0a,
    });

    expect(received).toEqual([0x2a]);
  });

  test('throws when writing.', async (): Promise<void> => {
    const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();
    const attribute: ZCLClusterAttribute<unknown> = new ZCLClusterAttribute<unknown>(
      mock.stream,
      0x0006,
      0x0000,
      MAPPER,
    );

    await expect(attribute.write.call(new AbortController().signal, 0x2a)).rejects.toThrow(
      'Not implemented.',
    );
  });
});
