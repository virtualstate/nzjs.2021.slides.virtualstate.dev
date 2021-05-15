import { h } from "../../h";
import { Slide } from './slide';

export default (
  <Slide index={9} id="functions" template={false}>
    <h1>Async Functions</h1>
    <div class="example-group">
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
