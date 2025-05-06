import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return new Response("Unauthorized", { status: 403 });
  }

  const { userId, newRole } = await req.json();

  await prisma.user.update({
    where: { id: userId },
    data: { role: newRole },
  });

  return new Response("Role updated", { status: 200 });
}
