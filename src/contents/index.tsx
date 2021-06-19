import { h } from "../h";
import Slides from "./slides";

export { default as Slides, AllSlides } from "./slides";

export const SiteContents = (
  <main>
    {Slides}
  </main>
);
