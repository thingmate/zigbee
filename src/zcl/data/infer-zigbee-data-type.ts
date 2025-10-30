export function inferZigbeeDataType(value: unknown): number {
  switch (typeof value) {
    case 'boolean':
      return 0x10; // bool
    case 'number': {
      if (Number.isInteger(value)) {
        if (value <= -0x80_0000_0000_0000) {
          return 0x2f; // int64
        } else if (value <= -0x8000_0000_0000) {
          return 0x2e; // int56
        } else if (value <= -0x80_0000_0000) {
          return 0x2d; // int48
        } else if (value <= -0x8000_0000) {
          return 0x2c; // int40
        } else if (value <= -0x80_0000) {
          return 0x2b; // int32
        } else if (value <= -0x8000) {
          return 0x2a; // int24
        } else if (value <= -0x80) {
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
      } else {
        return 0x39; // float32
      }
    }
    case 'bigint':
      return 0x27; // uint64
    case 'string':
      return 0x42; // string
    default:
      throw new Error("Unable to infer value's type.");
  }
}
