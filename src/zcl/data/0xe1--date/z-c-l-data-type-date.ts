export interface ZCLDataTypeDate {
  readonly year: number /* u8, years since 1900 (0xff = don't care) */;
  readonly month: number /* u8, [1, 12] (0xff = don't care) */;
  readonly day: number /* u8, day of month (0xff = don't care) */;
  readonly dayOfWeek: number /* u8, [1, 7] (0xff = don't care) */;
}
