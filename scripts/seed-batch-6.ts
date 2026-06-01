import { prisma } from '../src/lib/prisma';

async function main() {
  const accessoriesCat = await prisma.category.upsert({ where: { name: 'Accessories' }, update: {}, create: { name: 'Accessories' } });
  const keychainsCat = await prisma.category.upsert({ where: { name: 'Keychains' }, update: {}, create: { name: 'Keychains' } });
  const drinkwareCat = await prisma.category.upsert({ where: { name: 'Drinkware' }, update: {}, create: { name: 'Drinkware' } });

  const products = [
    {
      name: 'Sanrio Couple Rings',
      tagline: 'Promise rings for besties',
      description: 'A set of two beautiful silver rings engraved with Cinnamoroll and Pochacco faces. Perfect for couples or best friends.',
      price: 18.50,
      imageUrls: ['/images/cinnamoroll-pochacco-couple-rings.jpeg'],
      categoryId: accessoriesCat.id,
      inStock: true,
      features: ['Set of 2 rings', 'Engraved Sanrio faces', 'High-quality silver alloy', 'Adjustable band size'],
      rating: 4.8,
      reviews: 150
    },
    {
      name: 'Ultra Fluffy Plush Keychains',
      tagline: 'Softness you can carry',
      description: 'Incredibly soft and fluffy plush keychains featuring adorable animal shapes like seals and bears in cute pastel colors.',
      price: 12.00,
      imageUrls: ['/images/fluffy-seal-bear-keychains.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Ultra-fluffy faux fur', 'Cute animal faces', 'Durable metal clasp', 'Lightweight design'],
      rating: 4.9,
      reviews: 320
    },
    {
      name: 'Pochacco Leather Thermos',
      tagline: 'Elegant hydration',
      description: 'A sleek white insulated thermos featuring a faux-leather protective sleeve, gold hardware, and a cute Pochacco face lock charm.',
      price: 29.99,
      imageUrls: ['/images/pochacco-leather-thermos.jpeg'],
      categoryId: drinkwareCat.id,
      inStock: true,
      features: ['Faux-leather sleeve', 'Gold-tone hardware', 'Pochacco face clasp lock', 'Double-wall stainless steel'],
      rating: 4.9,
      reviews: 188
    },
    {
      name: 'Aesthetic Bear Thermos Collection',
      tagline: 'Pick your bear buddy',
      description: 'A collection of aesthetic bear-themed thermos bottles in various soft pastel and neutral colors. Many feature protective leather sleeves and 3D bear charms.',
      price: 26.50,
      imageUrls: ['/images/bear-thermos-collection.jpeg'],
      categoryId: drinkwareCat.id,
      inStock: true,
      features: ['Multiple aesthetic designs', '3D silicone bear charms', 'Premium insulated stainless steel', 'Matching carrying straps'],
      rating: 4.8,
      reviews: 245
    },
    {
      name: 'Glitter Liquid Jar Keychains',
      tagline: 'A shake of magic',
      description: 'Super cute mini jar keychains filled with colorful liquid, floating glitter stars, and an adorable animal character like a whale, bear, or bunny.',
      price: 8.50,
      imageUrls: ['/images/glitter-liquid-jar-keychains.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Floating glitter liquid', 'Cute animal character inside', 'Silicone wrist strap included', 'Gold-tone hardware'],
      rating: 4.7,
      reviews: 412
    },
    {
      name: 'Cat Pocket Mirror Keychains',
      tagline: 'Beauty on the go',
      description: 'A set of adorable cat-themed pocket mirrors that double as keychains. Covered in high-quality printed PU leather with a matching wrist strap.',
      price: 10.00,
      imageUrls: ['/images/cat-pocket-mirror-keychains.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Dual-sided pocket mirror', 'PU leather printed cover', 'Rose gold hardware', 'Matching leather wrist strap'],
      rating: 4.8,
      reviews: 156
    },
    {
      name: 'Magnetic Hugging Bear Keychains',
      tagline: 'Never apart',
      description: 'A pair of adorable magnetic keychains featuring a brown bear and a white polar bear. When brought together, their magnets make them hug!',
      price: 14.99,
      imageUrls: ['/images/magnetic-hugging-bears-keychains.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Set of 2 keychains', 'Built-in magnetic hands', 'Smooth matte finish', 'Perfect couple gift'],
      rating: 5.0,
      reviews: 512
    },
    {
      name: 'Pink Beaded Phone Strap',
      tagline: 'Y2K aesthetic strap',
      description: 'A highly detailed Y2K aesthetic beaded phone strap featuring clear pink beads, a fluffy pom-pom, a heart cube, and a cute Hello Kitty figure.',
      price: 16.50,
      imageUrls: ['/images/pink-beaded-phone-strap.jpeg'],
      categoryId: accessoriesCat.id,
      inStock: true,
      features: ['Detailed Y2K beadwork', 'Hello Kitty figure charm', 'Fluffy pink pom-pom', 'Durable string core'],
      rating: 4.9,
      reviews: 198
    },
    {
      name: 'Hello Kitty Beaded Bag Charms',
      tagline: 'Chunky pastel charm',
      description: 'A beautiful chunky beaded bag charm strap loaded with patterned pastel pink beads, pearls, and a large Hello Kitty pendant.',
      price: 15.00,
      imageUrls: ['/images/hello-kitty-bead-charms.jpeg'],
      categoryId: accessoriesCat.id,
      inStock: true,
      features: ['Large Hello Kitty pendant', 'Chunky patterned pink beads', 'Secure metal bag clip', 'Faux pearl accents'],
      rating: 4.8,
      reviews: 204
    }
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  console.log("Successfully seeded final 9 items (batch 6) from incoming_products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
