---
sidebar_position: 1
---

# Ping

Retrieves a RNS serial number as proof of life.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 6 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | ID   | 1    | BIN  | RNS address ( ID )                   |
| 1    | 6    | 1    | BIN  | PING instruction code    |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | N1 |  N2  | N3 |  N4  | N5   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                          |
|------|-------|------|------|--------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                    |
| 1    | N1    | 1    | BIN  | 1st peripheral’s serial number pair |
| 2    | N2    | 1    | BIN  | 2nd peripheral’s serial number pair |
| 3    | N3    | 1    | BIN  | 3rd peripheral’s serial number pair |
| 4    | N4    | 1    | BIN  | 4th peripheral’s serial number pair |
| 5    | N5    | 1    | BIN  | 5th peripheral’s serial number pair |

## Remarks

N1 through N5 are the serial’s number pairs. The serial number is composed of 10 digits. Every 2
digits constitute a pair. For instance, the serial number 3123456789 has the pairs ‘31’, ‘23’, ‘45’, ‘67’
and ‘89’, being N1 the first pair ‘31’.