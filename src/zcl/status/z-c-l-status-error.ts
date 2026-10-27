import { getZCLStatusName } from './z-c-l-status.ts';

export class ZCLStatusError extends Error {
  readonly status: number;
  readonly attributeId: number | undefined;

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
