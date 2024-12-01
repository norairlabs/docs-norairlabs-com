---
sidebar_position: 1
---

# Errors

Besides the errors reported while using an instruction, the RNS can also return instead an error
message if an invalid instruction is received.

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 63 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                             |
|------|-------|------|------|-----------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                       |
| 1    | 63    | 1    | BIN  | ERROR: Unknown instruction (ASCII ‘?’) |
