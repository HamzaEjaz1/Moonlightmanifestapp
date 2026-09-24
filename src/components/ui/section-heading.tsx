export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "start";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-start"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-lavender/80">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl leading-[1.15] text-ink sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{body}</p>}
    </div>
  );
}
