export interface ZCLReadAttributesStatusRecordFieldError {
  readonly id: number /* u16 */;
  readonly status: number /* u8, any ZCL status other than SUCCESS (0x00) */;
}
