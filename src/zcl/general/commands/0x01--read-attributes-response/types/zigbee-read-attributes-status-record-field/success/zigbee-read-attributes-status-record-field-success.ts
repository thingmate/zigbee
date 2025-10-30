export interface ZigbeeReadAttributesStatusRecordFieldSuccess {
  readonly id: number; // u16
  readonly status: 0x00; // u8
  readonly type: number; // u8
  readonly value: unknown;
}
