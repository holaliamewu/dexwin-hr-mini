import { prisma } from "@/lib/prisma";
import { handle } from "@/lib/handler";
import { Role } from "@prisma/client";
import { ApiError } from "@/lib/errors";
import { roleTitleSchema } from "@/app/schemas/roleTitle";

export const GET = () =>
  handle(() => prisma.role.findMany());

export const POST = async (req: any) =>
  handle(async () => {
    if (req.user.role !== Role.ADMIN)
      throw new ApiError("FORBIDDEN", "Admins only", 403);

    const body = roleTitleSchema.parse(await req.json());
    return prisma.role.create({ data: body });
  });
