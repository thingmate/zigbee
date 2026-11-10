import type { AsyncFunction } from '@xstd/async-function';

export type ZigbeePermitJointActionArguments = readonly [enable: boolean];
export type ZigbeePermitJointAction = AsyncFunction<ZigbeePermitJointActionArguments, void>;

export interface HavingZigbeePermitJointAbility {
  readonly permitJoin: ZigbeePermitJointAction;
}
