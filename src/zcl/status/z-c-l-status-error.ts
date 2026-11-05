import { getZCLStatusName } from './z-c-l-status.ts';

/**
 * Error thrown when a ZCL status code is anything other than success.
 */
export class ZCLStatusError extends Error {
  readonly status: number;
  readonly attributeId: number | undefined;

  /**
   * @param status - The ZCL status code.
   * @param attributeId - The attribute concerned by the status, when known.
   */
  constructor(status: number, attributeId?: number) {
    const hexStatus: string = `0x${status.toString(16).padStart(2, '0')}`;
    const name: string | undefined = getZCLStatusName(status);
    const attribute: string =
      attributeId === undefined
        ? ''
        : ` for attribute 0x${attributeId.toString(16).padStart(4, '0')}`;

    super(`ZCL error: ${name ?? 'unknown status'} (${hexStatus})${attribute}.`);

    this.name = 'ZCLStatusError';
    this.status = status;
    this.attributeId = attributeId;
  }
}
