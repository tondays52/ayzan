// ==========================================================================
// AYZAN SKINCARE (ayzan.me) - E-Commerce Engine & Bangladesh Payment System
// ==========================================================================

// Bestselling Skincare Database in Bangladesh (Aggregated from Shajgoj, SkincareBD, Beauty Booth)
export const PRODUCTS = [
  {
    id: 'boj-relief-sun',
    name: 'Beauty of Joseon Relief Sun: Rice + Probiotics SPF 50+ PA++++',
    brand: 'Beauty of Joseon',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1350,
    volume: '50ml',
    rating: 4.9,
    reviews: 1420,
    badge: '#1 Bestseller in BD',
    concerns: ['Sun Protection', 'Glow', 'Barrier'],
    bgTone: 'sand',
    img: 'https://beautyofjoseon.com/cdn/shop/files/05_0805__-_ROW_654a8e4e-1d53-4dca-a3a0-c0c2f55e3ca0.jpg?v=1787196328',
    tagline: 'Organic Rice Extract (30%) + Fermented Grain Complex',
    description: 'The undisputed #1 sunscreen in Bangladesh. A lightweight, creamy organic chemical sunscreen that feels comfortable on the skin without leaving any white cast or stickiness, even in Dhaka’s humid summer.',
    keyIngredients: '30% Rice Extract, Grain Fermented Extracts (Probiotics), Niacinamide, Vitamin E',
    howToUse: 'Apply generously as the final step of your morning skincare routine, 15 minutes before sun exposure.'
  },
  {
    id: 'skin1004-hyalu-cica-sun',
    name: 'SKIN1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF 50+',
    brand: 'SKIN1004',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1450,
    volume: '50ml',
    rating: 4.9,
    reviews: 980,
    badge: 'Ultra-Light Gel',
    concerns: ['Sun Protection', 'Hydration', 'Soothing'],
    bgTone: 'olive',
    img: 'https://www.skin1004.com/cdn/shop/files/skin1004-sun-hyalu-cica-water-fit-sun-serum-spf50-pa-40739561865462.png?v=1776762422',
    tagline: 'Pure Madagascar Centella Asiatica + Hyaluronic Acid',
    description: 'A non-nano chemical sun serum that hydrates and soothes irritated skin while blocking harmful UV rays. Featherlight texture that instantly melts like water without any greasy residue.',
    keyIngredients: 'Centella Asiatica Extract, Hyaluronic Acid (Hyalu-Cica Formula), Niacinamide, Birch Juice',
    howToUse: 'Pump an appropriate amount and spread evenly over face and neck. Reapply every 2–3 hours during outdoor activities.'
  },
  {
    id: 'cosrx-snail-96-essence',
    name: 'COSRX Advanced Snail 96 Mucin Power Essence',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1450,
    volume: '100ml',
    rating: 4.8,
    reviews: 2150,
    badge: 'Holy Grail Repair',
    concerns: ['Barrier Repair', 'Acne Scars', 'Hydration'],
    bgTone: 'peach',
    img: 'https://cdn.shopify.com/s/files/1/0513/3775/6828/files/2022-08-29_100735.png?v=1661735932',
    tagline: '96.3% Filtered Snail Secretion Filtrate',
    description: 'A cult-favorite essence that repairs damaged skin barriers, fades dark acne spots, and infuses intense moisture into dehydrated skin without clogging pores.',
    keyIngredients: '96.3% Snail Secretion Filtrate, Betaine, Sodium Hyaluronate, Allantoin, Panthenol',
    howToUse: 'After cleansing and toning, gently pat a small amount onto your entire face until absorbed. Follow with moisturizer.'
  },
  {
    id: 'the-ordinary-niacinamide',
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    brand: 'The Ordinary',
    origin: 'Canada 🇨🇦',
    category: 'serums',
    price: 1150,
    volume: '30ml',
    rating: 4.7,
    reviews: 3200,
    badge: 'Oil & Pore Control',
    concerns: ['Pores & Oil', 'Blemishes', 'Brightening'],
    bgTone: 'rose',
    img: 'https://choicelegacy.com.bd/cdn/shop/files/rdn-niacinamide-10pct-zinc-1pct-30ml.png?v=1775551680',
    tagline: 'High-Strength Vitamin and Mineral Blemish Formula',
    description: 'Formulated to target sebum overproduction, visibly tighten enlarged pores, and smooth uneven skin texture caused by environmental stressors in Bangladesh.',
    keyIngredients: '10% Niacinamide (Vitamin B3), 1% Zinc PCA, Tamarindus Indica Seed Gum',
    howToUse: 'Apply a few drops across the face morning and evening before heavier creams. Avoid mixing with pure Vitamin C in the same routine.'
  },
  {
    id: 'axis-y-dark-spot-serum',
    name: 'AXIS-Y Dark Spot Correcting Glow Serum',
    brand: 'AXIS-Y',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1350,
    volume: '50ml',
    rating: 4.8,
    reviews: 1120,
    badge: 'Trending Glow',
    concerns: ['Dark Spots', 'Post-Acne', 'Radiance'],
    bgTone: 'amber',
    img: 'https://www.axis-y.com/cdn/shop/files/9ff5d79afa157b3862577adfcdc9caa4.png?v=1781504891',
    tagline: '5% Niacinamide + Rice Bran + Plant-Derived Squalane',
    description: 'Specifically engineered for climate-stressed, hyperpigmented skin. Fades post-breakout dark marks and sunspots while giving skin a natural, translucent Korean glass glow.',
    keyIngredients: '5% Niacinamide, Rice Bran Extract, Plant Squalane, Sea Buckthorn, Papaya Extract',
    howToUse: 'Apply a moderate amount over the entire face or spot-treat areas with hyperpigmentation. Suitable for both AM and PM.'
  },
  {
    id: 'boj-glow-serum-propolis',
    name: 'Beauty of Joseon Glow Serum: Propolis + Niacinamide',
    brand: 'Beauty of Joseon',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1290,
    volume: '30ml',
    rating: 4.8,
    reviews: 870,
    badge: 'Honey Glass Glow',
    concerns: ['Acne Calm', 'Glow', 'Hydration'],
    bgTone: 'sand',
    img: 'https://beautyofjoseon.com/cdn/shop/files/glow-serum-propolis-niacinamide-1-front.webp?v=1770278801',
    tagline: '60% Propolis Extract + 2% Niacinamide + 0.5% BHA',
    description: 'Enriched with Hanbang (traditional Korean herbal medicine) ingredients to combat active inflammation, soothe acne flare-ups, and restore radiant elasticity.',
    keyIngredients: '60% Propolis Extract, 2% Niacinamide, Betaine Salicylate (BHA), Tamanu Oil',
    howToUse: 'Dispense 2–3 drops onto clean skin and pat gently. Best layered under a barrier moisturizer.'
  },
  {
    id: 'cosrx-good-morning-cleanser',
    name: 'COSRX Low pH Good Morning Gel Cleanser',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'cleansers',
    price: 990,
    volume: '150ml',
    rating: 4.8,
    reviews: 1890,
    badge: 'Daily Must-Have',
    concerns: ['Gentle Cleanse', 'pH Balanced', 'Acne Care'],
    bgTone: 'clay-tone',
    img: 'https://www.cosrx.com/cdn/shop/files/low-ph-good-morning-gel-cleanser-cosrx-official-1_2048x.jpg?v=1768785801',
    tagline: 'Mild Sub-acidic Cleanser with Natural BHA & Tea Tree Oil',
    description: 'A gentle, pH-balanced gel wash that clears impurities, excess oil, and dead skin cells without stripping your moisture barrier. Ideal for morning and nighttime routines.',
    keyIngredients: 'Tea Tree Leaf Oil, Betaine Salicylate (Natural BHA), Saccharomyces Ferment, Allantoin',
    howToUse: 'Gently massage a pea-sized amount onto wet face. Lather with warm water and rinse clean.'
  },
  {
    id: 'simple-refreshing-wash',
    name: 'Simple Kind to Skin Refreshing Facial Wash Gel',
    brand: 'Simple',
    origin: 'United Kingdom 🇬🇧',
    category: 'cleansers',
    price: 690,
    volume: '150ml',
    rating: 4.7,
    reviews: 2450,
    badge: 'Dermatologist Approved',
    concerns: ['Sensitive Skin', 'Barrier Friendly', '100% Soap-Free'],
    bgTone: 'olive',
    img: 'https://www.simpleskincare.in/cdn/shop/files/27278-H_8909106061781_1080x1440.jpg?v=1769510079',
    tagline: '100% Soap-Free Formulation with Pro-Vitamin B5 & E',
    description: 'The beloved budget-friendly staple across Bangladesh for sensitive and acne-prone skin. Thoroughly washes away dust and pollution without leaving skin feeling tight or dry.',
    keyIngredients: 'Triple Purified Water, Pro-Vitamin B5 (Panthenol), Vitamin E, Zero Artificial Perfume/Color',
    howToUse: 'Wet face with water, squeeze a small amount into hands and work into a gentle lather. Rinse thoroughly.'
  },
  {
    id: 'cosrx-snail-92-cream',
    name: 'COSRX Advanced Snail 92 All in One Cream',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'moisturizers',
    price: 1650,
    volume: '100g',
    rating: 4.8,
    reviews: 1380,
    badge: 'Plump & Lock',
    concerns: ['Barrier Shield', 'Deep Moisture', 'Anti-Aging'],
    bgTone: 'peach',
    img: 'https://www.cosrx.com/cdn/shop/files/SnailCream50g_800x1067_485b8794-f831-48fe-b9c6-4ad940eed4dc_2048x.jpg?v=1704429396',
    tagline: '92% Snail Secretion Filtrate Moisture Gel Cream',
    description: 'A smooth gel-type cream that glides over skin to build a moisture barrier that plumps, hydrates, and soothes irritated skin without feeling heavy in tropical weather.',
    keyIngredients: '92% Snail Secretion Filtrate, 1,000 ppm Sodium Hyaluronate, Allantoin, Betaine, Panthenol',
    howToUse: 'Gently apply a proper amount to the face after essence/serum, avoiding eye and mouth areas. Tap gently to absorb.'
  },
  {
    id: 'anua-heartleaf-77-toner',
    name: 'Anua Heartleaf 77% Soothing Toner',
    brand: 'Anua',
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1890,
    volume: '250ml',
    rating: 4.9,
    reviews: 1640,
    badge: 'Viral Sensation',
    concerns: ['Redness Calm', 'Acne Soothing', 'pH Balance'],
    bgTone: 'olive',
    img: 'https://cdn.shopify.com/s/files/1/0705/5140/4770/files/ANUA_Heartleaf_77_Soothing_Toner_250ml.webp?v=1776384422',
    tagline: '77% Houttuynia Cordata (Heartleaf) Extract from Korea',
    description: 'Korea’s award-winning #1 soothing toner. Calms irritation, balances oil-water levels, and reduces redness from sun exposure and active breakouts.',
    keyIngredients: '77% Heartleaf Extract, Centella Asiatica, Panthenol, Chamomile, Apple Fruit Extract',
    howToUse: 'After cleansing, pour onto cotton pad or palms and gently press into skin. Can be layered 2–3 times.'
  },
  {
    id: 'im-from-rice-toner',
    name: "I'm From Rice Toner",
    brand: "I'm From",
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1750,
    volume: '150ml',
    rating: 4.9,
    reviews: 930,
    badge: 'Milky Radiance',
    concerns: ['Brightening', 'Deep Hydration', 'Barrier'],
    bgTone: 'sand',
    img: 'https://sokoglam.com/cdn/shop/files/I_m-From-Rice-Toner.jpg?v=1752798327',
    tagline: '77.78% Yeoju Organic Rice Extract',
    description: 'A two-phase milky toner that forms a protective barrier over the skin to prevent moisture loss, eliminate dead skin cells, and illuminate dull complexions.',
    keyIngredients: '77.78% Yeoju Rice Extract, Niacinamide, Purslane Extract, Japanese Elm Bark Extract',
    howToUse: 'Shake well before use to blend the water and emulsion layers. Pat into clean skin after cleansing.'
  },
  {
    id: 'skin1004-centella-soothing-cream',
    name: 'SKIN1004 Madagascar Centella Soothing Cream',
    brand: 'SKIN1004',
    origin: 'South Korea 🇰🇷',
    category: 'moisturizers',
    price: 1490,
    volume: '75ml',
    rating: 4.8,
    reviews: 740,
    badge: 'Cooling Ceramide Gel',
    concerns: ['Barrier Repair', 'Oil-Free Feel', 'Soothing'],
    bgTone: 'amber',
    img: 'https://www.skin1004.com/cdn/shop/files/skin1004-cream-centella-soothing-cream-1259546233.png?v=1790066709',
    tagline: '72% Madagascar Centella Asiatica + 4 Botanical Ceramides',
    description: 'Formulated with quadruple ceramide components identical to the skin’s natural lipid barrier. Lightweight cooling gel texture specially designed for oily to combination skin.',
    keyIngredients: '72% Centella Asiatica, Ceramide EOP/NS/NP/AP, Cholesterol, Phytosphingosine, Trehalose',
    howToUse: 'Smooth a generous amount over face and neck as your morning and nighttime locking moisturizer.'
  },
  {
    id: 'anua-cleansing-oil',
    name: 'Anua Heartleaf Pore Control Cleansing Oil',
    brand: 'Anua',
    origin: 'South Korea 🇰🇷',
    category: 'cleansers',
    price: 2150,
    volume: '200ml',
    rating: 4.9,
    reviews: 1580,
    badge: '#1 Double Cleanser in BD',
    concerns: ['Blackheads', 'Melt Sunscreen', 'Pore Clarifying'],
    bgTone: 'olive',
    img: 'https://www.shopmissa.com/cdn/shop/files/Anua_Heartleaf-Cleansing-Oil-1_1000x.jpg?v=1750796982',
    tagline: 'Non-Comedogenic Heartleaf Oil for Dissolving Sebaceous Filaments',
    description: 'The viral #1 Korean double-cleansing oil in Bangladesh. Non-comedogenic and formulated with Heartleaf extract to gently dissolve waterproof SPF, stubborn makeup, and melt blackheads without clogging pores.',
    keyIngredients: 'Houttuynia Cordata (Heartleaf) Extract, Jojoba Seed Oil, Macadamia Ternifolia Seed Oil, Olive Fruit Oil, Grape Seed Oil',
    howToUse: 'Pump 2–3 drops onto dry hands and massage gently onto dry face for 1–2 minutes. Emulsify with lukewarm water until milky, then rinse thoroughly before water-based cleanser.'
  },
  {
    id: 'cosrx-salicylic-cleanser',
    name: 'COSRX Salicylic Acid Daily Gentle Cleanser',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'cleansers',
    price: 1150,
    volume: '150ml',
    rating: 4.8,
    reviews: 2840,
    badge: 'Acne & Oil Control',
    concerns: ['Acne Breakouts', 'Deep Pore Cleanse', 'Excess Sebum'],
    bgTone: 'clay-tone',
    img: 'https://cdn.shopify.com/s/files/1/0912/8761/7901/files/SalicylicAcidDailyGentleCleanser150g.webp?v=1743972737',
    tagline: '0.5% Salicylic Acid + Botanical Purifying Complex',
    description: 'The highest-selling acne wash across Bangladesh. Formulated with Salicylic Acid (BHA) and Tea Tree Leaf Oil to penetrate pores, unclog trapped sebum, and prevent breakouts caused by tropical humidity.',
    keyIngredients: '0.5% Salicylic Acid (BHA), Melaleuca Alternifolia (Tea Tree) Leaf Oil, Willow Bark Water, Cryptomeria Japonica Leaf Extract',
    howToUse: 'Dispense a moderate amount into wet hands and foam into a rich lather. Massage across face concentrating on T-zone, then rinse with lukewarm water.'
  },
  {
    id: 'cerave-foaming-cleanser',
    name: 'CeraVe Foaming Facial Cleanser',
    brand: 'CeraVe',
    origin: 'United States 🇺🇸',
    category: 'cleansers',
    price: 1850,
    volume: '236ml',
    rating: 4.9,
    reviews: 3410,
    badge: 'Dermatologist Staple',
    concerns: ['Oil Barrier Balance', '3 Ceramides', 'Non-Stripping'],
    bgTone: 'sand',
    img: 'https://darbeauty.com/cdn/shop/files/cerave-foaming-facial-cleanser_3606000534919_DarBeauty.jpg?v=1719072925',
    tagline: '3 Essential Ceramides + Niacinamide + Hyaluronic Acid',
    description: 'Developed with dermatologists, this gentle gel-to-foam wash cleanses and removes excess oil without disrupting your protective skin barrier. Non-comedogenic and fragrance-free for sensitive, oily, and acne-prone skin.',
    keyIngredients: 'Ceramides 1, 3, 6-II, Niacinamide (Vitamin B3), Hyaluronic Acid, Phytosphingosine, Cholesterol',
    howToUse: 'Wet skin with lukewarm water. Massage cleanser into skin in a gentle, circular motion. Rinse clean.'
  },
  {
    id: 'round-lab-dokdo-toner',
    name: 'Round Lab 1025 Dokdo Toner',
    brand: 'Round Lab',
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1650,
    volume: '200ml',
    rating: 4.9,
    reviews: 1720,
    badge: 'Olive Young #1 Winner',
    concerns: ['Dead Skin Cells', 'Mineral Hydration', 'Sensitive'],
    bgTone: 'olive',
    img: 'https://roundlab.com/cdn/shop/files/Dokdo_Toner_2025.png?v=1772851199',
    tagline: 'Ulleungdo Deep Sea Water Mineral Balance + Hatching EX-07',
    description: 'Winning South Korea’s Olive Young beauty award for 4 consecutive years. Infused with 72 types of natural minerals from deep sea water to gently buff away dead skin cells and replenish moisture without tingling or irritation.',
    keyIngredients: 'Deep Sea Water, Hatching EX-07 (Enzymatic exfoliator), Panthenol, Allantoin, Betaine',
    howToUse: 'After washing face, soak a cotton pad and swipe gently along skin texture, or pat 2–3 layers directly with palms for deep glass skin hydration.'
  },
  {
    id: 'some-by-mi-miracle-toner',
    name: 'Some By Mi AHA BHA PHA 30 Days Miracle Toner',
    brand: 'Some By Mi',
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1550,
    volume: '150ml',
    rating: 4.8,
    reviews: 2980,
    badge: 'Miracle Acne Exfoliant',
    concerns: ['Blemish Clearing', 'Pore Tightening', 'Dead Skin Removal'],
    bgTone: 'peach',
    img: 'https://www.skincupid.co.uk/cdn/shop/files/SomeByMi-AHA_BHA_Toner_150ml.jpg?v=1760352045&width=800',
    tagline: '10,000 ppm Real Tea Tree Water + Triple Exfoliating Acids',
    description: 'A staple across Bangladesh for calming stubborn breakouts. Gently exfoliates dead skin cells, calms active pimples, and controls sebum with high-concentration Tea Tree and mild AHA, BHA, and PHA.',
    keyIngredients: '10,000 ppm Melaleuca Alternifolia (Tea Tree) Water, AHA (Citric Acid), BHA (Salicylic Acid), PHA (Lactobionic Acid), Niacinamide 2%',
    howToUse: 'After morning and evening cleansing, apply onto a cotton pad and swipe over problem areas. Follow with essence or soothing serum.'
  },
  {
    id: 'the-ordinary-glycolic-acid',
    name: 'The Ordinary Glycolic Acid 7% Toning Solution',
    brand: 'The Ordinary',
    origin: 'Canada 🇨🇦',
    category: 'toners',
    price: 2150,
    volume: '240ml',
    rating: 4.8,
    reviews: 3890,
    badge: 'Cult Glow Exfoliator',
    concerns: ['Rough Texture', 'Hyperpigmentation', 'Radiance'],
    bgTone: 'rose',
    img: 'https://cdn.shopify.com/s/files/1/0506/2121/8972/files/fca9f70ea576b555d8afd22dc48cdaed_600x600.jpg?v=1695343342',
    tagline: 'Direct Alpha Hydroxy Acid (AHA) with Tasmanian Pepperberry',
    description: 'The worldwide multi-use sensation. Offers mild exfoliation for improved skin radiance, visible clarity, and uneven texture. Popular in Bangladesh for face, neck, elbows, and underarms.',
    keyIngredients: '7% Glycolic Acid, Tasmanian Pepperberry Derivative, Aloe Vera Leaf Water, Panax Ginseng Root Extract',
    howToUse: 'Use ideally in the PM, no more frequently than once daily. Saturate a cotton pad and sweep across cleansed face and neck. Avoid eye contour.'
  },
  {
    id: 'skin1004-centella-ampoule',
    name: 'SKIN1004 Madagascar Centella Ampoule',
    brand: 'SKIN1004',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1450,
    volume: '55ml',
    rating: 4.9,
    reviews: 1650,
    badge: '100% Pure Centella',
    concerns: ['Sensitive Skin', 'Sun Damage Repair', 'Redness Soothing'],
    bgTone: 'amber',
    img: 'https://www.skin1004.com/cdn/shop/files/skin1004-ampoule-serum-centella-ampoule-1253199402.jpg?v=1786012992',
    tagline: '100% Madagascar Centella Asiatica Extract',
    description: 'An all-in-one soothing ampoule made with 100% untreated Madagascar Centella Asiatica extract. Restores damaged barriers, calms intense redness from Dhaka heat, and balances sebum without any stickiness.',
    keyIngredients: '100% Centella Asiatica Extract (Asiaticoside, Madecassic Acid, Asiatic Acid)',
    howToUse: 'Drop an appropriate amount onto face and gently pat into skin until absorbed. Perfect for daily layering under any routine.'
  },
  {
    id: 'boj-retinal-eye-serum',
    name: 'Beauty of Joseon Revive Eye Serum: Ginseng + Retinal',
    brand: 'Beauty of Joseon',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1550,
    volume: '30ml',
    rating: 4.9,
    reviews: 1210,
    badge: '#1 Anti-Aging Eye Serum',
    concerns: ['Dark Circles', 'Fine Lines', 'Gentle Retinal'],
    bgTone: 'sand',
    img: 'https://beautyofjoseon.com/cdn/shop/files/revive-eye-serum-ginseng-retinal-1-front.webp?v=1770287139',
    tagline: '10% Panax Ginseng Root Extract + 2% Retinal Liposome',
    description: 'Bangladesh’s most viral and top-rated eye serum. Combines Korean Ginseng with stabilized Liposomal Retinal (Vitamin A) to visibly smooth fine lines, brighten dark eye circles, and boost collagen without sensitivity.',
    keyIngredients: '10% Ginseng Root Extract, 2% Retinal Liposome (0.02% active Retinal), Niacinamide, Hyaluronic Acid, Ceramide NP',
    howToUse: 'Pump 1–2 times and gently tap around the orbital eye area using your ring finger during evening rituals. Can also be applied to smile lines.'
  },
  {
    id: 'torriden-dive-in-serum',
    name: 'Torriden DIVE-IN Low Molecular Hyaluronic Acid Serum',
    brand: 'Torriden',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1750,
    volume: '50ml',
    rating: 4.9,
    reviews: 1430,
    badge: '5D Deep Moisture Glow',
    concerns: ['Dehydrated Skin', 'Plumping', 'Weightless Hydration'],
    bgTone: 'olive',
    img: 'https://yaoskin.com/cdn/shop/files/Torriden_DIVE-IN_Low_Molecule_Hyaluronic_Acid_Serum-standalone.jpg?v=1687016311&width=900',
    tagline: '5D-Complex Hyaluronic Acid + D-Panthenol + Malachite Extract',
    description: 'Ranked #1 hydrating serum at Olive Young. Features 5 molecular weights of Hyaluronic Acid that penetrate every layer of skin for 48-hour inner hydration with a refreshing, non-sticky water gel finish.',
    keyIngredients: '5D Multi-Hyaluronic Acid Complex, D-Panthenol, Allantoin, Madecassoside, Malachite Extract',
    howToUse: 'Take 3–5 drops with the dropper and apply evenly across entire face. Pat gently to absorb.'
  },
  {
    id: 'round-lab-birch-sun',
    name: 'Round Lab Birch Juice Moisturizing Sun Cream SPF 50+ PA++++',
    brand: 'Round Lab',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1550,
    volume: '50ml',
    rating: 4.9,
    reviews: 1870,
    badge: 'Multi-Award Winner',
    concerns: ['Zero White Cast', 'Lotion Texture', 'Deep Hydration'],
    bgTone: 'olive',
    img: 'https://roundlab.com/cdn/shop/files/BIRCH_JUICE_MOISTURIZING_UVLOCK3_Large_10126e46-dfcc-4cd5-970c-146d4be65989.webp?v=1772852134&width=1946',
    tagline: 'Inje Birch Tree Sap + Vita Hyaluronic Acid Sun Defense',
    description: 'Korea’s multi-award winning holy grail sun cream. Delivers deep moisture like a luxury daily moisturizer while providing maximum broad-spectrum UV protection. Glides on clear with zero white cast or eye stinging.',
    keyIngredients: 'Inje Birch Tree Sap, Vita Hyaluronic Acid, Niacinamide, Portulaca Oleracea Extract',
    howToUse: 'As the final step of AM skincare, apply a generous amount to face and neck 15 minutes before sun exposure.'
  },
  {
    id: 'boj-matte-sun-stick',
    name: 'Beauty of Joseon Matte Sun Stick: Mugwort + Camelia SPF 50+',
    brand: 'Beauty of Joseon',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1450,
    volume: '18g',
    rating: 4.8,
    reviews: 1190,
    badge: 'Matte Reapplication Hero',
    concerns: ['Midday Reapply', 'Zero Grease', 'Pore Blur'],
    bgTone: 'sand',
    img: 'https://beautyofjoseon.com/cdn/shop/files/Matte-Sun-Stick-Mugwort-Camelia-SPF-50-PA-_Beauty-of-Joseon_70290488-52106202841460.jpg?v=1762679751',
    tagline: 'Sebum-Control Silica Powder + Artemisia Capillaris (Mugwort)',
    description: 'Co-developed with cosmetic chemists to solve greasy sunscreen reapplication in hot, humid weather. Leaves a silky matte finish without clumping, even when reapplied over foundation or oily midday skin.',
    keyIngredients: 'Artemisia Capillaris (Mugwort) Extract, Camellia Sinensis (Green Tea) Leaf Extract, Silica Powder Complex',
    howToUse: 'Twist dial at bottom to raise 5mm of product. Glide gently across face and neck throughout the day every 2–3 hours.'
  },
  {
    id: 'cerave-moisturizing-lotion',
    name: 'CeraVe Daily Moisturizing Lotion',
    brand: 'CeraVe',
    origin: 'United States 🇺🇸',
    category: 'moisturizers',
    price: 1750,
    volume: '236ml',
    rating: 4.9,
    reviews: 2940,
    badge: '24-Hour Barrier Lock',
    concerns: ['Damaged Barrier', 'Oil-Free Lotion', 'Ceramide Shield'],
    bgTone: 'sand',
    img: 'https://cdn.shopify.com/s/files/1/0981/3495/0177/files/cerave_daily_moisturizing_lotion_12oz_front-700x875-v2.webp?v=1776367870',
    tagline: 'MVE Controlled-Release Delivery + 3 Bio-Identical Ceramides',
    description: 'An oil-free, lightweight moisturizer that hydrates skin for 24 continuous hours while helping restore the natural skin barrier. Non-greasy, fast-absorbing texture formulated for normal to dry or sensitive skin.',
    keyIngredients: 'Ceramides 1, 3, 6-II, Hyaluronic Acid, Glycerin, Cholesterol, Phytosphingosine',
    howToUse: 'Apply liberally as often as needed to face and neck, ideally after your toners and serums to lock in hydration.'
  },
  {
    id: 'anua-peach-70-serum',
    name: 'Anua Peach 70% Niacin Serum',
    brand: 'Anua',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1850,
    volume: '30ml',
    rating: 4.9,
    reviews: 1320,
    badge: 'Viral Peach Glass Skin',
    concerns: ['Glass Skin', 'Dark Spots', 'Rough Texture'],
    bgTone: 'peach',
    img: 'https://anua.com/cdn/shop/files/anua-global-ampoule-serum-peach-70-niacinamide-serum-1239193727_2000x.jpg?v=1779177611',
    tagline: '70% Jeju Upcycled Peach Extract + 5% Niacinamide + Vitamin B12',
    description: 'The viral K-beauty sensation sweeping Bangladesh. Formulated with 70% fermented peach extract and 5% niacinamide to smooth rough skin texture, fade hyperpigmentation, and impart an ethereal peach glass glow.',
    keyIngredients: '70% Prunus Persica (Peach) Fruit Extract, 5% Niacinamide, Cyanocobalamin (Vitamin B12), Triple Hyaluronic Acid, Desert Yeast Oil',
    howToUse: 'Apply 2–3 drops onto cheeks and forehead after toning. Pat gently until fully absorbed before your moisturizer.'
  },
  {
    id: 'the-ordinary-barrier-pink-serum',
    name: 'The Ordinary Soothing & Barrier Support Serum',
    brand: 'The Ordinary',
    origin: 'Canada 🇨🇦',
    category: 'serums',
    price: 2150,
    volume: '30ml',
    rating: 4.8,
    reviews: 1590,
    badge: 'Viral Pink Barrier Rescue',
    concerns: ['Barrier Damage', 'Immediate Calm', 'Redness Recovery'],
    bgTone: 'rose',
    img: 'https://cdn.shopify.com/s/files/1/1588/9573/files/The-Ordinary-Soothing-and-Barrier-Support-Serum-30ml_1.png?v=1762264716',
    tagline: 'Multi-Active Pink Emulsion with Vitamin B12 & Centella Asiatica Phytotechnologies',
    description: 'A multi-action solution aimed at reducing visible skin redness and repairing damaged skin barriers within 2 hours. Beloved across Bangladesh for soothing sensitized skin caused by aggressive treatments or environmental heat.',
    keyIngredients: 'Vitamin B12 (gives signature pink hue), Centella Asiatica Phytotechnologies, Bisabolol, Gallic Acid Derivatives, Niacinamide 2%',
    howToUse: 'Apply a few drops to face morning and night as part of your soothing serum step.'
  },
  {
    id: 'dr-althea-345-relief-cream',
    name: 'Dr. Althea 345 Relief Cream',
    brand: 'Dr. Althea',
    origin: 'South Korea 🇰🇷',
    category: 'moisturizers',
    price: 1750,
    volume: '50ml',
    rating: 4.9,
    reviews: 1280,
    badge: 'Viral Post-Acne Barrier',
    concerns: ['Post-Acne Redness', 'Oil-Free Gel', 'Acne Scar Care'],
    bgTone: 'clay-tone',
    img: 'https://doctoraltheaglobal.com/cdn/shop/files/260828_____345_____2.jpg?v=1787887613&width=1920',
    tagline: '3 Structure Layers + 4 Soothing Extracts + 5 Nutrient Actives',
    description: 'One of the most searched post-acne barrier creams on SkincareBD. A silky, fast-absorbing gel-cream infused with resveratrol, heartleaf, and panthenol to calm irritation and fade stubborn post-breakout discoloration.',
    keyIngredients: 'Resveratrol, Houttuynia Cordata (Heartleaf) Extract, Centella Asiatica, Panthenol, Opuntia Ficus-Indica Stem Extract',
    howToUse: 'Apply an adequate amount to the face as the final step of your evening skincare routine or before morning sunscreen.'
  },
  {
    id: 'simple-hydrating-light-moisturiser',
    name: 'Simple Kind to Skin Hydrating Light Moisturiser',
    brand: 'Simple',
    origin: 'United Kingdom 🇬🇧',
    category: 'moisturizers',
    price: 890,
    volume: '125ml',
    rating: 4.8,
    reviews: 3420,
    badge: '#1 Daily Light Hydrator',
    concerns: ['Weightless Feel', '12H Hydration', 'Sensitive Friendly'],
    bgTone: 'olive',
    img: 'https://www.simpleskincare.in/cdn/shop/files/27274_H_1000x1000.jpg?v=1789448668',
    tagline: 'Non-Greasy Fast-Absorbing Hydration with Pro-Vitamin B5 & Vitamin E',
    description: 'A perennial bestseller across Bangladeshi beauty stores. Provides 12 hours of continuous hydration without clogging pores or feeling greasy under humid weather. Free of artificial fragrances, parabens, and harsh chemicals.',
    keyIngredients: 'Pro-Vitamin B5 (Panthenol), Vitamin E, Borage Seed Oil, Glycerin, Triple Purified Water',
    howToUse: 'Smooth gently into your face and neck using upward and outward movements morning and night.'
  },
  {
    id: 'haruharu-black-rice-sun',
    name: 'Haruharu Wonder Black Rice Moisture Airyfit Daily Sunscreen SPF 50+',
    brand: 'Haruharu Wonder',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1550,
    volume: '50ml',
    rating: 4.9,
    reviews: 1140,
    badge: 'Velvet Airy Chemical Shield',
    concerns: ['Velvet Matte', 'Zero White Cast', 'Antioxidant Defense'],
    bgTone: 'sand',
    img: 'https://pureseoul.co.uk/cdn/shop/files/HARUHARU-Wonder-Black-Rice-Moisture-Airyfit-Daily-Sunscreen-SPF50-50ml-PURESEOUL-UK-KBeauty-Shop.png?v=1727278999',
    tagline: 'Fermented Black Rice Extract + Ceramide NP + Heartleaf',
    description: 'A cult-favorite chemical sunscreen with a velvet matte finish that feels like a weightless moisturizer. Provides maximum broad-spectrum SPF 50+ PA++++ with zero white cast, zero sting, and zero greasiness.',
    keyIngredients: 'Fermented Oryza Sativa (Black Rice) Extract, Ceramide NP, Houttuynia Cordata Extract, Adenosine, Niacinamide',
    howToUse: 'Apply evenly onto face and exposed skin 15 minutes before sun exposure. Glides effortlessly under makeup.'
  },
  {
    id: 'cosrx-ahabha-toner',
    name: 'COSRX AHA/BHA Clarifying Treatment Toner',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1350,
    volume: '150ml',
    rating: 4.8,
    reviews: 2210,
    badge: 'Daily Pore Clearing Mist',
    concerns: ['Blackheads', 'Whiteheads', 'Mild Exfoliation'],
    bgTone: 'amber',
    img: 'https://www.cosrx.com/cdn/shop/files/ahabha-clarifying-treatment-toner-cosrx-official-1_2048x.jpg?v=1724835581',
    tagline: 'Mineral Water + Willow Bark + Apple Fruit Water AHA/BHA',
    description: 'An easy spray-on daily clarifying toner that removes surface impurities and dead skin cells. Balances skin pH and clears congestion without tingling or peeling, making it an essential routine step for humid weather.',
    keyIngredients: 'Salix Alba (Willow Bark) Water (BHA source), Pyrus Malus (Apple) Fruit Water (AHA source), Glycolic Acid, Betaine Salicylate, Allantoin',
    howToUse: 'After cleansing, spray onto a cotton pad and gently wipe along the skin texture, avoiding eye and mouth areas.'
  },
  {
    id: 'bioderma-sensibio-micellar',
    name: 'Bioderma Sensibio H2O Micellar Water Cleanser',
    brand: 'Bioderma',
    origin: 'France 🇫🇷',
    category: 'cleansers',
    price: 1650,
    volume: '250ml',
    rating: 4.9,
    reviews: 3890,
    badge: 'Global #1 Micellar Water',
    concerns: ['Waterproof Makeup', 'Pollution Cleanse', 'Sensitive Skin'],
    bgTone: 'rose',
    img: 'https://ageless.shop/cdn/shop/files/Bioderma-H2O-1.jpg?v=1705321881&width=1946',
    tagline: 'Dermatological Micellar Water Cleanser & Makeup Remover for Sensitive Skin',
    description: 'The world’s most iconic micellar water, prescribed by dermatologists worldwide. Cleanses 99% of makeup, microscopic pollution particles, and city grime while respecting the skin’s biological balance.',
    keyIngredients: 'Biomimetic Fatty Acid Esters (Micelles), Cucumis Sativus (Cucumber) Extract, Mannitol, Xylitol, Rhamnose',
    howToUse: 'Soak a cotton pad with Sensibio H2O. Gently cleanse and remove makeup from face and eyes. No rinsing required.'
  },
  {
    id: 'panoxyl-acne-wash-10',
    name: 'PanOxyl Acne Foaming Wash 10% Benzoyl Peroxide Maximum Strength',
    brand: 'PanOxyl',
    origin: 'United States 🇺🇸',
    category: 'cleansers',
    price: 1950,
    volume: '156g',
    rating: 4.8,
    reviews: 2470,
    badge: 'Max Strength Acne Wash',
    concerns: ['Cystic Acne', 'Chest & Back Acne', 'Bacteria Purge'],
    bgTone: 'peach',
    img: 'https://cdn.shopify.com/s/files/1/0086/7821/1642/products/PanOxyl10_5.5oz.jpg?v=1625788686',
    tagline: '10% Benzoyl Peroxide Antimicrobial Wash for Face, Chest & Back',
    description: 'The strongest OTC acne wash recommended by dermatologists across Bangladesh. Kills acne-causing bacteria on contact, unclogs congested pores, and prevents new breakouts on both face and body.',
    keyIngredients: '10% Benzoyl Peroxide (Active), Glycerin, Carbomer, Sodium Cocoyl Isethionate',
    howToUse: 'Wet area to be cleansed. Apply wash and gently massage area for 1–2 minutes. Rinse thoroughly and pat dry. Start with once daily.'
  },


  // ── Extra Sunscreens ───────────────────────────────────────────
  {
    id: 'skin1004-centella-sun-stick',
    name: 'SKIN1004 Madagascar Centella Sun Stick SPF 50+ PA++++',
    brand: 'SKIN1004',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1390,
    volume: '18g',
    rating: 4.8,
    reviews: 940,
    badge: 'Cooling Stick SPF',
    concerns: ['Midday Reapply', 'Soothing Shield', 'Glow Finish'],
    bgTone: 'amber',
    img: 'https://www.skin1004.com/cdn/shop/files/skin1004-sun-hyalu-cica-silky-fit-sun-stick-40032143180022.png?v=1709706355',
    tagline: '100% Madagascar Centella + SPF 50+ Cooling Sun Stick',
    description: 'A travel-friendly centella sun stick that soothes and protects in one swipe. Melts effortlessly into skin for a dewy finish ideal for Bangladesh\'\'s harsh midday UV index.',
    keyIngredients: 'Centella Asiatica Extract, Niacinamide, Panthenol, Sodium Hyaluronate',
    howToUse: 'Twist up and apply directly to face and neck before outdoor activities. Reapply every 2–3 hours.'
  },
  {
    id: 'isntree-hyaluronic-acid-sun',
    name: 'Isntree Hyaluronic Acid Watery Sun Gel SPF 50+ PA++++',
    brand: 'Isntree',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1290,
    volume: '50ml',
    rating: 4.8,
    reviews: 1070,
    badge: 'Water-Bomb SPF',
    concerns: ['Ultra-Lightweight', 'Glass Glow SPF', 'Oily Skin'],
    bgTone: 'olive',
    img: 'https://www.skincupid.co.uk/cdn/shop/files/ISNTREE_Hyaluronic_Acid_Watery_Sun_Gel_SPF50_PA_50ml.jpg?v=1774433528&width=800',
    tagline: '5-Type Hyaluronic Acid Complex + Aqua Shield UV Gel',
    description: 'A water-bomb sunscreen gel that feels like pure moisture while offering maximum SPF 50+ PA++++ defense. Non-sticky satin finish perfect for oily skin in Bangladesh humidity.',
    keyIngredients: '5-Type Hyaluronic Acid Complex, Niacinamide, Centella Asiatica, Aloe Vera Leaf Extract',
    howToUse: 'As the final step of morning skincare, apply evenly onto face and neck 15 minutes before sun exposure.'
  },
  {
    id: 'anua-heartleaf-airy-sun',
    name: 'Anua Heartleaf Airy-Fit Sun Serum SPF 50+ PA++++',
    brand: 'Anua',
    origin: 'South Korea 🇰🇷',
    category: 'sunscreen',
    price: 1490,
    volume: '40ml',
    rating: 4.9,
    reviews: 1560,
    badge: 'Blurring Skin Veil',
    concerns: ['Pore Blur', 'Sensitive Shield', 'Zero Stickiness'],
    bgTone: 'peach',
    img: 'https://anua.com/cdn/shop/files/anua-us-sunscreen-zero-cast-moisturizing-finish-sunscreen-1244398149.jpg?v=1781507109&width=2000',
    tagline: '77% Heartleaf Extract + Pore-Blurring Airy Sun Veil',
    description: 'A blurring, airy sun serum that doubles as a pore-minimising skin veil. The 77% Heartleaf extract calms irritation while UV filters offer robust all-day broad-spectrum protection.',
    keyIngredients: '77% Heartleaf Extract, Niacinamide, Adenosine, Birch Juice, Allantoin',
    howToUse: 'Apply generously and evenly to face and neck before sun exposure. Reapply throughout the day as needed.'
  },

  // ── Extra Serums ──────────────────────────────────────────────
  {
    id: 'cosrx-propolis-serum',
    name: 'COSRX Full Fit Propolis Light Ampoule',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1690,
    volume: '30ml',
    rating: 4.8,
    reviews: 1870,
    badge: 'Honey Skin Glow',
    concerns: ['Calming', 'Nourishing', 'Brightening'],
    bgTone: 'sand',
    img: 'https://www.cosrx.com/cdn/shop/files/full-fit-propolis-light-ampoule-cosrx-official-1_2048x.jpg?v=1724835589',
    tagline: '73.5% Black Bee Propolis Extract + Niacinamide + Honey Extract',
    description: 'Harnesses the power of concentrated bee propolis to deeply nourish irritated skin, minimize inflammation, and deliver a golden honey glow. Ultralight non-sticky texture.',
    keyIngredients: '73.5% Black Bee Propolis Extract, Honey Extract, Niacinamide, Panthenol, Beta-Glucan',
    howToUse: 'After toning, apply 2–3 drops and gently press into skin until absorbed. Layer under your moisturizer.'
  },
  {
    id: 'the-inkey-list-hyaluronic-acid',
    name: 'The INKEY List Hyaluronic Acid Serum',
    brand: 'The INKEY List',
    origin: 'United Kingdom 🇬🇧',
    category: 'serums',
    price: 990,
    volume: '30ml',
    rating: 4.7,
    reviews: 2310,
    badge: 'Budget Hydration Hero',
    concerns: ['Plumping', 'Deep Hydration', 'Dehydrated Skin'],
    bgTone: 'olive',
    img: 'https://www.myskin-plug.com/cdn/shop/products/inkxxx_theinkeylist_hyaluronic_1560x1960-noieb.jpg?v=1600697466&width=598',
    tagline: '2% Hyaluronic Acid + 0.1% Matrixyl 3000',
    description: 'Budget-friendly powerhouse loved by Bangladeshi skincare beginners. Delivers intense hydration and visible plumping without fragrance or parabens.',
    keyIngredients: '2% Hyaluronic Acid, 0.1% Matrixyl 3000, Aqua, Sodium PCA',
    howToUse: 'After cleansing, apply 2–3 drops to face and neck and gently press in before layering richer products.'
  },
  {
    id: 'numbuzin-no3-serum',
    name: 'Numbuzin No.3 Skin Softening Serum',
    brand: 'Numbuzin',
    origin: 'South Korea 🇰🇷',
    category: 'serums',
    price: 1990,
    volume: '50ml',
    rating: 4.9,
    reviews: 1420,
    badge: 'Glass Skin Formula',
    concerns: ['Skin Softening', 'Pore Blurring', 'Hydrating Glow'],
    bgTone: 'rose',
    img: 'https://www.skincupid.co.uk/cdn/shop/files/NUMBUZIN_No.3_Skin_Softening_Serum_50ml.jpg?v=1760352122&width=800',
    tagline: '50% Mugwort + 10% Niacinamide + Ceramide Softening Complex',
    description: 'A silky, skin-blurring serum that fades uneven tone, plumps pores, and creates the coveted glass skin effect. One of the fastest rising serums in K-beauty loved across Bangladesh.',
    keyIngredients: '50% Artemisia Annua (Mugwort) Extract, 10% Niacinamide, Ceramide NP, Beta-Glucan, Adenosine',
    howToUse: 'Pump 1–2 times and smooth evenly across face morning and evening. Follow with moisturizer.'
  },

  // ── Extra Cleansers ───────────────────────────────────────────
  {
    id: 'beauty-of-joseon-green-plum-cleanser',
    name: 'Beauty of Joseon Green Plum Refreshing Cleanser',
    brand: 'Beauty of Joseon',
    origin: 'South Korea 🇰🇷',
    category: 'cleansers',
    price: 1090,
    volume: '100ml',
    rating: 4.8,
    reviews: 1350,
    badge: 'Brightening Morning Wash',
    concerns: ['Vitamin C Brightening', 'Gentle Exfoliation', 'Dull Skin'],
    bgTone: 'olive',
    img: 'https://beautyofjoseon.com/cdn/shop/files/green-plum-refreshing-cleanser-1-front.webp?v=1770276773',
    tagline: '50% Green Plum Extract + AHA/PHA for Mild Daily Exfoliation',
    description: 'A refreshing gel cleanser infused with 50% Korean green plum extract that gently exfoliates, brightens dull skin tone, and restores a natural pH balance for Bangladesh tropical mornings.',
    keyIngredients: '50% Prunus Mume (Green Plum) Extract, AHA (Citric Acid), PHA (Lactobionic Acid), Betaine',
    howToUse: 'Pump a small amount into wet hands and lather. Massage gently onto face and rinse thoroughly with lukewarm water.'
  },
  {
    id: 'innisfree-jeju-volcanic-cleanser',
    name: 'Innisfree Jeju Volcanic Pore Cleansing Foam',
    brand: 'Innisfree',
    origin: 'South Korea 🇰🇷',
    category: 'cleansers',
    price: 890,
    volume: '150ml',
    rating: 4.7,
    reviews: 3100,
    badge: 'Deep Pore Scrub Foam',
    concerns: ['Deep Pore Cleanse', 'Sebum Control', 'Blackhead Care'],
    bgTone: 'clay-tone',
    img: 'https://cdn.shopify.com/s/files/1/0887/2729/0120/files/Product-page-sizes-11-1_1c082adc-9f3e-4044-a7d6-68761278a0e2.jpg?v=1758454213',
    tagline: 'Jeju Volcanic Cluster Balls + Kaolin Clay Deep Pore Detox',
    description: 'One of the most sold cleansers in Bangladeshi beauty shops. Micro volcanic ash clusters absorb excess sebum and sweep blackhead-causing impurities from deep within pores.',
    keyIngredients: 'Jeju Volcanic Cluster Balls, Kaolin (White Clay), Hyaluronic Acid, Allantoin',
    howToUse: 'Squeeze a small amount onto wet hands, lather into foam, and massage onto face for 30 seconds. Rinse well.'
  },

  // ── Extra Moisturizers ────────────────────────────────────────
  {
    id: 'torriden-dive-in-cream',
    name: 'Torriden DIVE-IN Hyaluronic Acid Cream',
    brand: 'Torriden',
    origin: 'South Korea 🇰🇷',
    category: 'moisturizers',
    price: 1850,
    volume: '80ml',
    rating: 4.9,
    reviews: 1140,
    badge: 'Water Plump Barrier',
    concerns: ['Intense Moisture', 'Plumping', 'Sensitive Barrier'],
    bgTone: 'olive',
    img: 'https://skinorea.com/cdn/shop/files/Torriden-Dive-In-Hyaluronic-Acid-Soothing-Cream-100ml_1.jpg',
    tagline: '5-Type Hyaluronic Acid Gel-Cream for 72H Hydration',
    description: 'Provides 72 hours of continuous intensive hydration with an outer barrier that locks in all the active moisture from your serum routine. Gel-cream texture ideal for humid Bangladesh climate.',
    keyIngredients: '5D Hyaluronic Acid Complex, Ceramide NP, D-Panthenol, Madecassoside, Allantoin',
    howToUse: 'After serum, smooth an appropriate amount over face and neck morning and evening as the locking moisturizer.'
  },
  {
    id: 'beauty-of-joseon-ginseng-snail-cream',
    name: 'Beauty of Joseon Revive Serum: Ginseng + Snail Mucin',
    brand: 'Beauty of Joseon',
    origin: 'South Korea 🇰🇷',
    category: 'moisturizers',
    price: 1350,
    volume: '50ml',
    rating: 4.9,
    reviews: 1680,
    badge: 'Hanbang Repair Essence',
    concerns: ['Anti-Aging', 'Barrier Repair', 'Dewy Bounce'],
    bgTone: 'sand',
    img: 'https://www.skincupid.co.uk/cdn/shop/files/BEAUTYOFJOSEONReviveSerum_30ml.jpg?v=1760352050&width=800',
    tagline: '30% Ginseng Root Water + 30% Snail Secretion Filtrate',
    description: 'A Hanbang-inspired essence combining 30% Ginseng with 30% Snail Mucin for exceptional barrier repair, elasticity, and anti-aging benefits in one luxurious lightweight formula.',
    keyIngredients: '30% Panax Ginseng Root Water, 30% Snail Secretion Filtrate, Niacinamide, Centella Asiatica',
    howToUse: 'Apply after toner, gently pressing several drops into skin. Works beautifully under both light and rich moisturizers.'
  },
  {
    id: 'purito-centella-unscented-cream',
    name: 'Purito Centella Unscented Rich Cream',
    brand: 'Purito',
    origin: 'South Korea 🇰🇷',
    category: 'moisturizers',
    price: 1190,
    volume: '60ml',
    rating: 4.8,
    reviews: 2050,
    badge: 'Fragrance-Free Barrier Lock',
    concerns: ['Eczema Care', 'Chemical-Free', 'Redness Calm'],
    bgTone: 'peach',
    img: 'https://cdn.shopify.com/s/files/1/0824/4015/9562/files/d1d10518-2326-4797-936d-07e368f824a7.png?v=1728131769',
    tagline: 'Centella + 7 Ceramides, Zero Fragrance for Reactive Skin',
    description: 'A deeply moisturizing fragrance-free cream ideal for reactive or eczema-prone skin. Fortified with 7 types of ceramide and Centella Asiatica to rebuild compromised barriers.',
    keyIngredients: 'Centella Asiatica, Ceramide Complex (7 Types), Panthenol, Allantoin, Madecassoside',
    howToUse: 'Apply a generous amount over face and neck as the last step of your evening routine or AM before SPF.'
  },

  // ── Extra Toners ──────────────────────────────────────────────
  {
    id: 'cosrx-propolis-toner',
    name: 'COSRX Full Fit Propolis Synergy Toner',
    brand: 'COSRX',
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1590,
    volume: '150ml',
    rating: 4.9,
    reviews: 1560,
    badge: 'Honey Skin Prep Toner',
    concerns: ['Nourishing', 'Brightening', 'Glow Prep'],
    bgTone: 'amber',
    img: 'https://www.cosrx.com/cdn/shop/files/full-fit-propolis-synergy-toner-cosrx-official-1_2048x.jpg?v=1724835581',
    tagline: '72.5% Black Bee Propolis + 10% Niacinamide Skin-Prep Toner',
    description: 'A honey-golden toner that conditions, softens, and brightens skin in one sweep. The 72.5% black bee propolis feeds the skin essential amino acids for a plump, luminous, honeyed glow.',
    keyIngredients: '72.5% Black Bee Propolis Extract, 10% Niacinamide, Honey Extract, Panthenol, Beta-Glucan',
    howToUse: 'After cleansing, apply to a cotton pad and sweep across skin, or pour into palms and press gently into face and neck.'
  },
  {
    id: 'klairs-supple-preparation-toner',
    name: 'Klairs Supple Preparation Unscented Toner',
    brand: 'Klairs',
    origin: 'South Korea 🇰🇷',
    category: 'toners',
    price: 1850,
    volume: '180ml',
    rating: 4.9,
    reviews: 2780,
    badge: 'Gentle Barrier Prep',
    concerns: ['Sensitive Skin', 'Hydration Prep', 'Pore Refining'],
    bgTone: 'rose',
    img: 'https://www.skincupid.co.uk/cdn/shop/files/Dear_Klairs_Supple_Preparation_Unscented_Toner_180_mL.jpg?v=1773319866&width=800',
    tagline: 'Hyaluronic Acid + Beta-Glucan + pH-Balancing Formula',
    description: 'A fragrance-free cult toner that soothes sensitive, reactive skin while perfectly preparing the moisture base for subsequent serums and creams. Essential for compromised skin barriers.',
    keyIngredients: 'Beta-Glucan, Sodium Hyaluronate, Centella Asiatica, Allantoin, Panthenol, Betaine',
    howToUse: 'After cleansing, gently press 2–3 applications into skin with palms using the 7-skin method for extra bounce.'
  }
];

