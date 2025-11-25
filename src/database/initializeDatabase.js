import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function initdatabase() {
    try {
        await database.client.query(sql.create_products_table)
        await database.client.query(sql.create_lists_table)
        await database.client.query(sql.create_lists_products_table)
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}