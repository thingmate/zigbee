import { type HavingCommandAbilities } from '@thingmate/abilities';
import type { ZCLCommandFrame } from '@thingmate/zigbee';

export type HavingZigbeeCommandFrameAbilityArguments = readonly [command: ZCLCommandFrame];

export type ZigbeeCommandFrameAbilities =
  HavingCommandAbilities<HavingZigbeeCommandFrameAbilityArguments>;

export interface HavingZigbeeCommandFrameAbility {
  readonly command: ZigbeeCommandFrameAbilities;
}
