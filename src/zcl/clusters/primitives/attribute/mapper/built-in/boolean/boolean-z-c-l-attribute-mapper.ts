import type { ZCLAttributeMapper } from '../../z-c-l-attribute-mapper.ts';

export type BooleanZCLAttributeMapper = ZCLAttributeMapper<boolean>;

/**
 * Passes booleans through unchanged, validating the wire value type.
 */
export const BOOLEAN_ZCL_ATTRIBUTE_MAPPER: BooleanZCLAttributeMapper = Object.freeze({
  inOut: (value: boolean): unknown => value,
  outIn: (value: unknown): boolean => {
    if (typeof value === 'boolean') {
      return value;
    } else {
      throw new Error(`Expected boolean, got ${typeof value}`);
    }
  },
} satisfies BooleanZCLAttributeMapper);
