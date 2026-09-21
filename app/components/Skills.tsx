import { coreConcepts, skillGroups } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import StackTabs from "./StackTabs";

export default function Skills() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line py-14 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="stack-title"
          index="04"
          label="Stack"
          title={
            <>
              The tools I reach for, <span className="text-muted">and the fundamentals behind them.</span>
            </>
          }
          intro="Grouped by where they sit in the stack, from the languages I write in to the platforms I deploy on."
        />

        <Reveal className="md:hidden">
          <StackTabs />
        </Reveal>

        <div className="hidden border-t border-line md:block">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.04}
              y={16}
              className="grid grid-cols-1 gap-4 border-b border-line py-6 md:grid-cols-12 md:gap-10 md:py-8"
            >
              <h3 className="flex items-baseline gap-3 md:col-span-3">
                <span className="text-lg font-medium tracking-[-0.02em]">{group.title}</span>
                <span className="font-mono text-[0.7rem] text-subtle">{String(group.items.length).padStart(2, "0")}</span>
              </h3>
              <ul className="flex flex-wrap gap-2 md:col-span-9">
                {group.items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3.5 py-2 text-[0.88rem] text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg"
                  >
                    {Icon ? (
                      <Icon aria-hidden className="h-4 w-4 transition-colors duration-300 group-hover:text-accent" />
                    ) : (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-subtle transition-colors group-hover:bg-accent" />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal y={16} className="mt-8 grid grid-cols-1 gap-3 md:mt-0 md:grid-cols-12 md:gap-10 md:py-8">
          <h3 className="text-base font-medium tracking-[-0.02em] md:col-span-3 md:text-lg">Core concepts</h3>
          <ul className="flex flex-wrap gap-1.5 md:col-span-9 md:block md:leading-loose">
            {coreConcepts.map((concept, i) => (
              <li
                key={concept}
                className="rounded-full border border-line px-3 py-1.5 text-[0.8rem] text-muted md:inline md:rounded-none md:border-0 md:p-0 md:text-base"
              >
                {concept}
                {i < coreConcepts.length - 1 && (
                  <span aria-hidden className="mx-2.5 hidden text-accent/70 md:inline">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
