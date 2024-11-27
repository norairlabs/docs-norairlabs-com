---
sidebar_position: 2
---

# Report Enumeration

Retrieves the OBCS enumeration table. This returns the number of peripherals and their IDs.
Exceptionally, the request packet has no header. The first byte carries the number of peripherals on the
list. All the others carry a peripheral ID or 0. The first byte will be **0** if no enumeration is present.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 99 | 18 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | 99   | 1    | BIN  | OBCS Address                    |
| 1    | 18    | 1    | BIN  | Report Enumeration instruction code    |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| Q | S1 |  S2  | ... |    |    |    |    |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description               |
|------|-------|------|------|---------------------------|
| 0    | Q     | 1    | BIN  | Number of enumerated peripherals |
| 1    | S1    | 1    | BIN  | 1st peripheral ID         |
| 2    | S2    | 1    | BIN  | 2nd peripheral ID         |
| 31   | Sn    | 1    | BIN  | Nth peripheral ID         |
