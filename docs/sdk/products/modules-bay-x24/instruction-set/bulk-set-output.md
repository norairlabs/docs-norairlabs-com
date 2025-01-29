---
sidebar_position: 1
---

# Bulk Set Output

Sets or destroys a VICe connector. See MBx24 Features in [*Start here*](https://docs.norairlabs.com/docs/sdk/products/modules-bay-x24/start-here) chapter or
in [*Terminology & Definitions*](https://docs.norairlabs.com/docs/sdk/protocol/terminlogy-and-definitions) for more
detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 75 | C   | J |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                        |
|------|-------|------|------|----------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                                |
| 1    | 75    | 1    | BIN  | Set VICe instruction code                         |
| 2    | C     | 1    | BIN  | Connector (1–32) - (see remarks)                 |
| 3    | J     | 1    | BIN  | Joystick button number (1–200 or 0) - (see remarks) |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 75 |  V |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                        |
|------|-------|------|------|----------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                                |
| 1    | 75    | 1    | BIN  | Set VICe instruction code                         |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise                     |

## Remarks

Parameter ‘C’ ( Received packet, byte[2] ) : The selected connector must have the same number of
the connector to associate to. For example, if a VICe connection is to be used in conjunction with
the switch connected to connector 5, the VICe connector must also be 5. As so, when the switch in
the connector 5 is turned OFF, the VICe connector 5 turns ON and vice-versa.

Parameter ‘J’ ( Received packet, byte[3] ) : The VICe connector is created since the moment one
joystick button number is assigned to it. Also, the same VICe connector is destroyed if the joystick
button number is set to 0. This joystick button number assigned should be exclusive, i.e., cannot be
the same of the associated connector and should not be in use by another feature.
