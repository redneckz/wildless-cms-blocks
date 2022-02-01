import { FunctionalComponent, ComponentChildren } from "preact";
import "./style.scss";
export interface ImageBlockProps {
    src: string;
    alt: string;
    description?: ComponentChildren;
    secondary?: ComponentChildren;
}
export declare const ImageBlock: FunctionalComponent<ImageBlockProps>;
