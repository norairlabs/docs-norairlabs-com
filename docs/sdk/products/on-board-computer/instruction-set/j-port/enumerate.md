---
sidebar_position: 2
---

# Enumerate

Enumerate a peripheral and insert it in the J-PORT enumeration table.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 7 |   N1 | N2 | N3  | N4   | N5   |  S  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                                    |
|------|-------|------|------|----------------------------------------------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address                                                  |
| 1    | 7     | 1    | BIN  | Enumeration instruction code                                  |
| 2    | N1    | 1    | BIN  | 1st peripheral’s serial number pair (2 digits)               |
| 3    | N2    | 1    | BIN  | 2nd peripheral’s serial number pair (2 digits)               |
| 4    | N3    | 1    | BIN  | 3rd peripheral’s serial number pair (2 digits)               |
| 5    | N4    | 1    | BIN  | 4th peripheral’s serial number pair (2 digits)               |
| 6    | N5    | 1    | BIN  | 5th peripheral’s serial number pair (2 digits)               |
| 7    | S     | 1    | BIN  | New peripheral ID or 0 to keep N1 value (default)            |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| S | 1 |   |  |    |    |    |    |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                               |
|------|-------|------|------|-------------------------------------------|
| 0    | S     | 1    | BIN  | Peripheral’s ID                          |
| 1    | 1     | 1    | BIN  | 1 for successful (See remarks below)     |

## Remarks

If enumeration is successful, the shown response is sent. If not, J-PORT will issue an error as the
answer. See [J-PORT ERROR MESSAGES](../../error-messages/jport.md) section for in-depth details.

Users **must wait** for an answer.

Enumeration can take some time to accomplish and if interrupted, corruption of the translation
table may occur.

N1 through N5 are the serial’s number pairs.

The serial number is composed of 10 digits. Every 2 digits constitute a pair. For instance, the serial
number 3123456789 has the pairs ‘31’, ‘23’, ‘45’, ‘67’ and ‘89’, being N1 the first pair ‘31’. The S
argument ranges from 21 to 98 or 0 to keep the default. The peripherals can only be reached if an
enumeration is successful performed.