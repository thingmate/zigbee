import { describe, expect, test } from 'vitest';
import {
  MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER,
  MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER,
  MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER,
  MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER,
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
} from './number-z-c-l-attribute-mapper.ts';

describe('NUMBER_ZCL_ATTRIBUTE_MAPPER', (): void => {
  test('encodes a number unchanged.', (): void => {
    expect(NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(42)).toBe(42);
  });

  test('decodes a number unchanged.', (): void => {
    expect(NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(42)).toBe(42);
  });

  test('throws when decoding a non-number value.', (): void => {
    expect((): void => {
      NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn('42');
    }).toThrow('Expected number, got string');
    expect((): void => {
      NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(true);
    }).toThrow('Expected number, got boolean');
    expect((): void => {
      NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(undefined);
    }).toThrow('Expected number, got undefined');
  });
});

describe('MUL_N_NUMBER_ZCL_ATTRIBUTE_MAPPER', (): void => {
  test('MUL_100 encodes the application value multiplied by 100 and decodes it divided by 100.', (): void => {
    expect(MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(25.5)).toBe(2550);
    expect(MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(2550)).toBe(25.5);
  });

  test('MUL_10 encodes the application value multiplied by 10 and decodes it divided by 10.', (): void => {
    expect(MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(3.2)).toBe(32);
    expect(MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(32)).toBe(3.2);
  });

  test('MUL_200 encodes the application value multiplied by 200 and decodes it divided by 200.', (): void => {
    expect(MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(0.5)).toBe(100);
    expect(MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(100)).toBe(0.5);
  });

  test('MUL_10000 encodes the application value multiplied by 10000 and decodes it divided by 10000.', (): void => {
    expect(MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(1.2345)).toBe(12345);
    expect(MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(12345)).toBe(1.2345);
  });
});
