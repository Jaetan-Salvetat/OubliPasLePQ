import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function get_product(product_id) {
    let product = await database.client.query(sql.get_product, [product_id])
    return product.rows[0]
}