import type { ComponentType, SVGProps } from "react";

type IconCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <article className="card-surface card-lift group h-full rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand)] transition-colors duration-300 group-hover:bg-[linear-gradient(135deg,rgba(22,64,255,0.16),rgba(14,183,182,0.18))]">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-sora)] text-xl font-semibold text-[color:var(--text)] text-pretty">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)] sm:text-base">
        {description}
      </p>
    </article>
  );
}
