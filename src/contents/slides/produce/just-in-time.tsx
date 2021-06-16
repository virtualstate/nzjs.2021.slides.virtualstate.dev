import { h } from "../../../h";
import { Slide } from '../slide';
import { _208_ExampleInformation } from '@virtualstate/examples/lib/information.built';

export const ProduceJustInTime = (
  <Slide index={2003} id="produce-just-in-time">
    <h1>Just In Time</h1>
    <div class="row center">
      <pre class="code">{_208_ExampleInformation.cleanerSource.replace(/\\n/g, "")}</pre>
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
  </Slide>
)
