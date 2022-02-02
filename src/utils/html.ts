import type { PreactDOMAttributes } from "preact";

export const html = (__html?: string): Pick<PreactDOMAttributes, "dangerouslySetInnerHTML"> =>
  __html ? { dangerouslySetInnerHTML: { __html } } : {};
