import Link from "next/link";

import { footerLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[#0c1528] px-6 py-14 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1640ff,#0eb7b6)] text-sm font-bold text-white">
                AC
              </div>
              <div>
                <div className="font-[family-name:var(--font-sora)] text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Atlas Crypto
                </div>
                <div className="text-sm text-slate-400">Institutional crypto infrastructure</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Atlas Crypto presents a professional infrastructure story for businesses that need crypto and
              fiat visibility, secure operating controls, and infrastructure aligned with institutional
              financial workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Marketing website presentation for Atlas Crypto. No live custody, transaction, or backend
          functionality is implemented in this demo.
        </div>
      </div>
    </footer>
  );
}
