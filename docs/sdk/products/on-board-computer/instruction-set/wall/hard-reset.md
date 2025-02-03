---
sidebar_position: 2
---

# Global Hard Reset

Broadcasts a hard-reset to all peripherals and J-PORT.

Does not affect the OBCS. For this, a dedicated OBCS hard-reset instruction must be done immediately after, if desired.

## See also
- [OBCS Hard-Reset](../c-port/hard-reset.md)
- [J-PORT Hard-Reset](../j-port/hard-reset.md)

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 1 | 2 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | 1   | 1    | BIN  | WALL Engine Address                    |
| 1    | 2    | 1    | BIN  | Hard-Reset instruction code    |

## Response (ASCII)

No Response

## Response (Decimal)

No Response

## Remarks

A minimum period of 2000ms (2secs) is recommended to be kept before attempting a new request.
