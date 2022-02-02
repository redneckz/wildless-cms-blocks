import { FunctionalComponent, ComponentChildren, JSX, h } from "preact";
import register from "preact-custom-element";
import { html } from "../../utils/html";
import "./style.scss";

export interface ImageBlockData {
  src: string;
  alt: string;
  description?: string;
  secondary?: string;
}

export interface ImageBlockProps {
  data?: ImageBlockData;
  src: string;
  alt: string;
  description?: ComponentChildren;
  secondary?: ComponentChildren;
}

// TODO Check out https://github.com/callstack/linaria to implement CSS-in-JS approach with zero runtime
const imgStyle: JSX.CSSProperties = {
  display: "block",
  opacity: 1,
  width: "100%",
  height: "100%",
  "object-fit": "cover",
};

export const ImageBlock: FunctionalComponent<ImageBlockProps> = ({
  data,
  src,
  alt,
  description,
  secondary,
}) => (
  <section part="root">
    <div part="image">
      <img src={data?.src || src} alt={data?.alt || alt} style={imgStyle} />
    </div>
    <div part="text">
      {(data?.description || description) && (
        <p part="description" {...html(data?.description)}>
          {description}
        </p>
      )}
      {(data?.secondary || secondary) && (
        <p part="secondary" {...html(data?.secondary)}>
          {secondary}
        </p>
      )}
    </div>
  </section>
);

register(ImageBlock, "w-image-block", ["data", "src", "alt"], { shadow: true });
