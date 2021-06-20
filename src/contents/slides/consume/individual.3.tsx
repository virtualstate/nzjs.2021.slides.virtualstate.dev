import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual3 = (
  <Slide index={1001.3} id="consume-individual-3">
    <div class="row center">
      <pre class="code">
        {`
const product = (
  <product
    name="🐦 The bird" 
    sku="🐦"
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
    <div class="state-output">
      <pre class="code">
        {`
{
  product: {
    source: "product",
    options: {
      name: "🐦 The bird",
      sku: "🐦"
    },
    children: AsyncIterable
  }
}
      `.trim()}</pre>
    </div>
  </Slide>
)
