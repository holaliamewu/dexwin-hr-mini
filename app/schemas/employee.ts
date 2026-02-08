import { z } from "zod";

export const createEmployeeSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  role: z.enum(["ADMIN", "MANAGER", "EMPLOYEE"]),
  departmentId: z.string().uuid().optional(),
  managerId: z.string().uuid().optional(),
});

export const updateEmployeeSchema = createEmployeeSchema.partial();
export type TCreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type TUpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>;