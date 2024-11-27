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
| 1    | 12    | 1    | BIN  | Report Buttons instruction code |
| 2    | B     | 1    | BIN  | Buttons 1-8              |
| 3    | B     | 1    | BIN  | Buttons 9-16             |
| 4    | B     | 1    | BIN  | Buttons 17-24            |
| 5    | B     | 1    | BIN  | Buttons 25-32            |
| 6    | B     | 1    | BIN  | Buttons 33-40            |
| 7    | B     | 1    | BIN  | Buttons 41-48            |
| 8    | B     | 1    | BIN  | Buttons 49-56            |
| 9    | B     | 1    | BIN  | Buttons 57-64            |
| 10   | B     | 1    | BIN  | Buttons 65-72            |
| 11   | B     | 1    | BIN  | Buttons 73-80            |
| 12   | B     | 1    | BIN  | Buttons 81-88            |
| 13   | B     | 1    | BIN  | Buttons 89-96            |
| 14   | B     | 1    | BIN  | Buttons 97-104           |
| 15   | B     | 1    | BIN  | Buttons 105-112          |
| 16   | B     | 1    | BIN  | Buttons 113-120          |
| 17   | B     | 1    | BIN  | Buttons 121-128          |
| 18   | B     | 1    | BIN  | Buttons 129-136          |
| 20   | B     | 1    | BIN  | Buttons 137-144          |
| 21   | B     | 1    | BIN  | Buttons 145-152          |
| 22   | B     | 1    | BIN  | Buttons 153-160          |
| 23   | B     | 1    | BIN  | Buttons 161-168          |
| 24   | B     | 1    | BIN  | Buttons 169-176          |
| 25   | B     | 1    | BIN  | Buttons 177-184          |
| 26   | B     | 1    | BIN  | Buttons 185-192          |
| 27   | B     | 1    | BIN  | Buttons 193-200          |

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
| 1    | 17    | 1    | BIN  | Soft-Reset instruction code              |
| 2    | V     | 1    | BIN  | 1 if successful, 0 otherwise             |
