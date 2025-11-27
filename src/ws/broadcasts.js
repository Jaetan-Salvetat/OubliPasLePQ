


export function send_new_list(client) {

    data = { //new_list
        "list_id":"LIST_ID",
        "list_name":"LIST_NAME",
        "created_at": "YYYY/MM/DD",
        "updated_at": "YYYY/MM/DD",
        "products": [
            { "name":"PRODUCT_NAME", "bought": "TRUE / FALSE"},
            { "name":"PRODUCT_NAME", "bought": "TRUE / FALSE"},
            { "name":"PRODUCT_NAME", "bought": "TRUE / FALSE"},
            { "name":"PRODUCT_NAME", "bought": "TRUE / FALSE"},
            { "name":"PRODUCT_NAME", "bought": "TRUE / FALSE"}
        ]
    },



    client.send()
}