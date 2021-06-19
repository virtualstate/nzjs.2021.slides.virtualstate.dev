import { h } from "../../h";
import { VNode } from '@virtualstate/x';
import { Slide, SlideTokenVNode } from './slide';
import * as Introduction from "./introduction";
import * as Consume from "./consume";
import * as Produce from "./produce";
import * as Additional from "./additional-points";
import * as Bring from "./bring-your-own";
import * as Other from "./other-things";
import * as Bits from "./bits-and-bobs";
import * as Closing from "./closing";
import { Collector } from 'microtask-collector';
import { Template } from "../../template";
import ClassNames from "classnames";

export const SlideMap = {
  ...Introduction,
  ...Consume,
  ...Produce,
  ...Additional,
  ...Bring,
  // ...Other,
  ...Bits,
  ...Closing
}
export const AllSlides = Object.values(SlideMap)
  .filter(Slide.is);

export default (
  <Slides>
    {...AllSlides}
  </Slides>
)

async function last<T>(iterable: AsyncIterable<T>): Promise<T | undefined> {
  const iterator = iterable[Symbol.asyncIterator]();
  let result;
  let value: T | undefined = undefined;
  do {
    result = await iterator.next();
    value = result.done ? value : result.value;
  } while (!result.done);
  return value;
}

declare global {

  interface Window {
    prerender?: boolean;
  }
}


async function *Slides(options: unknown, child?: VNode) {
  if (!child?.children) {
    throw new Error("Expected slides");
  }
  const slides = await last(child.children);
  assertSlides(slides);

  const indexedSlides = slides
    .slice()
    .sort((a, b) => a.options.index < b.options.index ? -1 : 1);

  let index = 0;

  const sessionKey = "Slides.index";
  const sessionIndex = typeof sessionStorage === "undefined" ? undefined : sessionStorage.getItem(sessionKey);
  if (sessionIndex && /^\d+$/.test(sessionIndex)) {
    index = +sessionIndex;
  }

  const changeCollector = new Collector<number>();
  const changeIterator = changeCollector[Symbol.asyncIterator]();

  listen();



  let nextChange;
  do {
    const id = `slide__${index}_${indexedSlides[index].options.id}`
    const slide = (
      <div class={ClassNames("slide", indexedSlides[index].options.class)} id={id}>
        <div>
          {indexedSlides[index]}
        </div>
      </div>
    );
    if (indexedSlides[index].options.template === false) {
      yield slide;
    } else {
      yield (
        <Template id={`${id}_template`}>
          {slide}
        </Template>
      );
    }

    if (typeof window === "undefined" || window.prerender) {
      index += 1;
      if (!indexedSlides[index]) {
        break;
      } else {
        // Cycle through the slides to create templates
        continue;
      }
    }

    nextChange = await changeIterator.next();

    if (nextChange.done || !nextChange.value?.length) {
      break;
    }

    index = nextChange.value.reduce(
      (index, change) => index + change,
      index
    );

    if (index < 0) {
      index = 0;
    } else if (!indexedSlides[index]) {
      index = indexedSlides.length - 1;
    }

    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(sessionKey, index.toString());
    }

  } while (!nextChange?.done);

  function assertSlides(slides?: ReadonlyArray<VNode>): asserts slides is SlideTokenVNode[] {
    if (!slides?.length) throw new Error("Expected at least one slide");
    for (const slide of slides) {
      Slide.assert(slide);
    }
  }

  function listen() {
    if (typeof window === "undefined") return;
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      console.log(event.key);
      switch (event.key) {
        case "Left":
        case "ArrowLeft":
          changeCollector.add(-1);
          break;
        case "Right":
        case "ArrowRight":
          changeCollector.add(1);
          break;
      }
    });
  }
}
