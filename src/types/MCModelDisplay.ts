import { Tuple } from "./primitives";

export type MCModelDisplayPosition = "thirdperson_righthand" | "thirdperson_lefthand" | "firstperson_righthand" | "firstperson_lefthand" | "gui" | "head" | "ground" | "fixed";
export type MCModelDisplay = Partial<Record<MCModelDisplayPosition, MCModelDisplayEntry>>;
export type MCModelDisplayEntry = {
    rotation?: Tuple;
    translation?: Tuple;
    scale?: Tuple;
}
