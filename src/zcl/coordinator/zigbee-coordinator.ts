import type { ZigbeeCoordinatorConfigAbilities } from './abilities/config/having-zigbee-coordinator-config-ability.ts';
import type { ZigbeeCommandFrameAbilities } from './abilities/frame/having-zigbee-command-frame-ability.ts';
import type { ZigbeePermitJointAction } from './abilities/permit-join/having-zigbee-permit-joint-ability.ts';
import type { HavingZigbeeCoordinatorAbilities } from './having-zigbee-coordinator-abilities.ts';

export class ZigbeeCoordinator implements HavingZigbeeCoordinatorAbilities {
  readonly #config: ZigbeeCoordinatorConfigAbilities;
  readonly #permitJoin: ZigbeePermitJointAction;
  readonly #command: ZigbeeCommandFrameAbilities;

  constructor({ config, permitJoin, command }: HavingZigbeeCoordinatorAbilities) {
    this.#config = config;
    this.#permitJoin = permitJoin;
    this.#command = command;
  }

  get config(): ZigbeeCoordinatorConfigAbilities {
    return this.#config;
  }

  get permitJoin(): ZigbeePermitJointAction {
    return this.#permitJoin;
  }

  get command(): ZigbeeCommandFrameAbilities {
    return this.#command;
  }
}
