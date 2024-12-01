---
sidebar_position: 2
---

# Set Integer Increment

Sets the integer part step increment/decrement for a frequency of the COMM, NAV and
the upper 2 digits of the ADF. Increments are managed by splitting the frequency in its
fractional(or decimal) part and the integer part. In ADF this process is made by dividing the
frequency in the upper two digits and lower two digits of the 4-digit frequency number.

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 22 |  I  | X |  X  |  X  |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                                                                  |
|------|-------|------|------|----------------------------------------------------------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                                                                             |
| 1    | 22    | 1    | BIN  | Set Integer Increment instruction code                                                       |
| 2    | I     | 1    | BIN  | 0-NAV, 1-Comm, 2-ADF                                                                         |
| 3    | X     | 1    | BIN  | 1st digit                                                                                    |
| 4    | X     | 1    | BIN  | 2nd digit                                                                                    |
| 5    | X     | 1    | BIN  | 3rd digit (Not used for ADF. Set to 0)                                                       |

**Note:**
The combination of the 1st, 2nd, and 3rd digits forms the number for the increment.
- Example: If `1st = 0`, `2nd = 1`, and `3rd = 5`, the increment will be **15** per encoder step in any direction.

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 22 |  V  | |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                               |
|------|-------|------|------|-------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                         |
| 1    | 22    | 1    | BIN  | Set Integer Increment instruction code    |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise            |

## Factory Default Values

| Instrument | Increment | Limits  |
|------------|-----------|---------|
| NAV        | 1         | 1-999   |
| COMM       | 1         | 1-999   |
| ADF        | 1         | 1-99    |

## Examples

### Set COMM’s Integer increment to 25:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 22 |  1  | 0|  2 |  5 |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

### Set NAV’s Integer increment to 10:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 22 |  0 | 0 |  1  |  0  |     |    |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

### Set ADF’s Integer increment to 5:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 22 |  2  | 0 |  5  |    |     |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

