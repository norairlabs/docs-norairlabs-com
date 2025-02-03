---
sidebar_position: 2
---

# Set Maximum Frequency

Sets the maximum frequency of a COMM, NAV or ADF instrument. For ADF, the 5th and 6th digits
have no meaning. When the maximum frequency is reached by incrementing, the instrument
automatically loops to the minimum frequency. Also, see the remarks.

See [RNS Features](../start-here.md) in the beginning of this chapter for more detail.

## Request

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 25 |  I  | X |  X  |  X  |  Y   | Y   |  Y  |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Request Structure

| Byte | Value | Size | Type | Description                          | COMM/NAV        | ADF            |
|------|-------|------|------|--------------------------------------|-----------------|----------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                    |                 |                |
| 1    | 25    | 1    | BIN  | Set Minimum Frequency instr. code   |                 |                |
| 2    | I     | 1    | BIN  | 0-NAV, 1-Comm, 2-ADF                |                 |                |
| 3    | X     | 1    | BIN  | 1st digit                           | 1st integer     | 1st upper      |
| 4    | X     | 1    | BIN  | 2nd digit                           | 2nd integer     | 2nd upper      |
| 5    | X     | 1    | BIN  | 3rd digit                           | 3rd integer     | 1st lower      |
| 6    | Y     | 1    | BIN  | 4th digit                           | 1st decimal     | 2nd lower      |
| 7    | Y     | 1    | BIN  | 5th digit                           | 2nd decimal     | -              |
| 8    | Y     | 1    | BIN  | 6th digit                           | 3rd decimal     | -              |

## Response

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 25 |  V  | |   |   |     |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

## Response Structure

| Byte | Value | Size | Type | Description                               |
|------|-------|------|------|-------------------------------------------|
| 0    | ID    | 1    | BIN  | RNS address (ID)                         |
| 1    | 25    | 1    | BIN  | Set Minimum Frequency instruction code    |
| 2    | V     | 1    | BIN  | 1 for successful, 0 otherwise            |

## Factory Default Values

| Instrument | Increment  |
|------------|------------|
| NAV        | 117.950    |
| COMM       | 136.975    |
| ADF        | 9999       |

## Remarks

Setting the maximum frequency of a COMM or NAV (but not for the ADF) should be done with care to ensure the expected behavior. The maximum frequencies are directly related to the minimum frequencies and the increments.

Looking at the factory default values, the NAV maximum frequency is set to **117.950**, not **118.000**. This is due to the relationship between the minimum frequency and the increments.

The maximum frequency can be calculated as follows:

---

### Calculation Example 1 (Decimal Increment):
**Parameters:**
- Minimum Frequency: 108.000
- Target Maximum Frequency: 118.000
- Decimal Increment: 50

#### Steps:
1. **Delta** = Maximum Frequency – Minimum Frequency
   `Delta = 118000 - 108000 = 10000`

2. **Steps** = (Delta / Increment) - 1
   `Steps = (10000 / 50) - 1 = 199`

3. **Range** = Steps * Increment
   `Range = 199 * 50 = 9950`

4. **Result** = Minimum Frequency + Range
   `Result = 108000 + 9950 = 117950`

**Result:** The maximum frequency is **117.950**.

---

### Calculation Example 2 (Integer Increment):
**Parameters:**
- Minimum Frequency: 108
- Target Maximum Frequency: 118
- Integer Increment: 1

#### Steps:
1. **Delta** = Maximum Frequency – Minimum Frequency
   `Delta = 118 - 108 = 10`

2. **Steps** = (Delta / Increment) - 1
   `Steps = (10 / 1) - 1 = 9`

3. **Range** = Steps * Increment
   `Range = 9 * 1 = 9`

4. **Result** = Minimum Frequency + Range
   `Result = 108 + 9 = 117`

**Result:** The maximum frequency is **117**.

---

### Tips:
1. **For Consistency**:
   These calculations can be automated by interfacing software.

2. **Quick Calculation Shortcut**:
   Knowing that increments and frequencies are multiples of each other, you can subtract one increment from the target maximum frequency to obtain the same result.
   Example:
   `118000 - 50 = 117950`

   Ensure that both the minimum and maximum frequencies are multiples of the increment. For instance:
   - `108000 / 50 = 2160` (integer, no fraction)
   - `118000 / 50 = 2360` (integer, no fraction)

   This confirms both are valid multiples.


## Examples

### Set COMM Maximum Frequency to 129.975 ( target = 130.000, increment 25):

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 25 |  1  | 1|  2 |  9 |   9  | 7   | 5   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

### Set COMM Maximum Frequency to 125.475 ( target = 125.500, increment 25):

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 25 |  0 | 1 |  2  |  5  | 4    |  7  |  5 |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

### Set ADF Maximum Frequency to 500 :

| 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| ID | 25 |  2  | 0 |  5  |   0 |  0    |   |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |    |  |

