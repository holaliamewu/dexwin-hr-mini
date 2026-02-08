import { PrismaClient, UserRole } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "admin@dexwin.net";

  // 1️⃣ Upsert User (email lives here)
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: "Admin",
      email,
      role: UserRole.ADMIN,
      password: await bcrypt.hash("admin123", 10),
    },
  });

  console.log("Admin seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
