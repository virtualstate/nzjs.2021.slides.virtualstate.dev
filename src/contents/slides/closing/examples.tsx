import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const ClosingLinksExample = (
  <Slide index={9001.1} id="closing-links-examples" class="closing-links">
    <a href="https://www.npmjs.com/package/@virtualstate/examples" target="_blank" rel="noopener noreferrer">
      <h1>
        <img src="/package.svg" />
        <span>@virtualstate/examples</span>
      </h1>
    </a>
    <a href="https://github.com/virtualstate/x/tree/main/packages/examples" target="_blank" rel="noopener noreferrer">
      <h1>
        <img src="/github.svg" />
        <span>github.com/virtualstate/x</span>
      </h1>
    </a>
  </Slide>
)
