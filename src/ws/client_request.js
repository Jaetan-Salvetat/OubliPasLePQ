import { AddList } from "../database/add_list.js"
import { AddProduct } from "../database/add_product.js"
import { 
    send_new_list,
    send_new_product
} from "./broadcasts.js"
import { get_everything as getEverything } from "../database/get_everything.js"



async function create_list(ws, broadcast, request) {
    let result = await AddList(request.data.list_name)
    if(result.success == true) {
        let response = {
            header: {
                type:request.header.type,
                success:true
            },
        }
        ws.send(JSON.stringify(response))
        let data = await send_new_list(result.data)
        broadcast(data)
    } else {
        let response = {
            header: {
                type:request.header.type,
                success:false,
                error:result
            }
        }
        ws.send(JSON.stringify(response))
    }
}



async function create_product(ws, broadcast, request) {
    let result = await AddProduct(request.data.product_name)
    if(result.success == true) {
        let response = {
            header: {
                type:request.header.type,
                success:true
            },
        }
        ws.send(JSON.stringify(response))
        let data = await send_new_product(result.data)
        broadcast(data)
    } else {
        let response = {
            header: {
                type:request.header.type,
                success:false,
                error:result
            }
        }
        ws.send(JSON.stringify(response))
    }
}

async function get_everything(ws, broadcast, request) {
    let result = await getEverything()
    if(result.success == true) {
        let response = {
            header: {
                type:request.header.type,
                success:true
            },
            data:result.data
        }
        ws.send(JSON.stringify(response))
    } else {
        let response = {
            header: {
                type:request.header.type,
                success:false,
                error:result
            }
        }
        ws.send(JSON.stringify(response))
    }
}







export {
    create_list,
    create_product,
    get_everything
}