// Configuration
export const CONFIG = {
  storeName: 'AYZAN Skincare',
  storeDomain: 'ayzan.me',
  officialEmail: 'her.skincare@ayzan.me',
  bKashNumber: '01831428847', // bKash Personal/Merchant Number
  nagadNumber: '01831428847', // Nagad Personal Number
  rocketNumber: '01831428847', // Rocket Number
  freeDeliveryThreshold: 2500, // BDT 2,500
  dhakaDeliveryFee: 70,
  outsideDhakaDeliveryFee: 130
};

// State
let cart = JSON.parse(localStorage.getItem('ayzan_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ayzan_wishlist') || '[]');
let currentCategory = 'all';
let searchQuery = '';
let deliveryZone = '70'; // 70 = Dhaka, 130 = Outside Dhaka
let toastTimeout;

// User Account & Database State (Pre-seeded with VIP Demo User: Rain)
let usersDb = JSON.parse(localStorage.getItem('ayzan_users_db') || '[]');
if (usersDb.length === 0 || usersDb.some(u => u.name === 'Nusrat Jahan' || u.id === 'user_nusrat')) {
  usersDb = [{
    id: 'user_rain',
    name: 'Rain',
    email: 'rain@ayzan.me',
    phone: '01831428847',
    zone: '70',
    address: 'House 42, Road 11, Banani, Dhaka-1213',
    skinType: 'combination',
    password: 'password123',
    orders: [
      {
        id: 'AYZ-884912',
        date: '24 Sep 2026, 14:30',
        timestamp: Date.now() - 86400000 * 2,
        customerName: 'Rain',
        customerPhone: '01831428847',
        customerAddress: 'House 42, Road 11, Banani, Dhaka-1213',
        customerNotes: 'Please call before delivery.',
        zone: 'Inside Dhaka',
        deliveryCharge: 0,
        subtotal: 2800,
        total: 2800,
        payMethod: 'bKash',
        trxId: 'BL92K81XZ',
        status: 'In Transit',
        items: [
          { id: 'boj-relief-sun', name: 'Beauty of Joseon Relief Sun: Rice + Probiotics SPF 50+', price: 1350, qty: 1, volume: '50ml', img: 'https://beautyofjoseon.com/cdn/shop/files/05_0805__-_ROW_654a8e4e-1d53-4dca-a3a0-c0c2f55e3ca0.jpg?v=1787196328' },
          { id: 'cosrx-snail-96-essence', name: 'COSRX Advanced Snail 96 Mucin Power Essence', price: 1450, qty: 1, volume: '100ml', img: 'https://cdn.shopify.com/s/files/1/0513/3775/6828/files/2022-08-29_100735.png?v=1661735932' }
        ],
        itemsSummary: ['Beauty of Joseon Relief Sun (50ml) × 1', 'COSRX Snail 96 Mucin (100ml) × 1']
      }
    ]
  }];
  localStorage.setItem('ayzan_users_db', JSON.stringify(usersDb));
}
let currentUser = JSON.parse(localStorage.getItem('ayzan_current_user') || 'null');
if (currentUser && (currentUser.name === 'Nusrat Jahan' || currentUser.id === 'user_nusrat')) {
  currentUser.name = 'Rain';
  currentUser.email = 'rain@ayzan.me';
  currentUser.id = 'user_rain';
  localStorage.setItem('ayzan_current_user', JSON.stringify(currentUser));
}
let allOrders = JSON.parse(localStorage.getItem('ayzan_orders') || '[]');
if (allOrders.length === 0 && usersDb[0]?.orders?.length > 0) {
  allOrders = [...usersDb[0].orders];
  localStorage.setItem('ayzan_orders', JSON.stringify(allOrders));
}

