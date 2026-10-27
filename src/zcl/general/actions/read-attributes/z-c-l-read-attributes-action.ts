import { cachedInstance } from '@xstd/deep-map';
import { ZCLReadAttributesCommand } from '../../commands/built-in/0x00-read-attributes/z-c-l-read-attributes-command.ts';
import { ZCLReadAttributesResponseCommand } from '../../commands/built-in/0x01-read-attributes-response/z-c-l-read-attributes-response-command.ts';
import type { PrefilteredZCLGeneralCommandStream } from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCLReadAttributesActionRaw } from './z-c-l-read-attributes-action-raw.ts';

export class ZCLReadAttributesAction extends ZCLReadAttributesActionRaw {
  constructor(stream: PrefilteredZCLGeneralCommandStream) {
    super({
      readAttributesCommand: cachedInstance(ZCLReadAttributesCommand, stream),
      readAttributesResponseCommand: cachedInstance(ZCLReadAttributesResponseCommand, stream),
    });
  }
}
