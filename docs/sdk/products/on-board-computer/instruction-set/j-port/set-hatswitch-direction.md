---
sidebar_position: 2
---

# Set hat switch direction

Sets the heading of the hat switch.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 24 |  D  |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                |
|------|-------|------|------|----------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address            |
| 1    | 24    | 1    | BIN  | Set hat switch direction instruction code |
| 2    | D     | 1    | BIN  | Direction (0..8)  (see table)|

## Direction

| Type | Direction                 |
|------|--------------------------|
| 0    | NORTH (front)             |
| 1    | NORTHEAST (front-right)           |
| 2    | EAST (right)    |
| 3    | SOUTHEAST (back-right)  |
| 4    | SOUTH (back)  |
| 5    | SOUTHWEST (back-left)|
| 6    | WEST (left)  |
| 7    | NORTHWEST (front-left) |
| 8    | NULL (no direction / centered)  |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 24 |  V  |  |    |    |    |    |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                               |
|------|-------|------|------|-------------------------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address                           |
| 1    | 24    | 1    | BIN  |Set hat switch direction instruction code              |
| 2    | V     | 1    | BIN  |Always 1. On invalid direction, NULL (8) is assumed  |
