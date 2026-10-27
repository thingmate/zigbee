import { PropertyAbilities } from '@thingmate/abilities';
import { AsyncFunction } from '@xstd/async-function';
import { setStaticArguments } from '@xstd/map-function';
import { cachedInstance } from '@xstd/deep-map';
import type { ZCLReceiveAttributeObserverArguments } from '../../../general/actions/observe-attribute/z-c-l-receive-attribute-observer-raw.ts';
import { ZCLReceiveAttributeObserver } from '../../../general/actions/observe-attribute/z-c-l-receive-attribute-observer.ts';
import type { ZCLReadAttributeActionArguments } from '../../../general/actions/read-attribute/z-c-l-read-attribute-action-raw.ts';
import { ZCLReadAttributeAction } from '../../../general/actions/read-attribute/z-c-l-read-attribute-action.ts';
import type { PrefilteredZCLGeneralCommandStream } from '../../../general/commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import type { ZCLAttributeMapper } from './mapper/z-c-l-attribute-mapper.ts';

export type ZCLClusterAttributeStream = PrefilteredZCLGeneralCommandStream;

export class ZCLClusterAttribute<GValue> extends PropertyAbilities<GValue> {
  constructor(
    stream: ZCLClusterAttributeStream,
    staticCluster: number,
    staticAttributeId: number,
    { outIn }: ZCLAttributeMapper<GValue>,
  ) {
    const zclReadAttributeAction: ZCLReadAttributeAction = cachedInstance(
      ZCLReadAttributeAction,
      stream,
    );
    const zclReceiveAttributeObserver: ZCLReceiveAttributeObserver = cachedInstance(
      ZCLReceiveAttributeObserver,
      stream,
    );

    super({
      read: zclReadAttributeAction
        .mapArguments(
          setStaticArguments<ZCLReadAttributeActionArguments>({
            cluster: staticCluster,
            attribute: staticAttributeId,
          }),
        )
        .then(outIn),
      write: new AsyncFunction(async (_signal: AbortSignal, _value: GValue): Promise<void> => {
        throw new Error('Not implemented.');
      }),
      observe: zclReceiveAttributeObserver.observe
        .mapArguments(
          setStaticArguments<ZCLReceiveAttributeObserverArguments>({
            cluster: staticCluster,
            attribute: staticAttributeId,
          }),
        )
        .mapFilter((result: unknown): GValue => {
          return outIn(result);
        }),
    });
  }
}
