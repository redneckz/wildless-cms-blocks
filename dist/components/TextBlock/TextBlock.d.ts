import { ComponentChildren, FunctionalComponent } from "preact";
import "./style.scss";
export interface TextBlockData {
    primary?: string;
    secondary?: string;
}
export interface TextBlockProps {
    data?: TextBlockData;
    primary?: ComponentChildren;
    secondary?: ComponentChildren;
}
export declare const TextBlock: FunctionalComponent<TextBlockProps>;
