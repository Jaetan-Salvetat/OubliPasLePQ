import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";


// re create dirname because of module environment
const __dirname = path.dirname(fileURLToPath(import.meta.url));


//our table of sql actions
export let sql = {}


export function loadSQLDir() {

    for (const file of fs.readdirSync(__dirname)) {
        if(file.includes(".sql")) {
            sql[file.replace(".sql", "")] = fs.readFileSync(path.join(__dirname, file), "utf8")
        }
    }
}