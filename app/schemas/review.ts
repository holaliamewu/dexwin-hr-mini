import { z } from "zod";

export const reviewSchema = z.object({
  employeeId: z.string().uuid(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});
