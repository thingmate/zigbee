import { type HavingPropertyAbilities } from '@thingmate/abilities';
import type { ZigbeeCoordinatorConfig } from './zigbee-coordinator-config.ts';

export type ZigbeeCoordinatorConfigAbilities = HavingPropertyAbilities<ZigbeeCoordinatorConfig>;

export interface HavingZigbeeCoordinatorConfigAbility {
  readonly config: ZigbeeCoordinatorConfigAbilities;
}
