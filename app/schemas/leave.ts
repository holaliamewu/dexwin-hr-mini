import { z } from "zod";

export const createLeaveSchema = z.object({
  from: z.string().datetime(),
  to: z.string().datetime(),
});

export const updateLeaveSchema = z.object({
  status: z.enum(["DRAFT", "PENDING", "APPROVED", "DENIED"]).optional(),
});
