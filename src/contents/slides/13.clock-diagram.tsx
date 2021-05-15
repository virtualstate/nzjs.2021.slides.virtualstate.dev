import { h } from "../../h";
import { Slide } from './slide';

export default (
  <Slide index={13} id="clock-diagram">
    <h1>7 Segment Digit</h1>
    <div class="example-group">
      <h2>Schematic</h2>
      <img src="/7 Segment Sch.jpg" alt="Schematic for 7 segment digit" />
    </div>
    <div class="example-group">
      <h2>Working Example</h2>
      <img src="/7 Segment LED.jpg" alt="Implementation of 7 segment digit" />
    </div>
    <div class="example-group">
      <h2>BASIC Code Snipped</h2>
      <pre>
{`Data 0  ,(%11101110)
Data 1  ,(%10001000)
Data 2  ,(%11000111)
Data 3  ,(%11001101)
Data 4  ,(%10101001)
Data 5  ,(%01101101)
Data 6  ,(%01101111)
Data 7  ,(%11001000)
Data 8  ,(%11101111)
Data 9  ,(%11101001)

loopa:

for b2 = 0 to 9

Decode:
read b2,b0
b1 = b0 / 16
b0 = b0 * 16
b0 = b0 / 16
bit4  = bit3
bit3  = 0
bit12 = bit11
bit11 = 0

b10 = b0     'dirs
b11 = b0    'pins
b12 = b1    'dirs
b1  = not b1'pins
bit8 = 0
b13 = b1

nap 7

for b3 = 0 to 255
dirs = b10
pins = b11
dirs = b12
pins = b13
next b3

pins = 0
dirs = 0
next b2

goto loopa`}
      </pre>
    </div>
  </Slide>
)
