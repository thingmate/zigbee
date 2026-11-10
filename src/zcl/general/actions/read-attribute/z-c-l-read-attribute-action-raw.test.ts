import { AsyncFunction } from '@xstd/async-function';
import { ListenerResource } from '@xstd/listener-resource';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import { describe, expect, test } from 'vitest';
import { ZCLStatusError } from '../../../status/z-c-l-status-error.ts';
import type {
  PrefilteredZCLGeneralCommandStream,
  PrefilteredZCLGeneralCommandStreamArguments,
} from '../../commands/command/pre-filter/prefiltered-z-c-l-general-command.ts';
import type { ZCLReadAttributesActionArguments } from '../read-attributes/z-c-l-read-attributes-action-raw.ts';
import type { ZCLReadAttributesActionResult } from '../read-attributes/z-c-l-read-attributes-action-result.ts';
import { ZCLReadAttributesAction } from '../read-attributes/z-c-l-read-attributes-action.ts';
import { ZCLReadAttributeActionRaw } from './z-c-l-read-attribute-action-raw.ts';

const UNUSED_STREAM: PrefilteredZCLGeneralCommandStream = {
  send: new AsyncFunction<PrefilteredZCLGeneralCommandStreamArguments, void>(
    async (): Promise<void> => undefined,
  ),
  observe: new ObservableAsyncFunction<PrefilteredZCLGeneralCommandStreamArguments>(
    async (): Promise<ListenerResource<PrefilteredZCLGeneralCommandStreamArguments>> => {
      throw new Error('Unused stream.');
    },
  ),
};

class FakeZCLReadAttributesAction extends ZCLReadAttributesAction {
  readonly #results: ReadonlyMap<number, ZCLReadAttributesActionResult>;

  constructor(results: ReadonlyMap<number, ZCLReadAttributesActionResult>) {
    super(UNUSED_STREAM);
    this.#results = results;
  }

  override call(
    _signal: AbortSignal,
    ...args: ZCLReadAttributesActionArguments
  ): Promise<ZCLReadAttributesActionResult> {
    const [options]: ZCLReadAttributesActionArguments = args;
    return Promise.resolve(this.#results.get(options.attributes[0]) ?? []);
  }
}

describe('ZCLReadAttributeActionRaw', (): void => {
  test('resolves with the attribute value on success.', async (): Promise<void> => {
    const action: ZCLReadAttributeActionRaw = new ZCLReadAttributeActionRaw({
      readAttributesAction: new FakeZCLReadAttributesAction(
        new Map<number, ZCLReadAttributesActionResult>([
          [0x0000, [{ id: 0x0000, status: 0x00, type: 0x10, value: true }]],
        ]),
      ),
    });

    expect(
      await action.call(new AbortController().signal, { cluster: 0x0006, attribute: 0x0000 }),
    ).toBe(true);
  });

  test('throws a ZCLStatusError when the attribute status is an error.', async (): Promise<void> => {
    const action: ZCLReadAttributeActionRaw = new ZCLReadAttributeActionRaw({
      readAttributesAction: new FakeZCLReadAttributesAction(
        new Map<number, ZCLReadAttributesActionResult>([[0x0002, [{ id: 0x0002, status: 0x86 }]]]),
      ),
    });

    const error: unknown = await action
      .call(new AbortController().signal, { cluster: 0x0006, attribute: 0x0002 })
      .catch((error: unknown): unknown => error);

    expect(error).toBeInstanceOf(ZCLStatusError);
    expect(error).toMatchObject({ status: 0x86, attributeId: 0x0002 });
  });

  test('throws when the attribute is missing from the result.', async (): Promise<void> => {
    const action: ZCLReadAttributeActionRaw = new ZCLReadAttributeActionRaw({
      readAttributesAction: new FakeZCLReadAttributesAction(new Map()),
    });

    await expect(
      action.call(new AbortController().signal, { cluster: 0x0006, attribute: 0x0000 }),
    ).rejects.toThrow('Missing attribute 0x0000 in read attributes response.');
  });
});
