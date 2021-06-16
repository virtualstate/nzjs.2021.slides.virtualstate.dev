import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual2 = (
  <Slide index={1001.2} id="consume-individual-2">
    <div class="row">
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
    </div>
  </Slide>
)
