import Link from "next/link";

import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
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

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-medium text-[color:var(--text-muted)] lg:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-[color:var(--text)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="#contact" className="cta-primary px-5 py-2.5 text-sm">
            Contact Sales
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-[color:var(--border)] bg-white/90 px-4 py-2.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:border-[color:var(--brand)]">
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 w-72 max-w-[calc(100vw-3rem)] rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-[var(--shadow-soft)]">
            <nav className="flex flex-col gap-3 text-sm font-medium text-[color:var(--text-muted)]">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 transition-colors hover:bg-slate-50 hover:text-[color:var(--text)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="#contact" className="cta-primary px-4 py-3 text-center text-sm">
                Contact Sales
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
