export interface ZigbeeCoordinatorConfig {
  readonly channel: number /* [11 - 26] */;
  readonly panId: number /* u16 */;
  readonly extPanId: bigint /* u64 */;
  readonly key: Uint8Array /* 16B */;
  readonly txRadio: number /* [1 - 21] */;
}
