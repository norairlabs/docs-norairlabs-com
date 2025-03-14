---
sidebar_position: 2
---

# Global Backlit Color

Broadcasts the backlit color to **all** peripherals.


## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 1 | 41 |  R  | G |  B  |  W  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                          |
|------|-------|------|------|--------------------------------------|
| 0    | 1     | 1    | BIN  | WALL engine address                 |
| 1    | 41    | 1    | BIN  | Backlit Color Set instruction code  |
| 2    | R     | 1    | BIN  | Red color component (0-255)         |
| 3    | G     | 1    | BIN  | Green color component (0-255)       |
| 4    | B     | 1    | BIN  | Blue color component (0-255)        |
| 5    | W     | 1    | BIN  | White color component (0-255)       |

## Response (ASCII)

No Response

## Response (Decimal)

No Response
