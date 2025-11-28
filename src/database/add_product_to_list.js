import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function add_product_to_list(name) {
    try {
        await database.client.query(sql.add_product_to_list, [name])
        return {success:true, data:{}}
    } catch(e) {
        return {success:false, data:e.details}
    }
}