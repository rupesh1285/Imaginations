"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";

export async function createProduct(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const tagline = formData.get("tagline") as string;
    const description = formData.get("description") as string;
    const priceStr = formData.get("price") as string;
    const price = parseFloat(priceStr || "0");
    const categoryName = formData.get("category") as string;
    const tagsString = formData.get("tags") as string; // comma separated
    const featuresString = formData.get("features") as string; // newline separated
    const inStock = formData.get("inStock") === "on";
    const rating = parseFloat((formData.get("rating") as string) || "0");
    const reviews = parseInt((formData.get("reviews") as string) || "0");
    
    const imageFiles = formData.getAll("images") as File[];

    if (!name || isNaN(price)) {
      throw new Error("Name and valid price are required.");
    }

    const imageUrls: string[] = [];

    for (const imageFile of imageFiles) {
      if (imageFile && imageFile.name && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        const fileName = `${Date.now()}_${imageFile.name.replace(/\s+/g, '_')}`;
        const filePath = path.join(process.cwd(), "public", "images", fileName);
        
        await writeFile(filePath, buffer);
        imageUrls.push(`/images/${fileName}`);
      }
    }

    // Handle Category
    let categoryRecord = null;
    if (categoryName && categoryName.trim() !== "") {
      const cleanName = categoryName.trim();
      categoryRecord = await prisma.category.upsert({
        where: { name: cleanName },
        update: {},
        create: { name: cleanName },
      });
    }

    // Handle Tags
    const tags = tagsString ? tagsString.split(",").map(t => t.trim()).filter(Boolean) : [];
    const tagConnections = [];
    for (const tag of tags) {
      const tagRecord = await prisma.tag.upsert({
        where: { name: tag },
        update: {},
        create: { name: tag }
      });
      tagConnections.push({ id: tagRecord.id });
    }

    const features = featuresString ? featuresString.split("\n").map(f => f.trim()).filter(Boolean) : [];

    await prisma.product.create({
      data: {
        name,
        tagline,
        description,
        price,
        imageUrls,
        rating,
        reviews,
        features,
        inStock,
        categoryId: categoryRecord?.id || null,
        tags: {
          connect: tagConnections
        }
      }
    });

    revalidatePath("/admin/products");
    revalidatePath("/blushies");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to create product:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: { id }
    });
    revalidatePath("/admin/products");
    revalidatePath("/blushies");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
