import { FunctionalComponent, h } from "preact";
import "../TextBlock";
import "../ImageBlock";
import style from "./style.scss";

export const Dashboard: FunctionalComponent = () => (
  <div class={style.dashboard}>
    <h1>Dashboard</h1>
    <section>
      <h2>TextBlock</h2>
      <w-text-block>
        <span slot="primary">Annie Lindqvist</span>
        <span slot="secondary">Software Engineer</span>
      </w-text-block>
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
