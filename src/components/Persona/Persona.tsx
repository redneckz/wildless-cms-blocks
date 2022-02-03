import { FunctionalComponent, h } from "preact";
import register from "preact-custom-element";
import "../ImageBlock";

export interface PersonaData {
  photo: string;
  name: string;
  role: string;
}

export type PersonaProps =
  | {
      data: PersonaData;
    }
  | PersonaData;

export const Persona: FunctionalComponent<PersonaProps> = (props) => {
  return (
    <w-image-block
      data={
        "data" in props
          ? {
              src: props.data.photo,
              alt: props.data.name,
              description: props.data.name,
              secondary: props.data.role,
            }
          : {
              src: props.photo,
              alt: props.name,
              description: props.name,
              secondary: props.role,
            }
      }
    />
  );
};

register(Persona, "w-persona", ["data", "photo", "name", "role"]);
