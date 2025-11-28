import { AddList } from "../database/add_list.js"
import { send_new_list } from "./broadcasts.js"



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



function create_product() {

}





export {
    create_list,
    create_product
}