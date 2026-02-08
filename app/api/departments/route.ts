// app/api/departments/route.ts
import { prisma } from "@/lib/prisma";
import { handle } from "@/lib/handler";
import { Role } from "@prisma/client";
import { ApiError } from "@/lib/errors";
import { departmentSchema } from "@/app/schemas/department";

export const GET = () =>
  handle(() => prisma.department.findMany());

export const POST = async (req: any) =>
  handle(async () => {
    if (req.user.role !== Role.ADMIN)
      throw new ApiError("FORBIDDEN", "Admins only", 403);

    const body = departmentSchema.parse(await req.json());
    return prisma.department.create({ data: body });
  });