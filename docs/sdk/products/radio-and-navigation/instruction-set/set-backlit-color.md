---
sidebar_position: 2
---

# Set Backlit Color

Sets the Backlit color. This will change the RGBW color settings of the Backlit

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 41 |  R  | G | B   | W   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                 |
|------|-------|------|------|---------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                           |
| 1    | 41    | 1    | BIN  | Set Backlit Color instruction code         |
| 2    | R     | 1    | BIN  | Red color component (0-255)                |
| 3    | G     | 1    | BIN  | Green color component (0-255)              |
| 4    | B     | 1    | BIN  | Blue color component (0-255)               |
| 5    | W     | 1    | BIN  | White color component (0-255)              |

## Response (ASCII)

No Response

## Response (Decimal)

No Response

## Remarks

The Backlit comprises 64 RGBW LEDs. Although made to seem all equal, there are always small
differences between them. There are not two exactly equal. Setting a RGBW color to one or all of
these, doesn’t ensure a perfect color matching with any color standards as the goal is to provide
ambience light at user will. Also, there may be significant deviations from what is expected. Users
should try some variations or combinations before deciding a color.