import { SectionHeading } from "@/components/section-heading";
import { overviewPoints } from "@/lib/site-data";

export function PlatformSection() {
  return (
    <section id="solutions" className="section-divider anchor-section px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Platform overview"
          title="A controlled operating environment for business digital asset activity"
          description="Atlas Crypto is positioned as infrastructure designed for businesses that need clearer visibility, approvals, settlement coordination, and reporting across digital asset workflows."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            {overviewPoints.map((point, index) => (
              <article
                key={point.title}
                className="card-surface card-lift rounded-[1.75rem] p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 items-center justify-center rounded-full bg-[color:var(--brand-soft)] text-sm font-bold text-[color:var(--brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[color:var(--text)] text-pretty">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-[color:var(--text-muted)]">{point.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#102041,#172f63)] p-8 text-white shadow-[var(--shadow-soft)]">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Operating model
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-semibold">
              Infrastructure aligned with finance, operations, and compliance teams
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The platform story stays grounded in infrastructure, secure environment design, and operational
              workflows rather than speculative messaging or consumer-style product claims.
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-white/8 p-6">
              <h4 className="font-[family-name:var(--font-sora)] text-xl font-semibold">
                Designed for businesses evaluating institutional-style controls
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                The emphasis stays on account infrastructure, custody model coordination, approval pathways,
                and reporting consistency across internal stakeholders.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Clients</p>
                <p className="mt-2 text-lg font-semibold">Businesses and finance teams</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Environment</p>
                <p className="mt-2 text-lg font-semibold">Secure and policy aware</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
