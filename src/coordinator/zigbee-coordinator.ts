import type { ZigbeeCoordinatorConfigAbilities } from './abilities/config/having-zigbee-coordinator-config-ability.ts';
import type { ZigbeeCommandFrameAbilities } from './abilities/frame/having-zigbee-command-frame-ability.ts';
import type { ZigbeePermitJoinAction } from './abilities/permit-join/having-zigbee-permit-join-ability.ts';
import type { HavingZigbeeCoordinatorAbilities } from './having-zigbee-coordinator-abilities.ts';

/**
 * A Zigbee coordinator, composed of its individual abilities.
 *
 * It exposes the coordinator's network configuration,
 * an action opening the network to new devices for a given duration,
 * and command abilities sending and observing ZCL command frames.
 */
export class ZigbeeCoordinator implements HavingZigbeeCoordinatorAbilities {
  readonly #config: ZigbeeCoordinatorConfigAbilities;
  readonly #permitJoin: ZigbeePermitJoinAction;
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
   * Action opening the network to new devices for a given duration (in seconds).
   * A duration of `0` closes the network immediately.
   */
  get permitJoin(): ZigbeePermitJoinAction {
    return this.#permitJoin;
  }

  /**
   * Command abilities sending and observing ZCL command frames.
   */
  get command(): ZigbeeCommandFrameAbilities {
    return this.#command;
  }
}
