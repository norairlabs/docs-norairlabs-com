---
sidebar_position: 2
---

# Set Minimum Frequency

Sets the minimum frequency of a COMM, NAV or ADF instrument. For ADF, the 5th and 6th digits
have no meaning. When the minimum frequency is reached by decrementing, the instrument
automatically loops to the maximum frequency.

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 24 |  I  | X |  X  |  X  |  Y   | Y   |  Y  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                          | COMM/NAV        | ADF            |
|------|-------|------|------|--------------------------------------|-----------------|----------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                    |                 |                |
| 1    | 24    | 1    | BIN  | Set Minimum Frequency instr. code   |                 |                |
| 2    | I     | 1    | BIN  | 0-NAV, 1-Comm, 2-ADF                |                 |                |
| 3    | X     | 1    | BIN  | 1st digit                           | 1st integer     | 1st upper      |
| 4    | X     | 1    | BIN  | 2nd digit                           | 2nd integer     | 2nd upper      |
| 5    | X     | 1    | BIN  | 3rd digit                           | 3rd integer     | 1st lower      |
| 6    | Y     | 1    | BIN  | 4th digit                           | 1st decimal     | 2nd lower      |
| 7    | Y     | 1    | BIN  | 5th digit                           | 2nd decimal     | -              |
| 8    | Y     | 1    | BIN  | 6th digit                           | 3rd decimal     | -              |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 24 |  V  | |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                               |
|------|-------|------|------|-------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                         |
| 1    | 24    | 1    | BIN  | Set Minimum Frequency instruction code    |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise            |

## Factory Default Values

| Instrument | Minimum Frequency |
|------------|-------------------|
| NAV        | 108.000           |
| COMM       | 118.000           |
| ADF        | 0000              |

## Examples

### Set COMM Minimum Frequency to 240.125:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 24 |  1  | 2|  4 |  0 |   1  | 2   | 5   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

### Set NAV Minimum Frequency to 111.000:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 24 |  0 | 1 |  1  |  0  | 0    |  0  |  0 |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

### Set ADF Minimum Frequency to 0005:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 24 |  2  | 0 |  0  |   0 |  5    |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

