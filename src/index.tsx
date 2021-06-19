import { render, DOMVContext, createTimeline, Timeline } from '@virtualstate/dom';
import { SiteBody } from './site';
import { h } from "./h";
import { isVNode } from '@virtualstate/fringe';
import { AllSlides } from './contents';
import { Slide } from './contents/slides/slide';
import ClassNames from 'classnames';

async function run() {

    const root = document.getElementById("root");

    if (!root) {
        throw new Error("Expected root");
    }

    // const timelinePromise = createTimeline(
    //   context,
    //   reportTimeline
    // );

    if (!isVNode(SiteBody)) {
        throw new Error("Expected SiteBody to be a VNode");
    }

    if (location.pathname === "/all") {
        const elements = await Promise.all(
          AllSlides
            .slice()
            .sort((a, b) => {
                return a.options.index < b.options.index ? -1 : 1
            })
            .map(async (slide, index) => {
              const slideRoot = document.createElement("div");
              const id = `slide__${index}_${slide.options.id}`
              const node = (
                <main>
                  <div class={ClassNames("slide", slide.options.class)} id={id}>
                      <div>
                          {slide}
                      </div>
                  </div>
                </main>
              );
              if (!isVNode(node)) throw new Error("Hmm");
              await render(
                node,
                root
              );
              return slideRoot;
          })
        );
        root.append(...elements);
    } else {
        await render(
          SiteBody,
          root
        );
    }

    console.log("Completed rendering");

    // await reportTimeline(await timelinePromise);
}

async function reportTimeline(timeline: Timeline) {
    // console.log(timeline[timeline.length - 1]);
}

window.proposalSiteRender = run();
window.proposalSiteRender.catch(error => {
    throw error;
});

