SELECT 
  l.id,
  l.name,
  l.created_at,
  l.updated_at,
  COALESCE(
    json_agg(
      json_build_object(
        'name', p.name,
        'bought', lp.bought
      )
      ORDER BY p.name  -- tri dans postgres
    ) FILTER (WHERE p.id IS NOT NULL),
    '[]'
  ) AS products
FROM lists l
LEFT JOIN lists_products lp ON lp.list_id = l.id
LEFT JOIN products p ON p.id = lp.product_id
GROUP BY l.id
ORDER BY l.created_at DESC;