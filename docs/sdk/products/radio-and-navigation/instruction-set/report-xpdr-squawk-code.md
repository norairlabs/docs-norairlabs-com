---
sidebar_position: 2
---

# Report XPDR Squawk Code

Returns the transponder squawk code value

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 73 |    |  |    |    |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                  |
|------|-------|------|------|----------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                            |
| 1    | 73    | 1    | BIN  | Report XPDR Squawk Code instruction code    |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 73 |  X  | X|  X | X  |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                  |
|------|-------|------|------|----------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                            |
| 1    | 73    | 1    | BIN  | Report XPDR Squawk Code instruction code    |
| 2    | X     | 1    | BIN  | 1st digit                                   |
| 3    | X     | 1    | BIN  | 2nd digit                                   |
| 4    | X     | 1    | BIN  | 3rd digit                                   |
| 5    | X     | 1    | BIN  | 4th digit                                   |
