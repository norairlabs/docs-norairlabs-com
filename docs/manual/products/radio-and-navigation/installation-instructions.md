---
sidebar_position: 1
---

# Installation Instructions

How to install a RNS

Installing a RNS is fairly simple using the following steps.
1. Make sure that the OBCS front panel power control switch is in the “Shutdown” position.
2. Choose an installation place at your discretion. It must be moisture and dust free, ideally in a vetilated area.
3. Lay down the cable until it reaches your OBCS and connect the plug to any of the OBCS peripherals ports:
  * Match the white circle of the plug with the white circle of the OBCS connector (upwards)
  * With care, insert the plug in that position
  * Screw the plug blue cap until it doesn’t rotate.
4. Adjust the standing foot and tilt:
* Releasing both sides knobs lightly
* Adjust to the intended position
* Tight both knobs

## First power up

The RNS power is delivered by OBCS power unit.<br/>
Turn the OBCS front panel power control switch to “Power ON”. The RNS self-test starts immediately and takes a few seconds. 
After the displays show numbers from 0 to 9, the backlit turns on. The hardware is ready.<br/>
Write down the RNS serial number. It can be found on the identifying back plate. It will be needed for configurations and enumerations.<br/>
Use the TOGA software to set up your RNS. It is free and can be downloaded HERE. Also, you may download the SDK and create your own software.

## Default values

Each instrument in your RNS have factory default values.

These values can be changed with the TOGA software very easily.

> ❗: ***Note***
> 
> The RNS restore these values to factory default at power up, after a hard or soft resets.

| Instrument | Field | Default value|Integer increment|Decimal increment|
|---|---|---|---|---|
|COMM|Active/Standby maximum frequency|136.975|1|25|
|COMM|Active/Standby minimum frequency|118.000|1|25|
||||
|NAV|Active/Standby maximum frequency|117.950|1|50|
|NAV|Active/Standby minimum frequency|108.000|1|50|
||||
|ADF|Maximum frequency|9999|1|1|
|ADF|Minimum frequency|0000|1|1|
||||
|XPDR|Maximum squawk code|7777|1|1|
|XPDR|Minimum squawk code|0000|1|1|
||||
