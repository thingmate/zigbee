import type { ZCLAttributeMapper } from '../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import {
  ZCLClusterAttribute,
  type ZCLClusterAttributeStream,
} from '../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';

export class RelativeHumidityMesurementClusterZCLClusterAttribute<
  GValue,
> extends ZCLClusterAttribute<GValue> {
  constructor(
    stream: ZCLClusterAttributeStream,
    staticAttributeId: number,
    map: ZCLAttributeMapper<GValue>,
  ) {
    super(stream, 0x0405, staticAttributeId, map);
  }
}
