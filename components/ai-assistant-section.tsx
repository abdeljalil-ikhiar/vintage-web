import { IconCard } from "@/components/icon-card";
import { SectionHeading } from "@/components/section-heading";
import { futureCapabilityCards } from "@/lib/site-data";

export function FutureCapabilitiesSection() {
  return (
    <section id="future-capabilities" className="section-divider anchor-section px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Future capabilities"
            title="Optional workflow layers that may be added later"
            description="The current project is a marketing website only. The items below describe possible future workflow enhancements and are not active features of this site."
          />

          <div className="mt-8 rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#102041,#172f63)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Not live today</p>
            <h3 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-semibold">
              Any future automation would remain optional and subject to human review
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              This keeps the current site realistic and presentation-ready while still leaving room for
              future enhancements around product education, information gathering, and sales routing.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:items-start">
          {futureCapabilityCards.map((card) => (
            <IconCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
