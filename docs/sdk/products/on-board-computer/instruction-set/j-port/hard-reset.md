---
sidebar_position: 2
---

# Hard Reset

Issues a hard-reset to J-PORT. Enumeration is lost. A new enumeration of J-PORT peripherals must
be done. Peripherals are not affected by this.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 2 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | 10   | 1    | BIN  | J-PORT Address                    |
| 1    | 2    | 1    | BIN  | Hard-Reset instruction code    |

## Response (ASCII)

No Response

## Response (Decimal)

No Response

## Remarks

A minimum period of 2000ms (2secs) is recommended to be kept before attempting a new request.