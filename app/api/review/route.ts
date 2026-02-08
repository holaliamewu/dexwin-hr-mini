import { reviewSchema } from "@/app/schemas/review";
import { ApiError } from "@/lib/errors";
import { handle } from "@/lib/handler";
import { prisma } from "@/lib/prisma";

export const POST = async (req: any) =>
  handle(async () => {
    if (req.user.role === "EMPLOYEE")
      throw new ApiError("FORBIDDEN", "Not allowed", 403);

    const data = reviewSchema.parse(await req.json());

    return prisma.review.create({
      data: {
        ...data,
        reviewerId: req.user.id,
      },
    });
  });