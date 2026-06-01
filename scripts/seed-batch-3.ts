import { prisma } from '../src/lib/prisma';

async function main() {
  const hampersCat = await prisma.category.upsert({
    where: { name: 'Gift Hampers' },
    update: {},
    create: { name: 'Gift Hampers' }
  });

  const decorCat = await prisma.category.upsert({
    where: { name: 'Decor & Lamps' },
    update: {},
    create: { name: 'Decor & Lamps' }
  });

  const keychainsCat = await prisma.category.upsert({
    where: { name: 'Keychains' },
    update: {},
    create: { name: 'Keychains' }
  });

  const drinkwareCat = await prisma.category.upsert({
    where: { name: 'Drinkware' },
    update: {},
    create: { name: 'Drinkware' }
  });

  const weddingCat = await prisma.category.upsert({
    where: { name: 'Wedding & Events' },
    update: {},
    create: { name: 'Wedding & Events' }
  });

  const products = [
    {
      name: 'Pink Luxury Gift Hamper',
      tagline: 'Ultimate pampering',
      description: 'A luxurious pink woven basket filled with premium body care products, scented candles, pink roses, and a soft heart pillow. Perfect for birthdays, anniversaries, or Easter.',
      price: 125.00,
      imageUrls: ['/images/pink-luxury-gift-hamper.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Hand-woven basket', 'Premium body care sets', 'Fresh-looking faux roses', 'Scented soy candle'],
      rating: 5.0,
      reviews: 42
    },
    {
      name: 'Black & Gold Midnight Hamper',
      tagline: 'Elegance in a box',
      description: 'A sophisticated black and gold gift hamper featuring a quilted black handbag, premium Lindt 85% cocoa chocolate, bangles, and delicate fairy lights woven through black roses.',
      price: 145.00,
      imageUrls: ['/images/black-gold-luxury-hamper.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Quilted black handbag', 'Lindt premium chocolate', 'Gold accent bangles', 'Fairy light integration'],
      rating: 4.9,
      reviews: 28
    },
    {
      name: 'Kuromi Clear Gift Bag',
      tagline: 'Sanrio birthday surprise',
      description: 'An adorable clear gift tote bag featuring a Kuromi plushie, matching drink tumbler, lip gloss, and hair accessories. A perfect aesthetic birthday gift.',
      price: 65.00,
      imageUrls: ['/images/kuromi-clear-gift-bag.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Clear aesthetic tote bag', 'Authentic Kuromi plushie', 'Matching tumbler', 'Hair scrunchies & lip gloss'],
      rating: 4.8,
      reviews: 56
    },
    {
      name: 'Mushroom Glow Fairy Lamp',
      tagline: 'Magical room decor',
      description: 'A whimsical glowing mushroom lamp adorned with tiny butterflies, glowing dots, and faux dew drops. Emits a soft, magical pink glow perfect for a bedside table.',
      price: 34.99,
      imageUrls: ['/images/mushroom-glow-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Soft pink LED glow', 'Intricate butterfly details', 'USB powered', 'Perfect night light'],
      rating: 4.9,
      reviews: 112
    },
    {
      name: 'Bluebell Tree Lamp',
      tagline: 'Cozy evening illumination',
      description: 'A beautiful tree-shaped lamp covered in glowing bluebell flowers. Creates a serene, calming blue atmosphere for cozy evenings.',
      price: 45.00,
      imageUrls: ['/images/bluebell-tree-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Adjustable tree branches', 'LED bluebell flowers', 'Sturdy marble-style base', 'Calming ambient light'],
      rating: 4.7,
      reviews: 89
    },
    {
      name: 'Crystal Winter Tree Lamp',
      tagline: 'Icy elegance',
      description: 'An elegant tree lamp featuring frosted crystalline leaves that glow with bright white LED lights. Perfect for winter decor or elegant ambient lighting.',
      price: 49.99,
      imageUrls: ['/images/crystal-tree-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Frosted crystal leaves', 'Bright white LEDs', 'Elegant modern design', 'Battery or USB operated'],
      rating: 4.8,
      reviews: 64
    },
    {
      name: 'Crescent Moon Night Lamp',
      tagline: 'Dreamy starry nights',
      description: 'A dreamy glowing crescent moon lamp featuring starry cutout patterns that project a soft blue light. Sits elegantly on a natural wooden base.',
      price: 29.99,
      imageUrls: ['/images/crescent-moon-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Starry cutout projections', 'Natural wood base', 'Soft glowing blue light', 'Energy efficient LED'],
      rating: 4.9,
      reviews: 145
    },
    {
      name: 'Purple Butterfly Candle Centerpiece',
      tagline: 'Magical home aesthetics',
      description: 'A stunning decorative centerpiece featuring purple roses, delicate purple butterflies, and glowing pillar candles enclosed in an elegant glass and crystal frame.',
      price: 55.00,
      imageUrls: ['/images/purple-butterfly-centerpiece.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Lifelike purple roses', 'Delicate butterfly accents', 'LED pillar candles included', 'Glass and crystal base'],
      rating: 5.0,
      reviews: 31
    },
    {
      name: 'Resin Engagement Ring Platter',
      tagline: 'Forever starts now',
      description: 'A breathtaking custom resin engagement ring platter with gold foil edges, dried floral hoops, and personalized gold initials for the perfect proposal.',
      price: 85.00,
      imageUrls: ['/images/resin-ring-platter.jpeg'],
      categoryId: weddingCat.id,
      inStock: true,
      features: ['Custom gold initials', 'Premium dried floral hoop', 'Gold foil resin edges', 'Secure ring holders'],
      rating: 5.0,
      reviews: 78
    },
    {
      name: 'Custom Spotify Song Keychain',
      tagline: 'Your song, everywhere',
      description: 'A personalized acrylic keychain featuring your favorite photo, song title, and artist, styled like a Spotify player interface.',
      price: 14.99,
      imageUrls: ['/images/spotify-song-keychain.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Custom photo printing', 'Durable clear acrylic', 'Spotify player UI design', 'Sturdy metal keyring'],
      rating: 4.9,
      reviews: 230
    },
    {
      name: 'Hello Kitty Vintage Key Charms',
      tagline: 'Kawaii key aesthetic',
      description: 'Adorable vintage-style key-shaped charms featuring the classic Hello Kitty silhouette and bow. Available in pastel pink, blue, white, and black.',
      price: 9.99,
      imageUrls: ['/images/hello-kitty-key-charms.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Vintage key shape', 'Durable metal alloy', 'Classic bow detail', 'Multiple pastel colors'],
      rating: 4.8,
      reviews: 115
    },
    {
      name: 'Cute Dog Winter Thermos Mug',
      tagline: 'Keep it cozy',
      description: 'An adorable insulated thermos mug featuring a cute dog in a winter hat with the text "Winter Is Coming". Keeps drinks hot or cold for hours.',
      price: 24.50,
      imageUrls: ['/images/dog-thermos-mugs.jpeg'],
      categoryId: drinkwareCat.id,
      inStock: true,
      features: ['Double-wall insulation', 'Spill-proof lid', 'Cute winter dog design', 'Stainless steel interior'],
      rating: 4.7,
      reviews: 92
    }
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  console.log("Successfully seeded 12 new items from incoming_products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
