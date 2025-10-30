import { type EntityAction } from '@thingmate/entity';

export type SendZigbeeDecodedPayload<GPayload> = EntityAction<[payload: GPayload], void>;
