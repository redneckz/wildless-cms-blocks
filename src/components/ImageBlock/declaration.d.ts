namespace preact {
  namespace JSX {
    type ImageBlockProps = import("./ImageBlock").ImageBlockProps;
    interface IntrinsicElements {
      "w-image-block": Omit<preact.JSX.HTMLAttributes, keyof ImageBlockProps> & ImageBlockProps;
    }
  }
}
