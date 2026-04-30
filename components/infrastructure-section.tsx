import { SectionHeading } from "@/components/section-heading";
import { developerHighlights, infrastructureFlow } from "@/lib/site-data";

export function InfrastructureSection() {
  return (
    <section id="developers" className="section-divider px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Infrastructure"
          title="A clearer operating stack from onboarding through reporting"
          description="This section presents the platform as a professional stack for businesses that need account visibility, custody partner coordination, settlement infrastructure, and API-driven reporting pathways."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4">
            {infrastructureFlow.map((item, index) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-[color:var(--border)] bg-white/95 p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-[family-name:var(--font-sora)] text-lg font-semibold text-[color:var(--text)]">
                        {item.label}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                        Step {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#ffffff,#f4f7fc)] p-8 shadow-[var(--shadow-soft)]">
            <span className="inline-flex rounded-full border border-[color:var(--border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand)]">
              Developer ready
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-semibold text-[color:var(--text)]">
              Business-facing controls with integration paths for internal systems
            </h3>
            <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)]">
              The product story is designed to work for finance teams, operations teams, compliance teams,
              and developers who need cleaner data flows across crypto account infrastructure.
            </p>

            <div className="mt-8 space-y-3">
              {developerHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[color:var(--border)] bg-white px-5 py-4 text-sm font-medium text-[color:var(--text)] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
