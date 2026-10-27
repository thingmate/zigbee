import { chainMapInOut, mapInOutEnum, reverseMapInOut } from '@xstd/map-function';
import type { ZCLAttributeMapper } from '../../z-c-l-attribute-mapper.ts';
import { NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../number/number-z-c-l-attribute-mapper.ts';

export type EnumZCLAttributeMapper<GEnum extends string> = ZCLAttributeMapper<GEnum>;

export function enumZCLAttributeMapper<GEnum extends string>(
  entries: Iterable<[value: number, key: GEnum]>,
): EnumZCLAttributeMapper<GEnum> {
  return chainMapInOut(
    reverseMapInOut(mapInOutEnum<number, GEnum>(entries)),
    NUMBER_ZCL_ATTRIBUTE_MAPPER,
  );
}
