import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type {
  PrefilteredZCLGeneralCommandCommandFrame,
  PrefilteredZCLGeneralCommandStream,
  PrefilteredZCLGeneralCommandStreamArguments,
} from '../../../../../../../general/commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCLTemperatureMeasuredValueAttribute } from './z-c-l-temperature-measured-value-attribute.ts';

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

describe('ZCLTemperatureMeasuredValueAttribute', (): void => {
  test('rejects the invalid wire value 0x8000.', async (): Promise<void> => {
    const mock: ZCLGeneralCommandStreamMock = createZCLGeneralCommandStreamMock();
    const attribute: ZCLTemperatureMeasuredValueAttribute =
      new ZCLTemperatureMeasuredValueAttribute(mock.stream);

    const promise: Promise<number> = attribute.read.call(new AbortController().signal);

    await wait(300);

    mock.emit({
      cluster: 0x0402,
      payload: new Uint8Array([0x00, 0x00, 0x00, 0x29, 0x00, 0x80]),
      clusterSpecific: false,
      direction: 'server-to-client',
      command: 0x01,
    });

    await expect(promise).rejects.toThrow(/invalid/i);
  });
});
