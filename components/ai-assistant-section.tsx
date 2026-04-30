import { BotIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { aiAssistantCapabilities, aiConversation, aiSummaryPoints } from "@/lib/site-data";

export function AiAssistantSection() {
  return (
    <section id="ai-assistant" className="section-divider px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.84fr_1.16fr]">
        <div>
          <SectionHeading
            eyebrow="Future vision"
            title="AI Client Assistant (Coming Soon)"
            description="Hermes is planned as a future AI client assistant layer that can answer product questions, qualify inbound leads, handle 80-90% of routine conversations, and route serious prospects to human sales teams."
          />

          <div className="mt-8 rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#111a34,#223468)] p-6 text-white shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <BotIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Coming soon</p>
                <p className="mt-1 font-[family-name:var(--font-sora)] text-2xl font-semibold">Hermes</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              The assistant is positioned as a future layer for client education, lead routing, and sales
              support rather than a live account or execution feature.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {aiAssistantCapabilities.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/95 px-5 py-4 text-sm font-medium text-[color:var(--text)] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[color:var(--border)] bg-white p-8 shadow-[var(--shadow-soft)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                Visual concept
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[color:var(--text)]">
                Illustrative client conversation
              </h3>
            </div>
            <span className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand)]">
              UI mockup only
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {aiConversation.map((entry) => {
              const isAi = entry.speaker === "AI";

              return (
                <div
                  key={`${entry.speaker}-${entry.message}`}
                  className={isAi ? "ml-10 rounded-[1.5rem] bg-[linear-gradient(135deg,#1640ff,#0eb7b6)] p-4 text-sm text-white shadow-sm" : "mr-10 rounded-[1.5rem] bg-slate-50 p-4 text-sm text-[color:var(--text)] shadow-sm"}
                >
                  <p className="font-semibold">{entry.speaker}</p>
                  <p className="mt-2">{entry.message}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#f6f9ff,#ffffff)] p-5">
            <p className="text-sm font-semibold text-[color:var(--text)]">Prospect summary for sales handoff</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {aiSummaryPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white bg-white px-4 py-3 text-sm text-[color:var(--text-muted)] shadow-sm"
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
