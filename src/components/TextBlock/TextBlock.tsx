import { FunctionalComponent, ComponentChildren, h } from "preact";
import register from "preact-custom-element";
import "./style.scss";

export interface TextBlockProps {
  primary?: ComponentChildren;
  secondary?: ComponentChildren;
}

export const TextBlock: FunctionalComponent<TextBlockProps> = ({ primary, secondary }) => (
  <section part="root">
    <p part="primary">{primary || "..."}</p>
    {secondary && <p part="secondary">{secondary}</p>}
  </section>
);

register(TextBlock, "w-text-block", [], { shadow: true });
