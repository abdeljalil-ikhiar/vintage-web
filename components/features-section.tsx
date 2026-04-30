import { IconCard } from "@/components/icon-card";
import { SectionHeading } from "@/components/section-heading";
import { featureCards } from "@/lib/site-data";

export function FeaturesSection() {
  return (
    <section id="products" className="section-divider px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Features"
          title="Core capabilities for institutional crypto account operations"
          description="The feature set is framed around infrastructure that supports visibility, connectivity, settlement coordination, and secure account operations for institutional clients."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {featureCards.map((card) => (
            <IconCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
