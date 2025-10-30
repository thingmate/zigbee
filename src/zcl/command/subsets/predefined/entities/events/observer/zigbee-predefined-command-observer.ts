import { type EntityEvent } from '@thingmate/entity';
import {
  type ZigbeePredefinedCommand,
  type ZigbeePredefinedCommandPredefinedPropertiesConstraint,
} from '../../../zigbee-predefined-command.js';

export type ZigbeePredefinedCommandObserver<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
> = EntityEvent<ZigbeePredefinedCommand<GPredefinedProperties>>;
