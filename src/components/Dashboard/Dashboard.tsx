import { FunctionalComponent, h } from "preact";
import "../TextBlock";
import style from "./style.scss";

export const Dashboard: FunctionalComponent = () => (
  <div class={style.dashboard}>
    <h1>Dashboard</h1>
    <section>
      <w-text-block primary="Annie Lindqvist" secondary="Software Engineer" />
    </section>
  </div>
);
