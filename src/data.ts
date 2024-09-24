import { MCBlockModel } from "./types/MCBlockModel";
import { MCBlockState } from "./types/MCBlockState";
import { MCItemModel } from "./types/MCItemModel";

import _blockstates from "../data/blockstates.json";
import _particles from "../data/particles.json";
import _block from "../data/models/block.json";
import _item from "../data/models/item.json";
import _textures from "../data/textures.json";

const AssetsIndex = {
    blockstates: _blockstates as Record<string, MCBlockState>,
    particles: _particles as Record<string, { textures: string[] }>,
    textures: _textures as Record<string, string>,
    models: {
        block: _block as unknown as Record<string, MCBlockModel>,
        item: _item as unknown as Record<string, MCItemModel>,
    },
};

export {
    AssetsIndex
};
