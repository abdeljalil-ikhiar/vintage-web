import { IconCard } from "@/components/icon-card";
import { SectionHeading } from "@/components/section-heading";
import { securityCards } from "@/lib/site-data";

export function SecuritySection() {
  return (
    <section id="security" className="section-divider anchor-section px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Security and controls"
          title="A control framework built around accountable business operations"
          description="The security story is structured around role design, transaction policy, auditability, monitoring, and compliance workflows."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {securityCards.map((card) => (
            <IconCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#f7fbff,#ffffff)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Access
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                Separate roles for review, approval, and execution support a more secure environment.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Oversight
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                Audit logs and reporting outputs help internal teams review operational workflows with clarity.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Policy
              </p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                Controls are positioned to align with transaction limits, risk review, and compliance workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
