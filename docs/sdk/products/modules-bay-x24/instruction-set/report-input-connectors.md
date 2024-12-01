---
sidebar_position: 2
---

# Report Input Connectors

Returns the input connectors logic state in bulk. This instruction offers a way of knowing the logic
state of each input connector. It returns a byte array with four 8-bit clusters with the 32 input
connectors.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 55 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                    |
|------|-------|------|------|--------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)            |
| 1    | 55     | 1    | BIN  | Report Input Connectors instruction code  |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 55 |  B1 | B2 |  B3  |  B4  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                    |
|------|-------|------|------|------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                            |
| 1    | 55    | 1    | BIN  | Toggle Output instruction code                |
| 2    | B1    | 1    | BIN  | 1st input connectors 8-bit bank              |
| 3    | B2    | 1    | BIN  | 2nd input connectors 8-bit bank              |
| 4    | B3    | 1    | BIN  | 3rd input connectors 8-bit bank              |
| 5    | B4    | 1    | BIN  | 4th input connectors 8-bit bank              |

## 8-Bit Bank Layout

| MSG 7 | 6 | 5 | 4 | 3 | 2 | 1 | LSB 0 |
|---|---|---|---|---|---|-----|---|
| C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 |

- **MSB (Most Significant Bit):** The first connector of the bank (C1).
- **LSB (Least Significant Bit):** The last connector of the bank (C8).

Each bit corresponds to a connector:
- **C1:** 1st connector
- **C2:** 2nd connector
- And so on...


