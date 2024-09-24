const fs = require("fs");
const { dirname, join } = require("path")

const convertDir = (dir, to) => {
    let items = fs.readdirSync(dir);

    let o = {};

    for(let item of items) {
        //console.log(">>> " + item);
        let name = item.replace(".json", "");

        o[name] = JSON.parse(fs.readFileSync(dir + "/" + item));
    }

    if(!fs.existsSync(dirname(to)))
        fs.mkdirSync(dirname(to), { recursive: true });
    fs.writeFileSync(to + ".json", JSON.stringify(o, 2));
};

let root = "./_minecraft/1.20.1/";
let assets = "assets/minecraft";
let data = "data/minecraft";

const jsonDir = (path, to) => {
    if(fs.existsSync(path)) {
        convertDir(path, to);
        //fs.rm(path, { recursive: true }, () => {});
    }
};

const processDir = (outBase, inBase, path) => {
    console.log("> " + path);

    let items = fs.readdirSync(join(inBase, path), { withFileTypes: true });

    if(items.every(x => x.isFile() && x.name.endsWith(".json")))
        return jsonDir(join(inBase, path), join(outBase, path));

    for(let item of items) {
        if(item.isDirectory()) {
            processDir(outBase, inBase, join(path, item.name));
        } else {
            let to = join(outBase, path, item.name);
            if(!fs.existsSync(dirname(to)))
                fs.mkdirSync(dirname(to), { recursive: true });
            fs.copyFileSync(join(inBase, path, item.name), to);
        }
    }
};

processDir("./data", "./_minecraft/1.20.1/assets/minecraft", ".");

console.log("Cleaning up...");
fs.rm("./versions", { recursive: true }, () => console.log("1/2"));
fs.rm("./_minecraft", { recursive: true }, () => console.log("Done!"));
