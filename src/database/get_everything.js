import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"


export async function get_everything() {
    let lists = await database.client.query(sql.get_everything)
    return lists.rows
}