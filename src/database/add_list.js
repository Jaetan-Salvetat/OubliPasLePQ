import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function AddList(name) {
    try {
        let id = await database.client.query(sql.add_list, [name])
        return {success:true, data:id}
    } catch(e) {
        return {success:false, data:e.details}
    }
}