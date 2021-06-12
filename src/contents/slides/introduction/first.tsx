import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const IntroductionFirst: SlideTokenVNode = (
  <Slide index={0} id="intro">
    <h1>A fresh take on JSX</h1>
    <div class="author">
      <h2>Fabian Cook</h2>
      <div class="logos">
        <img src="/Clearpoint-logo_nov19.png" width={151} />
        <img src="/contact-energy.svg" width={151} />
      </div>
    </div>
  </Slide>
)
