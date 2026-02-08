export function cursorPagination(params: URLSearchParams) {
  const take = Number(params.get("limit") ?? 20);
  const cursor = params.get("cursor");

  return {
    take: take + 1,
    cursor: cursor ? { id: cursor } : undefined,
    skip: cursor ? 1 : 0,
  };
}


// const items = await prisma.user.findMany({ ...pagination });
// const hasNext = items.length > limit;
