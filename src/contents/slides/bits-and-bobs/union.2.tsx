import { h } from "../../../h";
import { Slide } from '../slide';
import { _804_ExampleInformation } from '@virtualstate/examples';
import { padLines } from '../additional-points';

export const BitsUnion2 = (
  <Slide index={1003.2} id="bits-union-2">
    <div class="row center">
      <pre class="code">
        {`
<>
  <Horse />
  <Bird />
  <Robot />
</>
        `.trim()}
      </pre>
      <div class="state-output">
        <div class="row">
        <pre class="code">
        {`
<>
  🐴
</>
        `.trim()}
        </pre>
        <pre class="code lines">
          {padLines(`
<>
  🐴 
  🐦
</>
        `.trim())}
        </pre>
        <pre class="code lines">
          {padLines(`
<>
  💪
  🐦
  🤖
</>
        `.trim())}
        </pre></div>
        <div class="row">
        <pre class="code lines">
          {padLines(`
<>
  💪
  ❤️
  🤖
</>
        `.trim())}
      </pre>
        <pre class="code lines">
          {padLines(`
<>
  💪
  ❤️
  🤳
</>
        `.trim())}
      </pre>
      </div>
      </div>
    </div>
  </Slide>
)
