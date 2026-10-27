/**
 * ZCL status codes.
 *
 * @see Zigbee Cluster Library specification, Table 2.15 "Status codes"
 */
export const ZCL_STATUS = Object.freeze({
  SUCCESS: 0x00,
  FAILURE: 0x01,
  NOT_AUTHORIZED: 0x7e,
  RESERVED: 0x7f,
  MALFORMED_COMMAND: 0x80,
  UNSUP_COMMAND: 0x81,
  UNSUP_GENERAL_COMMAND: 0x82,
  UNSUP_MANUF_CLUSTER_COMMAND: 0x83,
  UNSUP_MANUF_GENERAL_COMMAND: 0x84,
  INVALID_FIELD: 0x85,
  UNSUPPORTED_ATTRIBUTE: 0x86,
  INVALID_VALUE: 0x87,
  READ_ONLY: 0x88,
  INSUFFICIENT_SPACE: 0x89,
  DUPLICATE_EXISTS: 0x8a,
  NOT_FOUND: 0x8b,
  UNREPORTABLE_ATTRIBUTE: 0x8c,
  INVALID_DATA_TYPE: 0x8d,
  INVALID_SELECTOR: 0x8e,
  WRITE_ONLY: 0x8f,
  INCONSISTENT_STARTUP_STATE: 0x90,
  DEFINED_OUT_OF_BAND: 0x91,
  RESERVED_14: 0x92,
  ACTION_DENIED: 0x93,
  TIMEOUT: 0x94,
  ABORT: 0x95,
  INVALID_IMAGE: 0x96,
  WAIT_FOR_DATA: 0x97,
  NO_IMAGE_AVAILABLE: 0x98,
  REQUIRE_MORE_IMAGE: 0x99,
  NOTIFICATION_PENDING: 0x9a,
  HARDWARE_FAILURE: 0xc0,
  SOFTWARE_FAILURE: 0xc1,
  RESERVED_15: 0xc2,
  UNSUPPORTED_CLUSTER: 0xc3,
  LIMIT_REACHED: 0xc4,
} as const);

export type ZCLStatus = (typeof ZCL_STATUS)[keyof typeof ZCL_STATUS];

const ZCL_STATUS_NAMES: ReadonlyMap<ZCLStatus, string> = new Map(
  Object.entries(ZCL_STATUS).map(([name, code]) => [code, name] as const),
);

/**
 * Returns the name of the given ZCL status code, or `undefined` if unknown.
 */
export function getZCLStatusName(status: number): string | undefined {
  return ZCL_STATUS_NAMES.get(status as ZCLStatus);
}
