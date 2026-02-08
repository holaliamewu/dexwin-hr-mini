import { prisma } from "@/lib/prisma";
import { handle } from "@/lib/handler";
import { createLeaveSchema } from "@/app/schemas/leave";

export const POST = async (req: any) =>
  handle(async () => {
    const data = createLeaveSchema.parse(await req.json());

    return prisma.leave.create({
      data: {
        ...data,
        userId: req.user.id,
        status: "DRAFT",
      },
    });
  });
