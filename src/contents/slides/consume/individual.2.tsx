import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual2 = (
  <Slide index={1001.2} id="consume-individual-2">
    <div class="row">
      <pre class="code">
        {`
const product = (
  <Product
    sku="🪕"
  >
    <Brand 
      name="🔮 Magic Hairstyles"
    />
  </Product>
);
`.trim()}
      </pre>
    </div>
  </Slide>
)
