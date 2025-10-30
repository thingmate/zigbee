export interface ZigbeeCommand {
  readonly device: number | bigint; // u16 | u64
  readonly endpoint: number; // u8
  readonly cluster: number; // u16
  readonly clusterSpecific: boolean;
  readonly direction: ZigbeeCommandDirection;
  readonly command: number; // u8
  readonly payload: Uint8Array;
}

export type ZigbeeCommandDirection = 'client-to-server' /* 0 */ | 'server-to-client' /* 1 */;
