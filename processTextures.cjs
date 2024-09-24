const fs = require("fs");
const p = require("path");

const root = "./data/textures";

let o = {};

const processDir = (base, path) => {
    let items = fs.readdirSync(p.join(base, path), { withFileTypes: true });

    for(let item of items) {
        if(item.isDirectory()) {
            processDir(base, p.join(path, item.name));
        } else {
            const ident = `minecraft:${p.join(path, item.name.replace(".png", ""))}`.replace(/\\/g, "/");

            console.log(ident);
            
            let buf = fs.readFileSync(p.join(base, path, item.name)).toString("base64");
            o[ident] = `data:image/png;base64,${buf}`;
        }
    }
};

processDir(root, "");

fs.writeFileSync("./data/textures.json", JSON.stringify(o));
fs.rmSync("./data/textures", { recursive: true });
