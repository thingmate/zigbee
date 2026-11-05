import { chainMapInOut, mapInOutEnum, reverseMapInOut } from '@xstd/map-function';
import type { ZCLAttributeMapper } from '../../z-c-l-attribute-mapper.ts';
import { NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../number/number-z-c-l-attribute-mapper.ts';

export type EnumZCLAttributeMapper<GEnum extends string> = ZCLAttributeMapper<GEnum>;

/**
 * Builds a mapper between string enum values and their numeric wire values.
 *
 * `entries` are `[wireValue, enumValue]` pairs: encoding maps an enum value into its wire value,
 * decoding maps a wire value back into its enum value.
 *
 * @throws Error When decoding a wire value which is not part of the entries.
 */
export function enumZCLAttributeMapper<GEnum extends string>(
  entries: Iterable<[value: number, key: GEnum]>,
): EnumZCLAttributeMapper<GEnum> {
  return chainMapInOut(
    reverseMapInOut(mapInOutEnum<number, GEnum>(entries)),
    NUMBER_ZCL_ATTRIBUTE_MAPPER,
  );
}
