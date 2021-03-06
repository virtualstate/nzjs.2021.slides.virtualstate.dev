import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ConsumeIndividual = (
  <Slide index={1001} id="consume-individual">
    <div class="row">
      <pre class="code">
        {`<Component />`}
      </pre>
      <pre class="code">
        {
          `
<Component>
 <something />
</Component>
          `.trim()}
      </pre>
      <pre class="code">
        {
          `
<>
 <some />
 <thing />
</>
          `.trim()}
      </pre>
      <pre class="code">
        {
          `
<Component>
 {1}
 {true}
 {[1, 2, 3]}
 {"Hello! 👋"}
</Component>
          `.trim()}
      </pre>
      <pre class="code">
        {
          `
<Component>
 <SomeComponent />
 {[1, 2, 3]}
 <SomeOtherComponent />
 {"Hello! 👋"}
 <something />
</Component>
          `.trim()}
      </pre>
    </div>
  </Slide>
)