// DOM Selectors
const productListEl = document.querySelector('#productList');
const productSearchInput = document.querySelector('#productSearch');
const filterPillsContainer = document.querySelector('#filterPills');
const bagBtn = document.querySelector('#bag');
const countEl = document.querySelector('#count');
const drawerCountEl = document.querySelector('#drawerCount');
const bottomBagCountEl = document.querySelector('#bottomBagCount');
const wishlistBtn = document.querySelector('#wishlistBtn');
const wishlistCountEl = document.querySelector('#wishlistCount');
const mobileWishlistBtn = document.querySelector('#mobileWishlistBtn');
const mobileWishlistCountEl = document.querySelector('#mobileWishlistCount');
const wishlistDrawer = document.querySelector('#wishlistDrawer');
const wishlistBackdrop = document.querySelector('#wishlistBackdrop');
const closeWishlistDrawerBtn = document.querySelector('#closeWishlistDrawer');
const wishlistItemsContainer = document.querySelector('#wishlistItems');
const wishlistDrawerCountEl = document.querySelector('#wishlistDrawerCount');
const wishlistDrawerFooter = document.querySelector('#wishlistDrawerFooter');
const moveAllToBagBtn = document.querySelector('#moveAllToBagBtn');
const toastEl = document.querySelector('#toast');
const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#closeMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const cartDrawer = document.querySelector('#cartDrawer');
const cartBackdrop = document.querySelector('#cartBackdrop');
const closeDrawerBtn = document.querySelector('#closeDrawer');
const cartItemsContainer = document.querySelector('#cartItems');
const checkoutSection = document.querySelector('#checkoutSection');
const subtotalValEl = document.querySelector('#subtotalVal');
const deliveryValEl = document.querySelector('#deliveryVal');
const grandTotalValEl = document.querySelector('#grandTotalVal');
const btnTotalEl = document.querySelector('#btnTotal');
const orderForm = document.querySelector('#orderForm');
const orderModalBackdrop = document.querySelector('#orderModalBackdrop');
const orderReceiptEl = document.querySelector('#orderReceipt');
const closeOrderModalBtn = document.querySelector('#closeOrderModal');
const mailOrderBtn = document.querySelector('#mailOrderBtn');
const subscribeForm = document.querySelector('#subscribe');
const freeShippingFill = document.querySelector('#freeShippingFill');
const freeShippingText = document.querySelector('#freeShippingText');
const mfsInfoBox = document.querySelector('#mfsInfoBox');
const mfsAccountNumEl = document.querySelector('#mfsAccountNum');
const mfsMethodNameEl = document.querySelector('#mfsMethodName');
const mfsAmountEl = document.querySelector('#mfsAmount');
const copyMfsBtn = document.querySelector('#copyMfsBtn');
const trxIdGroup = document.querySelector('#trxIdGroup');
const trxIdInput = document.querySelector('#trxIdInput');

