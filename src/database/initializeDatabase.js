import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function initdatabase() {
    try {
        await database.client.query(sql.create_products_table)
        await database.client.query(sql.create_lists_table)
        await database.client.query(sql.create_lists_products_table)
        await database.client.query(sql.add_done_row_to_lists_products)
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}