---
sidebar_position: 2
---

# Hard Reset

Issues a hard-reset instruction to the MBx24. All settings are restored to factory defaults. The
peripheral must be re-enumerated.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 2 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                    |
|------|-------|------|------|--------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)            |
| 1    | 2     | 1    | BIN  | Hard-Reset instruction code   |

## Response (ASCII)

No Response

## Response (Decimal)

No Response

## Remarks

A minimum period of 8000ms (8secs) is recommended to be kept before another transaction.