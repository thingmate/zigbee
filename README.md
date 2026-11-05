[![npm (scoped)](https://img.shields.io/npm/v/@thingmate/zigbee.svg)](https://www.npmjs.com/package/@thingmate/zigbee)
![npm](https://img.shields.io/npm/dm/@thingmate/zigbee.svg)
![NPM](https://img.shields.io/npm/l/@thingmate/zigbee.svg)
![npm type definitions](https://img.shields.io/npm/types/@thingmate/zigbee.svg)
![AI generation](https://img.shields.io/badge/AI_generation-medium-yellow)

<picture>
  <source height="64" media="(prefers-color-scheme: dark)" srcset="https://github.com/thingmate/website/blob/main/assets/logo/png/logo-large-dark.png?raw=true">
  <source height="64" media="(prefers-color-scheme: light)" srcset="https://github.com/thingmate/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
  <img height="64" alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://github.com/thingmate/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
</picture>

## @thingmate/zigbee

Zigbee adapters: adapters between Zigbee commands and Entities.

## 📦 Installation

```shell
yarn add @thingmate/zigbee
# or
npm install @thingmate/zigbee --save
```

## 📜 Documentation

### Overview

The library turns raw Zigbee Cluster Library (ZCL) traffic into typed, stream-based objects:

- **Attributes** expose `read` (a promise of the value) and `observe` (a live stream of the values),
  with the wire value decoded into an application value — typed, scaled, and unit-documented.
- **Commands** expose `send` (send a command with typed arguments) and `observe` (listen for the same
  command being sent on the network).

You bring the transport: anything able to send and observe ZCL command frames.

### Concepts

```
ZCL frame stream (your transport)
        │
        ▼
ZCLEndpoint.select(stream, { device, endpoint })   ← binds a device endpoint
        │
        ▼
ZCLTemperatureMeasuredValueAttribute / ZCLOnCommand / …   ← terminal attributes & commands
```

- A **ZCL command frame** is one message on the network: device, endpoint, cluster, direction,
  command, payload.
- A **`ZCLEndpoint`** is the frame stream scoped to one device endpoint.
- **Terminal attributes and commands** are the classes you consume: each one is bound to a fixed
  cluster and attribute/command, and takes the endpoint as its only constructor argument.

### Usage

#### Binding an endpoint

```ts
import { ZCLEndpoint } from '@thingmate/zigbee';

// stream: the ZCL command frame stream of your Zigbee transport
const endpoint = ZCLEndpoint.select(stream, { device: 0x1234, endpoint: 0x01 });
```

Sent frames are completed with the device and endpoint; observed frames are filtered to keep only
the matching device and endpoint.

#### Reading and observing attributes

```ts
import { ZCLTemperatureMeasuredValueAttribute } from '@thingmate/zigbee';

const temperature = new ZCLTemperatureMeasuredValueAttribute(endpoint);
const signal = new AbortController().signal;

// Read once: resolves with the value, in °C.
const current: number = await temperature.read.call(signal);

// Observe: iterate over every reported value, in °C.
for await (const value of temperature.observe.values(signal)) {
  console.log('temperature:', value, '°C');
  if (value > 30) {
    break; // ends the iteration, disposing of the underlying resource automatically
  }
}
```

Every attribute value is decoded into an application value: temperatures arrive in °C,
battery levels as a fraction of 1, on/off as a boolean — the type of the value is given by the
class, and its unit and special wire values are documented on the class.

> **Resource lifecycle — important:** observing opens a live `ListenerResource`. Aborting the
> call's signal aborts the _establishment_ of the resource only — once established, the resource
> stays alive and **must be closed**, or it will keep receiving and holding values. Two options:
>
> - consume it through a loop (or `first()` for a single value): the underlying resource is
>   disposed of automatically when the loop breaks, the signal aborts, or the resource closes;
> - or hold the resource returned by `observe.call(signal)` and close it explicitly with the async
>   disposal protocol (`await using`) or `await resource.close()`:
>
>   ```ts
>   await using values = await temperature.observe.call(signal);
>
>   values.listen((value: number): void => {
>     console.log('temperature:', value, '°C');
>   });
>   ```
>
>   The `await using` form requires a toolchain supporting the async disposal protocol
>   (TypeScript 5.2+); otherwise close the resource explicitly with `await resource.close()`.

#### Sending commands

```ts
import { ZCLOnCommand } from '@thingmate/zigbee';

const on = new ZCLOnCommand(endpoint);

await on.send.call(new AbortController().signal);
```

Commands with arguments (like the IAS Zone status change notification below) take them as
`send.call(signal, arguments)`.

#### Observing IAS Zone status changes

Zone sensors report their status through a client command: to receive it, observe the command.

```ts
import { ZCLZoneStatusChangeNotificationCommand } from '@thingmate/zigbee';

const statusChange = new ZCLZoneStatusChangeNotificationCommand(endpoint);

// Holding the resource: it stays alive until disposed of explicitly.
await using notifications = await statusChange.observe.call(new AbortController().signal);

notifications.listen(([payload]): void => {
  console.log('zone status:', payload.zoneStatus);
});
```

#### Decoding a door/window handle state

For IAS Zone sensors of zone type `0x0016` (door/window handle), the alarm bits of the zone status
encode the handle state:

```ts
import { zclIASZoneStatusToDoorWindowState } from '@thingmate/zigbee';

// → 'closed' | 'tilted' | 'open'
const state = zclIASZoneStatusToDoorWindowState(payload.zoneStatus);
console.log('door/window:', state);
```

#### Errors

Reads reject with a `ZCLStatusError` when the device reports any status other than success:

```ts
import { ZCLStatusError } from '@thingmate/zigbee';

try {
  await temperature.read.call(new AbortController().signal);
} catch (error) {
  if (error instanceof ZCLStatusError && error.status === 0x86 /* UNSUPPORTED_ATTRIBUTE */) {
    // handle unsupported attribute
  }
}
```

### Supported clusters

| Cluster                                | Attributes                                                                                                                                                                                                                                            | Commands                                            |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Basic (0x0000)                         | `ZCLZCLVersionAttribute` (number), `ZCLApplicationVersionAttribute` (number), `ZCLManufacturerNameAttribute` (string), `ZCLModelIdentifierAttribute` (string), `ZCLPowerSourceAttribute` (`ZCLPowerSource`)                                           | `ZCLResetToFactoryDefaultsCommand`                  |
| Power Configuration (0x0001)           | `ZCLMainsVoltageAttribute` (V), `ZCLMainsFrequencyAttribute` (Hz), `ZCLBatteryVoltageAttribute` (V), `ZCLBatteryPercentageRemainingAttribute` (fraction 0-1)                                                                                          | —                                                   |
| On/Off (0x0006)                        | `ZCLOnOffAttribute` (boolean)                                                                                                                                                                                                                         | `ZCLOnCommand`, `ZCLOffCommand`, `ZCLToggleCommand` |
| Illumance Measurement (0x0400)         | `ZCLIlluminanceMeasuredValueAttribute` (lx), `ZCLIlluminanceMinMeasuredValueAttribute` (lx), `ZCLIlluminanceMaxMeasuredValueAttribute` (lx), `ZCLIlluminanceToleranceAttribute` (lx), `ZCLIlluminanceLightSensorTypeAttribute` (`ZCLLightSensorType`) | —                                                   |
| Temperature Measurement (0x0402)       | `ZCLTemperatureMeasuredValueAttribute` (°C)                                                                                                                                                                                                           | —                                                   |
| Relative Humidity Measurement (0x0405) | `ZCLRelativeHumidityMeasuredValueAttribute` (fraction 0-1)                                                                                                                                                                                            | —                                                   |
| IAS Zone (0x0500)                      | `ZCLIASZoneStateAttribute` (`ZCLIASZoneState`), `ZCLIASZoneTypeAttribute` (`ZCLIASZoneType`), `ZCLIASZoneStatusAttribute` (`ZCLIASZoneStatus`)                                                                                                        | `ZCLZoneStatusChangeNotificationCommand` (client)   |
| Metering (0x0702)                      | `ZCLCurrentSummationDeliveredAttribute` (number)                                                                                                                                                                                                      | —                                                   |

Some numeric attributes carry special wire values which pass through unchanged: the illuminance
min/max measured value attributes report `0x0000` (too low to measure) and `0xffff` (invalid value)
as-is, signaling an undefined measured range. Each attribute's class documents its unit, scaling,
and special wire values; each command documents its arguments.

### Architecture

The library is layered: ZCL command frames are pre-filtered per cluster/command, payloads are
encoded and decoded by codecs and payload mappers, and attributes and commands compose these into
the terminal classes. All internals are documented with JSDoc, including the ZCL specification
sections they implement. Contributions adding new clusters only need to follow the existing
one-module-per-file layout.

## 🧾 License

MIT — see [LICENSE](LICENSE).
