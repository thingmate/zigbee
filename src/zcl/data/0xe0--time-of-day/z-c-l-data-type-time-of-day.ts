export interface ZCLDataTypeTimeOfDay {
  readonly hours: number /* u8, [0, 23] */;
  readonly minutes: number /* u8, [0, 59] */;
  readonly seconds: number /* u8, [0, 59] */;
  readonly hundredths: number /* u8, [0, 99] */;
}
