---
sidebar_position: 1
---

# C-Port

The OBCS can issue error messages on malformed packets or if an internal error occurs. This is a
simple error reporting system to allow users to act as soon as possible. These messages are
automatically issued as a reply to an instruction received.

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 255 | S | Err  |    |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |


## Response Structure

| Byte | Value | Size | Type | Description                              |
|------|-------|------|------|------------------------------------------|
| 0    | 255   | 1    | BIN  | Error message header                     |
| 1    | S     | 1    | BIN  | Peripheral ID (or intended target recipient ID) |
| 2    | Err   | 1    | BIN  | Error code                               |


## Error Codes

| Error Code | Description                          |
|------------|--------------------------------------|
| 50         | Malformed or invalid instruction code |
| 10         | Message not delivered               |
| 30         | Peripheral not reachable            |
