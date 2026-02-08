import { updateEmployeeSchema } from "@/app/schemas/employee";
import { apiError } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const employee = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!employee) {
    return apiError("NOT_FOUND", "Employee not found", null, 404);
  }

  return NextResponse.json(employee);
}


export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const parsed = updateEmployeeSchema.safeParse(body);

  if (!parsed.success) {
    return apiError("VALIDATION_ERROR", "Invalid input", parsed.error);
  }

  const updated = await prisma.user.update({
    where: { id: params.id },
    data: parsed.data,
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.user.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}

