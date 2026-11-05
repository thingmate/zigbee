import type { MapInOut } from '@xstd/map-function';

/**
 * Maps between an attribute's application value and the raw value carried by the ZCL frames.
 *
 * `inOut` maps the application value into the wire value (app → wire),
 * `outIn` maps the wire value back into the application value (wire → app).
 */
export type ZCLAttributeMapper<GValue> = MapInOut<GValue, unknown>;
