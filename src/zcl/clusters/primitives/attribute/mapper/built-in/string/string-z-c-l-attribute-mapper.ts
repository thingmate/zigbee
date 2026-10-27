import type { ZCLAttributeMapper } from '../../z-c-l-attribute-mapper.ts';

export type StringZCLAttributeMapper = ZCLAttributeMapper<string>;

export const STRING_ZCL_ATTRIBUTE_MAPPER: StringZCLAttributeMapper = Object.freeze({
  inOut: (value: string): unknown => value,
  outIn: (value: unknown): string => {
    if (typeof value === 'string') {
      return value;
    } else {
      throw new Error(`Expected string, got ${typeof value}`);
    }
  },
} satisfies StringZCLAttributeMapper);
