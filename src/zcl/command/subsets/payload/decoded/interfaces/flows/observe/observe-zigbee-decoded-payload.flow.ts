import { type Flow, type PushToPullOptions } from '@xstd/flow';

export type ObserveZigbeeDecodedPayloadFlow<GPayload> = Flow<
  GPayload,
  [options?: PushToPullOptions]
>;
