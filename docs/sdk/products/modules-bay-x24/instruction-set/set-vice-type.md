---
sidebar_position: 1
---

# Set VICe Type

Sets the behavior of a VICe joystick button.

> :exclamation: ***Important note***
> 
> *This instruction mirrors the J-PORT Program Button instruction with the modifications needed specifically for a VICe connector.*
> ***It is included in the NorAir Frame libraries to ease the way of developers.***

In reality, has this is a J-PORT targeted instruction. It does not exists as a peripheral instruction but only in
the NorAir Frame libraries to retrieve the correct setup sequence based on the action button type declared.

### What to have in mind

 Some notions to remember:
 - A VICe must be create before to this instruction. Take note of the joystick number attributed.
 - The VICe joystick button ranges from 1 to 200. It is a *joystick button* number, not a connector number
 - This instruction aims the J-PORT management engine, not a peripheral
 - The *action button* is the button that a VICe is associated to and it is a *joystick button*
 - It is imperative to accomodate the VICe behaviour to the one of the action button correctly.
   For this, use the NorAir Frame libraries which provides this correspondence.
 - Using the NorAir Frame libraries, the type supplied must be the same as the one attributed to the action button as the
   correspondece is done internally by the library
 - Changes can only be made after suitable enumeration. They reset to defaults after a hard-reset and on power on.
   
## *Using NorAir Frame libraries*

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 17 |  B  | T |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                |
|------|-------|------|------|----------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address            |
| 1    | 17    | 1    | BIN  | Program Button instruction code |
| 2    | B     | 1    | BIN  | Joystick VICe button number (1..200) |
| 3    | T     | 1    | BIN  | Button type attributed previously to the action button (see table) |


## Button Type

> :exclamation: ***Important note***
> 
>*Using the NorAir Frame libraries, choose the same type as the choosen one for the action button*

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



## *Using J-PORT Program Button instruction directly*

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 10 | 17 |  B  | T |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                |
|------|-------|------|------|----------------------------|
| 0    | 10    | 1    | BIN  | J-PORT address            |
| 1    | 17    | 1    | BIN  | Program Button instruction code |
| 2    | B     | 1    | BIN  | Joystick VICe button number (1..200) |
| 3    | T     | 1    | BIN  | Button type correspondence (see table) |


## Button Type

> :exclamation: ***Important note***
> 
> Use the column '*VICe type to use in byte 3*'

| Action button type declared | Behavior | VICe type to use on byte 3|
|------|--------------------------|------------------|
| 0    | Push button             | 0 - Push button|
| 1    | Toggle button           | 3 - Inverted Toggle button|
| 2    | Inverted Push button    | 2 - Inverted Push button|
| 3    | Inverted Toggle button  | 1 - Toggle button |

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
