import { DashboardShell } from "@/components/dashboard-shell";
import { prisma } from "@/lib/prisma";

export default async function CaseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const caseNumber = id.replace("_", "-").toUpperCase();

  const record = await prisma.case.findFirst({
    where: {
      caseNumber,
    },
  });

  if (!record) {
    return (
      <DashboardShell title="Case Not Found" role="CASE_MANAGER">
        <p>Case not found.</p>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell title={record.title} role="CASE_MANAGER">
      <div className="space-y-4">
        <div>
          <strong>Case Number:</strong> {record.caseNumber}
        </div>

        <div>
          <strong>Status:</strong> {record.status}
        </div>

        <div>
          <strong>Client:</strong> {record.clientName}
        </div>

        <div>
          <strong>Loss Amount:</strong> ${record.estimatedLoss}
        </div>

        <div>
          <strong>Description:</strong> {record.description}
        </div>
      </div>
    </DashboardShell>
  );
}
