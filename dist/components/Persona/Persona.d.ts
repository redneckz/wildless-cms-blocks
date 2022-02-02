import { FunctionalComponent } from "preact";
export interface PersonaData {
    photo: string;
    name: string;
    role: string;
}
export declare type PersonaProps = {
    data: PersonaData;
} | PersonaData;
export declare const Persona: FunctionalComponent<PersonaProps>;
