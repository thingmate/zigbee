import type { HavingZigbeeCoordinatorConfigAbility } from './abilities/config/having-zigbee-coordinator-config-ability.ts';
import type { HavingZigbeeCommandFrameAbility } from './abilities/frame/having-zigbee-command-frame-ability.ts';
import type { HavingZigbeePermitJoinAbility } from './abilities/permit-join/having-zigbee-permit-join-ability.ts';

/**
 * Aggregates every ability a Zigbee coordinator must provide:
 * its network configuration, its permit-join action,
 * and its ZCL command-frame command abilities.
 */
export interface HavingZigbeeCoordinatorAbilities
  extends
    HavingZigbeeCoordinatorConfigAbility,
    HavingZigbeePermitJoinAbility,
    HavingZigbeeCommandFrameAbility {}
