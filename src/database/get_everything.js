import { sql } from "../sql/sqlLoader.js"
import { database } from "./connect.js"


export async function get_everything() {
    try {
        let lists = await database.client.query(sql.get_everything)
        return {success:true, data:lists.rows}
    } catch(e) {
        return {success:false, error:e.details}
    }
}