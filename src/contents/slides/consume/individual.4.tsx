import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual4 = (
  <Slide index={1001.4} id="consume-individual-4">
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
      <pre class="code">
        {`
for await (const children of product.children) {
  console.log({ children });
}
      `.trim()}</pre>
    </div>
    <div class="state-output">
      <pre class="code">
        {`
{
  children: [
    {
      source: "brand",
      options: {
        name: "🔮 Magic Hairstyles"
      }
    }
  ]
}
      `.trim()}</pre>

    </div>
  </Slide>
)
