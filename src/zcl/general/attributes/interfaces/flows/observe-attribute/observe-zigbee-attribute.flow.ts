import { type Flow, type PushToPullOptions } from '@xstd/flow';

export type ObserveZigbeeAttributeFlow<GValue> = Flow<GValue, [options?: PushToPullOptions]>;
