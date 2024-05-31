import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  await prisma.user.deleteMany();
  await prisma.product_images.deleteMany();
  // await prisma.products.deleteMany();

  const { products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  products.forEach(async (product) => {
    const { images, ...rest } = product;

    const dbProduct = await prisma.products.create({
      data: {
        ...rest,
      },
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      product_id: dbProduct.product_id,
    }));

    await prisma.product_images.createMany({
      data: imagesData,
    });
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
