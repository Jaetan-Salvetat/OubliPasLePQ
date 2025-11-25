import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"

export async function DeleteProduct(name) {


    //get the product
    const result = await database.client.query(sql.select_from_products, [name])
    //if already exists
    if (result.rowCount == 1) {
        //delete all iteration in lists
        await database.client.query(sql.delete_product_from_all_lists, [result.rows[0].id])
    }
        //then simply delete it
    try {
        await database.client.query(sql.delete_product, [name])
    } catch(e) {
        console.error(e)
    }
}