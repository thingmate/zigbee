import type { ZigbeeCoordinatorConfigAbilities } from './abilities/config/having-zigbee-coordinator-config-ability.ts';
import type { ZigbeeCommandFrameAbilities } from './abilities/frame/having-zigbee-command-frame-ability.ts';
import type { ZigbeePermitJointAction } from './abilities/permit-join/having-zigbee-permit-joint-ability.ts';
import type { HavingZigbeeCoordinatorAbilities } from './having-zigbee-coordinator-abilities.ts';

/**
 * A Zigbee coordinator, composed of its individual abilities.
 *
 * It exposes the coordinator's network configuration,
 * an action opening or closing the network to new devices,
 * and command abilities sending and observing ZCL command frames.
 */
export class ZigbeeCoordinator implements HavingZigbeeCoordinatorAbilities {
  readonly #config: ZigbeeCoordinatorConfigAbilities;
  readonly #permitJoin: ZigbeePermitJointAction;
  readonly #command: ZigbeeCommandFrameAbilities;

  /**
   * Creates a {@link ZigbeeCoordinator} delegating each ability
   * to the corresponding entry of the provided {@link HavingZigbeeCoordinatorAbilities}.
   */
  constructor({ config, permitJoin, command }: HavingZigbeeCoordinatorAbilities) {
    this.#config = config;
    this.#permitJoin = permitJoin;
    this.#command = command;
  }

  /**
   * Property abilities reading and updating the coordinator's network configuration.
   */
  get config(): ZigbeeCoordinatorConfigAbilities {
    return this.#config;
  }

  /**
   * Action opening or closing the network to new devices.
   */
  get permitJoin(): ZigbeePermitJointAction {
    return this.#permitJoin;
  }

  /**
   * Command abilities sending and observing ZCL command frames.
   */
  get command(): ZigbeeCommandFrameAbilities {
    return this.#command;
  }
}
