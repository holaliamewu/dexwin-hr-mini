// app/api/employees/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { Role } from "@prisma/client";
import { apiError, getPagination } from "@/lib/api";
import { createEmployeeSchema } from "@/app/schemas/employee";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");
  const departmentId = searchParams.get("departmentId");
  const managerId = searchParams.get("managerId");

  const { skip, take } = getPagination(searchParams);

  const employees = await prisma.user.findMany({
    where: {
      departmentId: departmentId ?? undefined,
      managerId: managerId ?? undefined,
      name: search
        ? { contains: search, mode: "insensitive" }
        : undefined,
    },
    skip,
    take,
  });

  return NextResponse.json(employees);
}


export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createEmployeeSchema.safeParse(body);

  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", "Invalid input", parsed.error);
  }

  const sessionUser = req.user; // ← from your auth middleware
  requireRole(sessionUser, [Role.ADMIN]);

  const employee = await prisma.user.create({
    data: parsed.data,
  });

  return NextResponse.json(employee, { status: 201 });
}
