import { h } from "../../h";
import { Slide } from './slide';

export default (
  <Slide index={4} id="functions" template={false}>
    <h1>Functions</h1>
    <div class="examples">
      <div class="example-group">
        <h2>Sync</h2>
        <pre>{
          `function Sum({ a, b }) {
  return a + b
}

console.log(Sum())
`
        }</pre>
        <figure class="example-output">
          <Sum a={1} b={2} />
          <figcaption>Output</figcaption>
        </figure>
      </div>
    </div>
  </Slide>
)

function Sum({ a, b }: Record<string, number>) {
  return a + b
}
