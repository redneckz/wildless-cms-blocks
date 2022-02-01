import { FunctionalComponent, ComponentChildren } from "preact";
import "./style.scss";
export interface TextBlockProps {
    primary?: ComponentChildren;
    secondary?: ComponentChildren;
}
export declare const TextBlock: FunctionalComponent<TextBlockProps>;
