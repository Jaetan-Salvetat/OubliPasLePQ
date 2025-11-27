export function send_new_list(id) {


    let data = {
        list_id:"LIST_ID",
        list_name:"LIST_NAME",
        created_at: "YYYY/MM/DD",
        updated_at: "YYYY/MM/DD",
        products: [
            { name:"PRODUCT_NAME", bought: "TRUE / FALSE"},
            { name:"PRODUCT_NAME", bought: "TRUE / FALSE"},
            { name:"PRODUCT_NAME", bought: "TRUE / FALSE"},
            { name:"PRODUCT_NAME", bought: "TRUE / FALSE"},
            { name:"PRODUCT_NAME", bought: "TRUE / FALSE"}
        ]
    }

    return data
}