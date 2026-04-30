type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <div className={alignment}>
      <span className="inline-flex rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand)] shadow-sm">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-tight text-[color:var(--text)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

