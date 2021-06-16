import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const Logging  = (
  <Slide index={1003} id="logging">
    <div class="row center">
      <pre class="code">
        {`
const product = (
  <product
    name="🪕 The banjo cut" 
    sku="🪕"
  >
    <brand 
      name="🔮 Magic Hairstyles"
    />
  </product>
);
`.trim()}
      </pre>
      <pre>
{
  `
async function * read(node) {
  for await (const children of node) {
    yield * children;
    for (const child of children) {
      yield * read(child);
    }
  }
}

for await (const node of read(<>{product}</>)) {
  console.log({ node });
}
`.trim()
}
    </pre>
    </div>
    <hr />
    <div class="row" style="margin-top: 1em;">
      <pre>
      {`
{
  node: {
    source: "product",
    options: {
      name: "🪕 The banjo cut",
      sku: "🪕"
    },
    children: AsyncIterable
  }
}
      `.trim()}
      </pre>
      <pre>
      {`
{
  node: {
    source: "brand",
    options: {
      name: "🔮 Magic Hairstyles"
    }
  }
}
      `.trim()}
      </pre>
    </div>
  </Slide>
)
