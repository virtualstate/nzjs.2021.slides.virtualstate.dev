import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual1 = (
  <Slide index={1001.1} id="consume-individual-1">
    <div class="row">
      <pre class="code">
        {`
<Product 
  name="🪕 The banjo cut" 
  sku="🪕" 
/>
`.trim()}
      </pre>
      <pre class="code">
        {`
<Brand 
  name="🔮 Magic Hairstyles"
/>`.trim()}
      </pre>
      <pre class="code">
        {`
<Product
  sku="🪕"
>
  <Brand 
    name="🔮 Magic Hairstyles"
   />
</Product>
`.trim()}
      </pre>
    </div>
  </Slide>
)
