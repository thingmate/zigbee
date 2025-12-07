import { type Action } from '@xstd/action';

export type SendZigbeeDecodedPayloadAction<GPayload> = Action<[payload: GPayload], void>;
