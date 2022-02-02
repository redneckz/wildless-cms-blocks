import { ComponentChildren, FunctionalComponent, h } from "preact";
import register from "preact-custom-element";
import { html } from "../../utils/html";
import "./style.scss";

export interface TextBlockData {
  primary?: string;
  secondary?: string;
}

export interface TextBlockProps {
  data?: TextBlockData;
  primary?: ComponentChildren;
  secondary?: ComponentChildren;
}

export const TextBlock: FunctionalComponent<TextBlockProps> = ({ data, primary, secondary }) => (
  <section part="root">
    <p part="primary" {...html(data?.primary)}>
      {primary}
    </p>
    {(data?.secondary || secondary) && (
      <p part="secondary" {...html(data?.secondary)}>
        {secondary}
      </p>
    )}
  </section>
);

register(TextBlock, "w-text-block", ["data"], { shadow: true });
