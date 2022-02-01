import { FunctionalComponent, ComponentChildren, JSX, h } from "preact";
import register from "preact-custom-element";
import "./style.scss";

export interface ImageBlockProps {
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
  src,
  alt,
  description,
  secondary,
}) => (
  <section part="root">
    <div part="image">
      <img src={src} alt={alt} style={imgStyle} />
    </div>
    <div part="text">
      {description && <p part="description">{description}</p>}
      {secondary && <p part="secondary">{secondary}</p>}
    </div>
  </section>
);

register(ImageBlock, "w-image-block", [], { shadow: true });
