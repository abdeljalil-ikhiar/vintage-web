import Link from "next/link";

import { ShieldIcon } from "@/components/icons";
import { heroHighlights } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="section-divider px-6 pb-20 pt-14 sm:pt-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[color:var(--border)] bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand)] shadow-sm">
            Institutional crypto infrastructure
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-sora)] text-5xl font-semibold tracking-tight text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            Crypto Accounts for Businesses
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--text-muted)] sm:text-xl">
            Atlas Crypto provides businesses with a unified operating environment for fiat and digital
            assets, combining compliance workflows, custody partner connectivity, and infrastructure aligned
            with institutional financial workflows.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-[color:var(--text)] sm:text-base">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                  <ShieldIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172e,#1640ff,#0eb7b6)] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/15 transition-transform hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white/90 px-6 py-3.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
            >
              Request Demo
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="hero-orb absolute -left-8 top-4 h-32 w-32 rounded-full bg-cyan-300/40" />
          <div className="hero-orb absolute -right-4 top-20 h-44 w-44 rounded-full bg-blue-400/30" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/70 p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            <div className="absolute right-8 top-8 size-24 rounded-full bg-[radial-gradient(circle,#1640ff_0%,rgba(22,64,255,0.12)_42%,transparent_65%)]" />
            <div className="relative rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(15,23,46,0.04),rgba(255,255,255,0.92))] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                    Account overview
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[color:var(--text)]">
                    Unified client console
                  </h2>
                </div>
                <div className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--text-muted)]">
                  Illustrative interface
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[0.72fr_1fr]">
                <div className="space-y-4">
                  <div className="float-gentle rounded-[1.5rem] border border-white/70 bg-white p-5 shadow-lg shadow-slate-900/5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-[color:var(--text)]">Balances</p>
                      <span className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand)]">
                        Secure environment
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-[1.25rem] bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                          Fiat balances
                        </p>
                        <p className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[color:var(--text)]">
                          USD 2.4m
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                          Digital assets
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between text-sm text-[color:var(--text)]">
                            <span>BTC</span>
                            <span className="font-semibold">42%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-[color:var(--text)]">
                            <span>ETH</span>
                            <span className="font-semibold">31%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-[color:var(--text)]">
                            <span>Stablecoins</span>
                            <span className="font-semibold">27%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="float-gentle-delay rounded-[1.5rem] border border-white/70 bg-[linear-gradient(180deg,#0f172e,#1e2d59)] p-5 text-white shadow-lg shadow-slate-900/10">
                    <p className="text-sm text-slate-300">Settlement rails</p>
                    <p className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-semibold">
                      Funding and transfers
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Built for treasury teams that need dependable operating workflows across counterparties.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-white p-5 shadow-lg shadow-slate-900/5">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-rose-400" />
                      <span className="size-2 rounded-full bg-amber-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                      Asset balances
                    </p>
                    <div className="mt-4 rounded-[1.25rem] bg-[linear-gradient(180deg,#f5f7ff,#eef6ff)] p-5">
                      <p className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[color:var(--text)]">
                        Multi-asset operating view
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                        Monitor fiat, BTC, ETH, and stablecoin balances from one business interface.
                      </p>
                      <div className="mt-5 space-y-3">
                        <div className="h-2 rounded-full bg-white">
                          <div className="h-2 w-3/4 rounded-full bg-[linear-gradient(90deg,#0eb7b6,#1640ff)]" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-[color:var(--text-muted)]">
                          <div className="rounded-full bg-white px-3 py-2">BTC</div>
                          <div className="rounded-full bg-white px-3 py-2">ETH</div>
                          <div className="rounded-full bg-white px-3 py-2">USDC</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,#f8fbff,#ffffff)] p-5 shadow-lg shadow-slate-900/5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-[color:var(--text)]">Operations and controls</p>
                      <span className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand)]">
                        Policy aware
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white p-4 text-sm text-[color:var(--text)] shadow-sm">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                          Access review
                        </p>
                        <p className="mt-2 font-semibold">4 approvers active</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4 text-sm text-[color:var(--text)] shadow-sm">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                          API connections
                        </p>
                        <p className="mt-2 font-semibold">Treasury and ERP linked</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4 text-sm text-[color:var(--text)] shadow-sm">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                          Daily limits
                        </p>
                        <p className="mt-2 font-semibold">Configured by policy</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4 text-sm text-[color:var(--text)] shadow-sm">
                        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                          Audit trail
                        </p>
                        <p className="mt-2 font-semibold">Export ready logs</p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-2xl border border-dashed border-blue-200 bg-white/90 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--brand)]">
                        Future layer
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[color:var(--text)]">
                        Hermes AI Assistant coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
