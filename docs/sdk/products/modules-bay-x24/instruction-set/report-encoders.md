---
sidebar_position: 2
---

# Report Encoders

Returns the MBx24 encoders counters representation in a bulk.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 48 |    |  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                    |
|------|-------|------|------|--------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)            |
| 1    | 48     | 1    | BIN  | Report Encoders instruction code |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 48 |  V1 | V2 |  V3  |  V4  | V5   | V6   |  V7  |    V8|    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                                        |
|------|-------|------|------|----------------------------------------------------|
| 0    | ID    | 1    | BIN  | MBx24 address (ID)                                |
| 1    | 48    | 1    | BIN  | Report Encoders instruction code                 |
| 2    | V1    | 1    | BIN  | Encoder 1 number of steps and magnitude values   |
| 3    | V2    | 1    | BIN  | Encoder 2 number of steps and magnitude values   |
| 4    | V3    | 1    | BIN  | Encoder 3 number of steps and magnitude values   |
| 5    | V4    | 1    | BIN  | Encoder 4 number of steps and magnitude values   |
| 6    | V5    | 1    | BIN  | Encoder 5 number of steps and magnitude values   |
| 7    | V6    | 1    | BIN  | Encoder 6 number of steps and magnitude values   |
| 8    | V7    | 1    | BIN  | Encoder 7 number of steps and magnitude values   |
| 9    | V8    | 1    | BIN  | Encoder 8 number of steps and magnitude values   |

## Remarks

After answering the report encoders instruction, the MBx24 resets all encoder counters to zero.
Although it’s rare to happen, if no report is requested for a long period ( more than 5000ms ) and the
encoders counter over rolls the maximum or minimum counting steps, it will be automatically set
to 0, so those steps are lost. To prevent this, request a report within useful time, if encoders are
present, to make the simulation updated and not lose encoder steps.

With this report, users receive the accumulated count of steps, positive or negative, in a byte array
since last report. As answers are always in a byte type, these reported values have to be processed
to be used. Each byte carries the step counter value but also its magnitude, i.e., which is the
direction the encoder was rotated. The rotation magnitude may be positive, negative or none. This is
represented by the Most Significant bit ( MSB ) of the value. If the MSB is 1, the value is negative.

| Bit Position | 7  | 6  | 5  | 4  | 3  | 2  | 1  | 0  |
|--------------|----|----|----|----|----|----|----|----|
| Value        | MSB| 1  | 0  | 1  | 0  | 1  | 0  | 1  |

**Table 3 - Encoder returned value if 85 steps**
In table 3, if MSB is **1**, the resulting step counter is **-85**. If MSB is **0**, the step counter is **85**.

#### Simplest Way to Retrieve Steps Count and Magnitude:

#### a) Declare a variable for each value:
```
Int EncoderCounter;
byte ReportedValue;
```

#### b) Test if motion occurred:
```
if (ReportedValue == 0) {
    return 0;
}
EncoderCounter = RetrieveValueFrom(ReportedValue);
```

#### c) Retrieve the value from a function:
```
Int RetrieveValueFrom(Int ReportedValue) {
    if ((ReportedValue & 0x80) == 0x80) { // Test if it is negative
        return (0x80 - ReportedValue) * -1; // If it is negative
    }
    return ReportedValue; // If it is positive
}
```

The firmware ensures that, when the number of steps is 0, the magnitude is also set to 0. This way the resulting reported byte for that particular encoder is 0 and not ‘-0’. This simplifies comparisons like in step **b)** of the example.

As can be deduced, each encoder step counter is truncated, meaning that only values from **-127 to 127** will occur.
