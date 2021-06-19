import { h } from "../../../h";
import { Slide } from '../slide';
import { _406_ExampleInformation } from '@virtualstate/examples';
import { padLines } from '../additional-points';

export const ProduceClassSharedAsync = (
  <Slide index={2011.2} id="produce-class-shared-async">
    <div class="row center">
      <pre class="code">{_406_ExampleInformation.cleanerSource.split("\n").slice(2).join("\n").trim()}</pre>
      <div class="state-output">
        <pre class="code lines">
          {padLines(`
<>
  Iteration 1 🕊
  Iteration 2 🕊
  Iteration 3 🕊
</>
          `.trim())}
        </pre>
      </div>
    </div>
  </Slide>
)
