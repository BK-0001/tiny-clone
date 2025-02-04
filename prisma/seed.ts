import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("seeding started 🚀");

  const urls: Prisma.UrlCreateManyInput[] = [
    {
      long: "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql",
      short: "12314f",
      userId: "me"
    },
    {
      long: "https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql",
      short: "12313f",
      userId: "me"
    }
  ];

  const result = await prisma.url.createMany({ data: urls });

  console.log(`successfully inserted ${result.count} records 🎉`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
