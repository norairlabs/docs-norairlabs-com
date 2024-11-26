---
sidebar_position: 2
---

# Best Pratices

After a user sends a message, they should always verify the response to ensure successful
execution or to identify any errors. Communication can be successful, but the result may not be, or
execution may not be possible. In such cases, actions should be taken to correct the procedure to
achieve the expected result.

A ping-pong scheme may result in a response but also in a timeout error. If a major error occurs,
such as a loose USB cable connection, the timeout error is a valuable resource for detecting this.

Waiting for a response is mandatory if one is expected. This guarantees the completion of
execution. If an instruction is received while a peripheral is executing the previous one, the first
message is lost, and the last prevails. The peripherals' internal buffers are designated for specific
purposes, not for the messaging engine.

Track the settings made. There is substantial information in these settings. For example, managing
200 joystick buttons can be a challenge if not properly organized. If necessary, create tables or take
notes about these settings.
