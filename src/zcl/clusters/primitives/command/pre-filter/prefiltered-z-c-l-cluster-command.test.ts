import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource, type EmitValue } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type { ZCLCommandFrameDirection } from '../../../../command-frame/z-c-l-command-frame.ts';
import type { ZCLPayloadMapper } from '../../../../payload/mapper/z-c-l-payload-mapper.ts';
import {
  PrefilteredZCLClusterCommand,
  type PrefilteredZCLClusterCommandCommandFrame,
  type PrefilteredZCLClusterCommandStream,
  type PrefilteredZCLClusterCommandStreamArguments,
} from './prefiltered-z-c-l-cluster-command.ts';

const STATIC_CLUSTER: number = 0x0006;
const STATIC_DIRECTION: ZCLCommandFrameDirection = 'client-to-server';
const STATIC_COMMAND: number = 0x01;

const PAYLOAD_MAPPER: ZCLPayloadMapper<readonly [value: number]> = {
  inOut: ([value]: readonly [value: number]): Uint8Array => {
    return Uint8Array.from([value]);
  },
  outIn: (bytes: Uint8Array): readonly [value: number] => {
    return [bytes[0]];
  },
};

function createCommandFrame(
  overrides: Partial<PrefilteredZCLClusterCommandCommandFrame>,
): PrefilteredZCLClusterCommandCommandFrame {
  return {
    cluster: 0x0006,
    payload: new Uint8Array([0x00]),
    clusterSpecific: true,
    direction: 'client-to-server',
    command: 0x01,
    ...overrides,
  };
}

function createPrefilteredZCLClusterCommandStream(): {
  readonly stream: PrefilteredZCLClusterCommandStream;
  readonly sent: PrefilteredZCLClusterCommandStreamArguments[];
  readonly emit: EmitValue<PrefilteredZCLClusterCommandStreamArguments>;
} {
  const sent: PrefilteredZCLClusterCommandStreamArguments[] = [];

  let emit!: EmitValue<PrefilteredZCLClusterCommandStreamArguments>;

  const resource: ListenerResource<PrefilteredZCLClusterCommandStreamArguments> =
    new ListenerResource(
      (emitValue: EmitValue<PrefilteredZCLClusterCommandStreamArguments>): void => {
        emit = emitValue;
      },
    );

  return {
    sent,
    emit,
    stream: {
      send: new AsyncFunction<PrefilteredZCLClusterCommandStreamArguments, void>(
        async (
          _signal: AbortSignal,
          commandFrame: PrefilteredZCLClusterCommandCommandFrame,
        ): Promise<void> => {
          sent.push([commandFrame]);
        },
      ),
      observe: new ObservableAsyncFunction<PrefilteredZCLClusterCommandStreamArguments>(
        async (): Promise<ListenerResource<PrefilteredZCLClusterCommandStreamArguments>> => {
          return resource;
        },
      ),
    },
  };
}

describe('PrefilteredZCLClusterCommand', (): void => {
  test('sends the payload mapped into bytes with the static cluster, direction and command.', async (): Promise<void> => {
    const { stream, sent } = createPrefilteredZCLClusterCommandStream();
    const command: PrefilteredZCLClusterCommand<readonly [value: number]> =
      new PrefilteredZCLClusterCommand<readonly [value: number]>(
        stream,
        STATIC_CLUSTER,
        STATIC_DIRECTION,
        STATIC_COMMAND,
        PAYLOAD_MAPPER,
      );

    await command.send.call(new AbortController().signal, 0x01);

    expect(sent).toEqual([
      [
        {
          cluster: 0x0006,
          clusterSpecific: true,
          direction: 'client-to-server',
          command: 0x01,
          payload: new Uint8Array([0x01]),
        },
      ],
    ]);
  });

  test('observes only the cluster specific frames matching the static cluster, direction and command.', async (): Promise<void> => {
    const { stream, emit } = createPrefilteredZCLClusterCommandStream();
    const command: PrefilteredZCLClusterCommand<readonly [value: number]> =
      new PrefilteredZCLClusterCommand<readonly [value: number]>(
        stream,
        STATIC_CLUSTER,
        STATIC_DIRECTION,
        STATIC_COMMAND,
        PAYLOAD_MAPPER,
      );

    const resource: ListenerResource<readonly [value: number]> = await command.observe.call(
      new AbortController().signal,
    );

    const received: (readonly [value: number])[] = [];
    resource.listen((commandArguments: readonly [value: number]): void => {
      received.push(commandArguments);
    });

    emit([createCommandFrame({ cluster: 0x0000, payload: new Uint8Array([0x01]) })]); // different cluster
    emit([createCommandFrame({ direction: 'server-to-client', payload: new Uint8Array([0x02]) })]); // different direction
    emit([createCommandFrame({ command: 0x02, payload: new Uint8Array([0x03]) })]); // different command
    emit([createCommandFrame({ clusterSpecific: false, payload: new Uint8Array([0x04]) })]); // not cluster specific
    emit([createCommandFrame({ payload: new Uint8Array([0x05]) })]); // matching

    expect(received).toEqual([[0x05]]);
  });
});
