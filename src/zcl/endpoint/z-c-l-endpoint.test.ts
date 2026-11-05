import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type {
  ZCLEndpointArguments,
  ZCLEndpointSelectStream,
  ZCLEndpointSelectStreamArguments,
} from './z-c-l-endpoint.ts';
import { ZCLEndpoint } from './z-c-l-endpoint.ts';

interface ZCLEndpointSelectStreamMock {
  readonly stream: ZCLEndpointSelectStream;
  readonly sent: ZCLEndpointSelectStreamArguments[];
  readonly emit: (commandFrame: ZCLEndpointSelectStreamArguments[0]) => void;
}

function createZCLEndpointSelectStreamMock(): ZCLEndpointSelectStreamMock {
  const sent: ZCLEndpointSelectStreamArguments[] = [];

  const emitters: EmitValue<ZCLEndpointSelectStreamArguments>[] = [];

  return {
    sent,
    emit: (commandFrame: ZCLEndpointSelectStreamArguments[0]): void => {
      for (const emitValue of emitters) {
        emitValue([commandFrame]);
      }
    },
    stream: {
      send: new AsyncFunction<ZCLEndpointSelectStreamArguments, void>(
        async (
          _signal: AbortSignal,
          commandFrame: ZCLEndpointSelectStreamArguments[0],
        ): Promise<void> => {
          sent.push([commandFrame]);
        },
      ),
      observe: new ObservableAsyncFunction<ZCLEndpointSelectStreamArguments>(
        async (): Promise<ListenerResource<ZCLEndpointSelectStreamArguments>> => {
          return new ListenerResource(
            (emitValue: EmitValue<ZCLEndpointSelectStreamArguments>): (() => void) => {
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

describe('ZCLEndpoint.select', (): void => {
  test('sends frames completed with the selected device and endpoint.', async (): Promise<void> => {
    const mock: ZCLEndpointSelectStreamMock = createZCLEndpointSelectStreamMock();
    const endpoint: ZCLEndpoint = ZCLEndpoint.select(mock.stream, {
      device: 0x1234,
      endpoint: 0x01,
    });

    await endpoint.send.call(new AbortController().signal, {
      cluster: 0x0006,
      clusterSpecific: true,
      direction: 'client-to-server',
      command: 0x01,
      payload: new Uint8Array([0x01]),
    });

    expect(mock.sent).toEqual([
      [
        {
          device: 0x1234,
          endpoint: 0x01,
          cluster: 0x0006,
          clusterSpecific: true,
          direction: 'client-to-server',
          command: 0x01,
          payload: new Uint8Array([0x01]),
        },
      ],
    ]);
  });

  test('observes only the frames matching the selected device and endpoint, stripped of them.', async (): Promise<void> => {
    const mock: ZCLEndpointSelectStreamMock = createZCLEndpointSelectStreamMock();
    const endpoint: ZCLEndpoint = ZCLEndpoint.select(mock.stream, {
      device: 0x1234,
      endpoint: 0x01,
    });

    const resource: ListenerResource<ZCLEndpointArguments> = await endpoint.observe.call(
      new AbortController().signal,
    );

    const received: ZCLEndpointArguments[] = [];
    resource.listen((commandArguments: ZCLEndpointArguments): void => {
      received.push(commandArguments);
    });

    mock.emit({
      device: 0x1234,
      endpoint: 0x01,
      cluster: 0x0006,
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x0a,
      payload: new Uint8Array([0x01]),
    });

    mock.emit({
      device: 0x1234,
      endpoint: 0x02, // different endpoint
      cluster: 0x0006,
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x0a,
      payload: new Uint8Array([0x02]),
    });

    mock.emit({
      device: 0x5678, // different device
      endpoint: 0x01,
      cluster: 0x0006,
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x0a,
      payload: new Uint8Array([0x03]),
    });

    expect(received).toEqual([
      [
        {
          cluster: 0x0006,
          clusterSpecific: false,
          direction: 'server-to-client',
          command: 0x0a,
          payload: new Uint8Array([0x01]),
        },
      ],
    ]);
  });
});
