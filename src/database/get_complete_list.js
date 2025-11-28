import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function get_complete_list(list_id) {
    let list = await database.client.query(sql.get_complete_list, [list_id])
    return list.rows[0]
}