// AI Skin Advisor Bot DOM Selectors
const openAdvisorBtn = document.querySelector('#openAdvisorBtn');
const closeAdvisorBtn = document.querySelector('#closeAdvisorBtn');
const advisorChatWindow = document.querySelector('#advisorChatWindow');
const advisorChatBody = document.querySelector('#advisorChatBody');
const advisorChatForm = document.querySelector('#advisorChatForm');
const advisorInput = document.querySelector('#advisorInput');
const advisorQuickPills = document.querySelector('#advisorQuickPills');
const bottomAdvisorBtn = document.querySelector('#bottomAdvisorBtn');

// Auth & Account Selectors
const accountBtn = document.querySelector('#accountBtn');
const accountNameEl = document.querySelector('#accountName');
const mobileAccountBtn = document.querySelector('#mobileAccountBtn');
const bottomAccountBtn = document.querySelector('#bottomAccountBtn');
const bottomAccountLabel = document.querySelector('#bottomAccountLabel');

const authModalBackdrop = document.querySelector('#authModalBackdrop');
const closeAuthBtn = document.querySelector('#closeAuthBtn');
const tabSignInBtn = document.querySelector('#tabSignInBtn');
const tabRegisterBtn = document.querySelector('#tabRegisterBtn');
const signInPanel = document.querySelector('#signInPanel');
const registerPanel = document.querySelector('#registerPanel');
const signInForm = document.querySelector('#signInForm');
const registerForm = document.querySelector('#registerForm');
const demoLoginBtn = document.querySelector('#demoLoginBtn');
const forgotPassBtn = document.querySelector('#forgotPassBtn');
const toggleLoginPassBtn = document.querySelector('#toggleLoginPassBtn');
const toggleRegPassBtn = document.querySelector('#toggleRegPassBtn');

