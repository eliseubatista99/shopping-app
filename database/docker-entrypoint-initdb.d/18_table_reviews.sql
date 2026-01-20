-- ==========================
-- REVIEWS (3 por produto, datas variadas)
-- ==========================
CREATE TABLE
  IF NOT EXISTS reviews (
    id VARCHAR(100) PRIMARY KEY,
    reviewer_id VARCHAR(100) NOT NULL REFERENCES users (id),
    product_id VARCHAR(100) NOT NULL REFERENCES products (id),
    score INTEGER NOT NULL,
    title TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    comment TEXT
  );

WITH
  new_values (id, reviewer_id, product_id, score, title, created_at, comment) AS (
    VALUES
      ('review-prod-001-1', 'user-0001', 'prod-001', 5, 'Great desk, solid build', TIMESTAMPTZ '2025-01-10 09:15:00+00', 'Exactly what I needed for my home office. Very sturdy.'),
      ('review-prod-001-2', 'user-0002', 'prod-001', 4, 'Nice but heavy', TIMESTAMPTZ '2025-02-02 11:20:00+00', 'Looks great, but it is quite heavy to move.'),
      ('review-prod-001-3', 'user-0003', 'prod-001', 4, 'Good value', TIMESTAMPTZ '2025-03-05 14:10:00+00', 'Solid desk for the price, only complaint is the finish.'),
      
      ('review-prod-002-1', 'user-0002', 'prod-002', 4, 'Clean design', TIMESTAMPTZ '2025-01-15 10:05:00+00', 'The white finish is nice. Could use better cable management.'),
      ('review-prod-002-2', 'user-0004', 'prod-002', 5, 'Perfect for my room', TIMESTAMPTZ '2025-02-18 16:40:00+00', 'Fits perfectly and looks clean.'),
      ('review-prod-002-3', 'user-0005', 'prod-002', 4, 'Solid desk', TIMESTAMPTZ '2025-03-22 12:30:00+00', 'Stable and well built, but assembly took time.'),
      
      ('review-prod-003-1', 'user-0003', 'prod-003', 5, 'Worth every penny', TIMESTAMPTZ '2025-01-20 09:55:00+00', 'The electric lift works smoothly and is very quiet.'),
      ('review-prod-003-2', 'user-0006', 'prod-003', 5, 'Excellent desk', TIMESTAMPTZ '2025-02-25 14:00:00+00', 'Great for standing work.'),
      ('review-prod-003-3', 'user-0007', 'prod-003', 4, 'Almost perfect', TIMESTAMPTZ '2025-03-28 18:10:00+00', 'Only issue is the cable management.'),
      
      ('review-prod-004-1', 'user-0004', 'prod-004', 3, 'Good but manual', TIMESTAMPTZ '2025-01-25 11:05:00+00', 'Good desk, but manual adjustment is slower than I expected.'),
      ('review-prod-004-2', 'user-0005', 'prod-004', 4, 'Nice desk', TIMESTAMPTZ '2025-02-28 13:50:00+00', 'Solid and stable, just wish it was electric.'),
      ('review-prod-004-3', 'user-0001', 'prod-004', 4, 'Value for money', TIMESTAMPTZ '2025-03-30 09:25:00+00', 'Good price for a standing desk.'),
      
      ('review-prod-005-1', 'user-0006', 'prod-005', 5, 'Perfect for gaming', TIMESTAMPTZ '2025-01-30 19:05:00+00', 'Very comfortable and looks awesome.'),
      ('review-prod-005-2', 'user-0007', 'prod-005', 5, 'Super comfy', TIMESTAMPTZ '2025-02-06 12:15:00+00', 'Great support and build quality.'),
      ('review-prod-005-3', 'user-0002', 'prod-005', 4, 'Great chair', TIMESTAMPTZ '2025-03-05 15:20:00+00', 'Comfortable, but a bit firm at first.'),
      
      ('review-prod-006-1', 'user-0003', 'prod-006', 4, 'Comfortable chair', TIMESTAMPTZ '2025-01-08 10:10:00+00', 'Nice chair, but the lumbar support could be better.'),
      ('review-prod-006-2', 'user-0004', 'prod-006', 4, 'Good value', TIMESTAMPTZ '2025-02-12 17:30:00+00', 'Comfortable and looks good.'),
      ('review-prod-006-3', 'user-0005', 'prod-006', 5, 'Great color', TIMESTAMPTZ '2025-03-16 09:40:00+00', 'The blue/black looks amazing and it is comfy.'),
      
      ('review-prod-007-1', 'user-0001', 'prod-007', 4, 'Breathable mesh', TIMESTAMPTZ '2025-01-12 13:05:00+00', 'Great for long hours. The mesh is very breathable.'),
      ('review-prod-007-2', 'user-0006', 'prod-007', 4, 'Good chair', TIMESTAMPTZ '2025-02-19 09:50:00+00', 'Comfortable, but the seat is a bit firm.'),
      ('review-prod-007-3', 'user-0007', 'prod-007', 3, 'Ok chair', TIMESTAMPTZ '2025-03-21 11:45:00+00', 'Decent but expected more for the price.'),
      
      ('review-prod-008-1', 'user-0002', 'prod-008', 5, 'Premium feel', TIMESTAMPTZ '2025-01-18 10:55:00+00', 'Leather feels premium and it is very comfortable.'),
      ('review-prod-008-2', 'user-0003', 'prod-008', 5, 'Best chair I bought', TIMESTAMPTZ '2025-02-23 14:25:00+00', 'Super comfy and looks great.'),
      ('review-prod-008-3', 'user-0004', 'prod-008', 4, 'Very good', TIMESTAMPTZ '2025-03-26 16:35:00+00', 'Comfortable but a bit heavy.'),
      
      ('review-prod-009-1', 'user-0005', 'prod-009', 3, 'Decent lamp', TIMESTAMPTZ '2025-01-03 18:20:00+00', 'Good brightness but the base is a bit unstable.'),
      ('review-prod-009-2', 'user-0006', 'prod-009', 4, 'Nice lamp', TIMESTAMPTZ '2025-02-08 10:30:00+00', 'Bright enough and easy to use.'),
      ('review-prod-009-3', 'user-0007', 'prod-009', 4, 'Good for price', TIMESTAMPTZ '2025-03-10 12:40:00+00', 'Good lamp for the money.'),
      
      ('review-prod-010-1', 'user-0001', 'prod-010', 4, 'Simple and useful', TIMESTAMPTZ '2025-01-07 12:45:00+00', 'Good lamp for the price. USB power is convenient.'),
      ('review-prod-010-2', 'user-0002', 'prod-010', 4, 'Nice lamp', TIMESTAMPTZ '2025-02-11 15:05:00+00', 'Works well, just wish it was brighter.'),
      ('review-prod-010-3', 'user-0003', 'prod-010', 3, 'Ok lamp', TIMESTAMPTZ '2025-03-15 17:15:00+00', 'Decent but not very durable.'),
      
      ('review-prod-011-1', 'user-0004', 'prod-011', 5, 'Best mouse I’ve used', TIMESTAMPTZ '2025-01-21 11:55:00+00', 'Very ergonomic and responsive.'),
      ('review-prod-011-2', 'user-0005', 'prod-011', 4, 'Great mouse', TIMESTAMPTZ '2025-02-24 13:20:00+00', 'Comfortable and accurate.'),
      ('review-prod-011-3', 'user-0006', 'prod-011', 4, 'Good value', TIMESTAMPTZ '2025-03-27 10:05:00+00', 'Nice mouse, but a bit small for my hand.'),
      
      ('review-prod-012-1', 'user-0007', 'prod-012', 4, 'RGB is fun', TIMESTAMPTZ '2025-01-02 09:00:00+00', 'Great mouse, the RGB looks cool.'),
      ('review-prod-012-2', 'user-0001', 'prod-012', 5, 'Awesome mouse', TIMESTAMPTZ '2025-02-05 10:10:00+00', 'Comfortable and fast.'),
      ('review-prod-012-3', 'user-0002', 'prod-012', 4, 'Good mouse', TIMESTAMPTZ '2025-03-09 14:50:00+00', 'Nice performance, RGB is a bonus.'),
      
      ('review-prod-013-1', 'user-0003', 'prod-013', 5, 'Excellent keyboard', TIMESTAMPTZ '2025-01-04 14:25:00+00', 'Typing feels great and the switches are smooth.'),
      ('review-prod-013-2', 'user-0004', 'prod-013', 5, 'Very responsive', TIMESTAMPTZ '2025-02-07 16:40:00+00', 'Great build and feel.'),
      ('review-prod-013-3', 'user-0005', 'prod-013', 4, 'Good keyboard', TIMESTAMPTZ '2025-03-11 12:30:00+00', 'Great but a bit noisy.'),
      
      ('review-prod-014-1', 'user-0006', 'prod-014', 4, 'Good keyboard', TIMESTAMPTZ '2025-01-06 13:30:00+00', 'Nice keyboard but a bit loud for my taste.'),
      ('review-prod-014-2', 'user-0007', 'prod-014', 5, 'Love it', TIMESTAMPTZ '2025-02-09 15:20:00+00', 'Great typing feel and good build.'),
      ('review-prod-014-3', 'user-0001', 'prod-014', 4, 'Very good', TIMESTAMPTZ '2025-03-13 10:40:00+00', 'Good keyboard, works great for gaming.'),
      
      ('review-prod-015-1', 'user-0002', 'prod-015', 5, 'Amazing sound', TIMESTAMPTZ '2025-01-09 12:10:00+00', 'Noise cancelling works very well.'),
      ('review-prod-015-2', 'user-0003', 'prod-015', 5, 'Best headphones', TIMESTAMPTZ '2025-02-13 18:00:00+00', 'Super comfortable and sound is great.'),
      ('review-prod-015-3', 'user-0004', 'prod-015', 4, 'Great but pricey', TIMESTAMPTZ '2025-03-17 14:45:00+00', 'Excellent sound, just a bit expensive.'),
      
      ('review-prod-016-1', 'user-0005', 'prod-016', 4, 'Good case', TIMESTAMPTZ '2025-01-11 10:50:00+00', 'Fits well and feels durable.'),
      ('review-prod-016-2', 'user-0006', 'prod-016', 3, 'Ok case', TIMESTAMPTZ '2025-02-14 12:20:00+00', 'Decent but the material feels cheap.'),
      ('review-prod-016-3', 'user-0007', 'prod-016', 4, 'Nice case', TIMESTAMPTZ '2025-03-18 09:15:00+00', 'Good fit and soft.'),
      
      ('review-prod-017-1', 'user-0001', 'prod-017', 5, 'Premium case', TIMESTAMPTZ '2025-01-13 15:05:00+00', 'Leather feels great and it looks stylish.'),
      ('review-prod-017-2', 'user-0002', 'prod-017', 4, 'Good quality', TIMESTAMPTZ '2025-02-16 11:30:00+00', 'Nice case, a bit pricey though.'),
      ('review-prod-017-3', 'user-0003', 'prod-017', 5, 'Perfect fit', TIMESTAMPTZ '2025-03-20 13:40:00+00', 'Looks great and feels durable.'),
      
      ('review-prod-018-1', 'user-0004', 'prod-018', 4, 'Nice sleeve', TIMESTAMPTZ '2025-01-17 09:40:00+00', 'Good protection and fits my laptop perfectly.'),
      ('review-prod-018-2', 'user-0005', 'prod-018', 4, 'Good sleeve', TIMESTAMPTZ '2025-02-20 14:10:00+00', 'Good quality, but a bit bulky.'),
      ('review-prod-018-3', 'user-0006', 'prod-018', 5, 'Great sleeve', TIMESTAMPTZ '2025-03-24 16:25:00+00', 'Perfect size and very durable.'),
      
      ('review-prod-019-1', 'user-0007', 'prod-019', 4, 'Great sleeve', TIMESTAMPTZ '2025-01-19 12:55:00+00', 'Slightly larger but still good quality.'),
      ('review-prod-019-2', 'user-0001', 'prod-019', 5, 'Perfect fit', TIMESTAMPTZ '2025-02-22 10:15:00+00', 'Fits my 15-inch laptop perfectly.'),
      ('review-prod-019-3', 'user-0002', 'prod-019', 4, 'Good value', TIMESTAMPTZ '2025-03-26 11:45:00+00', 'Good sleeve for the price.'),
      
      ('review-prod-020-1', 'user-0003', 'prod-020', 5, 'Excellent speaker', TIMESTAMPTZ '2025-01-21 18:05:00+00', 'Sound is loud and clear, great battery life.'),
      ('review-prod-020-2', 'user-0004', 'prod-020', 4, 'Good speaker', TIMESTAMPTZ '2025-02-24 09:35:00+00', 'Very good sound, but a bit heavy.'),
      ('review-prod-020-3', 'user-0005', 'prod-020', 5, 'Best portable speaker', TIMESTAMPTZ '2025-03-28 13:10:00+00', 'Great for outdoor use.'),
      
      ('review-prod-021-1', 'user-0006', 'prod-021', 4, 'Good waterproof speaker', TIMESTAMPTZ '2025-01-23 10:05:00+00', 'Works well near water, good sound.'),
      ('review-prod-021-2', 'user-0007', 'prod-021', 5, 'Amazing speaker', TIMESTAMPTZ '2025-02-26 14:50:00+00', 'Perfect for pool parties.'),
      ('review-prod-021-3', 'user-0001', 'prod-021', 4, 'Very good', TIMESTAMPTZ '2025-03-30 15:30:00+00', 'Great sound but a bit pricey.'),
      
      ('review-prod-022-1', 'user-0002', 'prod-022', 4, 'Good coffee maker', TIMESTAMPTZ '2025-01-24 11:15:00+00', 'Makes good coffee, easy to clean.'),
      ('review-prod-022-2', 'user-0003', 'prod-022', 5, 'Love it', TIMESTAMPTZ '2025-02-27 13:25:00+00', 'Great taste and easy to use.'),
      ('review-prod-022-3', 'user-0004', 'prod-022', 4, 'Very good', TIMESTAMPTZ '2025-03-31 16:05:00+00', 'Solid machine, good price.'),
      
      ('review-prod-023-1', 'user-0005', 'prod-023', 5, 'Best air fryer', TIMESTAMPTZ '2025-01-26 09:35:00+00', 'Crisps food perfectly, very easy to use.'),
      ('review-prod-023-2', 'user-0006', 'prod-023', 4, 'Great fryer', TIMESTAMPTZ '2025-02-28 12:20:00+00', 'Good results, just a bit loud.'),
      ('review-prod-023-3', 'user-0007', 'prod-023', 5, 'Amazing', TIMESTAMPTZ '2025-03-29 18:45:00+00', 'Cooks fast and tastes great.'),
      
      ('review-prod-024-1', 'user-0001', 'prod-024', 4, 'Nice mat', TIMESTAMPTZ '2025-01-27 14:05:00+00', 'Good grip and thickness, a bit slippery on wood.'),
      ('review-prod-024-2', 'user-0002', 'prod-024', 4, 'Good mat', TIMESTAMPTZ '2025-02-02 15:20:00+00', 'Comfortable and easy to clean.'),
      ('review-prod-024-3', 'user-0003', 'prod-024', 5, 'Perfect', TIMESTAMPTZ '2025-03-01 10:40:00+00', 'Great mat for yoga.'),
      
      ('review-prod-025-1', 'user-0004', 'prod-025', 4, 'Comfortable running shoes', TIMESTAMPTZ '2025-01-29 12:30:00+00', 'Good cushioning, true to size.'),
      ('review-prod-025-2', 'user-0005', 'prod-025', 3, 'Average shoes', TIMESTAMPTZ '2025-02-03 17:00:00+00', 'Comfort is ok, but not great for long runs.'),
      ('review-prod-025-3', 'user-0006', 'prod-025', 4, 'Good value', TIMESTAMPTZ '2025-03-04 09:10:00+00', 'Nice shoes for the price.'),
      
      ('review-prod-026-1', 'user-0007', 'prod-026', 5, 'Great backpack', TIMESTAMPTZ '2025-01-31 08:55:00+00', 'Very durable and comfortable to carry.'),
      ('review-prod-026-2', 'user-0001', 'prod-026', 4, 'Good backpack', TIMESTAMPTZ '2025-02-05 11:40:00+00', 'Spacious and sturdy.'),
      ('review-prod-026-3', 'user-0002', 'prod-026', 5, 'Perfect for travel', TIMESTAMPTZ '2025-03-06 13:50:00+00', 'Great compartments and comfortable straps.'),
      
      ('review-prod-027-1', 'user-0003', 'prod-027', 4, 'Keeps water cold', TIMESTAMPTZ '2025-01-02 09:25:00+00', 'Good insulation and easy to clean.'),
      ('review-prod-027-2', 'user-0004', 'prod-027', 4, 'Nice bottle', TIMESTAMPTZ '2025-02-06 12:30:00+00', 'Good size and keeps water cold.'),
      ('review-prod-027-3', 'user-0005', 'prod-027', 5, 'Best bottle', TIMESTAMPTZ '2025-03-07 15:15:00+00', 'Very good insulation and easy to carry.'),
      
      ('review-prod-028-1', 'user-0006', 'prod-028', 5, 'Great sunglasses', TIMESTAMPTZ '2025-01-04 13:05:00+00', 'Very good quality and looks great.'),
      ('review-prod-028-2', 'user-0007', 'prod-028', 4, 'Nice sunglasses', TIMESTAMPTZ '2025-02-08 14:20:00+00', 'Good fit and looks nice.'),
      ('review-prod-028-3', 'user-0001', 'prod-028', 4, 'Good value', TIMESTAMPTZ '2025-03-09 11:35:00+00', 'Great sunglasses for the price.'),
      
      ('review-prod-029-1', 'user-0002', 'prod-029', 4, 'Good smartwatch', TIMESTAMPTZ '2025-01-06 10:45:00+00', 'Lots of features, battery lasts long.'),
      ('review-prod-029-2', 'user-0003', 'prod-029', 5, 'Very good', TIMESTAMPTZ '2025-02-10 16:00:00+00', 'Great value and features.'),
      ('review-prod-029-3', 'user-0004', 'prod-029', 4, 'Nice watch', TIMESTAMPTZ '2025-03-12 12:10:00+00', 'Works well, just a bit bulky.'),
      
      ('review-prod-030-1', 'user-0005', 'prod-030', 3, 'Nice poster', TIMESTAMPTZ '2025-01-08 11:20:00+00', 'Looks good, but the paper quality could be better.'),
      ('review-prod-030-2', 'user-0006', 'prod-030', 4, 'Good art', TIMESTAMPTZ '2025-02-12 13:40:00+00', 'Looks great on the wall.'),
      ('review-prod-030-3', 'user-0007', 'prod-030', 4, 'Good poster', TIMESTAMPTZ '2025-03-14 15:50:00+00', 'Nice design, good price.')
  )
INSERT INTO
  reviews (id, reviewer_id, product_id, score, title, created_at, comment)
SELECT
  *
FROM
  new_values
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      reviews a
    WHERE
      a.id = new_values.id
  );
