---
sidebar_position: 2
---

# Program Button

Sets the behavior of a button.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 17 |  B  | T |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                |
|------|-------|------|------|----------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address            |
| 1    | 17    | 1    | BIN  | Program Button instruction code |
| 2    | B     | 1    | BIN  | Joystick button number (1..200) |
| 3    | T     | 1    | BIN  | Button type (see table) |


## Button Type

| Type | Behavior                 |
|------|--------------------------|
| 0    | Push button             |
| 1    | Toggle button           |
| 2    | Inverted Push button    |
| 3    | Inverted Toggle button  |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 17 |  V  |  |    |    |    |    |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                               |
|------|-------|------|------|-------------------------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address                           |
| 1    | 17    | 1    | BIN  | Program Button instruction code              |
| 2    | V     | 1    | BIN  | 1 if successful, 0 otherwise             |
