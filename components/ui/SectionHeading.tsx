export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-xl mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-brand mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[32px] md:text-[36px] leading-tight tracking-tight text-ink font-semibold">
        {title}
      </h2>
      <span className="mt-4 mb-4 block h-[3px] w-10 bg-cta" />
      {children ? <div className="text-body text-[17px] leading-relaxed">{children}</div> : null}
    </div>
  );
}