const accountModalBackdrop = document.querySelector('#accountModalBackdrop');
const closeAccountModalBtn = document.querySelector('#closeAccountModalBtn');
const dashAvatarEl = document.querySelector('#dashAvatar');
const dashNameEl = document.querySelector('#dashName');
const dashEmailEl = document.querySelector('#dashEmail');
const dashOrdersCountEl = document.querySelector('#dashOrdersCount');
const tabDashOrdersBtn = document.querySelector('#tabDashOrdersBtn');
const tabDashProfileBtn = document.querySelector('#tabDashProfileBtn');
const dashOrdersPanel = document.querySelector('#dashOrdersPanel');
const dashProfilePanel = document.querySelector('#dashProfilePanel');
const dashOrdersListEl = document.querySelector('#dashOrdersList');
const updateProfileForm = document.querySelector('#updateProfileForm');
const askAdvisorWithProfileBtn = document.querySelector('#askAdvisorWithProfileBtn');
const signOutBtn = document.querySelector('#signOutBtn');

// Quick View Modal elements
const quickViewBackdrop = document.querySelector('#quickViewBackdrop');
const quickViewModal = document.querySelector('#quickViewModal');
const closeQuickViewBtn = document.querySelector('#closeQuickView');

// Save Cart to Local Storage
function saveCart() {
  localStorage.setItem('ayzan_cart', JSON.stringify(cart));
}

// Toast Notification Helper
export function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2800);
}

// Mobile Menu toggles
if (menuBtn && closeMenuBtn && mobileMenu) {
  menuBtn.onclick = () => mobileMenu.classList.add('open');
  closeMenuBtn.onclick = () => mobileMenu.classList.remove('open');
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.onclick = () => mobileMenu.classList.remove('open');
  });
}

// Drawer Open / Close
export function openCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Auto-fill checkout fields if user is logged in
  if (currentUser) {
    const custNameInput = document.querySelector('#custName');
    const custPhoneInput = document.querySelector('#custPhone');
    const custAddressInput = document.querySelector('#custAddress');
    if (custNameInput && !custNameInput.value) custNameInput.value = currentUser.name || '';
    if (custPhoneInput && !custPhoneInput.value) custPhoneInput.value = currentUser.phone || '';
    if (custAddressInput && !custAddressInput.value) custAddressInput.value = currentUser.address || '';
    if (currentUser.zone) {
      const zoneRadio = document.querySelector(`input[name="deliveryZone"][value="${currentUser.zone}"]`);
      if (zoneRadio && !zoneRadio.checked) {
        zoneRadio.checked = true;
        deliveryZone = currentUser.zone;
        calculateTotals();
      }
    }
  }
}

export function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (bagBtn) bagBtn.onclick = openCart;
if (closeDrawerBtn) closeDrawerBtn.onclick = closeCart;
if (cartBackdrop) cartBackdrop.onclick = closeCart;

