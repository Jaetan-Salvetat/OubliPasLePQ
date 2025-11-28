import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function get_all_products_of_list() {
    let lists = await database.client.query(sql.get_all_products_of_list)
    return lists.rows
}