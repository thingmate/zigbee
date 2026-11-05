import { chainMapInOut, mapInOutFactor } from '@xstd/map-function';
import type { ZCLAttributeMapper } from '../../z-c-l-attribute-mapper.ts';

export type NumberZCLAttributeMapper = ZCLAttributeMapper<number>;

/**
 * Passes numbers through unchanged, validating the wire value type.
 */
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
/**
 * MUL_100 mapper: encodes an application value in units of 100 (e.g. °C → 0.01°C steps).
 */
export const MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(100),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);

/**
 * MUL_10 mapper: encodes an application value in units of 10
 * (e.g. volts → 0.1 V steps, as used by the power configuration cluster).
 */
export const MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(10),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);

/**
 * MUL_200 mapper: encodes an application value scaled to the wire range 0-200
 * (e.g. battery percentage [0, 1] → 0-200 in 0.5% steps).
 */
export const MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(200),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);

/**
 * MUL_10000 mapper: encodes an application value in units of 10000
 * (e.g. a relative humidity fraction [0, 1] → 0-10000 in 0.01% steps,
 * as used by the relative humidity measurement cluster).
 */
export const MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper = chainMapInOut(
  mapInOutFactor(10000),
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
);
