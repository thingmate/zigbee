import { type EntityAction } from '@thingmate/entity';
import {
  type ZigbeePredefinedCommand,
  type ZigbeePredefinedCommandPredefinedPropertiesConstraint,
} from '../../../zigbee-predefined-command.js';

export type SendZigbeePredefinedCommand<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
> = EntityAction<[command: ZigbeePredefinedCommand<GPredefinedProperties>], void>;
