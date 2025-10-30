import {
  createZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserver,
  type CreateZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserverOptions,
} from '../../../../../../commands/0x0a--report-attributes/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-report-attributes-command-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeeAttributesObserver } from '../../zigbee-attributes-observer.js';

export interface CreateZigbeeAttributesObserverUsingZigbeePredefinedCommandObserverOptions
  extends CreateZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserverOptions {}

export function createZigbeeAttributesObserverUsingZigbeePredefinedCommandObserver(
  options: CreateZigbeeAttributesObserverUsingZigbeePredefinedCommandObserverOptions,
): ZigbeeAttributesObserver {
  return createZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserver(options);
}
