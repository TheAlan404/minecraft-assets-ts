import { MCBlockModel } from "./MCBlockModel";

export type MCItemModel = MCBlockModel & {
    gui_light?: string// "front" | "side";
    overrides?: {
        predicate: Record<string, number>;
        model: string;
    }[];
};
