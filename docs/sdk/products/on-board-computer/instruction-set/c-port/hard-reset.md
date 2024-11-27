---
sidebar_position: 2
---

# Hard Reset

Issues a hard-reset to OBCS. Enumeration is lost and a new enumeration must be performed. Peripherals
are not affected by this command.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 99 | 2 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | 99   | 1    | BIN  | OBCS Address                    |
| 1    | 10    | 1    | BIN  | Hard-Reset instruction code    |

## Response (ASCII)

No Response

## Response (Decimal)

No Response

## Remarks

A minimum period of 2000ms (2secs) is recommended to be kept before attempting a new request.