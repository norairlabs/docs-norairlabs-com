---
sidebar_position: 1
---

# Set Output Type

Sets the behavior of an output

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 30 | O   | T |  V  |  I  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                |
|------|-------|------|------|--------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                        |
| 1    | 30    | 1    | BIN  | Set Output Type instruction code          |
| 2    | O     | 1    | BIN  | Output number (1-32)                      |
| 3    | T     | 1    | BIN  | Type (See Table 5)                        |
| 4    | V     | 1    | BIN  | Flashing period (1 sec. x V)              |
| 5    | I     | 1    | BIN  | Inverted (1 – inverted / 0 – normal)      |

### Table 5 - Output Types

| Type | Behavior   |
|------|------------|
| 0    | Normal     |
| 1    | Flashing   |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 30 |  V |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                            |
|------|-------|------|------|----------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                    |
| 1    | 30    | 1    | BIN  | Set Output Type instruction code      |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise         |

## Remarks

Parameter ‘V’ ( Received packet, byte[4] ) : The flashing period value is a multiplier to obtain
multiples of a second. For example, if the flashing period is set to 2, the output will pulse ON for 1
second and OFF for 1 second. This constitutes a duty cycle of 50% always. The type must be of
‘Flashing’ type for the flashing feature be valid.