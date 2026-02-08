import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json(
      { error: { code: "UNAUTHORIZED", message: "Not authenticated" } },
      { status: 401 }
    );
  }

  (req as any).user = {
    id: token.sub!,
    role: token.role,
  };

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
