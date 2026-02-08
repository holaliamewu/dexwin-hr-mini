import { NextResponse } from "next/server";
import { ApiError } from "./errors";

export async function handle<T>(fn: () => Promise<T>) {
  try {
    return NextResponse.json(await fn());
  } catch (err: any) {
    if (err instanceof ApiError) {
      return NextResponse.json(
        { error: { code: err.code, message: err.message, details: err.details } },
        { status: err.status }
      );
    }

    console.error(err);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Something broke" } },
      { status: 500 }
    );
  }
}
