import { get_complete_list } from "../database/get_complete_list.js"

export async function send_new_list(id) {
    let createdList = await get_complete_list(id)
    let response = {
        header: {
            type:"new_list",
        },
        data:createdList
    }

    return response
}