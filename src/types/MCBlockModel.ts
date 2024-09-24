import { MCModelDisplay } from "./MCModelDisplay";
import { Axis, FaceName, Tuple, UV } from "./primitives";

export type MCBlockModel = {
    parent?: string;
    ambientocclusion?: boolean;
    display?: MCModelDisplay;
    textures?: Record<string, string>;
    elements?: MCModelElement[];
};

export type MCModelElement = {
    from: Tuple;
    to: Tuple;
    rotation?: {
        origin: Tuple;
        axis: Axis;
        angle: number;
        rescale?: boolean;
    };
    shade?: boolean;
    light_emission?: number;
    faces: Partial<Record<FaceName, MCModelFace>>;
};

export type MCModelFace = {
    uv?: UV;
    texture: string;
    /** @see {FaceName} */
    cullface?: string; //FaceName;
    rotation?: number;
    tintindex?: number;
};


