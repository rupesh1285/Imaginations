import { prisma } from '../src/lib/prisma';

async function main() {
  const stationeryCat = await prisma.category.upsert({
    where: { name: 'Stationery' },
    update: {},
    create: { name: 'Stationery' }
  });

  const products = [
    {
      name: 'Cute Dino Spiral Notebook',
      tagline: 'Rawr means cute',
      description: 'A set of pocket-sized spiral notebooks featuring adorable green dinosaurs with rosy cheeks. Perfect for quick notes, doodling, or journaling on the go.',
      price: 6.99,
      imageUrls: ['/images/dino-spiral-notebook.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Pocket-sized A6', 'Durable spiral binding', 'Lined inner pages', 'Set of 4 pastel colors'],
      rating: 4.8,
      reviews: 12
    },
    {
      name: 'Translucent Gradient Ring Binder',
      tagline: 'Aesthetic organization',
      description: 'A gorgeous translucent ring binder with a subtle pastel color gradient. Comes with a matching star or heart-shaped keychain accessory attached to the rings.',
      price: 14.50,
      imageUrls: ['/images/gradient-ring-binder.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Translucent frosted cover', 'Sturdy acrylic rings', 'Includes matching keychain', 'Refillable loose-leaf design'],
      rating: 4.9,
      reviews: 35
    },
    {
      name: 'Blue Rabbit "Stories" Notebook',
      tagline: 'Write your story',
      description: 'A minimalist soft blue spiral notebook featuring a cute chubby rabbit character. The frosted translucent cover protects your notes while adding a premium feel.',
      price: 11.99,
      imageUrls: ['/images/rabbit-spiral-notebook.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Frosted protective cover', 'High-quality lined paper', 'Secure coil binding', 'Minimalist pastel aesthetic'],
      rating: 4.7,
      reviews: 42
    },
    {
      name: 'Moji Poodle Photocard Binder',
      tagline: 'Have a nice day with friends',
      description: 'A charming photocard and polaroid binder featuring three cute fluffy poodles on the cover. Perfect for storing k-pop cards, polaroids, or mini prints.',
      price: 16.99,
      imageUrls: ['/images/poodle-photocard-binder.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Durable hard cover', 'Premium clear pocket sleeves', 'Fits standard photocards', 'Cute dog cartoon design'],
      rating: 4.9,
      reviews: 128
    },
    {
      name: 'Pink Ribbon Lace Journal',
      tagline: 'Exquisite life',
      description: 'An elegant soft pink journal wrapped in beautiful white lace and tied with a delicate pink satin ribbon. Comes with an adorable acrylic house charm.',
      price: 21.00,
      imageUrls: ['/images/pink-ribbon-house-journal.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Real lace detailing', 'Satin ribbon closure', 'Includes acrylic charm', 'Thick unbleedable pages'],
      rating: 5.0,
      reviews: 64
    },
    {
      name: 'Miffy Blue Pen Pouch Set',
      tagline: 'Navy & white perfection',
      description: 'A complete set of navy and white Miffy character gel pens and correction tape, all packed perfectly into a matching starry white zip pouch.',
      price: 28.99,
      imageUrls: ['/images/miffy-blue-pen-pouch.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Includes starry zip pouch', 'Multiple Miffy character pens', 'Correction tape included', 'Smooth black gel ink'],
      rating: 4.8,
      reviews: 89
    }
  ];

  for (const p of products) {
    await prisma.product.create({
      data: p
    });
  }

  console.log("Successfully seeded 6 more stationery products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