// Calculate Totals & Delivery Logic (Free delivery on >= ৳2,500)
export function calculateTotals() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  
  // Delivery Fee calculation
  const baseDeliveryFee = deliveryZone === '70' ? CONFIG.dhakaDeliveryFee : CONFIG.outsideDhakaDeliveryFee;
  const isFreeDelivery = subtotal >= CONFIG.freeDeliveryThreshold;
  const effectiveDelivery = (subtotal === 0 || isFreeDelivery) ? 0 : baseDeliveryFee;
  const grandTotal = subtotal > 0 ? (subtotal + effectiveDelivery) : 0;

  // Update counts
  if (countEl) countEl.textContent = totalItems;
  if (drawerCountEl) drawerCountEl.textContent = totalItems;
  if (bottomBagCountEl) bottomBagCountEl.textContent = totalItems;

  // Update price indicators in BDT format
  if (subtotalValEl) subtotalValEl.textContent = `৳ ${subtotal.toLocaleString('en-IN')}`;
  if (deliveryValEl) {
    if (subtotal === 0) {
      deliveryValEl.textContent = `৳ ${baseDeliveryFee}`;
    } else if (isFreeDelivery) {
      deliveryValEl.innerHTML = `<span style="color: #2e7d32; font-weight:700;">FREE (৳0)</span> <s style="color:#999; font-size:12px;">৳${baseDeliveryFee}</s>`;
    } else {
      deliveryValEl.textContent = `৳ ${baseDeliveryFee}`;
    }
  }

  if (grandTotalValEl) grandTotalValEl.textContent = `৳ ${grandTotal.toLocaleString('en-IN')}`;
  if (btnTotalEl) btnTotalEl.textContent = grandTotal.toLocaleString('en-IN');
  if (mfsAmountEl) mfsAmountEl.textContent = `৳ ${grandTotal.toLocaleString('en-IN')}`;

  // Update Free Shipping Progress Bar
  if (freeShippingFill && freeShippingText) {
    if (subtotal === 0) {
      freeShippingFill.style.width = '0%';
      freeShippingText.innerHTML = `Add <strong>৳ ${CONFIG.freeDeliveryThreshold.toLocaleString('en-IN')}</strong> for <strong>FREE Nationwide Delivery</strong> 🚚`;
      freeShippingFill.classList.remove('completed');
    } else if (isFreeDelivery) {
      freeShippingFill.style.width = '100%';
      freeShippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Nationwide Delivery</strong>!`;
      freeShippingFill.classList.add('completed');
    } else {
      const remaining = CONFIG.freeDeliveryThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / CONFIG.freeDeliveryThreshold) * 100));
      freeShippingFill.style.width = `${pct}%`;
      freeShippingText.innerHTML = `Add <strong>৳ ${remaining.toLocaleString('en-IN')}</strong> more for <strong>FREE Delivery</strong> (${pct}% unlocked)`;
      freeShippingFill.classList.remove('completed');
    }
  }

  return { subtotal, grandTotal, totalItems, effectiveDelivery, isFreeDelivery };
}

// Render Products Grid with Category & Live Search Filtering
export function renderProducts() {
  if (!productListEl) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery) ||
      p.keyIngredients.toLowerCase().includes(searchQuery) ||
      p.concerns.some(c => c.toLowerCase().includes(searchQuery));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productListEl.innerHTML = `
      <div class="no-products-found">
        <p>No formulations matched "<strong>${searchQuery}</strong>" in this category.</p>
        <button class="button dark" id="resetFilterBtn">View All Bestsellers</button>
      </div>
    `;
    const resetBtn = document.querySelector('#resetFilterBtn');
    if (resetBtn) {
      resetBtn.onclick = () => {
        currentCategory = 'all';
        searchQuery = '';
        if (productSearchInput) productSearchInput.value = '';
        document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === 'all'));
        renderProducts();
      };
    }
    return;
  }

  productListEl.innerHTML = filtered.map(p => `
    <article class="product" data-id="${p.id}">
      <div class="product-image ${p.bgTone}">
        <span class="badge">${p.badge}</span>
        <img src="${p.img}" alt="${p.name}" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85';" />
        <button class="quick-view-btn" data-id="${p.id}" aria-label="Quick view ${p.name}">
          Quick View 👁
        </button>
        <button class="add-btn" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-volume="${p.volume}" aria-label="Add ${p.name}">+</button>
      </div>
      <div class="product-meta">
        <div>
          <div class="product-brand-tag">
            <span>${p.brand}</span>
            <small class="origin-flag">${p.origin}</small>
          </div>
          <h3 class="product-title" data-id="${p.id}">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-num">${p.rating}</span>
            <span class="review-count">(${p.reviews}+ in BD)</span>
          </div>
          <div class="product-tags">
            ${p.concerns.map(c => `<span class="concern-pill">${c}</span>`).join('')}
          </div>
        </div>
        <div class="price-container">
          <strong class="bdt-price">৳ ${p.price.toLocaleString('en-IN')}</strong>
          <span class="volume-tag">${p.volume}</span>
        </div>
      </div>
    </article>
  `).join('');

  bindProductGridEvents();
}

// Bind Events on Product Grid Items
function bindProductGridEvents() {
  // Add to Bag buttons (+)
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;

      const existing = cart.find(i => i.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          brand: product.brand,
          price: product.price,
          volume: product.volume,
          img: product.img,
          qty: 1
        });
      }

      saveCart();
      renderCart();
      showToast(`Added ${product.brand} (${product.volume}) to your Bag!`);
      openCart();
    };
  });

  // Quick View triggers
  document.querySelectorAll('.quick-view-btn, .product-title').forEach(el => {
    el.onclick = () => {
      const id = el.dataset.id || el.closest('.product')?.dataset.id;
      if (id) openQuickView(id);
    };
  });
}

// Quick View Modal logic
export function openQuickView(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p || !quickViewModal || !quickViewBackdrop) return;

  quickViewModal.innerHTML = `
    <button class="close-quickview-btn" id="closeQuickViewBtn" aria-label="Close modal">×</button>
    <div class="quickview-grid">
      <div class="quickview-media ${p.bgTone}">
        <span class="badge">${p.badge}</span>
        <img src="${p.img}" alt="${p.name}" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85';" />
      </div>
      <div class="quickview-details">
        <div class="quickview-header">
          <span class="quickview-brand">${p.brand}</span>
          <span class="quickview-origin">${p.origin}</span>
        </div>
        <h2>${p.name}</h2>
        <div class="quickview-rating">
          <span class="stars">★★★★★</span>
          <strong>${p.rating} / 5.0</strong>
          <span>(${p.reviews} verified reviews in Bangladesh)</span>
        </div>
        <div class="quickview-price-row">
          <span class="quickview-price">৳ ${p.price.toLocaleString('en-IN')}</span>
          <span class="quickview-volume">Volume: ${p.volume}</span>
          <span class="authenticity-stamp">✓ 100% Genuine Direct Import</span>
        </div>

        <p class="quickview-tagline"><em>"${p.tagline}"</em></p>
        <p class="quickview-desc">${p.description}</p>

        <div class="quickview-info-box">
          <h4>🌿 Key Active Formulations</h4>
          <p>${p.keyIngredients}</p>
        </div>

        <div class="quickview-info-box">
          <h4>☀️ How to Integrate into Ritual</h4>
          <p>${p.howToUse}</p>
        </div>

        <div class="quickview-actions">
          <button class="button dark quickview-add-btn" id="modalAddBtn" data-id="${p.id}">
            Add to Ritual Bag — ৳ ${p.price.toLocaleString('en-IN')}
          </button>
        </div>
      </div>
    </div>
  `;

  quickViewBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  const modalCloseBtn = document.querySelector('#closeQuickViewBtn');
  if (modalCloseBtn) modalCloseBtn.onclick = closeQuickView;

  const modalAddBtn = document.querySelector('#modalAddBtn');
  if (modalAddBtn) {
    modalAddBtn.onclick = () => {
      const existing = cart.find(i => i.id === p.id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: p.id,
          name: p.name,
          brand: p.brand,
          price: p.price,
          volume: p.volume,
          img: p.img,
          qty: 1
        });
      }
      saveCart();
      renderCart();
      closeQuickView();
      showToast(`Added ${p.name} to your bag!`);
      openCart();
    };
  }
}

export function closeQuickView() {
  if (!quickViewBackdrop) return;
  quickViewBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (quickViewBackdrop) {
  quickViewBackdrop.onclick = (e) => {
    if (e.target === quickViewBackdrop) closeQuickView();
  };
}

// Render Cart Items inside Slide-out Drawer
export function renderCart() {
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛍️</div>
        <p>Your skincare bag is currently empty.</p>
        <a class="button dark empty-shop-btn" href="#shop" id="emptyShopBtn">Explore Bestsellers <span>↗</span></a>
      </div>
    `;
    const emptyBtn = document.querySelector('#emptyShopBtn');
    if (emptyBtn) emptyBtn.onclick = () => closeCart();
    if (checkoutSection) checkoutSection.style.display = 'none';
    calculateTotals();
    return;
  }

  // Show checkout section when cart has items
  if (checkoutSection) checkoutSection.style.display = 'block';

  let itemsHtml = '';
  cart.forEach(item => {
    itemsHtml += `
      <div class="cart-item" data-id="${item.id}">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85';">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="item-unit-price">৳ ${item.price.toLocaleString('en-IN')} ${item.volume ? `(${item.volume})` : ''}</p>
          <div class="qty-control">
            <button class="qty-btn dec-btn" data-id="${item.id}">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn inc-btn" data-id="${item.id}">+</button>
          </div>
        </div>
        <div class="cart-item-total">
          <span class="item-line-price">৳ ${(item.price * item.qty).toLocaleString('en-IN')}</span>
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = itemsHtml;
  calculateTotals();
  bindCartEvents();
}

// Bind Quantity and Remove events in cart
function bindCartEvents() {
  document.querySelectorAll('.inc-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      if (item) {
        item.qty += 1;
        saveCart();
        renderCart();
      }
    };
  });

  document.querySelectorAll('.dec-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        renderCart();
      }
    };
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      cart = cart.filter(i => i.id !== id);
      saveCart();
      renderCart();
      if (item) showToast(`${item.name} removed.`);
    };
  });
}

// Delivery Zone Radios
document.querySelectorAll('input[name="deliveryZone"]').forEach(radio => {
  radio.onchange = (e) => {
    deliveryZone = e.target.value;
    calculateTotals();
  };
});

// Payment Method Switcher (Shows bKash / Nagad / Rocket info box and TrxID input)
function updatePaymentMethodUI() {
  const selected = document.querySelector('input[name="payMethod"]:checked')?.value || 'bKash';
  if (!mfsInfoBox || !trxIdGroup) return;

  mfsInfoBox.style.display = 'block';
  trxIdGroup.style.display = 'block';
  if (trxIdInput) trxIdInput.required = true;

  if (selected === 'bKash') {
    if (mfsMethodNameEl) mfsMethodNameEl.textContent = 'bKash Personal';
    if (mfsAccountNumEl) mfsAccountNumEl.textContent = CONFIG.bKashNumber;
  } else if (selected === 'Nagad') {
    if (mfsMethodNameEl) mfsMethodNameEl.textContent = 'Nagad Personal';
    if (mfsAccountNumEl) mfsAccountNumEl.textContent = CONFIG.nagadNumber;
  } else if (selected === 'Rocket') {
    if (mfsMethodNameEl) mfsMethodNameEl.textContent = 'Rocket Personal';
    if (mfsAccountNumEl) mfsAccountNumEl.textContent = CONFIG.rocketNumber;
  }
}

document.querySelectorAll('input[name="payMethod"]').forEach(radio => {
  radio.onchange = updatePaymentMethodUI;
});

// Copy Account Number button
if (copyMfsBtn) {
  copyMfsBtn.onclick = () => {
    const num = mfsAccountNumEl?.textContent?.trim() || '';
    if (num && navigator.clipboard) {
      navigator.clipboard.writeText(num).then(() => {
        showToast(`Copied ${num} to clipboard!`);
        copyMfsBtn.textContent = 'Copied! ✓';
        setTimeout(() => {
          copyMfsBtn.textContent = 'Copy Number';
        }, 2000);
      });
    }
  };
}

// Order Submission & WhatsApp Dispatch
if (orderForm) {
  orderForm.onsubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast('Your bag is currently empty.');
      return;
    }

    const name = document.querySelector('#custName').value.trim();
    const phone = document.querySelector('#custPhone').value.trim();
    const address = document.querySelector('#custAddress').value.trim();
    const instructions = document.querySelector('#orderNotes').value.trim();
    const zoneVal = document.querySelector('input[name="deliveryZone"]:checked').value;
    const zoneName = zoneVal === '70' ? 'Inside Dhaka' : 'Outside Dhaka (Nationwide)';
    const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'bKash';
    const trxId = trxIdInput ? trxIdInput.value.trim() : '';

    if (!trxId) {
      showToast('Please enter your MFS Transaction ID (TrxID) to verify payment.');
      trxIdInput?.focus();
      return;
    }

    const { subtotal, grandTotal, effectiveDelivery, isFreeDelivery } = calculateTotals();
    const orderId = 'AYZ-' + Math.floor(100000 + Math.random() * 900000);

    // Build Receipt HTML
    const itemsSummary = cart.map(i => `• ${i.name} (${i.volume || 'std'}) × ${i.qty} — ৳ ${(i.price * i.qty).toLocaleString('en-IN')}`).join('<br>');

    if (orderReceiptEl) {
      orderReceiptEl.innerHTML = `
        <div style="display:flex; align-items:center; gap: 10px; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.08);">
          <img src="/logo.png" alt="AYZAN" style="height: 28px; width: auto; object-fit: contain; filter: drop-shadow(0 1px 3px rgba(0,0,0,0.15));" />
          <span style="font-family: var(--serif); font-size: 16px; font-weight: 700; letter-spacing: 0.16em; color: var(--ink);">AYZAN OFFICIAL RECEIPT</span>
        </div>
        <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid rgba(0,0,0,0.08);">
          <strong>Order ID:</strong> <span style="font-family: var(--mono); color: var(--clay); font-weight:700;">#${orderId}</span><br>
          <strong>Customer:</strong> ${name} (${phone})<br>
          <strong>Delivery Address:</strong> ${address}<br>
          <strong>Shipping Zone:</strong> ${zoneName} (${isFreeDelivery ? 'FREE Delivery' : '৳' + effectiveDelivery})<br>
          <strong>Payment Method:</strong> <b>${payMethod}</b>
          ${trxId ? `<br><strong>Transaction ID (TrxID):</strong> <span style="font-family: var(--mono); color: #2e7d32; font-weight:700;">${trxId}</span>` : ''}
          ${instructions ? `<br><strong>Instructions:</strong> ${instructions}` : ''}
        </div>
        <div style="margin-bottom: 12px;">
          <strong>Items Ordered:</strong><br>
          <span style="font-size: 13px; color: #55443e; line-height: 1.5;">${itemsSummary}</span>
        </div>
        <div style="font-size: 16px; font-weight: 700; color: var(--ink); border-top: 1px dashed #ccc; padding-top: 10px; display:flex; justify-content:space-between;">
          <span>Total Amount Payable:</span>
          <span style="font-family: var(--mono); color: var(--clay);">৳ ${grandTotal.toLocaleString('en-IN')}</span>
        </div>
      `;
    }

    // Build Order Summary Email Message for AYZAN Team
    const orderEmailBody = `Order ID: #${orderId}\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Delivery Address: ${address}\n` +
      `Zone: ${zoneName}\n` +
      `Payment Method: ${payMethod}\n` +
      (trxId ? `Transaction ID (TrxID): ${trxId}\n` : '') +
      `\nItems Ordered:\n` + cart.map(i => `- ${i.name} (${i.volume}) x${i.qty} = ৳${i.price * i.qty}`).join('\n') + `\n\n` +
      `Subtotal: ৳${subtotal}\n` +
      `Delivery Charge: ${isFreeDelivery ? 'FREE (৳0)' : '৳' + effectiveDelivery}\n` +
      `Total Amount: ৳${grandTotal}\n` +
      (instructions ? `Customer Notes: ${instructions}\n` : '') +
      `\nSent from ayzan.me`;

    // Email dispatch directly to her.skincare@ayzan.me
    if (mailOrderBtn) {
      const emailSubject = `Order Confirmation #${orderId} - ${name} (AYZAN Skincare)`;
      mailOrderBtn.href = `mailto:${CONFIG.officialEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(orderEmailBody)}`;
    }

    // Save Order into User Account & History (Enriched for Admin Dashboard)
    const newOrderRecord = {
      id: orderId,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      timestamp: Date.now(),
      customerName: name,
      customerPhone: phone,
      customerAddress: address,
      customerNotes: instructions,
      zone: zoneName,
      deliveryCharge: isFreeDelivery ? 0 : effectiveDelivery,
      subtotal: subtotal,
      total: grandTotal,
      payMethod: payMethod,
      trxId: trxId,
      status: 'Pending Verification',
      items: cart.map(i => ({
        id: i.id,
        name: i.name,
        volume: i.volume || 'std',
        price: i.price,
        qty: i.qty,
        img: i.img
      })),
      itemsSummary: cart.map(i => `${i.name} (${i.volume || 'std'}) × ${i.qty}`)
    };

    allOrders.unshift(newOrderRecord);
    localStorage.setItem('ayzan_orders', JSON.stringify(allOrders));

    if (currentUser) {
      if (!currentUser.orders) currentUser.orders = [];
      currentUser.orders.unshift(newOrderRecord);
      localStorage.setItem('ayzan_current_user', JSON.stringify(currentUser));
      const uIdx = usersDb.findIndex(u => u.email === currentUser.email || u.phone === currentUser.phone);
      if (uIdx > -1) {
        usersDb[uIdx] = currentUser;
        localStorage.setItem('ayzan_users_db', JSON.stringify(usersDb));
      }
    }

    // Reset Form & Clear Cart
    orderForm.reset();
    cart = [];
    saveCart();
    renderCart();
    closeCart();

    // Show Confirmation Modal
    if (orderModalBackdrop) {
      orderModalBackdrop.classList.add('open');
    }
  };
}

// Close Order Confirmation Modal
if (closeOrderModalBtn && orderModalBackdrop) {
  closeOrderModalBtn.onclick = () => {
    orderModalBackdrop.classList.remove('open');
  };
  orderModalBackdrop.onclick = (e) => {
    if (e.target === orderModalBackdrop) {
      orderModalBackdrop.classList.remove('open');
    }
  };
}

// Newsletter Subscription
if (subscribeForm) {
  subscribeForm.onsubmit = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    showToast(`Welcome to the Ayzan VIP Dispatch, ${email}!`);
    subscribeForm.reset();
  };
}

// Category Filter Pills Handlers & Dynamic Counters
export function updateFilterPillCounts() {
  if (!filterPillsContainer) return;
  const counts = {
    all: PRODUCTS.length,
    sunscreen: PRODUCTS.filter(p => p.category === 'sunscreen').length,
    serums: PRODUCTS.filter(p => p.category === 'serums').length,
    cleansers: PRODUCTS.filter(p => p.category === 'cleansers').length,
    moisturizers: PRODUCTS.filter(p => p.category === 'moisturizers').length,
    toners: PRODUCTS.filter(p => p.category === 'toners').length,
  };
  const labels = {
    all: `All Bestsellers (${counts.all})`,
    sunscreen: `Sun Protection ☀️ (${counts.sunscreen})`,
    serums: `Serums & Actives ✨ (${counts.serums})`,
    cleansers: `Gentle Cleansers 💧 (${counts.cleansers})`,
    moisturizers: `Moisturizers & Creams 🌿 (${counts.moisturizers})`,
    toners: `Toners & Essences 🌸 (${counts.toners})`
  };
  filterPillsContainer.querySelectorAll('.filter-pill').forEach(btn => {
    const cat = btn.dataset.cat;
    if (labels[cat]) {
      btn.textContent = labels[cat];
    }
  });
}

if (filterPillsContainer) {
  filterPillsContainer.querySelectorAll('.filter-pill').forEach(btn => {
    btn.onclick = () => {
      filterPillsContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat || 'all';
      renderProducts();
    };
  });
  updateFilterPillCounts();
}

// Live Search Input Handler
if (productSearchInput) {
  productSearchInput.oninput = (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderProducts();
  };
}

// ====================================================
// AYZAN AI SKIN ADVISOR BOT ENGINE
// ====================================================

function openAdvisorChat() {
  if (!advisorChatWindow) return;
  advisorChatWindow.classList.add('open');
  if (advisorInput) {
    setTimeout(() => advisorInput.focus(), 250);
  }
}

function closeAdvisorChat() {
  if (!advisorChatWindow) return;
  advisorChatWindow.classList.remove('open');
}

if (openAdvisorBtn) openAdvisorBtn.onclick = openAdvisorChat;
if (closeAdvisorBtn) closeAdvisorBtn.onclick = closeAdvisorChat;
if (bottomAdvisorBtn) bottomAdvisorBtn.onclick = openAdvisorChat;

