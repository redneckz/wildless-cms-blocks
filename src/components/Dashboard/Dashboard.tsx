import { FunctionalComponent, h } from "preact";
import { useMemo } from "preact/hooks";
import type { TextBlockData } from "../TextBlock";
import style from "./style.scss";

require("../TextBlock");
require("../ImageBlock");

export const Dashboard: FunctionalComponent = () => {
  const textBlockData: TextBlockData = useMemo(
    () => ({
      primary: "Annie Lindqvist",
      secondary: "Software Engineer",
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
    </div>
  );
};
