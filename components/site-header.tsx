import Link from "next/link";

import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1640ff,#0eb7b6)] text-sm font-bold text-white shadow-lg shadow-blue-500/20">
            AC
          </div>
          <div>
            <div className="font-[family-name:var(--font-sora)] text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
              Atlas Crypto
            </div>
            <div className="text-sm text-[color:var(--text-muted)]">Institutional crypto infrastructure</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--text-muted)] lg:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-[color:var(--text)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className="rounded-full bg-[linear-gradient(135deg,#0f172e,#1640ff,#0eb7b6)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-transform hover:-translate-y-0.5"
          >
            Contact Sales
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-[color:var(--border)] px-4 py-2.5 text-sm font-semibold text-[color:var(--text)]">
            Menu
          </summary>
          <div className="absolute inset-x-6 top-full mt-3 rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-[var(--shadow-soft)]">
            <nav className="flex flex-col gap-3 text-sm font-medium text-[color:var(--text-muted)]">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="rounded-2xl px-3 py-2 hover:bg-slate-50 hover:text-[color:var(--text)]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-[linear-gradient(135deg,#0f172e,#1640ff,#0eb7b6)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