// Helper to escape HTML characters
function escapeAdvisorHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Bot knowledge engine & recommendation logic
function getAdvisorBotResponse(rawQuery) {
  const q = rawQuery.toLowerCase().trim();

  // 1. Talk to Real Person / Human Concierge / WhatsApp inquiry
  const isHumanInquiry = /human|person|real|doctor|specialist|founder|contact|talk|call|phone|email|mail|whatsapp|concierge|support|help me choose/i.test(q);
  if (isHumanInquiry) {
    return {
      message: `
        <p>I would be delighted to connect you with our <strong>Skincare Specialist & Human Concierge</strong>! 🌸</p>
        <p><em>Please note: We do not offer WhatsApp support yet.</em> However, our senior specialists review customer skin profiles and reply via email with detailed routines, ingredient checks, and personalized guidance within 2–4 hours.</p>
      `,
      showContact: true,
      productIds: []
    };
  }

  // 2. Oily & Acne-Prone Skin / Pores / Humidity in BD
  if (/oily|acne|breakout|pimple|pore|sebum|greas|humid|sweat/i.test(q)) {
    return {
      message: `
        <p><strong>For Oily & Acne-Prone Skin in Bangladesh’s Humidity:</strong></p>
        <p>Heat and humidity trigger excess sebum, which traps city dust and leads to clogged pores and active breakouts. The secret is <em>pore purifying without stripping the moisture barrier</em>.</p>
        <p><strong>Recommended Routine:</strong><br>
        1. <strong>Cleanse:</strong> COSRX Low pH Gel Cleanser (natural BHA + tea tree gently unblocks pores).<br>
        2. <strong>Balance & Soothe:</strong> Anua Heartleaf 77% Toner (calms redness and balances oil-water levels).<br>
        3. <strong>Treat Sebum:</strong> The Ordinary Niacinamide 10% + Zinc 1% (tightens pores & fades blemishes).<br>
        4. <strong>Hydrate & Shield:</strong> SKIN1004 Centella Soothing Cream (oil-free ceramide gel) + SKIN1004 Hyalu-Cica Sun Serum (SPF 50+ water-fit serum, zero grease).</p>
      `,
      showContact: false,
      productIds: ['cosrx-good-morning-cleanser', 'anua-heartleaf-77-toner', 'the-ordinary-niacinamide', 'skin1004-hyalu-cica-sun']
    };
  }

  // 3. Sunscreen & Zero White Cast
  if (/sunscreen|sun block|sunblock|spf|white cast|tan|sun damage|uv/i.test(q)) {
    return {
      message: `
        <p><strong>No-Cast Sun Protection for South Asian Skin:</strong></p>
        <p>Daily broad-spectrum sunscreen is the single most important step to prevent dark spots, tanning, and barrier breakdown. Forget thick, chalky sunscreens that sweat off in Bangladesh weather!</p>
        <p>Our two holy-grail Korean sunscreens offer <strong>SPF 50+ PA++++</strong> and melt invisibly into the skin with <strong>absolutely zero white cast</strong>:</p>
        <p>• <strong>Beauty of Joseon Relief Sun:</strong> Organic Rice + Probiotics. Silky lotion texture that imparts a natural glass glow.<br>
        • <strong>SKIN1004 Hyalu-Cica Water-Fit Sun Serum:</strong> Centella + Hyaluronic Acid. Featherlight cooling serum, ideal for oily skin and high humidity.</p>
      `,
      showContact: false,
      productIds: ['boj-relief-sun', 'skin1004-hyalu-cica-sun']
    };
  }

  // 4. Dark Spots, Hyperpigmentation, Post-Acne Scars
  if (/dark spot|dark spots|hyperpigmentation|pigmentation|scar|scars|blemish|mark|marks|melasma|brighten/i.test(q)) {
    return {
      message: `
        <p><strong>Fading Dark Spots & Post-Acne Marks (PIH):</strong></p>
        <p>Post-inflammatory dark marks from breakouts take months to fade if untreated. Combining targeted Niacinamide with cellular barrier repair speeds up skin renewal exponentially:</p>
        <p>• <strong>Star Brightening Serum:</strong> AXIS-Y Dark Spot Correcting Glow Serum features 5% Niacinamide + Rice Bran to stop melanin overproduction without stinging.<br>
        • <strong>Tissue Regeneration:</strong> COSRX Advanced Snail 96 Mucin Power Essence repairs skin layers and smooths pitted texture.<br>
        • <strong>Daily Defense:</strong> Beauty of Joseon Relief Sun protects fresh marks from UV exposure so they don't turn permanently dark.</p>
      `,
      showContact: false,
      productIds: ['axis-y-dark-spot-serum', 'cosrx-snail-96-essence', 'boj-relief-sun']
    };
  }

  // 5. Damaged Skin Barrier, Redness, Irritation, Sensitivity
  if (/barrier|damaged|redness|red|sensitiv|irritat|burn|sting|peel/i.test(q)) {
    return {
      message: `
        <p><strong>Damaged Barrier & Sensitive Skin Emergency:</strong></p>
        <p>If your skin feels tight, inflamed, or stings when applying basic products, your lipid barrier is compromised! Put all harsh acids and exfoliating scrubs on hold and focus strictly on barrier reconstitution:</p>
        <p>• <strong>Immediate Calm:</strong> Anua Heartleaf 77% Soothing Toner instantly cools down inflamed capillaries.<br>
        • <strong>Intense Repair:</strong> COSRX Snail 96 Mucin Essence drenches skin with bio-active panthenol and snail filtrate to accelerate healing.<br>
        • <strong>Ceramide Seal:</strong> SKIN1004 Madagascar Centella Soothing Cream infuses 4 biological ceramides that replicate your skin’s natural lipid shield.</p>
      `,
      showContact: false,
      productIds: ['anua-heartleaf-77-toner', 'cosrx-snail-96-essence', 'skin1004-centella-soothing-cream']
    };
  }

  // 6. Dry, Dull Skin, Glow & Korean Glass Skin
  if (/dry|dull|dehydrat|flak|glow|glass skin|radiance|honey|nourish/i.test(q)) {
    return {
      message: `
        <p><strong>Achieving Korean 'Glass Skin' for Dry & Dull Complexions:</strong></p>
        <p>To turn lackluster, tired skin into luminous glass skin, layer fermented nutrients and hydrating extracts (the Korean moisture-sandwich ritual):</p>
        <p>• <strong>Plump & Hydrate:</strong> I'm From Rice Toner (77.78% Yeoju Rice Extract) clears dullness and creates an illuminating milky moisture veil.<br>
        • <strong>Honey Glass Radiance:</strong> Beauty of Joseon Glow Serum (60% Propolis + 2% Niacinamide) calms micro-inflammation and delivers a radiant honey glow.<br>
        • <strong>Lock In Dewiness:</strong> COSRX Snail 96 Mucin seals hydration deep into the dermis.</p>
      `,
      showContact: false,
      productIds: ['im-from-rice-toner', 'boj-glow-serum-propolis', 'cosrx-snail-96-essence']
    };
  }

  // 7. Cleansers
  if (/cleanse|cleanser|facewash|face wash|wash/i.test(q)) {
    return {
      message: `
        <p><strong>Gentle pH-Balanced Cleansing Formulations:</strong></p>
        <p>A good cleanser purifies dust, sweat, and makeup without disrupting your natural acid mantle (pH 5.5):</p>
        <p>• <strong>COSRX Low pH Good Morning Gel Cleanser (৳990):</strong> Infused with natural BHA & tea tree oil. Perfect for oily, combination, and acne-prone skin.<br>
        • <strong>Simple Refreshing Facial Wash Gel (৳690):</strong> 100% soap-free, dermatologically approved for sensitive skin.</p>
      `,
      showContact: false,
      productIds: ['cosrx-good-morning-cleanser', 'simple-refreshing-wash']
    };
  }

  // 8. Toners & Essences
  if (/toner|toners|essence/i.test(q)) {
    return {
      message: `
        <p><strong>Holy-Grail Korean Toners & Essences:</strong></p>
        <p>In Asian skincare, toners balance pH and prep skin to absorb serums 3x deeper:</p>
        <p>• <strong>Anua Heartleaf 77% Toner (৳1,650):</strong> The #1 viral toner in Korea for calming breakouts and redness.<br>
        • <strong>I'm From Rice Toner (৳1,750):</strong> Organic Yeoju rice extract for deep nourishment and brightening.<br>
        • <strong>COSRX Snail 96 Mucin Essence (৳1,450):</strong> Pure snail secretion filtrate for plumping and repair.</p>
      `,
      showContact: false,
      productIds: ['anua-heartleaf-77-toner', 'im-from-rice-toner', 'cosrx-snail-96-essence']
    };
  }

  // 9. Shipping & Delivery
  if (/shipping|delivery|courier|charge|dhaka|outside dhaka|how long|fast|area|district/i.test(q)) {
    return {
      message: `
        <p><strong>🚚 AYZAN Delivery across Bangladesh:</strong></p>
        <p>• <strong>Inside Dhaka:</strong> ৳70 delivery fee. Delivered within 24–48 hours.<br>
        • <strong>Outside Dhaka (All 64 Districts):</strong> ৳130 delivery fee. Delivered within 2–3 business days via Steadfast / Pathao Express.<br>
        • <strong>FREE Nationwide Delivery:</strong> Unlocked automatically on all orders over <strong>৳ 2,500</strong>! 🎁</p>
      `,
      showContact: false,
      productIds: []
    };
  }

  // 10. Payment & Cash on Delivery Policy
  if (/payment|pay|bkash|nagad|rocket|cash on delivery|cod|advance|trxid|transaction/i.test(q)) {
    return {
      message: `
        <p><strong>💳 Payment Policy at AYZAN Skincare:</strong></p>
        <p>To ensure 100% genuine order authenticity and immediate warehouse dispatch, we accept <strong>100% advance payment via MFS</strong>:</p>
        <p>• 🌸 <strong>bKash Personal:</strong> 01831428847<br>
        • 🟠 <strong>Nagad Personal:</strong> 01831428847<br>
        • 🟣 <strong>Rocket:</strong> 01831428847</p>
        <p><em>Please note: We do not accept Cash on Delivery (COD).</em> Simply complete 'Send Money' and enter your Transaction ID (TrxID) in the checkout drawer to place your order!</p>
      `,
      showContact: false,
      productIds: []
    };
  }

  // 11. Authenticity Guarantee
  if (/authentic|original|fake|replica|real|guarantee|batch|korea|genuine/i.test(q)) {
    return {
      message: `
        <p><strong>✨ 100% Authenticity Guarantee:</strong></p>
        <p>We know how dangerous counterfeit skincare is in Bangladesh. Every product at AYZAN is:</p>
        <p>• Sourced directly from authorized Korean & Canadian brand channels.<br>
        • Verified with genuine manufacturer batch codes & holographic seals.<br>
        • Stored in climate-controlled conditions to protect active ingredients.<br>
        • Backed by our 100% Money-Back Authenticity Guarantee.</p>
      `,
      showContact: false,
      productIds: []
    };
  }

  // 12. Default Fallback
  return {
    message: `
      <p>Hello! I am your <strong>AYZAN Skin Advisor</strong> 🌸</p>
      <p>I can help diagnose your concerns and build a climate-adapted routine. What would you like to explore?</p>
      <p>• <strong>Oily & Acne Skin:</strong> Sebum control & calming redness.<br>
      • <strong>Sun Protection:</strong> Lightweight SPF 50+ with zero white cast.<br>
      • <strong>Dark Spots & Scars:</strong> Fading hyperpigmentation & brightening.<br>
      • <strong>Barrier Repair:</strong> Healing irritated, burning skin.<br>
      • <strong>Dry & Dull Skin:</strong> Achieving a dewy Korean glass glow.</p>
    `,
    showContact: true,
    productIds: ['boj-relief-sun', 'cosrx-snail-96-essence', 'axis-y-dark-spot-serum']
  };
}

// Function to handle sending advisor messages
function handleUserAdvisorMessage(userText) {
  if (!userText || !advisorChatBody) return;

  // 1. Append User Message
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'advisor-message user-message';
  userMsgEl.innerHTML = `
    <div class="message-content">
      <p>${escapeAdvisorHtml(userText)}</p>
    </div>
  `;
  advisorChatBody.appendChild(userMsgEl);
  advisorChatBody.scrollTop = advisorChatBody.scrollHeight;

  // 2. Append Typing Indicator
  const typingEl = document.createElement('div');
  typingEl.className = 'advisor-message bot-message typing-indicator-msg';
  typingEl.innerHTML = `
    <div class="message-content" style="padding: 10px 14px; color: #8e7a72; font-style: italic;">
      <span>AYZAN Advisor is typing... ✨</span>
    </div>
  `;
  advisorChatBody.appendChild(typingEl);
  advisorChatBody.scrollTop = advisorChatBody.scrollHeight;

  // 3. Process & Display Bot Response after realistic delay
  setTimeout(() => {
    typingEl.remove();

    const response = getAdvisorBotResponse(userText);
    const botMsgEl = document.createElement('div');
    botMsgEl.className = 'advisor-message bot-message';

    let productCardsHtml = '';
    if (response.productIds && response.productIds.length > 0) {
      const matchedProducts = PRODUCTS.filter(p => response.productIds.includes(p.id));
      if (matchedProducts.length > 0) {
        productCardsHtml = `
          <div style="margin-top: 10px; border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 8px;">
            <strong style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--clay);">Recommended Formulations:</strong>
            ${matchedProducts.map(p => `
              <div class="advisor-product-card">
                <img src="${p.img}" alt="${p.name}" class="advisor-product-thumb" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85';" />
                <div class="advisor-product-info">
                  <h5>${p.name}</h5>
                  <span>৳ ${p.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="advisor-add-btn" data-id="${p.id}" title="Add to Bag">+ Bag</button>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    let contactBoxHtml = '';
    if (response.showContact) {
      const emailSubject = 'Skincare Consultation Request - AYZAN';
      const emailBody = 'Hi AYZAN Skincare Specialist Team,\n\nI would like personalized advice for my skin:\n- My Skin Type:\n- My Main Concerns:\n- Products I Currently Use:\n- Questions:\n\nThank you!';
      contactBoxHtml = `
        <div class="advisor-contact-box">
          <p><strong>Senior Skincare Concierge</strong><br>
          Direct Email: <b>her.skincare@ayzan.me</b><br>
          <small style="color: #7a6861;">• Response within 2–4 hours<br>• Free one-on-one routine analysis</small></p>
          <a href="mailto:${CONFIG.officialEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}" class="advisor-mail-btn">
            ✉️ Email Skincare Specialist
          </a>
        </div>
      `;
    } else {
      // Subtle footer note for direct human assistance
      contactBoxHtml = `
        <div style="margin-top: 8px; font-size: 11.5px; color: #7b6a63;">
          Want to consult our human specialist? <a href="mailto:${CONFIG.officialEmail}" style="color: var(--clay); font-weight: 600; text-decoration: underline;">Email her.skincare@ayzan.me ↗</a>
        </div>
      `;
    }

    botMsgEl.innerHTML = `
      <div class="message-content">
        ${response.message}
        ${productCardsHtml}
        ${contactBoxHtml}
      </div>
    `;

    advisorChatBody.appendChild(botMsgEl);
    advisorChatBody.scrollTop = advisorChatBody.scrollHeight;
  }, 420);
}

// Delegate Add to Bag button clicks inside Advisor Chat
if (advisorChatBody) {
  advisorChatBody.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.advisor-add-btn');
    if (!addBtn) return;
    const id = addBtn.dataset.id;
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        volume: product.volume,
        img: product.img,
        qty: 1
      });
    }

    saveCart();
    renderCart();
    showToast(`Added ${product.brand} (${product.volume}) to your Bag!`);
    openCart();
  });
}

// Quick Pill Click Handler
if (advisorQuickPills) {
  advisorQuickPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.quick-pill');
    if (!pill) return;
    const query = pill.dataset.query || pill.textContent.trim();
    handleUserAdvisorMessage(query);
  });
}

