---
sidebar_position: 4
---
# Frame Structures & Others

NorAir Frame structures overview

## Structures Overview
In this manual, the frame packets are shown in their raw form. They are structured in symbolic tables
of 32 bytes, ordered from left to right, where the leftmost byte is the first byte the OBCS will receive.

A message is a frame packet composed of sequential bytes with a header and data frames.

## Received Packets
The frame packet consists of a 2-byte header frame and a 30-byte sequence frame of
arguments. The first byte of the header contains the ID of the recipient, while the second byte
carries the instruction code. The 30-byte sequence carries the arguments and does not need to be
transmitted as a full 30-byte array. Any unused remaining bytes may not be transmitted to improve
speed.

The minimum frame packet length is 3 bytes except when issuing hard and soft resets.

## Sent Packets (Answers)
This frame packet is always a fixed 32-byte packet, even if the expected data frame is smaller.
Like a received packet, it has a 2-byte header but it includes a 30-byte data frame. The
header is the same as the received one, used to identify the source of the sender and the
instruction. An exception is made when the OBCS issues an error message.

In such cases, the header carries 0xFF followed by the peripheral and type of error.
See the OBCS ERROR MESSAGES section for in-depth details.
The 30-byte data frame contents are specific to each instruction.

## Nomenclature
All presented values are in base 10 unless otherwise noted. Hexadecimal values are preceeded by '0x'.

## Error Reporting
Any peripheral may report if an error occurs. A peripheral will indicate the success of an instruction
with a value of 1, the failure to accomplish or a malformed instruction with a value of 0, and 63
(0x3F) if it does not understand the request. For easy reference, 63 corresponds to the '?' character.

The OBCS and J-PORT also report errors at another level. For example, if the user tries to reach a
peripheral that does not exist, the OBCS or J-PORT will issue an error message, depending on where
it occurred.

See the OBCS ERROR MESSAGES and J-PORT ERROR MESSAGES sections for details.
