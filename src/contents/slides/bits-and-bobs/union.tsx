import { h } from "../../../h";
import { Slide } from '../slide';
import { _804_ExampleInformation } from '@virtualstate/examples';
import { padLines } from '../additional-points';

export const BitsUnion = (
  <Slide index={1003} id="bits-union">
    <div class="row center">
      <pre class="code">{_804_ExampleInformation.cleanerSource.split("\n").slice(3, 18).join("\n").trim()}</pre>
      <pre class="code">{_804_ExampleInformation.cleanerSource.split("\n").slice(18).join("\n").trim()}</pre>
    </div>
    <div class="row">
      <div class="state-output">
        <pre class="code lines">
          {padLines(`
{ horse: '🐴' }
{ horse: '🐴', bird: '🐦' }
{ horse: '💪', bird: '🐦', robot: '🤖' }
{ horse: '💪', bird: '❤️', robot: '🤖' }
{ horse: '💪', bird: '❤️', robot: '🤳' }
        `.trim())}
      </pre>
      </div>
    </div>
  </Slide>
)
