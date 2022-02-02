import { FunctionalComponent, ComponentChildren } from "preact";
import "./style.scss";
export interface ImageBlockData {
    src: string;
    alt: string;
    description?: string;
    secondary?: string;
}
export declare type ImageBlockProps = {
    data: ImageBlockData;
} | {
    src: string;
    alt: string;
    description?: ComponentChildren;
    secondary?: ComponentChildren;
};
export declare const ImageBlock: FunctionalComponent<ImageBlockProps>;
