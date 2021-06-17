import { h } from "../../../h";
import { Slide } from '../slide';
import { _702_ExampleInformation } from '@virtualstate/examples/lib/information.built';

function padLines(text: string): string {
  const lines = text.split("\n");
  const max = lines.reduce((max, line) => Math.max(max, line.length), 0);
  return lines.map(line => line.padEnd(max, " ")).join("\n");
}

const definitions = _702_ExampleInformation.cleanerSource.split("\n").slice(0, 22).join("\n").trim().split("\n");
const symbolLines = definitions.filter(line => line.includes("Symbol = Symbol(\""))
const symbols = symbolLines
  .reverse()
  .map(line => {
    const [definition, statement] = line
      .replace(";", "")
      .split("=").map(value => value.trim());
    const name = definition.split(" ")[1];
    return [name, statement];
  })
const withoutSymbols = definitions
  .filter(line => !symbolLines.includes(line))
  .map(line => symbols.reduce(
    (line, [name, statement]) => line.replace(name, statement),
    line
  ));

export const AdditionalTokens2 = (
  <Slide index={2101.2} id="additional-tokens-2">
    <h1>Tokens</h1>
    <div class="row center">
      <pre class="code">{withoutSymbols.join("\n").trim()}</pre>
      <pre class="code">{_702_ExampleInformation.cleanerSource.split("\n").slice(23).join("\n").trim()}</pre>
      <pre class="code lines">
        {
padLines(`
<📦>
  📜
  🧪 
  🧵
  <📦>
    🌵
    <🎁>
      💣
    </🎁>
  </📦>
</📦>
`.trim())
        }
      </pre>
    </div>
  </Slide>
)
