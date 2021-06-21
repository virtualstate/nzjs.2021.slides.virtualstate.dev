import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const IntroductionFirst = (
  <Slide index={0} id="intro">
    <h1>A fresh take on JSX</h1>
    <div class="author state-output">
      <h2>Fabian Cook</h2>
      <h3>Axiom Applied Technologies and Development</h3>
      <div class="logos">
        <img src="/clearpoint-logo.svg" width={220} />
        <img src="/contact-rainbow.png" width={290} />
      </div>
    </div>
    <div class="nzjscon">
      nz.js(con); 2021
    </div>
  </Slide>
)
