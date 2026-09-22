"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { certificates, type Certificate } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Dialog from "./ui/Dialog";
import SwipeRail from "./ui/SwipeRail";

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [shown, setShown] = useState<Certificate | null>(null);

  const open = (cert: Certificate) => {
    setShown(cert);
    setSelected(cert);
  };

  return (
    <section id="credentials" aria-labelledby="credentials-title" className="border-t border-line py-14 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="credentials-title"
          index="05"
          label="Credentials"
          title={
            <>
              Certified, <span className="text-muted">and verifiable.</span>
            </>
          }
          intro="Certifications from HackerRank, Coursera and IBM Skills Network. Each one links to its official verification page."
        />
      </div>

      {/* Phones: contained swipe rail. From sm up: grid. */}
      <Reveal y={20}>
      <SwipeRail
        label="Certificates"
        indicatorClassName="sm:hidden"
        className="scroll-px-5 gap-3 px-5 pb-1 sm:container-page sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 md:gap-5 lg:grid-cols-4 xl:grid-cols-5"
      >
        {certificates.map((cert) => (
          <li key={cert.title} className="w-[62%] min-w-0 max-w-[15rem] shrink-0 snap-start sm:w-auto sm:max-w-none">
            <article className="group flex h-full flex-col rounded-[1.2rem] border border-line bg-surface p-2 md:rounded-none md:border-0 md:bg-transparent md:p-0">
              <button
                type="button"
                onClick={() => open(cert)}
                aria-label={`View ${cert.title} certificate`}
                className="relative aspect-[4/3] overflow-hidden rounded-[0.8rem] border border-line bg-surface md:rounded-xl"
              >
                <Image
                  src={cert.image}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1280px) 230px, (min-width: 640px) 30vw, 62vw"
                  className="object-cover object-top opacity-80 transition-all duration-700 ease-out-expo group-hover:scale-[1.04] group-hover:opacity-100"
                />
              </button>
              <div className="mt-2.5 flex flex-1 flex-col px-1 pb-1 md:mt-4 md:p-0">
                <p className="label-mono truncate text-[0.58rem] text-subtle md:text-[0.72rem]">{cert.issuer}</p>
                <h3 className="mt-1 flex-1 text-[0.84rem] font-medium leading-snug tracking-[-0.01em] md:mt-1.5 md:text-[0.98rem]">
                  {cert.title}
                </h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 self-start text-[0.78rem] text-muted transition-colors hover:text-accent md:mt-3 md:text-[0.82rem]"
                >
                  Verify <FiArrowUpRight aria-hidden />
                  <span className="sr-only">{cert.title} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          </li>
        ))}
      </SwipeRail>
      </Reveal>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        labelledBy="cert-dialog-title"
        historyKey="certificate"
        panelClassName="max-w-4xl"
      >
        {shown && (
          <div>
            <header className="flex items-center gap-3 border-b border-line px-5 pb-3 pt-1 sm:gap-4 sm:px-6 sm:py-4">
              <div className="min-w-0 flex-1">
                <p className="label-mono text-subtle">{shown.issuer}</p>
                <h2 id="cert-dialog-title" className="truncate text-lg font-medium tracking-[-0.02em] sm:text-xl">
                  {shown.title}
                </h2>
              </div>
              <a
                href={shown.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-medium text-ink transition-colors hover:bg-accent"
              >
                Verify <FiArrowUpRight aria-hidden />
              </a>
              <button
                type="button"
                data-autofocus
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong transition-colors hover:border-fg"
              >
                <FiX aria-hidden />
              </button>
            </header>
            <div className="bg-ink/60 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
              <div className="relative mx-auto aspect-[4/3] max-h-[70dvh] w-full">
                <Image
                  src={shown.image}
                  alt={`${shown.title} certificate issued via ${shown.issuer}`}
                  fill
                  sizes="(min-width: 896px) 850px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
