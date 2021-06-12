import { h } from "../../../h";
import { Slide, SlideTokenVNode } from '../slide';

export const IntroductionHistory: SlideTokenVNode = (
  <Slide index={2} id="history">
    <h1>Some history</h1>
    <ul>
      {/* The concept, not the implementation, https://github.com/opennetwork */}
      <li>Open Network</li>
      {/* The standard, https://github.com/solid/ */}
      <li>Solid</li>
      {/* The concept, not  the data, https://rdf.js.org/ */}
      <li>RDF</li>
      {/* 2D Data, https://github.com/opennetwork/iterable */}
      <li>Iterables</li>
      {/* 3D Data, https://github.com/opennetwork/rdf-data-model */}
      <li>RDF Data Models</li>
      {/* VNode, https://github.com/opennetwork/vnode */}
      <li>Foundational Work</li>
      {/* Batching by Microtask, https://github.com/opennetwork/microtask-collector */}
      <li>Microtasks</li>
      {/* https://fabiancook.dev/2021/05/18/concurrent-unions */}
      <li>Concurrent Unions</li>
      {/* https://virtualstate.dev */}
      <li>Now</li>
    </ul>
  </Slide>
)
