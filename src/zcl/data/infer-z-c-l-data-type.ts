/**
 * Infers the ZCL data type matching the given value.
 *
 * Integer boundaries are inclusive on both sides:
 * the minimum of each signed type is kept in that type (`value < -0x80` → int16, not int8),
 * while the maximum of each unsigned type is kept in that type (`value <= 0xff` → uint8).
 *
 * Integers outside the int64 and uint64 ranges are inferred as float64,
 * since it is the only ZCL type keeping them lossless.
 *
 * Non-integer numbers are inferred as the smallest float type keeping their value lossless:
 * float32 when `Math.fround(value)` equals the value (also the case for NaN and infinities), else float64.
 */
export function inferZCLDataType(value: unknown): number {
  switch (typeof value) {
    case 'boolean':
      return 0x10; // bool
    case 'number': {
      if (Number.isInteger(value)) {
        if (value < -0x8000_0000_0000_0000 || value >= 0x1_0000_0000_0000_0000) {
          return 0x3a; // float64
        } else if (value < -0x80_0000_0000_0000) {
          return 0x2f; // int64
        } else if (value < -0x8000_0000_0000) {
          return 0x2e; // int56
        } else if (value < -0x80_0000_0000) {
          return 0x2d; // int48
        } else if (value < -0x8000_0000) {
          return 0x2c; // int40
        } else if (value < -0x80_0000) {
          return 0x2b; // int32
        } else if (value < -0x8000) {
          return 0x2a; // int24
        } else if (value < -0x80) {
          return 0x29; // int16
        } else if (value < 0) {
          return 0x28; // int8
        } else if (value <= 0xff) {
          return 0x20; // uint8
        } else if (value <= 0xffff) {
          return 0x21; // uint16
        } else if (value <= 0xff_ffff) {
          return 0x22; // uint24
        } else if (value <= 0xffff_ffff) {
          return 0x23; // uint32
        } else if (value <= 0xff_ffff_ffff) {
          return 0x24; // uint40
        } else if (value <= 0xffff_ffff_ffff) {
          return 0x25; // uint48
        } else if (value <= 0xff_ffff_ffff_ffff) {
          return 0x26; // uint56
        } else {
          return 0x27; // uint64
        }
      } else if (!Number.isFinite(value) || Math.fround(value) === value) {
        return 0x39; // float32
      } else {
        return 0x3a; // float64
      }
    }
    case 'bigint': {
      if (value < -0x8000_0000_0000_0000n || value > 0xffff_ffff_ffff_ffffn) {
        throw new Error("Value doesn't fit in int64 nor uint64.");
      }
      return value < 0n ? 0x2f : 0x27; // int64 | uint64
    }
    case 'string':
      return 0x42; // string
    default:
      throw new Error("Unable to infer value's type.");
  }
}
