---
sidebar_position: 1
---

# Concepts

The NorAir Frame is a protocol designed to establish communication between a user
computer and Northern Aircraft Labs hardware. It is based on a message engine consisting of
instructions and responses that function similarly to a ping-pong scheme.

The Northern Aircraft Labs hardware comprises an On-Board Computer System (OBCS) and its
peripherals. Messages are sent via the OBCS, which autonomously determines their routing
destinations. Any peripheral can be a message target, including the OBCS itself. Importantly, there
is always a response except for a few types of instructions, such as hard resets. These responses
may consist of general data, confirmation of a setting, or error messages.

Received messages are those received by the OBCS from an external source, such as a user
computer. Sent messages are the responses dispatched by the hardware.
The Frame is viewed from the hardware's point of view.

Received messages are UTF-8 sequences of bytes with a minimum length of 2 bytes and a
maximum length of 32 bytes.
Sent messages are always fixed 32-byte sequences and are not nullterminated.
Additionally, if the OBCS receives a character, such as an alphanumeric one, it will
interpret it using its ASCII code. For example, 'A' is represented as 0x41.

Furthermore, there will always be a response except when explicitly stated otherwise