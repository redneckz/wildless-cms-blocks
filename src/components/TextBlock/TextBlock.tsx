import { FunctionalComponent, h } from "preact";
import register from "preact-custom-element";
import "./style.scss";

interface TextBlockProps {
  primary?: string;
  secondary?: string;
}

export const TextBlock: FunctionalComponent<TextBlockProps> = ({ primary, secondary }) => (
  <section className="text">
    <p className="text__primary">{primary || "..."}</p>
    {secondary && <p className="text__secondary">{secondary}</p>}
  </section>
);

register(TextBlock, "w-text-block", ["primary", "secondary"]);
