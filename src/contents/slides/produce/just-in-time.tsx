import { h } from "../../../h";
import { Slide } from '../slide';
import { _208_ExampleInformation } from '@virtualstate/examples';

export const ProduceJustInTime = (
  <Slide index={2003} id="produce-just-in-time">
    <div class="row center">
      <pre class="code">{_208_ExampleInformation.cleanerSource.replace(/\\n/g, "")}</pre>
      <div class="state-output">
        <div class="row stretch">
          <h1 style="min-width: 6em">Log</h1>
          &nbsp;
          <h1 style="min-width: 6em">Component</h1>
          &nbsp;
          <h1 style="min-width: 6em">Both</h1>
        </div>
        <div class="row stretch">
        <div class="column">
      <pre class="code">{`
🟢
      `.trim()}</pre>
          <pre class="code">{`
⏭️
      `.trim()}</pre>
          <pre class="code">{`
⏭️

      `.trim()}</pre>
          <pre class="code">{`
🛑
      `.trim()}</pre>
        </div>
        &nbsp;
          <div class="column">
          <pre class="code">{`
🪁
💿
      `.trim()}</pre>
          <pre class="code">{`
💎
🔑

      `.trim()}</pre>
          <pre class="code">{`
💡

      `.trim()}</pre>
        </div>
        &nbsp;
          <div class="column">

      <pre class="code">{`
🟢

🪁
💿

⏭️

💎
🔑

⏭️

💡

🛑
      `.trim()}</pre>
        </div>
        </div>
      </div>
    </div>
  </Slide>
)
