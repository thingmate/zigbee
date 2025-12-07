export interface ZigbeeDiscoverAttributesPayload {
  readonly startAttributeIdentifier: number; // u16
  readonly maximumAttributeIdentifiers: number; // u8
}
