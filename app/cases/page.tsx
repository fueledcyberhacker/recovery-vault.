import { DashboardShell } from "@/components/dashboard-shell";
import { prisma } from "@/lib/prisma";

export default async function CasesDashboard() {
  const cases = await prisma.case.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <DashboardShell title="Cases Dashboard" role="CASE_MANAGER">
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Case Number</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Loss Amount</th>
            </tr>
          </thead>

          <tbody>
            {cases.map((item) => (
              <tr key={item.id} className="border-t border-border">
                <td className="p-3">{item.caseNumber}</td>
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.status}</td>
                <td className="p-3">{item.clientName || "N/A"}</td>
                <td className="p-3">
                  ${item.estimatedLoss?.toLocaleString() || 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
