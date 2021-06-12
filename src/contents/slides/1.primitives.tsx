import { h } from "../../h";
import { Slide } from './slide';

export default (
  <Slide index={1} id="primitives">
    <h1>Primitive Data Types</h1>
    <div class="examples">
      <div class="example-group">
        <h2>Numbers</h2>
        <pre>
        1
      </pre>
        <pre>
        2
      </pre>
        <pre>
        3
      </pre>
      </div>
      <div class="example-group">
        <h2>Big Integers</h2>
        <pre>
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
      </pre>
        <pre>
        200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
      </pre>
        <pre>
        300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
      </pre>
      </div>
      <div class="example-group">
        <h2>Strings</h2>
        <pre>
        "Hello World!"
      </pre>
        <pre>{`\`
1. Write this list
2. Cross items of list
3. Finish list
\``}</pre>
      </div>
      <div class="example-group">
        <h2>Booleans</h2>
        <pre>
        true
      </pre>
        <pre>
        false
      </pre>
      </div>
    </div>
  </Slide>
)
