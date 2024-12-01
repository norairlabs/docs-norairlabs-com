---
sidebar_position: 2
---

# Set Display Luminosity

Sets the displays luminosity. It ranges from 0 to 10.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 40 |  L  |  |    |    |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                                 |
|------|-------|------|------|---------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                           |
| 1    | 40    | 1    | BIN  | Set Display Luminosity instruction code    |
| 2    | L     | 1    | BIN  | Luminosity (0-10)                          |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 40 |  V  | L |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                                      |
|------|-------|------|------|------------------------------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                                                |
| 1    | 40    | 1    | BIN  | Set Display Luminosity instruction code                         |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise                                   |
| 3    | L     | 1    | BIN  | If successful, returns luminosity set (see remarks)            |

## Remarks

The displays luminosity can be changed at users will. This is managed by an independent display
processing unit which it is not a driver, but a very fast 7-segments display smart manager which is
also responsible for the display’s brightness. If the requested luminosity is out of defined bounds
and parameters, it will automatically adjust for the best one to avoid flickering and visual
discomfort for users. As so, the 4th answer byte ( the ‘L’ value ) returns the final luminosity decided
by this processor and may be different from the chosen value. The successfulness or completion of
the instruction is a main processor’s task. Returning a 3rd answer byte as 0 does not mean an
invalid luminosity but other cause or source.