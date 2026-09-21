import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
}

/** Numbered section header: mono index rule, display title, optional intro column. */
export default function SectionHeading({ index, label, title, intro, id }: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-20">
      <Reveal className="mb-5 flex items-center gap-4 text-subtle md:mb-10">
        <span className="label-mono text-accent">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="label-mono">{label}</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8" delay={0.05}>
          <h2
            id={id}
            className="text-balance text-[1.85rem] font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl sm:leading-[1.05] lg:text-[3.6rem]"
          >
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal className="lg:col-span-4" delay={0.12}>
            <p className="max-w-md text-pretty text-[0.9rem] leading-relaxed text-muted md:text-[0.95rem] lg:ml-auto">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
