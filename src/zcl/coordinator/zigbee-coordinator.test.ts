import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import type { ZCLCommandFrame } from '../command-frame/z-c-l-command-frame.ts';
import type { ZigbeeCoordinatorConfig } from './abilities/config/zigbee-coordinator-config.ts';
import type { HavingZigbeeCommandFrameAbilityArguments } from './abilities/frame/having-zigbee-command-frame-ability.ts';
import type { ZigbeePermitJointActionArguments } from './abilities/permit-join/having-zigbee-permit-joint-ability.ts';
import type { HavingZigbeeCoordinatorAbilities } from './having-zigbee-coordinator-abilities.ts';
import { ZigbeeCoordinator } from './zigbee-coordinator.ts';

const NETWORK_KEY: Uint8Array = new Uint8Array([
  0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f,
]);

const CONFIG: ZigbeeCoordinatorConfig = {
  channel: 15,
  panId: 0x1a62,
  extPanId: 0x0123456789abcdefn,
  key: NETWORK_KEY,
  txRadio: 5,
};

const UPDATED_CONFIG: ZigbeeCoordinatorConfig = {
  channel: 20,
  panId: 0x2f1c,
  extPanId: 0xfedcba9876543210n,
  key: new Uint8Array(16),
  txRadio: 18,
};

const COMMAND_FRAME: ZCLCommandFrame = {
  device: 0x1234,
  endpoint: 1,
  cluster: 0x0006,
  clusterSpecific: false,
  direction: 'client-to-server',
  command: 0x00,
  payload: new Uint8Array(),
};

interface ZigbeeCoordinatorAbilitiesMock {
  readonly abilities: HavingZigbeeCoordinatorAbilities;
  readonly configReads: ZigbeeCoordinatorConfig[];
  readonly configWrites: ZigbeeCoordinatorConfig[];
  readonly permitJoinCalls: boolean[];
  readonly sentFrames: ZCLCommandFrame[];
}

function createZigbeeCoordinatorAbilitiesMock(): ZigbeeCoordinatorAbilitiesMock {
  const configReads: ZigbeeCoordinatorConfig[] = [];
  const configWrites: ZigbeeCoordinatorConfig[] = [];
  const permitJoinCalls: boolean[] = [];
  const sentFrames: ZCLCommandFrame[] = [];

  return {
    configReads,
    configWrites,
    permitJoinCalls,
    sentFrames,
    abilities: {
      config: {
        read: new AsyncFunction<[], ZigbeeCoordinatorConfig>(
          async (_signal: AbortSignal): Promise<ZigbeeCoordinatorConfig> => {
            configReads.push(CONFIG);
            return CONFIG;
          },
        ),
        observe: new ObservableAsyncFunction<ZigbeeCoordinatorConfig>(
          async (): Promise<ListenerResource<ZigbeeCoordinatorConfig>> => {
            return new ListenerResource((): void => {
              /* No emission in this mock. */
            });
          },
        ),
        write: new AsyncFunction<[ZigbeeCoordinatorConfig], void>(
          async (_signal: AbortSignal, config: ZigbeeCoordinatorConfig): Promise<void> => {
            configWrites.push(config);
          },
        ),
      },
      permitJoin: new AsyncFunction<ZigbeePermitJointActionArguments, void>(
        async (_signal: AbortSignal, enable: boolean): Promise<void> => {
          permitJoinCalls.push(enable);
        },
      ),
      command: {
        send: new AsyncFunction<HavingZigbeeCommandFrameAbilityArguments, void>(
          async (_signal: AbortSignal, commandFrame: ZCLCommandFrame): Promise<void> => {
            sentFrames.push(commandFrame);
          },
        ),
        observe: new ObservableAsyncFunction<HavingZigbeeCommandFrameAbilityArguments>(
          async (): Promise<ListenerResource<HavingZigbeeCommandFrameAbilityArguments>> => {
            return new ListenerResource((): void => {
              /* No emission in this mock. */
            });
          },
        ),
      },
    },
  };
}

describe('ZigbeeCoordinator', (): void => {
  test('exposes the config, permit-join and command abilities it was constructed with.', (): void => {
    const mock: ZigbeeCoordinatorAbilitiesMock = createZigbeeCoordinatorAbilitiesMock();
    const coordinator: ZigbeeCoordinator = new ZigbeeCoordinator(mock.abilities);

    expect(coordinator.config).toBe(mock.abilities.config);
    expect(coordinator.permitJoin).toBe(mock.abilities.permitJoin);
    expect(coordinator.command).toBe(mock.abilities.command);
  });

  test('reads and writes the network configuration through the config abilities.', async (): Promise<void> => {
    const mock: ZigbeeCoordinatorAbilitiesMock = createZigbeeCoordinatorAbilitiesMock();
    const coordinator: ZigbeeCoordinator = new ZigbeeCoordinator(mock.abilities);

    expect(await coordinator.config.read.call(new AbortController().signal)).toEqual(CONFIG);
    expect(mock.configReads).toEqual([CONFIG]);

    await coordinator.config.write.call(new AbortController().signal, UPDATED_CONFIG);

    expect(mock.configWrites).toEqual([UPDATED_CONFIG]);
  });

  test('opens and closes the network through the permit-join action.', async (): Promise<void> => {
    const mock: ZigbeeCoordinatorAbilitiesMock = createZigbeeCoordinatorAbilitiesMock();
    const coordinator: ZigbeeCoordinator = new ZigbeeCoordinator(mock.abilities);

    await coordinator.permitJoin.call(new AbortController().signal, true);
    await coordinator.permitJoin.call(new AbortController().signal, false);

    expect(mock.permitJoinCalls).toEqual([true, false]);
  });

  test('sends ZCL command frames through the command abilities.', async (): Promise<void> => {
    const mock: ZigbeeCoordinatorAbilitiesMock = createZigbeeCoordinatorAbilitiesMock();
    const coordinator: ZigbeeCoordinator = new ZigbeeCoordinator(mock.abilities);

    await coordinator.command.send.call(new AbortController().signal, COMMAND_FRAME);

    expect(mock.sentFrames).toEqual([COMMAND_FRAME]);
  });
});
