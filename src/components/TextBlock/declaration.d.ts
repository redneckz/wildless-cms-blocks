namespace preact {
  namespace JSX {
    type TextBlockProps = import("./TextBlock").TextBlockProps;
    interface IntrinsicElements {
      "w-text-block": Omit<preact.JSX.HTMLAttributes, keyof TextBlockProps> & TextBlockProps;
    }
  }
}
