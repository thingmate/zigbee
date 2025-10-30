export interface ZigbeeAttributeReportField {
  readonly id: number; // u16
  readonly type: number; // u8
  readonly value: unknown;
}
