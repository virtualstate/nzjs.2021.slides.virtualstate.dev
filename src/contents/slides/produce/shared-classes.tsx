import { h } from "../../../h";
import { Slide } from '../slide';
import { _405_ExampleInformation } from '@virtualstate/examples';
import { padLines } from '../additional-points';

export const ProduceClassShared = (
  <Slide index={2011} id="produce-class-shared">
    <div class="row center">
      <pre class="code">{_405_ExampleInformation.cleanerSource.split("\n").slice(2).join("\n").trim()}</pre>
      <div class="state-output">
        <pre class="code lines">
          {padLines(`
<>
  Iteration 1 🐸
  Iteration 2 🐸
  Iteration 3 🐸
</>
          `.trim())}
        </pre>
      </div>
    </div>
  </Slide>
)
