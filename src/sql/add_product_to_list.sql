INSERT INTO lists_products (list_id, product_id, bought, created_at, updated_at)
SELECT
    $1,                      
    p.id,                    
    false,                   
    NOW(),                   
    NOW()                    
FROM products p
WHERE p.name = $2
  AND NOT EXISTS (
      SELECT 1
      FROM lists_products lp
      WHERE lp.list_id = $1
        AND lp.product_id = p.id
  )
RETURNING *;