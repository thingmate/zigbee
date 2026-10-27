import type { MapInOut } from '@xstd/map-function';

export type ZCLPayloadMapper<GValue> = MapInOut<GValue, Uint8Array>;
