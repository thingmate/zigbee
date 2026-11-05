import { CommandAbilities } from '@thingmate/abilities';

/**
 * Base class of the ZCL cluster commands: sends and observes ZCL command frames.
 */
export class ZCLClusterCommand<
  GArguments extends readonly unknown[],
> extends CommandAbilities<GArguments> {}
