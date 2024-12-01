---
sidebar_position: 2
---

# Change Button Number

Sets a new joystick button number to an encoder center push-button connector. Each encoder pair has a center push-button that can be mapped by J-PORT. These push-buttons can be assigned to any joystick button number between **1 and 200**. They are internally connected via a virtual connector. There are four of these with the following connector numbers:

| Instrument Encoder | Internal Connector | Default Joystick Button Number | Internal Functions |
|---------------------|--------------------|--------------------------------|---------------------|
| COMM               | 1                  | 1                              | YES                 |
| NAV                | 2                  | 2                              | YES                 |
| ADF                | 3                  | 3                              | NO                  |
| XPDR               | 4                  | 4                              | NO                  |

---

#### Notes:
1. **COMM and NAV encoders** have internal functionalities (e.g., swap frequencies) that will always perform these functions regardless of remapping. However, these can still be re-mapped to other joystick buttons if needed.
2. **ADF and XPDR encoders** do not have internal functionalities but can also be mapped to any joystick button number.

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 80 |  C  | N |    |    |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                   |
|------|-------|------|------|-----------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                             |
| 1    | 80    | 1    | BIN  | Change Button Number instruction code        |
| 2    | C     | 1    | BIN  | Connector (1, 2, 3, or 4)                    |
| 3    | N     | 1    | BIN  | Joystick button number (1-200)               |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 80 |  V  | |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                   |
|------|-------|------|------|-----------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                             |
| 1    | 80    | 1    | BIN  | Change Button Number instruction code        |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise                |
