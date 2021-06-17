import { h } from "../../../h";
import { Slide } from '../slide';

export const ProduceDeno = (
  <Slide index={2203} id="additional-deno">
    <pre>
      {`
deno run \\
  --import-map=https://cdn.skypack.dev/@virtualstate/deno/import-map.json \\
  https://cdn.skypack.dev/@virtualstate/deno/lib/example-no-net.js
`.trim()}
    </pre>
    <pre>
      {`
deno run \\
  --import-map=https://cdn.skypack.dev/@virtualstate/deno/import-map.json \\
  --allow-net \\
  https://cdn.skypack.dev/@virtualstate/deno/lib/example.js
`.trim()}
    </pre>
  </Slide>
)
