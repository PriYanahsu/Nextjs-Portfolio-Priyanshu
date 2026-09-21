"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import FeaturedProject from "./projects/FeaturedProject";
import ProjectIndex from "./projects/ProjectIndex";
import ProjectDetail from "./ProjectDetail";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Deep links: /#project-hirecheck opens that case study directly.
  useEffect(() => {
    const open = () => {
      const slug = window.location.hash.match(/^#project-(.+)$/)?.[1];
      const match = projects.find((p) => p.slug === slug);
      if (match) {
        window.history.replaceState(null, "", "#work");
        document.getElementById("work")?.scrollIntoView();
        setSelected(match);
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return (
    <section id="work" aria-labelledby="work-title" className="py-14 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          index="01"
          label="Selected work"
          title={
            <>
              Products I&apos;ve designed, built <span className="text-muted">and shipped.</span>
            </>
          }
          intro="Live products, from recruiting tools to AI-assisted health tracking. Open any case study to walk through every screen, feature and stack decision."
        />

        <div>
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} onOpen={() => setSelected(project)} />
          ))}
        </div>

        <div className="mt-14 md:mt-28">
          <Reveal className="mb-4 flex items-end justify-between gap-4 md:mb-6">
            <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-3xl">More projects</h3>
            <span className="label-mono text-subtle">
              <span className="md:hidden">Swipe · </span>
              {others.length} projects
            </span>
          </Reveal>
          <ProjectIndex projects={others} startIndex={featured.length} onOpen={setSelected} />
        </div>
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
