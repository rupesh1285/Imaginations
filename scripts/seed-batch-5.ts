import { prisma } from '../src/lib/prisma';

async function main() {
  const hampersCat = await prisma.category.upsert({ where: { name: 'Gift Hampers' }, update: {}, create: { name: 'Gift Hampers' } });
  const decorCat = await prisma.category.upsert({ where: { name: 'Decor & Lamps' }, update: {}, create: { name: 'Decor & Lamps' } });
  const keychainsCat = await prisma.category.upsert({ where: { name: 'Keychains' }, update: {}, create: { name: 'Keychains' } });
  const drinkwareCat = await prisma.category.upsert({ where: { name: 'Drinkware' }, update: {}, create: { name: 'Drinkware' } });
  const accessoriesCat = await prisma.category.upsert({ where: { name: 'Accessories' }, update: {}, create: { name: 'Accessories' } });

  const products = [
    {
      name: 'Carousel Butterfly Centerpiece',
      tagline: 'A magical focal point',
      description: 'A stunning illuminated carousel-style centerpiece adorned with holographic butterflies, sparkling pillars, and vibrant purple and white roses.',
      price: 45.00,
      imageUrls: ['/images/carousel-butterfly-centerpiece.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Warm fairy light illumination', 'Holographic butterfly accents', 'Sturdy sparkling pillars', 'Realistic faux roses'],
      rating: 4.8,
      reviews: 95
    },
    {
      name: 'Pink Star Bow Bracelet',
      tagline: 'Y2K aesthetic jewelry',
      description: 'A cute Y2K-inspired bracelet featuring frosted pink beads, large clear star beads, silver star charms, and a prominent pink acrylic bow pendant.',
      price: 14.50,
      imageUrls: ['/images/pink-star-bow-bracelet.jpeg'],
      categoryId: accessoriesCat.id,
      inStock: true,
      features: ['Large pink acrylic bow', 'Frosted pastel beads', 'Silver alloy star charms', 'Secure lobster clasp'],
      rating: 4.7,
      reviews: 210
    },
    {
      name: 'Brown Bear Thermos Bottle',
      tagline: 'Warm hugs in a mug',
      description: 'An adorably designed insulated thermos water bottle featuring a milk tea brown color scheme, a 3D bear on the lid, and matching brown carrying straps.',
      price: 28.00,
      imageUrls: ['/images/brown-bear-thermos.jpeg'],
      categoryId: drinkwareCat.id,
      inStock: true,
      features: ['Double-wall insulation', '3D silicone bear lid', 'Included woven carrying strap', 'Spill-proof design'],
      rating: 4.9,
      reviews: 144
    },
    {
      name: 'Fluffy Cat Keychains',
      tagline: 'Purr-fect companions',
      description: 'Ultra-soft, incredibly fluffy cat plush keychains. Choose from various styles including cats wearing knit scarves, angel wings, devil wings, or cute ribbon bows.',
      price: 11.99,
      imageUrls: ['/images/fluffy-cat-keychains.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Ultra-fluffy faux fur', 'Detailed glass eyes', 'Multiple dress-up styles', 'Sturdy keychain clip'],
      rating: 5.0,
      reviews: 402
    },
    {
      name: 'Pink Engagement Perfume Basket',
      tagline: 'A romantic gift box',
      description: 'A lovely pink-themed gift basket featuring an elegant perfume bottle, a gold engagement ring presentation box, and a beautiful pink plumeria flower clip.',
      price: 85.00,
      imageUrls: ['/images/pink-engagement-perfume-basket.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Premium perfume included', 'Elegant ring box', 'Pink plumeria hair clip', 'Beautifully wrapped'],
      rating: 4.9,
      reviews: 62
    },
    {
      name: 'Brown Jewelry & Accessories Gift Box',
      tagline: 'Elegance unboxed',
      description: 'A sophisticated gift box filled with silver oxidized bangles, traditional jhumka earrings, minimalist modern jewelry, hair clips, and a satin brown hair bow.',
      price: 55.00,
      imageUrls: ['/images/brown-jewelry-gift-box.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Silver oxidized bangles', 'Traditional and modern earrings', 'Satin brown hair bow', 'Elegant hair claw clips'],
      rating: 4.8,
      reviews: 120
    },
    {
      name: 'Teddy & Watch Gift Hamper',
      tagline: 'Timeless affection',
      description: 'A charming wooden crate hamper wrapped in pink tulle, containing a soft white teddy bear, an elegant women\'s wristwatch, premium perfume, and delicious chocolates.',
      price: 95.00,
      imageUrls: ['/images/teddy-watch-gift-hamper.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Elegant quartz wristwatch', 'Soft white plush teddy', 'Premium boxed perfume', 'Wrapped in pink tulle'],
      rating: 4.9,
      reviews: 84
    },
    {
      name: '24K Golden Glass Rose',
      tagline: 'A love that never fades',
      description: 'A stunning decorative rose crafted from iridescent glass with a 24K gold-plated stem. Comes beautifully presented in a premium pink gift box.',
      price: 35.00,
      imageUrls: ['/images/golden-glass-rose-box.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Iridescent glass petals', '24K gold-plated stem', 'Premium pink presentation box', 'Perfect romantic gift'],
      rating: 4.8,
      reviews: 215
    },
    {
      name: 'Crystalline Ice Tree Lamp',
      tagline: 'Frozen elegance',
      description: 'A spectacular, highly detailed tree lamp featuring branches made of sculpted silver and translucent blue ice crystals that glow brightly from within.',
      price: 75.00,
      imageUrls: ['/images/crystalline-ice-tree-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Translucent crystal leaves', 'Silver sculpted branches', 'Bright internal LEDs', 'Aesthetic statement piece'],
      rating: 5.0,
      reviews: 45
    },
    {
      name: 'Iridescent Pink Tree Lamp',
      tagline: 'Warm ambient glow',
      description: 'A beautiful aesthetic tree lamp featuring translucent, iridescent pink leaves that emit a soft, warm ambient glow, perfect for a cozy bedroom.',
      price: 45.00,
      imageUrls: ['/images/iridescent-pink-tree-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Iridescent pink leaf design', 'Twisted natural-look trunk', 'Warm LED lighting', 'USB powered'],
      rating: 4.9,
      reviews: 132
    },
    {
      name: 'Pochacco Star Bead Bracelet',
      tagline: 'Sanrio night aesthetic',
      description: 'An adorable black and white beaded bracelet featuring a ceramic-style Pochacco (Sanrio) head charm, opaque star beads, and a secure adjustable chain.',
      price: 15.00,
      imageUrls: ['/images/pochacco-star-bead-bracelet.jpeg'],
      categoryId: accessoriesCat.id,
      inStock: true,
      features: ['Ceramic-style Pochacco charm', 'Black and white aesthetic', 'Chunky star beads', 'Adjustable length chain'],
      rating: 4.8,
      reviews: 177
    },
    {
      name: 'Magical Blue Butterfly Ring Lamp',
      tagline: 'Enchanted forest vibes',
      description: 'An incredibly magical statement lamp featuring a glowing blue ring intertwined with vines, realistic blue butterflies, and a rustic rock and wood slice base.',
      price: 125.00,
      imageUrls: ['/images/magical-blue-butterfly-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Vibrant neon blue ring light', 'Lifelike blue butterfly accents', 'Rustic natural wood slice base', 'Detailed rock formations'],
      rating: 5.0,
      reviews: 67
    }
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  console.log("Successfully seeded 12 more items (batch 5) from incoming_products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
