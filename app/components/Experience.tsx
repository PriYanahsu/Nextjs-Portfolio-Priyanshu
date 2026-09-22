import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { experience, profile } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import MobileExpandable from "./ui/MobileExpandable";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-14 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          index="03"
          label="Experience"
          title={
            <>
              Where I&apos;ve been <span className="text-muted">building.</span>
            </>
          }
          intro={
            <>
              Product engineering in a team, alongside my own ventures and client work.{" "}
              <a
                href={profile.resume}
                download="Priyanshu_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1 text-fg underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Full résumé <FiDownload aria-hidden className="h-3.5 w-3.5" />
              </a>
            </>
          }
        />

        <ol className="relative space-y-3 md:space-y-0">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.role}
              delay={i * 0.05}
              className="rounded-[1.4rem] border border-line bg-surface p-5 md:grid md:grid-cols-12 md:gap-10 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0 md:py-14"
            >
              {/* Phones: company left, period chip right. Desktop: period above company. */}
              <div className="flex items-center justify-between gap-3 md:col-span-4 md:flex-col md:items-start md:justify-start md:gap-3 lg:col-span-3">
                <p className="flex items-center gap-2 text-[0.92rem] md:order-2 md:text-[0.95rem]">
                  <span
                    aria-hidden
                    className={`h-2 w-2 shrink-0 rounded-full ${i === 0 ? "bg-accent" : "border border-subtle"}`}
                  />
                  {job.companyHref ? (
                    <a
                      href={job.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      {job.company}
                      <FiArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="label-mono shrink-0 rounded-full bg-white/[0.05] px-2.5 py-1 text-[0.62rem] text-subtle md:order-1 md:bg-transparent md:p-0 md:text-[0.72rem]">
                  {job.period}
                </p>
              </div>

              <div className="mt-4 md:col-span-8 md:mt-0 lg:col-span-9">
                <h3 className="text-[1.35rem] font-medium leading-tight tracking-[-0.03em] sm:text-3xl">{job.role}</h3>
                <p className="mt-2 max-w-2xl text-pretty text-[0.92rem] leading-relaxed text-muted md:mt-3 md:text-base">
                  {job.summary}
                </p>

                {job.metrics && (
                  <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4 md:mt-8">
                    {job.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col-reverse bg-surface p-3.5 md:bg-ink md:p-5">
                        <dt className="mt-1 text-[0.76rem] text-subtle md:text-[0.8rem]">{m.label}</dt>
                        <dd className="text-xl font-medium tracking-[-0.03em] sm:text-3xl">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <MobileExpandable label="highlights" id={`highlights-${job.company}`}>
                  <ul className="mt-4 space-y-3 md:mt-8">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.9rem] leading-relaxed text-muted md:text-[0.95rem]">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-subtle" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </MobileExpandable>

                <ul className="mt-4 flex flex-wrap gap-1.5 md:mt-6 md:gap-x-0">
                  {job.stack.map((s, si) => (
                    <li
                      key={s}
                      className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[0.66rem] text-subtle md:rounded-none md:bg-transparent md:p-0 md:text-[0.72rem]"
                    >
                      {s}
                      {si < job.stack.length - 1 && <span className="hidden whitespace-pre md:inline"> · </span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
