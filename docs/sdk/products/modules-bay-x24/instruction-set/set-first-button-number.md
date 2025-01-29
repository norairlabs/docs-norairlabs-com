---
sidebar_position: 1
---

# Set First Button Number

Sets the first joystick button number to the assigning range of the input connectors, setting the first
connector to this joystick button number and the last to this number plus 31 . Since a first joystick
button number is set, all input connectors are re-assigned to values within this range sequentially,
beginning in the first connector. This is useful when multiple MBx24 are present and each one must be
set to a range of joystick buttons number. For instances, one MBx24 ranges from joystick button 1 to 31
and another MBx24 ranges from joystick button 32 to 63. The first MBx24 connector #1 will be assigned to
the joystick button #1, connector #2 to joystick button #2 and so on. The second MBx24 connector #1 will
be assigned to the joystick button #32, the connector #2 to the joystick button #33 and so on.

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
range from 50 to 81, i.e., connector 1 is assigned to joystick button number 50 and so on. This may
be changed in bulk by this instruction or one input at a time with other instructions.

Care should be taken to not overlap other joystick buttons number already assigned to avoid
unwanted behavior.

This procedure should only be done before setting up joystick buttons. Executed after this may
result in unexpected behaviors since settings do not migrate with this instruction and will stick
with the previous assigned joystick buttons.

Does not apply to VICe connectors.
