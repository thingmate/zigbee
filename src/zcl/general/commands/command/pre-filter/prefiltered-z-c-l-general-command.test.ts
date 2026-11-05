import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type { ZCLCommandFrameDirection } from '../../../../command-frame/z-c-l-command-frame.ts';
import type { ZCLPayloadMapper } from '../../../../payload/mapper/z-c-l-payload-mapper.ts';
import type { ZCLGeneralCommandArguments } from '../z-c-l-general-command.ts';
import {
  PrefilteredZCLGeneralCommand,
  type PrefilteredZCLGeneralCommandCommandFrame,
  type PrefilteredZCLGeneralCommandStream,
  type PrefilteredZCLGeneralCommandStreamArguments,
} from './prefiltered-z-c-l-general-command.ts';

const STATIC_DIRECTION: ZCLCommandFrameDirection = 'client-to-server';
const STATIC_COMMAND: number = 0x0a;

const PAYLOAD_MAPPER: ZCLPayloadMapper<readonly number[]> = {
  inOut: (values: readonly number[]): Uint8Array => {
    return Uint8Array.from(values);
  },
  outIn: (bytes: Uint8Array): readonly number[] => {
    return Array.from(bytes);
  },
};

function createCommandFrame(
  overrides: Partial<PrefilteredZCLGeneralCommandCommandFrame>,
): PrefilteredZCLGeneralCommandCommandFrame {
  return {
    cluster: 0x0006,
    payload: new Uint8Array([0x00]),
    clusterSpecific: false,
    direction: 'client-to-server',
    command: 0x0a,
    ...overrides,
  };
}

function createPrefilteredZCLGeneralCommandStream(): {
  readonly stream: PrefilteredZCLGeneralCommandStream;
  readonly sent: PrefilteredZCLGeneralCommandStreamArguments[];
  readonly emit: EmitValue<PrefilteredZCLGeneralCommandStreamArguments>;
} {
  const sent: PrefilteredZCLGeneralCommandStreamArguments[] = [];

  let emit!: EmitValue<PrefilteredZCLGeneralCommandStreamArguments>;

  const resource: ListenerResource<PrefilteredZCLGeneralCommandStreamArguments> =
    new ListenerResource(
      (emitValue: EmitValue<PrefilteredZCLGeneralCommandStreamArguments>): void => {
        emit = emitValue;
      },
    );

  return {
    sent,
    emit,
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
          return resource;
        },
      ),
    },
  };
}

describe('PrefilteredZCLGeneralCommand', (): void => {
  test('sends the payload mapped into bytes with the static direction and command.', async (): Promise<void> => {
    const { stream, sent } = createPrefilteredZCLGeneralCommandStream();
    const command: PrefilteredZCLGeneralCommand<readonly number[]> =
      new PrefilteredZCLGeneralCommand<readonly number[]>(
        stream,
        STATIC_DIRECTION,
        STATIC_COMMAND,
        PAYLOAD_MAPPER,
      );

    await command.send.call(new AbortController().signal, { cluster: 0x0006, payload: [0x01] });

    expect(sent).toEqual([
      [
        {
          cluster: 0x0006,
          payload: new Uint8Array([0x01]),
          clusterSpecific: false,
          direction: 'client-to-server',
          command: 0x0a,
        },
      ],
    ]);
  });

  test('observes only the frames matching the static direction and command.', async (): Promise<void> => {
    const { stream, emit } = createPrefilteredZCLGeneralCommandStream();
    const command: PrefilteredZCLGeneralCommand<readonly number[]> =
      new PrefilteredZCLGeneralCommand<readonly number[]>(
        stream,
        STATIC_DIRECTION,
        STATIC_COMMAND,
        PAYLOAD_MAPPER,
      );

    const resource: ListenerResource<ZCLGeneralCommandArguments<readonly number[]>> =
      await command.observe.call(new AbortController().signal);

    const received: ZCLGeneralCommandArguments<readonly number[]>[] = [];
    resource.listen((commandArguments: ZCLGeneralCommandArguments<readonly number[]>): void => {
      received.push(commandArguments);
    });

    emit([createCommandFrame({ clusterSpecific: true, payload: new Uint8Array([0x01]) })]);
    emit([createCommandFrame({ direction: 'server-to-client', payload: new Uint8Array([0x02]) })]);
    emit([createCommandFrame({ command: 0x00, payload: new Uint8Array([0x03]) })]);
    emit([createCommandFrame({ payload: new Uint8Array([0x04]) })]);

    expect(received).toEqual([[{ cluster: 0x0006, payload: [0x04] }]]);
  });
});
