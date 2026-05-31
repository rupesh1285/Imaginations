import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockProducts = [
  {
    title: "Rosy Bunny",
    image: "/images/Rosy_bunny.jpeg",
    note: "The coolest cuddle buddy around 🐰",
    sticker: "Best Seller",
    price: "$24.99",
    description: "Rosy Bunny is here to give the best hugs. Made with ultra-soft pastel pink fabric, she features floppy ears and a little cotton tail. Perfect for bedtime snuggles or as a cute desk companion.",
    features: [
      "Ultra-soft premium cotton",
      "Hand-stitched details",
      "Machine washable (gentle cycle)",
      "Height: 12 inches"
    ],
    rating: 4.9,
    reviews: 128
  },
  {
    title: "Golden Bear",
    image: "/images/Golden_bear.jpeg",
    note: "Take me home! 💖",
    price: "$29.99",
    description: "A classic teddy with a golden twist! Golden Bear brings warmth and sunshine into any room. His velvety soft fur and gentle smile make him a timeless gift for all ages.",
    features: [
      "Velvet-feel plush fabric",
      "Sturdy stitching",
      "Embroidered paws",
      "Height: 14 inches"
    ],
    rating: 4.8,
    reviews: 95
  },
  {
    title: "Sir Sass-a-Lot",
    image: "/images/Plum_kitty.jpeg",
    note: "I guess you can hug me. Whatever. 🙄",
    sticker: "Sassy",
    price: "$22.99",
    description: "He might look like he doesn't care, but Sir Sass-a-Lot secretly loves the attention. This plum-colored kitty is the perfect gift for your friend with attitude.",
    features: [
      "Fluffy tail",
      "Sassy embroidered expression",
      "Slightly weighted paws for sitting",
      "Height: 10 inches"
    ],
    rating: 4.7,
    reviews: 210
  },
  {
    title: "Waffle the Pup",
    image: "/images/Beige_puppy.jpeg",
    note: "Will trade tail wags for treats! 🦴",
    price: "$25.99",
    description: "Loyal, soft, and endlessly cute. Waffle the Pup is a floppy-eared beige puppy who is always ready for playtime or naptime.",
    features: [
      "Extra floppy ears",
      "Fuzzy beige texture",
      "Hypoallergenic filling",
      "Height: 11 inches"
    ],
    rating: 5.0,
    reviews: 89
  },
  {
    title: "Hello Kitty",
    image: "/images/Blushie_kitten.jpeg",
    note: "I'm a barbie girl 😽",
    sticker: "Cute",
    price: "$27.99",
    description: "The ultimate aesthetic kitten plushie. Adorned in soft blush tones, she fits perfectly into any pastel or coquette room decor.",
    features: [
      "Silky soft faux fur",
      "Pastel pink ribbon",
      "Irresistibly cute eyes",
      "Height: 10 inches"
    ],
    rating: 4.9,
    reviews: 340
  },
  {
    title: "The Bear Bros",
    image: "/images/We_bare_bears.jpeg",
    note: "Stackable, snackable, ready for hugs! 🐻",
    price: "$34.99",
    description: "Why have one bear when you can have the whole squad? The Bear Bros are designed to be stacked on top of each other, making them a fun and cuddly trio.",
    features: [
      "Set of 3 stackable bears",
      "Squishy mochi-like texture",
      "Perfect for desk decor",
      "Height: 8 inches each"
    ],
    rating: 4.8,
    reviews: 156
  },
  {
    title: "Velvet Panda",
    image: "/images/Softie_panda.jpeg",
    note: "I'm super soft! 🥺",
    sticker: "Loved",
    price: "$26.99",
    description: "Meet Velvet Panda, the gentlest giant. With his round belly and sleepy eyes, he's the ultimate companion for rainy days and movie marathons.",
    features: [
      "Chubby, huggable design",
      "Black and white velvet fabric",
      "Super squishy filling",
      "Height: 13 inches"
    ],
    rating: 4.9,
    reviews: 112
  },
  {
    title: "Rex the Menace",
    image: "/images/Crazy_dinausaur.webp",
    note: "Ready to chomp snacks & steal hearts 🦖",
    sticker: "Naughty",
    price: "$28.99",
    description: "Don't let the little teeth fool you—Rex the Menace is a total softie. This quirky dinosaur plushie brings a pop of fun and color to your plushie collection.",
    features: [
      "Textured scale pattern",
      "Soft felt spikes",
      "Stand-alone design",
      "Height: 12 inches"
    ],
    rating: 4.6,
    reviews: 78
  },
  {
    title: "Pastel Bunny",
    image: "/images/plush_bunny_1780202060043.png",
    note: "Hop into my heart 🩷",
    price: "$23.99",
    description: "A gorgeous pastel pink bunny plushie designed to bring a touch of magic to your room. Extremely photorealistic and beautifully crafted with soft studio-grade fabric.",
    features: [
      "Studio grade fabric",
      "Pastel pink shading",
      "Extra soft ears",
      "Height: 11 inches"
    ],
    rating: 4.8,
    reviews: 55
  },
  {
    title: "Caramel Bear",
    image: "/images/plush_bear_1780202080949.png",
    note: "Warm hugs only! 🧸",
    price: "$26.99",
    description: "A cute pastel brown teddy bear plushie that sits perfectly on your bed or desk. Made with dense, high-quality filling to hold its adorable shape forever.",
    features: [
      "Dense, durable filling",
      "Pastel caramel color",
      "Sturdy seated design",
      "Height: 14 inches"
    ],
    rating: 4.7,
    reviews: 82
  },
  {
    title: "Lilac Kitty",
    image: "/images/plush_cat_1780202097024.png",
    note: "Purr-fectly purple 💜",
    sticker: "New",
    price: "$24.99",
    description: "An incredibly soft pastel purple cat plushie. This photorealistic plush features an adorable design that is perfect for any cat lover looking for a pop of color.",
    features: [
      "Unique pastel lilac color",
      "Premium plush fiber",
      "Soft and squishy",
      "Height: 10 inches"
    ],
    rating: 5.0,
    reviews: 40
  },
  {
    title: "Sky Puppy",
    image: "/images/plush_dog_1780202113826.png",
    note: "Your loyal blue friend 🩵",
    price: "$25.99",
    description: "A cute pastel blue puppy plushie that brings a calming sky-blue aesthetic to your collection. Super soft and highly huggable.",
    features: [
      "Calming pastel blue",
      "Floppy ears",
      "Hypoallergenic material",
      "Height: 12 inches"
    ],
    rating: 4.9,
    reviews: 67
  },
  {
    title: "Minty Frog",
    image: "/images/plush_frog_1780202130491.png",
    note: "Ribbit ribbit 🐸",
    sticker: "Trending",
    price: "$21.99",
    description: "A chunky, cute pastel green frog plushie. With his wide, friendly smile and minty green color, he's the perfect quirky addition to your plushie family.",
    features: [
      "Chunky rounded design",
      "Mint green pastel fabric",
      "Friendly embroidered smile",
      "Height: 9 inches"
    ],
    rating: 4.8,
    reviews: 104
  },
  {
    title: "Frost Penguin",
    image: "/images/plush_penguin_1780202618136.png",
    note: "Stay cool! 🐧",
    price: "$22.99",
    description: "A cute light blue and white penguin plushie. Round, soft, and designed to look absolutely adorable sitting on any shelf or bed.",
    features: [
      "Light blue and white details",
      "Round body shape",
      "Extra soft flippers",
      "Height: 10 inches"
    ],
    rating: 4.9,
    reviews: 31
  },
  {
    title: "Dream Octopus",
    image: "/images/plush_octopus_1780202637626.png",
    note: "Eight hugs at once 🐙",
    sticker: "Reversible",
    price: "$19.99",
    description: "A pastel pink and blue reversible octopus plushie. Flip it inside out to change its color and mood! The ultimate interactive plushie for your desk.",
    features: [
      "Reversible design",
      "Two pastel colors (Pink/Blue)",
      "Interactive and fun",
      "Height: 8 inches"
    ],
    rating: 4.8,
    reviews: 215
  },
  {
    title: "Rainbow Unicorn",
    image: "/images/plush_unicorn_1780202653566.png",
    note: "Pure magic ✨",
    sticker: "Magical",
    price: "$29.99",
    description: "A beautiful pastel rainbow unicorn plushie. Featuring a soft horn and a fluffy rainbow mane, this unicorn is the definition of adorable photorealistic design.",
    features: [
      "Pastel rainbow mane",
      "Soft metallic-look horn",
      "Premium plush body",
      "Height: 15 inches"
    ],
    rating: 5.0,
    reviews: 142
  }
];

async function main() {
  console.log("Seeding database with 16 sample products...");

  // Create a default category
  const category = await prisma.category.upsert({
    where: { name: "Plushies" },
    update: {},
    create: { name: "Plushies", description: "All our soft and huggable friends" }
  });

  for (const item of mockProducts) {
    const priceNum = parseFloat(item.price.replace('$', ''));
    
    // Connect or create a tag if it exists
    const tagConnections = [];
    if (item.sticker) {
      const tag = await prisma.tag.upsert({
        where: { name: item.sticker },
        update: {},
        create: { name: item.sticker }
      });
      tagConnections.push({ id: tag.id });
    }

    await prisma.product.create({
      data: {
        name: item.title,
        tagline: item.note,
        description: item.description,
        price: priceNum,
        imageUrls: [item.image],
        rating: item.rating,
        reviews: item.reviews,
        features: item.features,
        inStock: true,
        categoryId: category.id,
        tags: {
          connect: tagConnections
        }
      }
    });
    console.log(`Created product: ${item.title}`);
  }

  console.log("✅ Successfully seeded all 16 products!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
