---
sidebar_position: 1
---

# Set Button Number

Sets the joystick button number that relates with an input connector. For connectors to be useful,
they must have a connection with a joystick button. This instruction assigns a joystick button
number to a physical connector. There are 32 input connectors numbered from 1 to 32

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 80 | I   | J |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                |
|------|-------|------|------|--------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                        |
| 1    | 80    | 1    | BIN  | Set Button Number instruction code        |
| 2    | I     | 1    | BIN  | Output number (1-32)                      |
| 3    | J     | 1    | BIN  | Joystick button number (1-200)            |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 80 |  V |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                            |
|------|-------|------|------|----------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                    |
| 1    | 80    | 1    | BIN  | Set Button Number instruction code    |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise         |

## Remarks

On power up or after hard-reset, the default joystick buttons number assign to input connectors
range from 51 to 82, i.e., connector 1 is assigned to joystick button number 51. This may be
changed in bulk by other instructions or one input at a time.

Care should be taken to not overlap other joystick buttons number already assigned to avoid
unwanted behavior.