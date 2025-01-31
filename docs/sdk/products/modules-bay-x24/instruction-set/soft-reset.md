---
sidebar_position: 2
---

# Soft Reset

Issues a soft-reset instruction to the MBx24. All settings are restored to factory defaults. The
peripheral does not need to be re-enumerated.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 4 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                    |
|------|-------|------|------|--------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)            |
| 1    | 4     | 1    | BIN  | Soft-Reset instruction code   |

## Response

No Response

## Remarks

Soft reset does not affect enumeration. It restores to factory defaults the backlit color, output and input settings.
The MBx24 address ID remains the one of the last enumaration. At least 3000ms should be waited to conclude the task as this
instruction doesn't have a response.

No Response
