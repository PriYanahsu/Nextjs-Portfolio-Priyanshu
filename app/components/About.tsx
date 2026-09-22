import { aboutFacts, profile, services } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Portrait from "./ui/Portrait";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-14 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="about-title"
          index="02"
          label="About"
          title={
            <>
              I care about the whole product,{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-muted">
                not just my layer of it.
              </span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Phones: compact profile card */}
          <Reveal className="md:hidden">
            <div className="flex items-center gap-4 rounded-[1.4rem] border border-line bg-surface p-3">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                <Portrait alt={`Portrait of ${profile.name}`} sizes="80px" />
              </div>
              <div className="min-w-0">
                <p className="text-[1.05rem] font-medium tracking-[-0.01em]">{profile.name}</p>
                <p className="mt-0.5 text-[0.82rem] text-muted">{profile.company.role}</p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {profile.location}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Tablet & desktop portrait */}
          <Reveal className="hidden md:col-span-5 md:block lg:col-span-4" y={32}>
            <figure className="md:sticky md:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
                <Portrait
                  alt={`Portrait of ${profile.name}`}
                  sizes="(min-width: 1024px) 360px, 40vw"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between font-mono text-[0.72rem] text-subtle">
                <span>{profile.name}</span>
                <span>{profile.location}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-pretty text-[1.08rem] leading-[1.55] tracking-[-0.01em] sm:text-2xl sm:leading-[1.5]">
                I&apos;m an MCA graduate and full-stack developer who builds scalable, production-grade web and
                mobile applications. I work as an engineer at{" "}
                <span className="text-accent">{profile.company.name}</span>, run{" "}
                <a
                  href={profile.venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line-strong underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
                >
                  {profile.venture.name}
                </a>
                , and build business-driven software for freelance clients.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-pretty text-[0.94rem] leading-relaxed text-muted md:mt-6 md:text-base">
                I enjoy solving complex problems with clean, efficient code: turning requirements into sound data
                models, secure APIs and interfaces that feel fast. I work in Agile teams with Jira, ClickUp and
                Slack, and keep codebases healthy with Git, GitHub and GitLab. Outside of shipping, I keep my
                fundamentals sharp, with 450+ data-structure and algorithm problems solved so far.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="mt-8 overflow-hidden rounded-[1.4rem] border border-line bg-surface px-4 md:mt-12 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0">
                {aboutFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-1 gap-1 border-b border-line py-3.5 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-6 md:py-4 md:last:border-b"
                  >
                    <dt className="label-mono pt-0.5 text-[0.66rem] text-subtle sm:text-[0.72rem]">{fact.label}</dt>
                    <dd className="space-y-1 text-[0.92rem] sm:text-[0.95rem]">
                      {fact.value.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Services */}
        <div className="mt-14 md:mt-32">
          <Reveal className="mb-4 flex items-end justify-between gap-4 md:mb-8">
            <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-3xl">How I can help</h3>
            <a href="#contact" className="label-mono text-subtle transition-colors hover:text-accent">
              Start a project →
            </a>
          </Reveal>
          <ol className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-px md:overflow-hidden md:rounded-2xl md:border md:border-line md:bg-line">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="group flex flex-col rounded-[1.3rem] border border-line bg-surface p-4 transition-colors duration-500 md:rounded-none md:border-0 md:bg-ink md:p-8 md:hover:bg-surface"
              >
                <span className="label-mono text-accent">0{i + 1}</span>
                <h4 className="mt-2 text-[1.05rem] font-medium tracking-[-0.02em] md:mt-16 md:text-xl">{service.title}</h4>
                <p className="mt-1 flex-1 text-[0.86rem] leading-relaxed text-muted md:mt-3 md:text-[0.92rem]">
                  {service.description}
                </p>
                <p className="mt-3 font-mono text-[0.68rem] text-subtle md:mt-6 md:text-[0.72rem]">
                  {service.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
