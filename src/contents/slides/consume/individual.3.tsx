import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual3 = (
  <Slide index={1001.3} id="consume-individual-3">
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
console.log({ product })
      `.trim()}</pre>
    </div>
    <hr />
    <div>
      <pre class="code">
        {`
{
  product: {
    source: "product",
    options: {
      name: "🪕 The banjo cut",
      sku: "🪕"
    },
    children: AsyncIterable
  }
}
      `.trim()}</pre>

    </div>
  </Slide>
)
