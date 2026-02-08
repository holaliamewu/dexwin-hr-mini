import { z } from "zod";

export const attendanceSchema = z.object({
  clockIn: z.string().datetime(),
  clockOut: z.string().datetime().optional(),
  userId: z.string().uuid().optional(),
});
