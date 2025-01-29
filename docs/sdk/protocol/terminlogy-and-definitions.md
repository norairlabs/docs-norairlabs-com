---
sidebar_position: 3
---

# Terminology & Definitions

## OBCS (On-Board Computer System)
The On-Board Computer System (OBCS) is a computer system that manages communications and
interfaces between a serial device and a joystick device with a user computer. It comprises the C-PORT and the J-PORT.

## C-PORT (Communications Port)
The C-Port, short for Communications Port, is a component of the OBCS. It is a high-speed serial
port that connects the OBCS to a computer via a USB port.

## J-PORT (Joystick Port)
The J-Port serves as an interface to an internally managed joystick as part of the OBCS, supporting
200 joystick buttons and nine axes. It has its own processor for fast performance and includes a
highly efficient button management engine that allows, among other functions, the control of
button behavior, manipulation or retrieval of their logical states. As an OBCS component, the J-Port
is accessed through the OBCS. Therefore, even if no peripheral is attached to the OBCS, one can
interact with the J-Port independently. When the terms "J-Port" or "Joystick" are used, they may be
perceived as the same entity since they are part of the same hardware. Similarly to peripherals, the
J-Port is accessible through the same messaging system to perform actions, configurations or
report useful data. It is a quick and versatile system with an easy interface. Additionally, the J-Port
has an enumeration process used for J-Port dedicated peripherals like the Servo Controlled
Throttle. This procedure is similar, if not identical, to that of the OBCS.

## RNS (Radio & Navigation System)
The Radio & Navigation System (RNS) is a peripheral that comprises a stack of instruments
connected to the OBCS. It includes a COMM, NAV, ADF and a transponder. Additionally, their
encoder push-buttons can be mapped and accessed as joystick buttons. A hardware display
management system is implemented, allowing users to adjust its brightness.

## MBx24 (Modules Bay)
The Modules Bay (MBx24) is a bay designed for input and/or output modules. This peripheral supports
up to 24 modules, such as switches and annunciators. It features 32 output connectors, 32 input
connectors for attaching modules and 32 VICe connectors. It also accommodates up to eight
encoders and sixteen 7-segment display digits.

## WALL – Broadcasting Messages
Whenever it is necessary to communicate with all peripherals simultaneously, a WALL message is used. This broadcast
messaging system allows the delivery of the same message to all peripherals. For instructions such as resets or backlit
color settings, this is very useful and avoids the need to instruct each peripheral individually.

## Serial Numbers - Decomposition and Meaning
The first two digits of a serial number represent the type of hardware to handle. For example, if a serial number is
"3123456789," the first two digits, "31", designate it as a RNS peripheral (Radio & Navigation System). This provides a
simple and quick way to access a peripheral without requiring additional communication or other methods to determine
the hardware model.

## Enumeration of Peripherals
Peripheral enumeration is the registration process of a peripheral's serial number in the OBCS. When enumerating a
peripheral, the user supplies an "ID" for communication purposes, allowing the peripheral to be accessed by this ID
in a clean and simple way.

## Peripherals ID
The "ID" is the "callsign" of a peripheral. After properly enumerating a peripheral in the OBCS, the peripheral will ONLY be
recognized by its ID number. This ID number is set to a default but can be changed to a more convenient one. Although
two identical peripherals could be present, each one will be reached by its individual ID.

For instance, if an RNS with serial number "3123456789" and another RNS with serial number "3122233344" are present, the first can have the callsign or ID
31, and the second can have ID 32.
This shortens communication time and length and simplifies hardware handling. Valid IDs are between 21 and 98.

All others are reserved and **WILL NOT BE ACCEPTED BY OBCS HARDWARE** and may generate errors and/or issues during enumeration.

| ID  | Description                        |
| ----|------------------------------------|
| 10  | J-Port (Reserved)                  |
| 15  | Throttle                           |
| 31  | RNS                                |
| 35  | Autopilot                          |
| 50  | MBx24                              |
| 99  | C-Port & OBCS (Reserved)           |

**Table 1** - The default IDs

## Connectors
Connectors are the physical components where hardware, such as switches or LED modules, can
be connected. Additionally, connectors may be virtualized as they may not physically exist. In either
case, they are considered the same type and possess identical functionalities. Both have a local
number associated with a specific peripheral, and their behavior can be configured. To avoid
confusion, it is important to remember that they are not joystick buttons. Each connector must be
assigned a joystick button number to be recognizable by the J-PORT engine.

## VICe Connections
VICe, or Virtual Inverted Connector Enhancement, is a highly useful virtual tool provided by some
peripherals. It allows users to associate a physical connector with a virtual one that assumes the
inverse logic state of the first. If the physical connector is ON, the virtual one will be OFF, and vice
versa. This feature conserves physical connectors when simulation software requires a joystick
button to activate a feature and another to deactivate it. A VICe connection is automatically
enabled when it is associated with a joystick button.

Example of a VICe connection:

| MBx24 Physical Connector Number | Assigned Joystick Button Number | Logic State | MBx24 VICe Connector Number | Assigned Joystick Button Number | Logic State |
|---------------------------------|----------------------------------|-------------|-----------------------------|----------------------------------|-------------|
| 20                              | 70                               | OFF         | 20                          | 101                              | ON          |
| 5                               | 55                               | ON          | 5                           | 117                              | OFF         |
| 14                              | 64                               | ON          | 14                          | 95                               | OFF         |

A physical connector and its VICe connector share the same connector number but are assigned different joystick button numbers..

