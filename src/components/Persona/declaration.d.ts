namespace preact {
  namespace JSX {
    type PersonaProps = import("./Persona").PersonaProps;
    interface IntrinsicElements {
      "w-persona": Omit<preact.JSX.HTMLAttributes, keyof PersonaProps | "data"> & PersonaProps;
    }
  }
}
