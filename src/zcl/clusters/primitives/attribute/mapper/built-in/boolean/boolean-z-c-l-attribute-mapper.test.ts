import { describe, expect, test } from 'vitest';
import { BOOLEAN_ZCL_ATTRIBUTE_MAPPER } from './boolean-z-c-l-attribute-mapper.ts';

describe('BOOLEAN_ZCL_ATTRIBUTE_MAPPER', (): void => {
  test('encodes a boolean unchanged.', (): void => {
    expect(BOOLEAN_ZCL_ATTRIBUTE_MAPPER.inOut(true)).toBe(true);
    expect(BOOLEAN_ZCL_ATTRIBUTE_MAPPER.inOut(false)).toBe(false);
  });

  test('decodes a boolean unchanged.', (): void => {
    expect(BOOLEAN_ZCL_ATTRIBUTE_MAPPER.outIn(true)).toBe(true);
    expect(BOOLEAN_ZCL_ATTRIBUTE_MAPPER.outIn(false)).toBe(false);
  });

  test('throws when decoding a non-boolean value.', (): void => {
    expect((): void => {
      BOOLEAN_ZCL_ATTRIBUTE_MAPPER.outIn(1);
    }).toThrow('Expected boolean, got number');
    expect((): void => {
      BOOLEAN_ZCL_ATTRIBUTE_MAPPER.outIn('true');
    }).toThrow('Expected boolean, got string');
    expect((): void => {
      BOOLEAN_ZCL_ATTRIBUTE_MAPPER.outIn(undefined);
    }).toThrow('Expected boolean, got undefined');
  });
});
