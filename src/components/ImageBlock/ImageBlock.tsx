import { FunctionalComponent, ComponentChildren, JSX, h, Fragment } from "preact";
import register from "preact-custom-element";
import { html } from "../../utils/html";
import "./style.scss";

export interface ImageBlockData {
  src: string;
  alt: string;
  description?: string;
  secondary?: string;
}

export type ImageBlockProps =
  | {
      data: ImageBlockData;
    }
  | {
      src: string;
      alt: string;
      description?: ComponentChildren;
      secondary?: ComponentChildren;
    };

// TODO Check out https://github.com/callstack/linaria to implement CSS-in-JS approach with zero runtime
const imgStyle: JSX.CSSProperties = {
  display: "block",
  opacity: 1,
  width: "100%",
  height: "100%",
  "object-fit": "cover",
};

export const ImageBlock: FunctionalComponent<ImageBlockProps> = (props) => (
  <section part="root">
    <div part="image">
      <img
        src={"data" in props ? props.data.src : props.src}
        alt={"data" in props ? props.data.alt : props.alt}
        style={imgStyle}
      />
    </div>
    <div part="text">
      {"data" in props ? (
        <>
          <p part="description" {...html(props.data.description)} />
          <p part="secondary" {...html(props.data.secondary)} />
        </>
      ) : (
        <>
          <p part="description">{props.description}</p>
          <p part="secondary">{props.secondary}</p>
        </>
      )}
    </div>
  </section>
);

register(ImageBlock, "w-image-block", ["data", "src", "alt"], { shadow: true });
