import { cachedInstance } from '@xstd/deep-map';
import type { PrefilteredZCLGeneralCommandStream } from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCLReadAttributesAction } from '../read-attributes/z-c-l-read-attributes-action.ts';
import { ZCLReadAttributeActionRaw } from './z-c-l-read-attribute-action-raw.ts';

export class ZCLReadAttributeAction extends ZCLReadAttributeActionRaw {
  constructor(stream: PrefilteredZCLGeneralCommandStream) {
    super({
      readAttributesAction: cachedInstance(ZCLReadAttributesAction, stream),
    });
  }
}
