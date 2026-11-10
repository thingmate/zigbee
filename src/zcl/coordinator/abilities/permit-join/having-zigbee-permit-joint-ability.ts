import type { AsyncFunction } from '@xstd/async-function';

/**
 * Arguments of a Zigbee permit-join action: `true` to open the network, `false` to close it.
 */
export type ZigbeePermitJointActionArguments = readonly [enable: boolean];

/**
 * Action opening or closing the Zigbee network to new devices.
 */
export type ZigbeePermitJointAction = AsyncFunction<ZigbeePermitJointActionArguments, void>;

/**
 * Ability of an object opening or closing the Zigbee network to new devices.
 */
export interface HavingZigbeePermitJointAbility {
  /**
   * Action opening or closing the network to new devices.
   */
  readonly permitJoin: ZigbeePermitJointAction;
}
