import { NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { BasicClusterZCLClusterAttribute } from '../../attribute/basic-cluster-z-c-l-cluster-attribute.ts';

export class ZCLZCLVersionAttribute extends BasicClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, NUMBER_ZCL_ATTRIBUTE_MAPPER);
  }
}
