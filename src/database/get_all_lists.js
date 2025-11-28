import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function get_all_lists() {
    let lists = await database.client.query(sql.get_all_lists)
    return lists.rows
}