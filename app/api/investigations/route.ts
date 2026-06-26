import { NextResponse } from "next/server";
import { getSession, canAccess } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getSession();

  if (!session || !canAccess(session.role, ["ADMIN", "INVESTIGATOR"])) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }

  const where =
    session.role === "INVESTIGATOR"
      ? { case: { assignedInvestigatorId: session.id } }
      : undefined;

  const investigations = await prisma.investigation.findMany({
    where,
    include: {
      case: true,
    },
  });

  return NextResponse.json({ investigations });
}