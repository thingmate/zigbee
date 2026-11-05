import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type {
  PrefilteredZCLGeneralCommandCommandFrame,
  PrefilteredZCLGeneralCommandStream,
  PrefilteredZCLGeneralCommandStreamArguments,
} from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCLReceiveAttributeObserverRaw } from './z-c-l-receive-attribute-observer-raw.ts';
import { ZCLReceiveAttributeObserver } from './z-c-l-receive-attribute-observer.ts';

interface ZCLGeneralCommandStreamMock {
  readonly stream: PrefilteredZCLGeneralCommandStream;
  readonly emit: (commandFrame: PrefilteredZCLGeneralCommandCommandFrame) => void;
}

function createZCLGeneralCommandStreamMock(): ZCLGeneralCommandStreamMock {
  const emitters: EmitValue<PrefilteredZCLGeneralCommandStreamArguments>[] = [];

  return {
    emit: (commandFrame: PrefilteredZCLGeneralCommandCommandFrame): void => {
      for (const emitValue of emitters) {
        emitValue([commandFrame]);
      }
    },
    stream: {
      send: new AsyncFunction<PrefilteredZCLGeneralCommandStreamArguments, void>(
        async (): Promise<void> => undefined,
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

describe('ZCLReceiveAttributeObserver', (): void => {
  test('observes the reported values of the requested attribute.', async (): Promise<void> => {
    const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();
    const observer: ZCLReceiveAttributeObserver = new ZCLReceiveAttributeObserver(mock.stream);

    expect(observer).toBeInstanceOf(ZCLReceiveAttributeObserverRaw);

    const resource: ListenerResource<unknown> = await observer.observe.call(
      new AbortController().signal,
      { cluster: 0x0006, attribute: 0x0001 },
    );

    const received: unknown[] = [];
    resource.listen((value: unknown): void => {
      received.push(value);
    });

    mock.emit({
      cluster: 0x0006,
      payload: new Uint8Array([0x00, 0x00, 0x10, 0x01, 0x01, 0x00, 0x20, 0x2a]),
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x0a,
    });

    expect(received).toEqual([0x2a]);
  });
});
