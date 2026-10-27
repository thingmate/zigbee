export interface ZCLDataTypeStructureField {
  readonly dataType: number /* u8 */;
  readonly value: unknown;
}

export interface ZCLDataTypeStructure {
  readonly fields: readonly ZCLDataTypeStructureField[];
}
