CREATE TABLE IF NOT EXISTS lists_products (
    id SERIAL NOT NULL PRIMARY KEY,
    list_id SERIAL NOT NULL,
    product_id SERIAL NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,

    FOREIGN KEY(product_id) REFERENCES products(id),
    FOREIGN KEY(list_id) REFERENCES lists(id)
)