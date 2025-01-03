---
sidebar_position: 2
---

# Set XPDR Minimum Squawk

Sets the transponder minimum squawk code value. Can be set from 0 to 9999.

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 34 |  X  | X |  X  |  X  |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                    |
|------|-------|------|------|------------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                              |
| 1    | 34    | 1    | BIN  | Set XPDR Minimum Squawk Code instruction code |
| 2    | X     | 1    | BIN  | 1st digit                                     |
| 3    | X     | 1    | BIN  | 2nd digit                                     |
| 4    | X     | 1    | BIN  | 3rd digit                                     |
| 5    | X     | 1    | BIN  | 4th digit                                     |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 34 |  V  | |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                    |
|------|-------|------|------|------------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                              |
| 1    | 34    | 1    | BIN  | Set XPDR Minimum Squawk Code instruction code |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise                 |

## Factory Default Values

| Instrument | Minimum Squawk Code |
|------------|---------------------|
| XPDR       | 0000                |

## Examples

### Set XPDR minimum value to 100:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 34 |  0  | 1|  0 |  0 |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |
