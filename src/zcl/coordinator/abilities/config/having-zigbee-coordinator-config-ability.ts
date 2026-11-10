import { type HavingPropertyAbilities } from '@thingmate/abilities';
import type { ZigbeeCoordinatorConfig } from './zigbee-coordinator-config.ts';

/**
 * Property abilities exposing a {@link ZigbeeCoordinatorConfig} value.
 */
export type ZigbeeCoordinatorConfigAbilities = HavingPropertyAbilities<ZigbeeCoordinatorConfig>;

/**
 * Ability of an object exposing the Zigbee coordinator's network configuration.
 */
export interface HavingZigbeeCoordinatorConfigAbility {
  /**
   * Property abilities reading and updating the coordinator's network configuration.
   */
  readonly config: ZigbeeCoordinatorConfigAbilities;
}
