"use client";
import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";

type TRoleGuard = {
    children: React.ReactNode;
    allowedRoles: Role;
}
export function RoleGuard({ children, allowedRoles }: TRoleGuard) {
  const { data: session } = useSession();

  if (!session || !allowedRoles.includes(session.user.role)) {
    return null;
  }

  return children;
}
