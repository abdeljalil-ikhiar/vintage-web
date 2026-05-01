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
      : "max-w-3xl";

  return (
    <div className={alignment}>
      <span className="eyebrow-pill">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-tight text-[color:var(--text)] text-pretty sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)] text-pretty sm:text-lg">
        {description}
      </p>
    </div>
  );
}
