import { FunctionalComponent, h } from "preact";
import register from "preact-custom-element";

require("../ImageBlock");

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

export const Persona: FunctionalComponent<PersonaProps> = (props) =>
  "data" in props ? (
    <w-image-block src={props.data.photo} alt={props.data.name}>
      <span slot="description">{props.data.name}</span>
      <span slot="secondary">{props.data.role}</span>
    </w-image-block>
  ) : (
    <w-image-block src={props.photo} alt={props.name}>
      <span slot="description">{props.name}</span>
      <span slot="secondary">{props.role}</span>
    </w-image-block>
  );

register(Persona, "w-persona", ["data", "photo", "name", "role"]);
