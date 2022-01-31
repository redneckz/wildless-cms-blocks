namespace preact {
  namespace JSX {
    interface IntrinsicElements {
      "w-text-block": preact.JSX.HTMLAttributes & {
        // TODO Types duplication
        primary?: string;
        secondary?: string;
      };
    }
  }
}
