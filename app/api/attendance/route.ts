import { attendanceSchema } from "@/app/schemas/attendance";
import { ApiError } from "@/lib/errors";
import { handle } from "@/lib/handler";
import { createClient } from "@neondatabase/serverless"; // Neon serverless client

const client = createClient(process.env.NEON_DATABASE_URL!);

export const POST = async (req: any) =>
  handle(async () => {
    const data = attendanceSchema.parse(await req.json());

    if (req.user.role === "EMPLOYEE") {
      data.userId = req.user.id;
    }

    if (!data.userId)
      throw new ApiError("VALIDATION", "userId required", 400);

    const query = `
      INSERT INTO attendance (user_id, date, status)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [data.userId, data.date, data.status];

    const result = await client.query(query, values);
    return result.rows[0];
  });

export const PATCH = async (req: any) =>
  handle(async () => {
    const data = attendanceSchema.parse(await req.json());

    if (!["ADMIN", "MANAGER"].includes(req.user.role)) {
      throw new ApiError("FORBIDDEN", "Managers/Admins only", 403);
    }

    if (!data.userId)
      throw new ApiError("VALIDATION", "userId required", 400);

    const query = `
      UPDATE attendance
      SET date = $1, status = $2
      WHERE id = $3 AND user_id = $4
      RETURNING *;
    `;
    const values = [data.date, data.status, data.id, data.userId];

    const result = await client.query(query, values);
    if (result.rowCount === 0) {
      throw new ApiError("NOT_FOUND", "Attendance record not found", 404);
    }

    return result.rows[0];
  });
