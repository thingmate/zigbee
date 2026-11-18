/**
 * Network configuration of a Zigbee coordinator.
 */
export interface ZigbeeCoordinatorConfig {
  /** IEEE 802.15.4 radio channel on which the network operates. */
  readonly channel: number /* [11 - 26] */;
  /** 16-bit identifier of the Personal Area Network (PAN). */
  readonly panId: number /* u16 */;
  /** 64-bit extended identifier of the Personal Area Network (PAN). */
  readonly extPanId: bigint /* u64 */;
  /** 128-bit network key securing the network communications. */
  readonly key: Uint8Array /* 16B */;
  /** Radio transmission power, in dBm. */
  readonly txRadio: number /* [1 - 21] */;
}
