import { STRING_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/string/string-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { BasicClusterZCLClusterAttribute } from '../../attribute/basic-cluster-z-c-l-cluster-attribute.ts';

export class ZCLManufacturerNameAttribute extends BasicClusterZCLClusterAttribute<string> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0004, STRING_ZCL_ATTRIBUTE_MAPPER);
  }
}
