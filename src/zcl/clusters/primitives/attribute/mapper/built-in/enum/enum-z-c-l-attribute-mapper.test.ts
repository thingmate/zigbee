import { describe, expect, test } from 'vitest';
import { enumZCLAttributeMapper } from './enum-z-c-l-attribute-mapper.ts';

const MAPPER = enumZCLAttributeMapper<'closed' | 'open'>([
  [0x00, 'closed'],
  [0x01, 'open'],
]);

describe('enumZCLAttributeMapper', (): void => {
  test('encodes an enum value into its numeric wire value.', (): void => {
    expect(MAPPER.inOut('closed')).toBe(0x00);
    expect(MAPPER.inOut('open')).toBe(0x01);
  });

  test('decodes a numeric wire value into its enum value.', (): void => {
    expect(MAPPER.outIn(0x00)).toBe('closed');
    expect(MAPPER.outIn(0x01)).toBe('open');
  });

  test('throws when decoding an unknown numeric wire value.', (): void => {
    expect((): void => {
      MAPPER.outIn(0x02);
    }).toThrow();
  });

  test('throws when decoding a non-number value.', (): void => {
    expect((): void => {
      MAPPER.outIn('open');
    }).toThrow('Expected number, got string');
  });
});
