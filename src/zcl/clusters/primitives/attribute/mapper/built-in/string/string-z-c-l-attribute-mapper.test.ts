import { describe, expect, test } from 'vitest';
import { STRING_ZCL_ATTRIBUTE_MAPPER } from './string-z-c-l-attribute-mapper.ts';

describe('STRING_ZCL_ATTRIBUTE_MAPPER', (): void => {
  test('encodes a string unchanged.', (): void => {
    expect(STRING_ZCL_ATTRIBUTE_MAPPER.inOut('sensor')).toBe('sensor');
  });

  test('decodes a string unchanged.', (): void => {
    expect(STRING_ZCL_ATTRIBUTE_MAPPER.outIn('sensor')).toBe('sensor');
  });

  test('throws when decoding a non-string value.', (): void => {
    expect((): void => {
      STRING_ZCL_ATTRIBUTE_MAPPER.outIn(42);
    }).toThrow('Expected string, got number');
    expect((): void => {
      STRING_ZCL_ATTRIBUTE_MAPPER.outIn(undefined);
    }).toThrow('Expected string, got undefined');
  });
});
