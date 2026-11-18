import type { AsyncFunction } from '@xstd/async-function';

/**
 * Arguments of a Zigbee permit-join action: the duration (in seconds) during which the network
 * accepts new devices. A duration of `0` closes the network immediately.
 */
export type ZigbeePermitJoinActionArguments = readonly [duration: number];

/**
 * Action opening the Zigbee network to new devices for a given duration.
 */
export type ZigbeePermitJoinAction = AsyncFunction<ZigbeePermitJoinActionArguments, void>;

/**
 * Ability of an object opening the Zigbee network to new devices for a given duration.
 */
export interface HavingZigbeePermitJoinAbility {
  /**
   * Action opening the network to new devices for a given duration (in seconds).
   * A duration of `0` closes the network immediately.
   */
  readonly permitJoin: ZigbeePermitJoinAction;
}