// Chat Form Submit Handler
if (advisorChatForm) {
  advisorChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!advisorInput) return;
    const text = advisorInput.value.trim();
    if (!text) return;
    advisorInput.value = '';
    handleUserAdvisorMessage(text);
  });
}

// ====================================================
// AYZAN USER AUTHENTICATION & DASHBOARD ENGINE
// ====================================================

// Update Account UI based on auth state
export function updateAuthUI() {
  if (currentUser) {
    const firstName = currentUser.name.split(' ')[0] || currentUser.name;
    if (accountNameEl) accountNameEl.textContent = firstName;
    if (accountBtn) accountBtn.classList.add('logged-in');
    if (mobileAccountBtn) mobileAccountBtn.textContent = `👤 ${currentUser.name} (VIP)`;
    if (bottomAccountLabel) bottomAccountLabel.textContent = firstName;
  } else {
    if (accountNameEl) accountNameEl.textContent = 'Sign In';
    if (accountBtn) accountBtn.classList.remove('logged-in');
    if (mobileAccountBtn) mobileAccountBtn.textContent = '👤 Sign In / My Account';
    if (bottomAccountLabel) bottomAccountLabel.textContent = 'Account';
  }
}

// Switch Auth Tabs (Sign In / Register)
function switchAuthTab(tab) {
  const modalTitle = document.querySelector('#authModalTitle');
  const modalSub = document.querySelector('#authModalSub');
  if (tab === 'register') {
    tabSignInBtn?.classList.remove('active');
    tabRegisterBtn?.classList.add('active');
    signInPanel?.classList.remove('active');
    registerPanel?.classList.add('active');
    if (modalTitle) modalTitle.textContent = 'Join AYZAN VIP';
    if (modalSub) modalSub.textContent = 'Create your ritual profile for personalized K-beauty care in Bangladesh.';
  } else {
    tabSignInBtn?.classList.add('active');
    tabRegisterBtn?.classList.remove('active');
    signInPanel?.classList.add('active');
    registerPanel?.classList.remove('active');
    if (modalTitle) modalTitle.textContent = 'Welcome Back';
    if (modalSub) modalSub.textContent = 'Access saved addresses, past order tracking, and custom skin routines.';
  }
}

if (tabSignInBtn) tabSignInBtn.onclick = () => switchAuthTab('signin');
if (tabRegisterBtn) tabRegisterBtn.onclick = () => switchAuthTab('register');

// Open / Close Auth Modal
function openAuthModal(tab = 'signin') {
  if (!authModalBackdrop) return;
  switchAuthTab(tab);
  authModalBackdrop.classList.add('open');
}

function closeAuthModal() {
  if (!authModalBackdrop) return;
  authModalBackdrop.classList.remove('open');
}

if (closeAuthBtn) closeAuthBtn.onclick = closeAuthModal;
if (authModalBackdrop) {
  authModalBackdrop.onclick = (e) => {
    if (e.target === authModalBackdrop) closeAuthModal();
  };
}

// Switch Dashboard Tabs (Orders / Saved Profile)
function switchDashTab(tab) {
  if (tab === 'profile') {
    tabDashOrdersBtn?.classList.remove('active');
    tabDashProfileBtn?.classList.add('active');
    dashOrdersPanel?.classList.remove('active');
    dashProfilePanel?.classList.add('active');
  } else {
    tabDashOrdersBtn?.classList.add('active');
    tabDashProfileBtn?.classList.remove('active');
    dashOrdersPanel?.classList.add('active');
    dashProfilePanel?.classList.remove('active');
  }
}

if (tabDashOrdersBtn) tabDashOrdersBtn.onclick = () => switchDashTab('orders');
if (tabDashProfileBtn) tabDashProfileBtn.onclick = () => switchDashTab('profile');

// Open Account Dashboard Modal
function openAccountDashboard() {
  if (!currentUser || !accountModalBackdrop) return;

  // Render User Profile Information
  const initials = currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'VIP';
  if (dashAvatarEl) dashAvatarEl.textContent = initials;
  if (dashNameEl) dashNameEl.textContent = currentUser.name;
  if (dashEmailEl) dashEmailEl.innerHTML = `${currentUser.email} • <span class="vip-tag">AYZAN VIP Member</span>`;

  // Render Past Orders
  const userOrders = currentUser.orders || [];
  if (dashOrdersCountEl) dashOrdersCountEl.textContent = userOrders.length;

  if (dashOrdersListEl) {
    if (userOrders.length === 0) {
      dashOrdersListEl.innerHTML = `
        <div class="dash-empty-orders">
          <p>You haven't placed any ritual orders yet.</p>
          <button class="button dark" style="font-size:12px; padding:8px 16px; margin-top:8px;" id="dashShopRedirectBtn">Explore Bestsellers ↗</button>
        </div>
      `;
      const redirectBtn = document.querySelector('#dashShopRedirectBtn');
      if (redirectBtn) {
        redirectBtn.onclick = () => {
          closeAccountDashboard();
          location.href = '#shop';
        };
      }
    } else {
      dashOrdersListEl.innerHTML = userOrders.slice().reverse().map(ord => `
        <div class="dash-order-card">
          <div class="dash-order-head">
            <span class="dash-order-id">#${ord.id}</span>
            <span class="dash-order-status">${ord.status || 'Confirmed • Packing in Dhaka Hub 🌸'}</span>
          </div>
          <div class="dash-order-items">
            ${Array.isArray(ord.items) ? ord.items.map(i => `• ${i}`).join('<br>') : ord.items}
          </div>
          <div class="dash-order-footer">
            <span>Payment: <b>${ord.payMethod || 'bKash'}</b> ${ord.trxId ? `(TrxID: ${ord.trxId})` : ''}</span>
            <strong>৳ ${(ord.total || 0).toLocaleString('en-IN')}</strong>
          </div>
        </div>
      `).join('');
    }
  }

  // Populate Edit Profile Form
  const editName = document.querySelector('#editName');
  const editEmail = document.querySelector('#editEmail');
  const editPhone = document.querySelector('#editPhone');
  const editZone = document.querySelector('#editZone');
  const editAddress = document.querySelector('#editAddress');
  const editSkinType = document.querySelector('#editSkinType');

  if (editName) editName.value = currentUser.name || '';
  if (editEmail) editEmail.value = currentUser.email || '';
  if (editPhone) editPhone.value = currentUser.phone || '';
  if (editZone) editZone.value = currentUser.zone || '70';
  if (editAddress) editAddress.value = currentUser.address || '';
  if (editSkinType) editSkinType.value = currentUser.skinType || 'combination';

  switchDashTab('orders');
  accountModalBackdrop.classList.add('open');
}

function closeAccountDashboard() {
  if (!accountModalBackdrop) return;
  accountModalBackdrop.classList.remove('open');
}

if (closeAccountModalBtn) closeAccountModalBtn.onclick = closeAccountDashboard;
if (accountModalBackdrop) {
  accountModalBackdrop.onclick = (e) => {
    if (e.target === accountModalBackdrop) closeAccountDashboard();
  };
}

// Global Account Trigger (Header, Mobile Menu, Mobile Bottom Bar)
function handleAccountTrigger() {
  if (currentUser) {
    openAccountDashboard();
  } else {
    openAuthModal('signin');
  }
}

if (accountBtn) accountBtn.onclick = handleAccountTrigger;
if (mobileAccountBtn) mobileAccountBtn.onclick = handleAccountTrigger;
if (bottomAccountBtn) bottomAccountBtn.onclick = handleAccountTrigger;

// Sign In Form Submission
if (signInForm) {
  signInForm.onsubmit = (e) => {
    e.preventDefault();
    const identifier = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    const user = usersDb.find(u => 
      (u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier) && 
      u.password === password
    );

    if (!user) {
      showToast('Invalid credentials. Check your email/phone and password, or use 1-Click Demo Login!');
      return;
    }

    currentUser = user;
    localStorage.setItem('ayzan_current_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showToast(`Welcome back, ${currentUser.name}! ✨`);
  };
}

// 1-Click VIP Demo Login (Nusrat Jahan)
if (demoLoginBtn) {
  demoLoginBtn.onclick = () => {
    const demoUser = usersDb.find(u => u.id === 'user_nusrat') || usersDb[0];
    if (demoUser) {
      currentUser = demoUser;
      localStorage.setItem('ayzan_current_user', JSON.stringify(currentUser));
      updateAuthUI();
      closeAuthModal();
      showToast(`Logged in as VIP Member: ${currentUser.name}! 🌸`);
    }
  };
}

// Register Form Submission
if (registerForm) {
  registerForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector('#regName').value.trim();
    const email = document.querySelector('#regEmail').value.trim().toLowerCase();
    const phone = document.querySelector('#regPhone').value.trim();
    const zone = document.querySelector('#regZone').value;
    const address = document.querySelector('#regAddress').value.trim();
    const skinType = document.querySelector('#regSkinType').value;
    const password = document.querySelector('#regPassword').value.trim();

    // Check if user already exists
    const existing = usersDb.find(u => u.email === email || u.phone === phone);
    if (existing) {
      showToast('An account with this email or phone number already exists. Please Sign In.');
      switchAuthTab('signin');
      const loginIdInput = document.querySelector('#loginEmail');
      if (loginIdInput) loginIdInput.value = email;
      return;
    }

    const newUser = {
      id: 'user_' + Date.now(),
      name,
      email,
      phone,
      zone,
      address,
      skinType,
      password,
      orders: []
    };

    usersDb.push(newUser);
    localStorage.setItem('ayzan_users_db', JSON.stringify(usersDb));

    currentUser = newUser;
    localStorage.setItem('ayzan_current_user', JSON.stringify(currentUser));

    updateAuthUI();
    closeAuthModal();
    registerForm.reset();
    showToast(`Welcome to AYZAN Skincare, ${name}! Your VIP account is ready. 🌸`);
  };
}

// Update Profile Form Submission
if (updateProfileForm) {
  updateProfileForm.onsubmit = (e) => {
    e.preventDefault();
    if (!currentUser) return;

    currentUser.name = document.querySelector('#editName').value.trim();
    currentUser.email = document.querySelector('#editEmail').value.trim().toLowerCase();
    currentUser.phone = document.querySelector('#editPhone').value.trim();
    currentUser.zone = document.querySelector('#editZone').value;
    currentUser.address = document.querySelector('#editAddress').value.trim();
    currentUser.skinType = document.querySelector('#editSkinType').value;

    localStorage.setItem('ayzan_current_user', JSON.stringify(currentUser));

    const dbIdx = usersDb.findIndex(u => u.id === currentUser.id);
    if (dbIdx > -1) {
      usersDb[dbIdx] = currentUser;
      localStorage.setItem('ayzan_users_db', JSON.stringify(usersDb));
    }

    updateAuthUI();
    closeAccountDashboard();
    showToast('Your ritual profile and saved address have been updated! ✓');
  };
}

// Ask Advisor for My Skin Profile
if (askAdvisorWithProfileBtn) {
  askAdvisorWithProfileBtn.onclick = () => {
    closeAccountDashboard();
    openAdvisorChat();
    const skinType = currentUser?.skinType || 'combination';
    const queryMap = {
      oily: 'Oily & Acne-Prone Skin routine in BD humidity',
      dry: 'Dry and dull skin glow routine',
      sensitive: 'Damaged skin barrier repair routine',
      combination: 'Best routine for combination skin in Bangladesh humidity'
    };
    const query = queryMap[skinType] || 'Curate a personalized ritual for my skin';
    setTimeout(() => {
      handleUserAdvisorMessage(query);
    }, 300);
  };
}

// Sign Out
if (signOutBtn) {
  signOutBtn.onclick = () => {
    currentUser = null;
    localStorage.removeItem('ayzan_current_user');
    updateAuthUI();
    closeAccountDashboard();
    showToast('You have been signed out. Until your next ritual! ✨');
  };
}

// Forgot Password Prompt
if (forgotPassBtn) {
  forgotPassBtn.onclick = () => {
    const email = document.querySelector('#loginEmail')?.value.trim();
    if (email) {
      showToast(`Password reset link dispatched to ${email} (Check your inbox) ✉️`);
    } else {
      showToast('Enter your registered email address above and click Forgot again.');
      document.querySelector('#loginEmail')?.focus();
    }
  };
}

// Password Visibility Toggles
if (toggleLoginPassBtn) {
  toggleLoginPassBtn.onclick = () => {
    const input = document.querySelector('#loginPassword');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
      toggleLoginPassBtn.textContent = input.type === 'password' ? '👁️' : '🙈';
    }
  };
}

if (toggleRegPassBtn) {
  toggleRegPassBtn.onclick = () => {
    const input = document.querySelector('#regPassword');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
      toggleRegPassBtn.textContent = input.type === 'password' ? '👁️' : '🙈';
    }
  };
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  updatePaymentMethodUI();
  updateAuthUI();
  updateFilterPillCounts();
});

// Run once immediately in case DOM is already ready
renderProducts();
renderCart();
updatePaymentMethodUI();
updateAuthUI();
updateFilterPillCounts();

// Expose global helpers on window for UI triggers & automated testing
if (typeof window !== 'undefined') {
  window.openCart = openCart;
  window.closeCart = closeCart;
  window.openAdvisorChat = openAdvisorChat;
  window.closeAdvisorChat = closeAdvisorChat;
  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;
  window.openAccountDashboard = openAccountDashboard;
  window.closeAccountDashboard = closeAccountDashboard;
  window.handleAccountTrigger = handleAccountTrigger;
  window.clearCart = () => {
    cart = [];
    saveCart();
    renderCart();
  };

  window.AYZAN = {
    PRODUCTS,
    CONFIG,
    getCart: () => cart,
    addToCart: (productId) => {
      const p = PRODUCTS.find(x => x.id === productId);
      if (!p) return false;
      const existing = cart.find(x => x.id === productId);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: p.id,
          name: p.name,
          brand: p.brand,
          price: p.price,
          volume: p.volume,
          img: p.img,
          qty: 1
        });
      }
      saveCart();
      renderCart();
      return true;
    },
    clearCart: () => {
      cart = [];
      saveCart();
      renderCart();
    },
    getCurrentUser: () => currentUser,
    openCart,
    closeCart,
    openAdvisorChat,
    closeAdvisorChat,
    openAuthModal,
    closeAuthModal,
    openAccountDashboard,
    closeAccountDashboard,
    openQuickView,
    closeQuickView,
    showToast
  };
}

