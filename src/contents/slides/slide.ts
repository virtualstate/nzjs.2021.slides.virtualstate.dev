import { createToken, TokenVNodeFn, TokenVNode } from '@virtualstate/x';

export interface SlideOptions {
  index: number;
  id: string;
  template?: false;
}
export const SlideSymbol = Symbol("Slide");
export type SlideTokenVNode = TokenVNode<typeof SlideSymbol, SlideOptions>;
export type SlideTokenVNodeFn = TokenVNodeFn<typeof SlideSymbol, SlideOptions>;
export const Slide: SlideTokenVNodeFn = createToken(SlideSymbol);
