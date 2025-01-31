---
sidebar_position: 7
---

# Bulk Set Output

Sets all outputs in one go. If all output logic status is managed by an external application, by a PC application, this
instruction allows freedom, speed of execution and time saving. Differently from setting one output at a time, the bulk
set output is simplier and faster by delivering this work to MBx24 it self.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 21 | S1  | S2 | S3 | S4    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                        |
|------|-------|------|------|----------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                                |
| 1    | 21    | 1    | BIN  | Bulk Set Output instruction code                 |
| 2    | S1    | 1    | BIN  | First output bank in 8-bit layout - (see remarks)  |
| 3    | S2    | 1    | BIN  | Second output bank in 8-bit layout - (see remarks)  |
| 4    | S3    | 1    | BIN  | Third output bank in 8-bit layout - (see remarks)  |
| 5    | S4    | 1    | BIN  | Fourth output bank in 8-bit layout - (see remarks)  |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 21 |  V |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                        |
|------|-------|------|------|----------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                                |
| 1    | 21    | 1    | BIN  | Bulk Set Output instruction code                 |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise                     |

## Remarks

First output bank (S1) -> Outputs from 1 to 8.

Second output bank (S2) -> Outputs from 9 to 16

Third output bank (S3) -> Outputs from 17 to 24.

Fourth output bank (S4) -> Outputs from 25 to 32.

## 8-Bit Bank Layout

| MSG 7 | 6 | 5 | 4 | 3 | 2 | 1 | LSB 0 |
|---|---|---|---|---|---|-----|---|
| O1 | O2 | O3 | O4 | O5 | O6 | O7 | O8 |

- **MSB (Most Significant Bit):** The first output of the bank (O1).
- **LSB (Least Significant Bit):** The last output of the bank (O8).

Each bit corresponds to an output:
- **O1:** 1st output
- **O2:** 2nd output
- And so on...

## Example

Turn ON all the first and last outputs for all banks (1 and 8,9 and 16,17 and 24, 25 and 32)
of the MBx24 with ID address of 55:

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 55 | 21 | 129 | 129 | 129 | 129 |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

Where:
|byte 0 |55 | MBx24 address ID|
|----|----|----|
|byte 1 |21 | Bulk Set Output instruction code|
|byte 2 |129| Binary 1000 0001|
|byte 3 |129| Binary 1000 0001|
|byte 4 |129| Binary 1000 0001|
|byte 5 |129| Binary 1000 0001|




