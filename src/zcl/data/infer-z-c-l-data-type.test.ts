import { describe, expect, test } from 'vitest';
import { inferZCLDataType } from './infer-z-c-l-data-type.ts';

describe('inferZCLDataType', (): void => {
  test('infers booleans.', (): void => {
    expect(inferZCLDataType(true)).toBe(0x10);
    expect(inferZCLDataType(false)).toBe(0x10);
  });

  test('infers integers, keeping signed minima and unsigned maxima in their own type.', (): void => {
    expect(inferZCLDataType(-0x80)).toBe(0x28);
    expect(inferZCLDataType(-0x81)).toBe(0x29);
    expect(inferZCLDataType(-0x8000)).toBe(0x29);
    expect(inferZCLDataType(-0x8001)).toBe(0x2a);
    expect(inferZCLDataType(-0x80_0000)).toBe(0x2a);
    expect(inferZCLDataType(-0x80_0001)).toBe(0x2b);
    expect(inferZCLDataType(-0x8000_0000)).toBe(0x2b);
    expect(inferZCLDataType(-0x8000_0001)).toBe(0x2c);
    expect(inferZCLDataType(-0x80_0000_0000)).toBe(0x2c);
    expect(inferZCLDataType(-0x80_0000_0001)).toBe(0x2d);
    expect(inferZCLDataType(-0x8000_0000_0000)).toBe(0x2d);
    expect(inferZCLDataType(-0x8000_0000_0001)).toBe(0x2e);
    expect(inferZCLDataType(-0x80_0000_0000_0000)).toBe(0x2e);
    // Note: around 2^55, the float64 spacing is 8, so the next representable integer below the int56 minimum is 2^55 + 8.
    expect(inferZCLDataType(-0x80_0000_0000_0008)).toBe(0x2f);
    expect(inferZCLDataType(0)).toBe(0x20);
    expect(inferZCLDataType(0xff)).toBe(0x20);
    expect(inferZCLDataType(0x100)).toBe(0x21);
    expect(inferZCLDataType(0xffff)).toBe(0x21);
    expect(inferZCLDataType(0x1_0000)).toBe(0x22);
    expect(inferZCLDataType(0xff_ffff)).toBe(0x22);
    expect(inferZCLDataType(0x100_0000)).toBe(0x23);
    expect(inferZCLDataType(0xffff_ffff)).toBe(0x23);
    expect(inferZCLDataType(0x1_0000_0000)).toBe(0x24);
    expect(inferZCLDataType(0xff_ffff_ffff)).toBe(0x24);
    expect(inferZCLDataType(0x100_0000_0000)).toBe(0x25);
    expect(inferZCLDataType(0xffff_ffff_ffff)).toBe(0x25);
    expect(inferZCLDataType(0x1_0000_0000_0000)).toBe(0x26);
    // Note: 0xff_ffff_ffff_ffff (2^56 - 1) is not exactly representable as a number and rounds to 2^56,
    // and the float64 spacing above 2^56 is 16, so the first representable integer above the uint56 maximum is 2^56 + 16.
    expect(inferZCLDataType(0x100_0000_0000_0010)).toBe(0x27);
  });

  test('infers non-integer numbers as the smallest lossless float type.', (): void => {
    expect(inferZCLDataType(1.5)).toBe(0x39);
    expect(inferZCLDataType(0.5)).toBe(0x39);
    expect(inferZCLDataType(0.1)).toBe(0x3a);
    expect(inferZCLDataType(Math.PI)).toBe(0x3a);
    expect(inferZCLDataType(5e-324)).toBe(0x3a);
    expect(inferZCLDataType(Number.NaN)).toBe(0x39);
    expect(inferZCLDataType(Number.POSITIVE_INFINITY)).toBe(0x39);
    expect(inferZCLDataType(Number.NEGATIVE_INFINITY)).toBe(0x39);
  });

  test('infers integers outside the int64 and uint64 ranges as float64.', (): void => {
    expect(inferZCLDataType(1e20)).toBe(0x3a);
    // Note: the float64 spacing around 2^63 is 2048.
    expect(inferZCLDataType(-(2 ** 63) - 2048)).toBe(0x3a);
  });

  test('infers bigints as int64 or uint64.', (): void => {
    expect(inferZCLDataType(-0x8000_0000_0000_0000n)).toBe(0x2f);
    expect(inferZCLDataType(-1n)).toBe(0x2f);
    expect(inferZCLDataType(0n)).toBe(0x27);
    expect(inferZCLDataType(0xffff_ffff_ffff_ffffn)).toBe(0x27);
    expect((): void => {
      inferZCLDataType(0x1_0000_0000_0000_0000n);
    }).toThrow("Value doesn't fit in int64 nor uint64.");
    expect((): void => {
      inferZCLDataType(-0x8000_0000_0000_0001n);
    }).toThrow("Value doesn't fit in int64 nor uint64.");
  });

  test('infers strings.', (): void => {
    expect(inferZCLDataType('abc')).toBe(0x42);
  });

  test("throws on values it can't infer.", (): void => {
    expect((): void => {
      inferZCLDataType(undefined);
    }).toThrow("Unable to infer value's type.");
    expect((): void => {
      inferZCLDataType(null);
    }).toThrow("Unable to infer value's type.");
    expect((): void => {
      inferZCLDataType({});
    }).toThrow("Unable to infer value's type.");
  });
});
