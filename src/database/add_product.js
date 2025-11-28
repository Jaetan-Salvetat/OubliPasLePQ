import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function AddProduct(name) {
    try {
        let id = await database.client.query(sql.add_product, [name])
        return {success:true, data:id.rows[0].id}
    } catch(e) {
        return {success:false, data:e.details}
    }
}