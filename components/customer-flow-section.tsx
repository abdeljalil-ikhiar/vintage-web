import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { customerFlowSteps } from "@/lib/site-data";

export function CustomerFlowSection() {
  return (
    <section id="workflow" className="section-divider anchor-section px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer flow"
          title="A clear path from outreach to the sales team"
          description="The acquisition flow stays simple and credible: targeted campaign activity leads visitors to the landing page, then into a contact step and a direct sales follow-up."
          align="center"
        />

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center">
          {customerFlowSteps.map((item, index) => (
            <div key={item.label} className="contents">
              <article className="card-surface card-lift flex-1 rounded-[1.6rem] p-5 text-center sm:p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                  Step {index + 1}
                </p>
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
