import { prisma } from '../src/lib/prisma';

async function main() {
  // Ensure categories exist
  const stationeryCat = await prisma.category.upsert({
    where: { name: 'Stationery' },
    update: {},
    create: {
      name: 'Stationery'
    }
  });

  const keychainCat = await prisma.category.upsert({
    where: { name: 'Keychains' },
    update: {},
    create: {
      name: 'Keychains'
    }
  });

  const products = [
    {
      name: 'Sakura Pocket Watch Keychain',
      tagline: 'Time for cuteness',
      description: 'A beautiful gold-rimmed pocket watch integrated into an adorable character keychain. Features a delicate sakura flower charm and a star dangle. Perfect for attaching to your bag or keys.',
      price: 14.99,
      imageUrls: ['/images/sakura-pocket-watch-keychain.jpeg'],
      categoryId: keychainCat.id,
      inStock: true,
      features: ['Working analog clock', 'Gold-plated rim', 'Enamel character charms', 'Lobster clasp attachment'],
      rating: 4.8,
      reviews: 42
    },
    {
      name: 'K-Pop Idol Photocard Binder',
      tagline: 'Keep your biases safe',
      description: 'An adorable A5 binder designed specifically for collecting K-Pop photocards or instax mini photos. Features cute bakery-themed character designs on the cover.',
      price: 18.50,
      imageUrls: ['/images/kpop-photocard-binder.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['A5 size 6-ring binder', 'Includes 10 inner pages (2 grids each)', 'Water-resistant cover', 'Perfect for 3-inch photos'],
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Ultimate Aesthetic Stationery Gift Box',
      tagline: 'The perfect pink stationery haul',
      description: 'A massive pastel pink and purple stationery set containing everything you need for the perfect aesthetic desk setup. Packed in a beautiful gift box.',
      price: 45.00,
      imageUrls: ['/images/aesthetic-stationery-gift-box.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Fluffy bear diary with lock', 'Set of pastel kawaii pens', 'Mini bear calculator', 'Sticker sheets & highlighters'],
      rating: 5.0,
      reviews: 89
    },
    {
      name: 'Luxury Kuromi Beaded Keychain',
      tagline: 'Goth-cute aesthetic',
      description: 'A premium handmade keychain featuring a 3D Kuromi figure holding a purple bear, attached to a beautiful strand of pearlescent purple beads and a heart-skull charm.',
      price: 16.99,
      imageUrls: ['/images/luxury-kuromi-keychain.jpeg'],
      categoryId: keychainCat.id,
      inStock: true,
      features: ['Premium 3D character figure', 'High-quality acrylic pearls', 'Heart-shaped gold clasp', 'Handmade design'],
      rating: 4.9,
      reviews: 234
    },
    {
      name: 'Starry Panda Complete Stationery Set',
      tagline: 'Pastel purple perfection',
      description: 'A comprehensive matching stationery collection featuring an adorable panda theme on a soft lavender background. Includes everything from notebooks to correction tape.',
      price: 38.99,
      imageUrls: ['/images/starry-panda-stationery-set.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Hardcover journal & pencil case', 'Washi tape & sticky notes', 'Matching pens & stapler', 'Premium matte finish'],
      rating: 4.7,
      reviews: 112
    },
    {
      name: 'Coquette Ribbon Lace-up Journal',
      tagline: 'Vintage balletcore dreams',
      description: 'A stunning soft pink leatherette journal featuring a unique corset-style ribbon lace-up cover. Includes a beautiful acrylic swirl charm and silver bow hardware.',
      price: 24.50,
      imageUrls: ['/images/coquette-ribbon-journal.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Real satin ribbon lacing', 'Soft PU leather cover', 'Includes acrylic charm', 'Thick 100gsm lined paper'],
      rating: 4.9,
      reviews: 67
    },
    {
      name: 'Kuromi Leather Key Cover',
      tagline: 'Keep your keys stylish',
      description: 'A sleek black leatherette key cover featuring a 3D Kuromi face and a matching mini Kuromi charm. Protects your keys and stops them from jingling.',
      price: 12.99,
      imageUrls: ['/images/kuromi-leather-keycover.jpeg'],
      categoryId: keychainCat.id,
      inStock: true,
      features: ['Snap-button closure', 'Vegan leather material', 'Includes secondary mini charm', 'Fits standard house keys'],
      rating: 4.6,
      reviews: 45
    },
    {
      name: 'Pastel Miffy Pen Set',
      tagline: 'Smooth writing companions',
      description: 'A gorgeous set of pastel blue and cream gel pens featuring the beloved Miffy character. Each pen has a unique design and provides a buttery smooth writing experience.',
      price: 15.50,
      imageUrls: ['/images/pastel-miffy-pens.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['0.5mm black gel ink', 'Soft-touch pen barrel', 'Set of 5 unique designs', 'Smudge-proof quick-dry ink'],
      rating: 4.8,
      reviews: 198
    },
    {
      name: 'Fluffy Bear Glasses Notebook',
      tagline: 'The cuddliest notebook ever',
      description: 'An incredibly unique notebook fully wrapped in soft, curly teddy bear fur. Features embroidered bear facial features and real wire-rimmed glasses attached to the cover!',
      price: 22.00,
      imageUrls: ['/images/fluffy-bear-glasses-notebook.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Super soft sherpa fur cover', 'Real metal glasses frame', 'Magnetic paw closure', 'Blank sketchbook pages inside'],
      rating: 5.0,
      reviews: 312
    },
    {
      name: 'Black Cat "Like a Cat" Journal',
      tagline: 'Minimalist feline aesthetic',
      description: 'A sleek white PU leather journal featuring an adorable minimalist black cat wearing a party hat. The cover reads "no matter the past, the future is in our paws."',
      price: 19.99,
      imageUrls: ['/images/black-cat-journal.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Magnetic strap closure', 'Includes cute ID card tag', 'Water-resistant cover', 'Lined inner pages'],
      rating: 4.7,
      reviews: 88
    },
    {
      name: 'Bear Dango Phone Charm',
      tagline: 'Sweet stacked bears',
      description: 'An ultra-cute phone charm or keychain shaped like a traditional Japanese dango skewer, but made of adorable little bears! Comes with an acrylic four-leaf clover for good luck.',
      price: 9.99,
      imageUrls: ['/images/bear-dango-phone-charm.jpeg'],
      categoryId: keychainCat.id,
      inStock: true,
      features: ['Glossy resin finish', 'Includes Good Luck charm tag', 'Sturdy lanyard string', 'Available in honey or cream colors'],
      rating: 4.9,
      reviews: 421
    },
    {
      name: 'Sanrio Pink Kawaii Pen Collection',
      tagline: 'Write in pure pink',
      description: 'A curated collection of the cutest pink Japanese pens, featuring beloved Sanrio characters like My Melody and Kuromi, plus a cat paw highlighter.',
      price: 16.50,
      imageUrls: ['/images/sanrio-pink-pen-set.jpeg'],
      categoryId: stationeryCat.id,
      inStock: true,
      features: ['Includes a cat paw highlighter', 'Assorted gel & ballpoint pens', 'Imported Japanese stationery', 'Perfect for journaling'],
      rating: 4.8,
      reviews: 156
    }
  ];

  for (const p of products) {
    await prisma.product.create({
      data: p
    });
  }

  console.log("Successfully seeded 12 new stationery products!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
