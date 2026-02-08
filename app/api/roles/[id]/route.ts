import { departmentSchema } from "@/app/schemas/department";
import { ApiError } from "@/lib/errors";
import { handle } from "@/lib/handler";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";


export const PUT = async (req: any) =>
  handle(async () => {
    if (req.user.role !== Role.ADMIN)
      throw new ApiError("FORBIDDEN", "Admins only", 403);

    const body = departmentSchema.parse(await req.json());
    return prisma.role.create({ data: body });
  });


  export const PATCH = async (req: any) =>
  handle(async () => {
    if (req.user.role !== Role.ADMIN)
      throw new ApiError("FORBIDDEN", "Admins only", 403);

    const body = departmentSchema.parse(await req.json());
    return prisma.role.update({ data: body });
  });


export const DELETE = async (req: any) =>
  handle(async () => {
    if (req.user.role !== Role.ADMIN)
      throw new ApiError("FORBIDDEN", "Admins only", 403);

    const body = departmentSchema.parse(await req.json());
    return prisma.role.delete({ data: body });
  });