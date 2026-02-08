import { z } from "zod";

export const roleTitleSchema = z.object({
  name: z.string().min(2),
});
