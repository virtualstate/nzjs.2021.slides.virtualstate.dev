import { h } from "../../h";
import { Slide } from './slide';

export default (
  <Slide index={2} id="functions" template={false}>
    <h1>Functions</h1>
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
    <div class="example-group" hidden>
      <h2>Async</h2>
      <pre>{
        `async function GetExample() {
  const response = await fetch("/resource.txt");
  return response.text();
}

console.log(await GetExample())
`
      }</pre>
      <figure class="example-output">
        <GetExample />
        <figcaption>Output</figcaption>
      </figure>
    </div>
  </Slide>
)

async function GetExample() {
  if (typeof fetch === "undefined") return "";
  const response = await fetch("/resource.txt");
  return response.text();
}

function Sum({ a, b }: Record<string, number>) {
  return a + b
}
