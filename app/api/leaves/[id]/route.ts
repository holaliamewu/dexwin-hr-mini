import { updateLeaveSchema } from "@/app/schemas/leave";
import { ApiError } from "@/lib/errors";
import { handle } from "@/lib/handler";
import { prisma } from "@/lib/prisma";

export const PATCH = async (req: any, { params }: any) =>
  handle(async () => {
    const leave = await prisma.leave.findUnique({ where: { id: params.id } });
    if (!leave) throw new ApiError("NOT_FOUND", "Leave not found", 404);

    // EMPLOYEE rules
    if (req.user.role === "EMPLOYEE") {
      if (leave.userId !== req.user.id)
        throw new ApiError("FORBIDDEN", "Not yours", 403);
      if (leave.status !== "DRAFT" && leave.status !== "PENDING")
        throw new ApiError("FORBIDDEN", "Cannot modify approved leave", 403);
    }

    // MANAGER approval
    if (req.user.role === "MANAGER") {
      const employee = await prisma.user.findUnique({
        where: { id: leave.userId },
      });
      if (employee?.managerId !== req.user.id)
        throw new ApiError("FORBIDDEN", "Not your report", 403);
    }

    const data = updateLeaveSchema.parse(await req.json());
    return prisma.leave.update({ where: { id: params.id }, data });
  });
