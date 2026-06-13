import { prisma } from './src/lib/prisma';
prisma.product.count().then(c => console.log('TOTAL PRODUCTS:', c)).catch(console.error).finally(() => prisma.$disconnect());
