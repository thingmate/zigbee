import type { PrefilteredZCLClusterCommandStream } from '../../../../../../primitives/command/pre-filter/prefiltered-z-c-l-cluster-command.ts';
import { IASZoneClusterClientZCLClusterCommand } from '../../command/i-a-s-zone-cluster-client-z-c-l-cluster-command.ts';
import { ZCL_ZONE_STATUS_CHANGE_NOTIFICATION_COMMAND_ARGUMENTS_MAPPER } from './arguments/z-c-l-zone-status-change-notification-command-arguments-mapper.ts';
import type { ZCLZoneStatusChangeNotificationCommandArguments } from './arguments/z-c-l-zone-status-change-notification-command-arguments.ts';

export class ZCLZoneStatusChangeNotificationCommand extends IASZoneClusterClientZCLClusterCommand<ZCLZoneStatusChangeNotificationCommandArguments> {
  constructor(stream: PrefilteredZCLClusterCommandStream) {
    super(stream, 0x00, ZCL_ZONE_STATUS_CHANGE_NOTIFICATION_COMMAND_ARGUMENTS_MAPPER);
  }
}
