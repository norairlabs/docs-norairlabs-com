---
sidebar_position: 2
---

# Set XPDR Integer Increment

Sets the transponder integer increment, i.e., the upper two digits. When the maximum integer value
is reached by incrementation, the instrument automatically loops to the minimum value and viceversa.

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 32 |  X  | X |    |    |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                        |
| 1    | 32    | 1    | BIN  | Set XPDR Integer Increment instruction code |
| 2    | X     | 1    | BIN  | 1st digit                               |
| 3    | X     | 1    | BIN  | 2nd digit                               |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 32 |  V  | |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                        |
| 1    | 32    | 1    | BIN  | Set XPDR Integer Increment instruction code |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise           |

## Factory Default Values:

| Instrument | Integer Increment | Limits |
|------------|-------------------|--------|
| XPDR       | 1                 | 1-99   |

## Examples

### Set XPDR integer increment step to 2 ( to achieve 0200, 0400, 0600, … )

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 32 |  0  | 2|   |  |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |
