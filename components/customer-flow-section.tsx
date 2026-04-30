import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { customerFlowSteps } from "@/lib/site-data";

export function CustomerFlowSection() {
  return (
    <section className="section-divider px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer flow"
          title="A future acquisition flow from campaign outreach to human sales"
          description="As a future client-engagement layer, Atlas Crypto plans a guided path that can route prospects from outreach into a personalized landing page, an AI-led first response, and then a human sales handoff."
          align="center"
        />

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center">
          {customerFlowSteps.map((item, index) => (
            <div key={item.label} className="contents">
              <article className="flex-1 rounded-[1.6rem] border border-[color:var(--border)] bg-white/95 p-5 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(16,24,40,0.12)]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-[color:var(--text)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{item.description}</p>
              </article>
              {index < customerFlowSteps.length - 1 ? (
                <div className="mx-auto flex h-8 items-center justify-center text-[color:var(--brand)] lg:h-auto lg:w-10">
                  <ArrowRightIcon className="h-5 w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
