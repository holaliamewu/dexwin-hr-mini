import { NextResponse } from "next/server";

export function apiError(
  code: string,
  message: string,
  details?: unknown,
  status = 400
) {
  return NextResponse.json(
    { error: { code, message, details } },
    { status }
  );
}


export function getPagination(searchParams: URLSearchParams) {
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 20);
  return {
    skip: (page - 1) * limit,
    take: limit,
  };
}
