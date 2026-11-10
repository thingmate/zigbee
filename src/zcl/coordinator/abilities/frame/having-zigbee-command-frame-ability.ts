import { type HavingCommandAbilities } from '@thingmate/abilities';
import type { ZCLCommandFrame } from '../../../command-frame/z-c-l-command-frame.ts';

/**
 * Arguments of the Zigbee command-frame command abilities: the {@link ZCLCommandFrame} to send.
 */
export type HavingZigbeeCommandFrameAbilityArguments = readonly [command: ZCLCommandFrame];

/**
 * Command abilities sending and observing ZCL command frames.
 */
export type ZigbeeCommandFrameAbilities =
  HavingCommandAbilities<HavingZigbeeCommandFrameAbilityArguments>;

/**
 * Ability of an object sending and observing ZCL command frames.
 */
export interface HavingZigbeeCommandFrameAbility {
  /**
   * Command abilities sending and observing ZCL command frames.
   */
  readonly command: ZigbeeCommandFrameAbilities;
}
