import { departmentSchema } from "@/app/schemas/department";
import { ApiError } from "@/lib/errors";
import { handle } from "@/lib/handler";
import { sql } from "@/app/lib/db";

const ADMIN_ROLE = "ADMIN";

export const PUT = async (req: any) =>
  handle(async () => {
    if (req.user.role !== ADMIN_ROLE) {
      throw new ApiError("FORBIDDEN", "Admins only", 403);
    }

    const body = departmentSchema.parse(await req.json());

    const [department] = await sql`
      INSERT INTO departments (name, description)
      VALUES (${body.name}, ${body.description})
      RETURNING *
    `;

    return department;
  });

export const PATCH = async (req: any) =>
  handle(async () => {
    if (req.user.role !== ADMIN_ROLE) {
      throw new ApiError("FORBIDDEN", "Admins only", 403);
    }

    const body = departmentSchema.parse(await req.json());

    const [department] = await sql`
      UPDATE departments
      SET
        name = ${body.name},
        description = ${body.description}
      WHERE id = ${body.id}
      RETURNING *
    `;

    if (!department) {
      throw new ApiError("NOT_FOUND", "Department not found", 404);
    }

    return department;
  });

export const DELETE = async (req: any) =>
  handle(async () => {
    if (req.user.role !== ADMIN_ROLE) {
      throw new ApiError("FORBIDDEN", "Admins only", 403);
    }

    const body = departmentSchema.parse(await req.json());

    const [department] = await sql`
      DELETE FROM departments
      WHERE id = ${body.id}
      RETURNING *
    `;

    if (!department) {
      throw new ApiError("NOT_FOUND", "Department not found", 404);
    }

    return department;
  });
