SELECT
    l.id AS list_id,
    l.name AS list_name,
    TO_CHAR(l.created_at, 'YYYY/MM/DD') AS created_at,
    TO_CHAR(l.updated_at, 'YYYY/MM/DD') AS updated_at,

    COALESCE(
        json_agg(
            json_build_object(
                'name', p.name,
                'bought', lp.bought
            )
            ORDER BY p.name
        ) FILTER (WHERE p.id IS NOT NULL),
        '[]'
    ) AS products

FROM lists l
LEFT JOIN lists_products lp ON lp.list_id = l.id
LEFT JOIN products p ON p.id = lp.product_id

WHERE l.id = $1

GROUP BY l.id;