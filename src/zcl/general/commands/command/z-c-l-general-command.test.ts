import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type { ZCLPayloadMapper } from '../../../payload/mapper/z-c-l-payload-mapper.ts';
import {
  ZCLGeneralCommand,
  type ZCLGeneralCommandArguments,
  type ZCLGeneralCommandCommandFrame,
  type ZCLGeneralCommandStream,
  type ZCLGeneralCommandStreamArguments,
} from './z-c-l-general-command.ts';

const PAYLOAD_MAPPER: ZCLPayloadMapper<readonly number[]> = {
  inOut: (values: readonly number[]): Uint8Array => {
    return Uint8Array.from(values);
  },
  outIn: (bytes: Uint8Array): readonly number[] => {
    return Array.from(bytes);
  },
};

function createZCLGeneralCommandStream(): {
  readonly stream: ZCLGeneralCommandStream;
  readonly sent: ZCLGeneralCommandStreamArguments[];
  readonly emit: EmitValue<ZCLGeneralCommandStreamArguments>;
} {
  const sent: ZCLGeneralCommandStreamArguments[] = [];

  let emit!: EmitValue<ZCLGeneralCommandStreamArguments>;

  const resource: ListenerResource<ZCLGeneralCommandStreamArguments> = new ListenerResource(
    (emitValue: EmitValue<ZCLGeneralCommandStreamArguments>): void => {
      emit = emitValue;
    },
  );

  return {
    sent,
    emit,
    stream: {
      send: new AsyncFunction<ZCLGeneralCommandStreamArguments, void>(
        async (
          _signal: AbortSignal,
          commandFrame: ZCLGeneralCommandCommandFrame,
        ): Promise<void> => {
          sent.push([commandFrame]);
        },
      ),
      observe: new ObservableAsyncFunction<ZCLGeneralCommandStreamArguments>(
        async (): Promise<ListenerResource<ZCLGeneralCommandStreamArguments>> => {
          return resource;
        },
      ),
    },
  };
}

describe('ZCLGeneralCommand', (): void => {
  test('sends the payload mapped into bytes.', async (): Promise<void> => {
    const { stream, sent } = createZCLGeneralCommandStream();
    const command: ZCLGeneralCommand<readonly number[]> = new ZCLGeneralCommand<readonly number[]>(
      stream,
      PAYLOAD_MAPPER,
    );

    await command.send.call(new AbortController().signal, {
      cluster: 0x0006,
      payload: [0x01, 0x02],
    });

    expect(sent).toEqual([[{ cluster: 0x0006, payload: new Uint8Array([0x01, 0x02]) }]]);
  });

  test('observes frames with the payload mapped from bytes.', async (): Promise<void> => {
    const { stream, emit } = createZCLGeneralCommandStream();
    const command: ZCLGeneralCommand<readonly number[]> = new ZCLGeneralCommand<readonly number[]>(
      stream,
      PAYLOAD_MAPPER,
    );

    const resource: ListenerResource<ZCLGeneralCommandArguments<readonly number[]>> =
      await command.observe.call(new AbortController().signal);

    const received: ZCLGeneralCommandArguments<readonly number[]>[] = [];
    resource.listen((commandArguments: ZCLGeneralCommandArguments<readonly number[]>): void => {
      received.push(commandArguments);
    });

    emit([{ cluster: 0x0006, payload: new Uint8Array([0x01, 0x02]) }]);

    expect(received).toEqual([[{ cluster: 0x0006, payload: [0x01, 0x02] }]]);
  });
});
