import { cachedInstance } from '@xstd/deep-map';
import { ZCLReportAttributesCommand } from '../../commands/built-in/0x0a-report-attributes/z-c-l-report-attributes-command.ts';
import type { PrefilteredZCLGeneralCommandStream } from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCLReceiveAttributeObserverRaw } from './z-c-l-receive-attribute-observer-raw.ts';

export class ZCLReceiveAttributeObserver extends ZCLReceiveAttributeObserverRaw {
  constructor(stream: PrefilteredZCLGeneralCommandStream) {
    super({
      reportAttributesCommand: cachedInstance(ZCLReportAttributesCommand, stream),
    });
  }
}
