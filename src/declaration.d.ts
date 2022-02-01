declare module "*.css" {
  const mapping: Record<string, string>;
  export default mapping;
}

declare module "*.scss" {
  const mapping: Record<string, string>;
  export default mapping;
}

namespace preact {
  namespace JSX {
    interface HTMLAttributes {
      part?: string;
    }
  }
}
