---
sidebar_position: 1
---

# User Manual Home
How to proper install and use NorAir Labs equipment.

## Foreword

Thank You for purchasing Northern Aircraft Labs products.

You have acquired a high performance and high quality equipment that
enhances simulation to its best.

Here, users can find how to install and setup their NorAir equipments to
smooth operation and enjoy.

## What is it

NorAir Labs equipments are simulation hardware that can be used with an assortment of
simulation flavours like trucks, trains, aircrafts, vessels and many more sims. 

It comprises a 200 buttons, 9 axes and powerfully processed joystick, reachable by
a serial port for setting and getting usefull data. This two are HID devices with no
need for drivers.

## Architecture

The NorAir Labs hardware relies on a centralized OnBoard Computer System that houses
a serial port and a joystick. The first allows users to access to all the hardware in
a seemless and easy way. The second it is a configurable device that is seen by  
operating systems as a pure joystick.

All other hardware connects to this computer to form a network managed automatically.

These peripherals from NorAir Labs devices are know as ***peripherals*** and have their own individual and
autonomous processing units.

These connections are made using single included cables, transporting power and signal.

## Remarks

If you're looking for development tools, please visit our [SDK pages](../sdk/index.md)
to learn how to use NorAir Frame and make your own API.

Not all simulation software supports a 200 button joystick. In this cases, users are limited
to the number of buttons supported by the software.

Nevertheless, users can use workarrounds. For example, acquiring a joystick button logic state,
creating a keyboard stroke and sending it to the simulation software, i.e., creating a *Ghostkey*
its a simple way as, most of the times, the simulators accept keyboard inputs.

For further details, see the [SDK joystick section](../sdk/products/on-board-computer/instruction-set/j-port/report-buttons.md).

***Only Northern Aircraft Labs peripherals can be connected to this network. Failures and
damages to the equipment, goods and people will arise if other hardware is connected***

***Comply to safety procedures, either general or specific to NorAir Labs equipment.***
