const { dummyConcertData } = require("./dummy-data");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    dummyConcertData.map(async (concert) => {
      await prisma.concert.upsert({
        where: {
          slug: concert.slug,
        },
        update: concert,
        create: concert,
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding db", e);
    await prisma.$disconnect();
    process.exit(1);
  });
