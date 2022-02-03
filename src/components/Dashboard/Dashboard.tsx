/* eslint-disable no-duplicate-imports */
import { FunctionalComponent, h } from "preact";
import { useMemo } from "preact/hooks";
import "../ImageBlock";
import "../Persona";
import type { PersonaData } from "../Persona";
import "../TextBlock";
import type { TextBlockData } from "../TextBlock";
import style from "./style.scss";


export const Dashboard: FunctionalComponent = () => {
  const textBlockData: TextBlockData = useMemo(
    () => ({
      primary: "Annie Lindqvist",
      secondary: "Software Engineer",
    }),
    []
  );
  const personaData: PersonaData = useMemo(
    () => ({
      photo:
        "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png",
      name: "Ted Randall",
      role: "Project Manager",
    }),
    []
  );
  return (
    <div class={style.dashboard}>
      <h1>Dashboard</h1>
      <section>
        <h2>TextBlock</h2>
        <w-text-block data={textBlockData} />
      </section>
      <section>
        <h2>ImageBlock</h2>
        <w-image-block
          src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png"
          alt="Annie Lindqvist"
        >
          <span slot="description">Annie Lindqvist</span>
          <span slot="secondary">Software Engineer</span>
        </w-image-block>
      </section>
      <section>
        <h2>Persona</h2>
        <w-persona data={personaData} />
      </section>
    </div>
  );
};
