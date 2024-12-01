---
sidebar_position: 1
---

# Set First Button Number

Sets the first joystick button number to the assigning range of the input connectors, setting the first
connector to this joystick button number and the last to this number plus 31 . Since a first joystick
button number is set, all input connectors are re-assigned to values within this range sequentially,
beginning in the first connector.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 85 | N   |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                    |
|------|-------|------|------|------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                            |
| 1    | 85    | 1    | BIN  | Set First Button Number instruction code      |
| 2    | N     | 1    | BIN  | First joystick button number                  |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 85 |  V |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                    |
|------|-------|------|------|------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                            |
| 1    | 85    | 1    | BIN  | Set First Button Number instruction code      |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise                 |

## Remarks

On power up or after hard-reset, the default joystick buttons number assigned to input connectors
range from 51 to 82, i.e., connector 1 is assigned to joystick button number 51 and so on. This may
be changed in bulk by this instruction or one input at a time with other instructions.

Care should be taken to not overlap other joystick buttons number already assigned to avoid
unwanted behavior.

This procedure should only be done before setting up joystick buttons. Executed after this may
result in unexpected behaviors since setting do not migrate with this instruction and stick with the
previous assigned joystick buttons.