import Link from "next/link";

import { footerLegalLinks, footerPrimaryLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[#0c1528] px-6 py-14 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.7fr]">
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

          <FooterColumn title="Explore" links={footerPrimaryLinks} />
          <FooterColumn title="Legal" links={footerLegalLinks} />
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-sora)] text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
