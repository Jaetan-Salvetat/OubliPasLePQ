import { get_complete_list } from "../database/get_complete_list.js"
import { get_product } from "../database/get_product.js"

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

export async function send_new_product(id) {
    let createdProduct = await get_product(id)
    let response = {
        header: {
            type:"new_product",
        },
        data:createdProduct
    }

    return response
}