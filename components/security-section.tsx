import { IconCard } from "@/components/icon-card";
import { SectionHeading } from "@/components/section-heading";
import { securityCards } from "@/lib/site-data";

export function SecuritySection() {
  return (
    <section id="security" className="section-divider px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Security and controls"
          title="A more serious control framework for institutional client operations"
          description="The security model is presented around compliance, accountable access, transaction policy, and monitoring controls that support disciplined account operations."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {securityCards.map((card) => (
            <IconCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
