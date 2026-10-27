/**
 * @inheritDoc 2.4 Command Frame Formats
 */
export interface ZCLCommandFrame {
  readonly device: number | bigint; // u16 | u64
  readonly endpoint: number; // u8
  readonly cluster: number; // u16
  readonly clusterSpecific: boolean;
  readonly direction: ZCLCommandFrameDirection;
  readonly command: number; // u8
  readonly payload: Uint8Array;
}

export type ZCLCommandFrameDirection = 'client-to-server' /* 0 */ | 'server-to-client'; /* 1 */

export function getOppositeZCLCommandFrameDirection(
  input: ZCLCommandFrameDirection,
): ZCLCommandFrameDirection {
  return input === 'client-to-server' ? 'server-to-client' : 'client-to-server';
}
