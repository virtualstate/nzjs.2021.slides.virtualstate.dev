import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual1 = (
  <Slide index={1001.1} id="consume-individual-1">
    <div class="row">
      <pre class="code">
        {`
<product 
  name="🐦 The bird" 
  sku="🐦" 
/>
`.trim()}
      </pre>
      <pre class="code">
        {`
<brand 
  name="🔮 Magic hairstyles"
/>`.trim()}
      </pre>
      <pre class="code">
        {`
<product
  name="🐦 The bird" 
  sku="🐦"
>
  <brand 
    name="🔮 Magic hairstyles"
   />
</product>
`.trim()}
      </pre>
    </div>
  </Slide>
)
