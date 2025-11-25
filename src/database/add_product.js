import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function AddProduct(name) {
    try {
        await database.client.query(sql.add_product, [name])
    } catch(e) {
        if(e.detail.includes("already exists")) {
            //console.log("n'existe pas")
            //return "already exists in our own websocket format"
        }
    }
}