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
  
  const stationeryCat = await prisma.category.upsert({
    where: { name: 'Stationery' },
    update: {},
    create: { name: 'Stationery' }
  });

  const products = [
    {
      name: 'Space Bear Astronaut Keychain',
      tagline: 'Out of this world cute',
      description: 'An adorable chunky astronaut keychain featuring a cute little bear face inside a space helmet window. Available in soft pink and space black.',
      price: 12.99,
      imageUrls: ['/images/space-bear-astronaut-keychain.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Durable chunky design', 'Clear space helmet window', 'Included matching bell charm', 'Sturdy clasp'],
      rating: 4.8,
      reviews: 156
    },
    {
      name: 'Acrylic Butterfly Drop-Box Guestbook',
      tagline: 'Memories that fly',
      description: 'A beautiful acrylic and rose gold wood butterfly-shaped guestbook. Guests write their names on small wooden hearts and drop them inside the clear butterfly frame.',
      price: 65.00,
      imageUrls: ['/images/butterfly-dropbox-guestbook.jpeg'],
      categoryId: weddingCat.id,
      inStock: true,
      features: ['Clear acrylic viewing window', 'Rose gold wooden frame', 'Includes 80 wooden hearts', 'Beautiful display piece'],
      rating: 4.9,
      reviews: 89
    },
    {
      name: 'Luxury Nails & Cosmetics Basket',
      tagline: 'Pamper yourself',
      description: 'A stunning burgundy wooden crate filled with premium press-on nails, nail polish, floral hair clips, and aesthetic accessories, wrapped beautifully with pink ribbons and faux roses.',
      price: 75.00,
      imageUrls: ['/images/luxury-nails-cosmetics-basket.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Premium press-on nail sets', 'Floral aesthetic hair clips', 'Burgundy wooden display crate', 'Pink satin ribbon wrapping'],
      rating: 4.7,
      reviews: 42
    },
    {
      name: 'Floral Fairy Light Chocolate Hamper',
      tagline: 'A sweet glowing surprise',
      description: 'An extravagant woven basket handle hamper wrapped in delicate white tulle, intertwined with warm fairy lights and dense faux floral arrangements, holding premium chocolates and a mini handbag.',
      price: 115.00,
      imageUrls: ['/images/floral-fairy-light-hamper.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Woven basket with high handle', 'Integrated warm fairy lights', 'Lush floral arrangements', 'Premium chocolates included'],
      rating: 5.0,
      reviews: 24
    },
    {
      name: 'Dragon Duo Keychains',
      tagline: 'Train your keys',
      description: 'A perfect matching set for couples or best friends! Features highly detailed, cute chibi versions of Toothless (black) and the Light Fury (white) from How To Train Your Dragon.',
      price: 22.50,
      imageUrls: ['/images/dragon-duo-keychains.jpeg'],
      categoryId: keychainsCat.id,
      inStock: true,
      features: ['Set of 2 keychains', 'High-quality soft PVC', 'Gold-tone hardware', 'Letter block lanyard strap'],
      rating: 4.9,
      reviews: 312
    },
    {
      name: 'Custom Butterfly Cross Nightlight',
      tagline: 'Faith illuminated',
      description: 'A gorgeous personalized acrylic nightlight featuring a floral cross and butterfly shape. Customized with your name, date, and uplifting Bible verses. Emits a warm golden glow.',
      price: 45.00,
      imageUrls: ['/images/custom-butterfly-cross-lamp.jpeg'],
      categoryId: decorCat.id,
      inStock: true,
      features: ['Fully customizable text', 'Solid wood LED base', 'Warm golden light', 'Beautiful floral print'],
      rating: 4.9,
      reviews: 178
    },
    {
      name: 'Kuromi Ultimate Backpack Gift Set',
      tagline: 'The ultimate Sanrio haul',
      description: 'A massive wooden crate gift set packed with a premium pastel purple Kuromi backpack, plushie, notebooks, pens, pencil case, and star balloon. The perfect gift for a Sanrio fan.',
      price: 155.00,
      imageUrls: ['/images/kuromi-backpack-gift-basket.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Premium purple Kuromi backpack', 'Kuromi plushie included', 'Matching stationery set', 'Decorative wooden crate'],
      rating: 5.0,
      reviews: 56
    },
    {
      name: 'Lilac Pearl Engagement Ring Platter',
      tagline: 'A royal proposal',
      description: 'An absolutely exquisite engagement ring platter featuring a cascading arrangement of soft lilac hydrangeas, a pearl-beaded arch, custom printed acrylic calendar, and silver filigree ring bowls.',
      price: 135.00,
      imageUrls: ['/images/lilac-pearl-ring-platter.jpeg'],
      categoryId: weddingCat.id,
      inStock: true,
      features: ['Custom acrylic date calendar', 'Pearl-beaded handling arch', 'Silver filigree ring holders', 'Solid marble base'],
      rating: 5.0,
      reviews: 19
    },
    {
      name: 'Wooden Butterfly Drop-Box Guestbook',
      tagline: 'Rustic wedding memories',
      description: 'A gorgeous rustic wooden butterfly drop-box guestbook for weddings. Comes with a matching wooden keepsake box filled with little wooden butterfly shapes for guests to sign.',
      price: 55.00,
      imageUrls: ['/images/wooden-butterfly-guestbook.jpeg'],
      categoryId: weddingCat.id,
      inStock: true,
      features: ['Rustic laser-cut wood', 'Clear acrylic front panel', 'Includes wooden drop shapes', 'Matching keepsake box'],
      rating: 4.8,
      reviews: 144
    },
    {
      name: 'Sanrio Mascot Thermos Bottles',
      tagline: 'Stay hydrated with a friend',
      description: 'Premium stainless steel thermos bottles featuring elegant floral prints and an adorable 3D Sanrio mascot (Pochacco or Cinnamoroll) sitting on the lid! Includes matching carrying strap.',
      price: 32.50,
      imageUrls: ['/images/sanrio-mascot-thermos.jpeg'],
      categoryId: drinkwareCat.id,
      inStock: true,
      features: ['3D mascot lid decoration', 'Stainless steel insulation', 'Matching color carrying strap', 'Elegant floral body design'],
      rating: 4.9,
      reviews: 205
    },
    {
      name: 'Yellow Tulle Chocolate Hamper',
      tagline: 'Bright and sweet',
      description: 'A cheerful woven handle basket wrapped in bright yellow tulle, tied with a gold floral ribbon, and packed with an assortment of popular chocolates like Cadbury Dairy Milk and Bounty.',
      price: 45.00,
      imageUrls: ['/images/yellow-tulle-chocolate-basket.jpeg'],
      categoryId: hampersCat.id,
      inStock: true,
      features: ['Bright yellow tulle wrapping', 'Assorted popular chocolates', 'Classic woven basket', 'Gold floral accent'],
      rating: 4.5,
      reviews: 82
    },
    {
      name: 'Fluffy Bunny Canvas Notebook',
      tagline: 'Textured aesthetic journaling',
      description: 'A highly aesthetic, refillable cream canvas notebook featuring a magnetic strap closure adorned with a soft, fluffy white bunny head patch.',
      price: 24.00,
      imageUrls: ['/images/fluffy-bunny-canvas-notebook.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Textured canvas cover', 'Refillable ring binder interior', 'Magnetic strap closure', 'Fluffy 3D bunny patch'],
      rating: 4.9,
      reviews: 133
    }
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  console.log("Successfully seeded 12 more items from incoming_products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
