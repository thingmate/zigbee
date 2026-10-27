import { chainMapInOut, mapInOutFactor } from '@xstd/map-function';
import type { ZCLAttributeMapper } from '../../z-c-l-attribute-mapper.ts';

export type NumberZCLAttributeMapper = ZCLAttributeMapper<number>;

export const NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = Object.freeze({
  inOut: (value: number): unknown => value,
  outIn: (value: unknown): number => {
    if (typeof value === 'number') {
      return value;
    } else {
      throw new Error(`Expected number, got ${typeof value}`);
    }
  },
} satisfies NumberZCLAttributeMapper);

/**
 * MUL_N mappers: multiply the application value by N when encoding (app → wire),
 * and divide the wire value by N when decoding (wire → app).
 */
export const MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(100),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);

export const MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(10),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);

export const MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(200),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);

export const MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(10000),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);
