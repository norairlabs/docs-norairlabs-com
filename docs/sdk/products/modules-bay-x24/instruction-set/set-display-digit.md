---
sidebar_position: 1
---

# Set Display Digit

Sets a display digit with the character constructor supplied.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 50 | D   | N | C   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                        |
|------|-------|------|------|----------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                                |
| 1    | 50    | 1    | BIN  | Set Display Digit instruction code                |
| 2    | D     | 1    | BIN  | Display number (1–4)                              |
| 3    | N     | 1    | BIN  | Digit number (1–4)                                |
| 4    | C     | 1    | BIN  | Character constructor supplied                    |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 50 |  V |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                            |
|------|-------|------|------|----------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                    |
| 1    | 50    | 1    | BIN  | Set Display Digit instruction code    |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise         |

## Remarks

A display module is composed of 4 numeric digits in a 7-segment configuration. A character
constructor is a byte with values for a 7-segment scheme where each bit corresponds to a
segment.

| Bit Position | 7  | 6  | 5  | 4  | 3  | 2  | 1  | 0  |
|--------------|----|----|----|----|----|----|----|----|
| Segment      | dp | G  | F  | E  | D  | C  | B  | A  |

- Table 4 - Bit to Segment Relationship