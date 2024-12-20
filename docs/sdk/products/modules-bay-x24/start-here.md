---
sidebar_position: 2
---

# Start Here

A Modules Bay is a device that accommodates NorAirLabs modules, in MBx24 case, up to 24 of
these modules.

The MBx24 features, beyond others, the flowing:
- 32 OUTPUTs to actuate LEDs and other low power devices
- 32 INPUTs to read logical states of switches, buttons, etc.
- 32 VIRTUAL INVERTED CONNECTOR Enhancement, or VICe connectors, to automatically inject
logical states to an INPUT without using hardware.

A VICe connector, as a virtual object, doesn’t exist physically. A VICe is nothing more than a
virtualized connector with an assigned joystick button number, created to mimic the inverted logic
state of a real input connector with the same connector number but with other joystick button
number. This is useful when a simulation software requires two joystick buttons to turn on and off
the same item: one to the ON logic state and another for the OFF logic state. The off logic state may
be created virtually as a VICe with an additional joystick button number, saving a physical
connector although occupying a joystick button number. This may not be an issue when there are
199 more available.
