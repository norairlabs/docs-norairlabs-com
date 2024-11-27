---
sidebar_position: 2
---

# Report Frequencies

Reports all frequencies. Returns NAV, COMM and ADF frequencies in bulk.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 72 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | ID   | 1    | BIN  | RNS address (ID)                    |
| 1    | 72    | 1    | BIN  | Report Frequencies instruction code    |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 72 | A | A | A | A | A | A | B | B | B | B | B | B | C | C | C | C | C | C | D | D | D | D | D | D | E | E | E | E |

## Response Structure

| Byte | Value | Size | Type | Description                    |
|------|-------|------|------|--------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)              |
| 1    | 72    | 1    | BIN  | Report Frequencies instr. code |
| 2    | A     | 1    | BIN  | 1st NAV active digit          |
| 3    | A     | 1    | BIN  | 2nd NAV active digit          |
| 4    | A     | 1    | BIN  | 3rd NAV active digit          |
| 5    | A     | 1    | BIN  | 4th NAV active digit          |
| 6    | A     | 1    | BIN  | 5th NAV active digit          |
| 7    | A     | 1    | BIN  | 6th NAV active digit          |
| 8    | B     | 1    | BIN  | 1st NAV standby digit         |
| 9    | B     | 1    | BIN  | 2nd NAV standby digit         |
| 10   | B     | 1    | BIN  | 3rd NAV standby digit         |
| 11   | B     | 1    | BIN  | 4th NAV standby digit         |
| 12   | B     | 1    | BIN  | 5th NAV standby digit         |
| 13   | B     | 1    | BIN  | 6th NAV standby digit         |
| 14   | C     | 1    | BIN  | 1st COMM active digit         |
| 15   | C     | 1    | BIN  | 2nd COMM active digit         |
| 16   | C     | 1    | BIN  | 3rd COMM active digit         |
| 17   | C     | 1    | BIN  | 4th COMM active digit         |
| 18   | C     | 1    | BIN  | 5th COMM active digit         |
| 19   | C     | 1    | BIN  | 6th COMM active digit         |
| 20   | D     | 1    | BIN  | 1st COMM standby digit        |
| 21   | D     | 1    | BIN  | 2nd COMM standby digit        |
| 22   | D     | 1    | BIN  | 3rd COMM standby digit        |
| 23   | D     | 1    | BIN  | 4th COMM standby digit        |
| 24   | D     | 1    | BIN  | 5th COMM standby digit        |
| 25   | D     | 1    | BIN  | 6th COMM standby digit        |
| 26   | E     | 1    | BIN  | 1st ADF digit                |
| 27   | E     | 1    | BIN  | 2nd ADF digit                |
| 28   | E     | 1    | BIN  | 3rd ADF digit                |
| 29   | E     | 1    | BIN  | 4th ADF digit                |
