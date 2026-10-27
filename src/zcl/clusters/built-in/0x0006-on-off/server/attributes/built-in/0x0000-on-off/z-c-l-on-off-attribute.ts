import { BOOLEAN_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/boolean/boolean-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { OnOffClusterZCLClusterAttribute } from '../../attribute/on-off-cluster-z-c-l-cluster-attribute.ts';

export class ZCLOnOffAttribute extends OnOffClusterZCLClusterAttribute<boolean> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, BOOLEAN_ZCL_ATTRIBUTE_MAPPER);
  }
}
