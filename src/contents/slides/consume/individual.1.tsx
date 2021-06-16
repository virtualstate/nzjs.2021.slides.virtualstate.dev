import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual1 = (
  <Slide index={1001.1} id="consume-individual-1">
    <div class="row">
      <pre class="code">
        {`
<product 
  name="🪕 The banjo cut" 
  sku="🪕" 
/>
`.trim()}
      </pre>
      <pre class="code">
        {`
<brand 
  name="🔮 Magic Hairstyles"
/>`.trim()}
      </pre>
      <pre class="code">
        {`
<product
  name="🪕 The banjo cut" 
  sku="🪕"
>
  <brand 
    name="🔮 Magic Hairstyles"
   />
</product>
`.trim()}
      </pre>
    </div>
  </Slide>
)
