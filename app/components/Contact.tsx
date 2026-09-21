"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile, socials } from "../data/portfolio";
import Reveal from "./ui/Reveal";

const FORM_ENDPOINT = "https://getform.io/f/bqoewmwb";
const topics = ["Full-time role", "Freelance project", "Mentorship", "Just saying hi"];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "peer w-full rounded-xl border border-line bg-ink/60 px-4 pb-2.5 pt-6 text-base text-fg sm:text-[0.95rem] outline-none transition-colors placeholder-transparent focus:border-accent/70 focus-visible:outline-none";
const labelClass =
  "pointer-events-none absolute left-4 top-2 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-subtle transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:font-sans peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:font-mono peer-focus:text-[0.66rem] peer-focus:uppercase peer-focus:tracking-[0.08em] peer-focus:text-accent";

export default function Contact() {
  const [topic, setTopic] = useState(topics[1]);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // Progressive enhancement: the form posts natively without JS; with JS it submits in place.
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-14 md:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-[radial-gradient(50%_60%_at_20%_100%,rgb(255_122_61/0.07),transparent_70%)]"
      />
      <div className="container-page">
        <Reveal className="mb-5 flex items-center gap-4 text-subtle md:mb-14">
          <span className="label-mono text-accent">06</span>
          <span className="h-px flex-1 bg-line" />
          <span className="label-mono">Contact</span>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2
                id="contact-title"
                className="text-balance text-[2.2rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.2rem]"
              >
                Have something worth building?{" "}
                <em className="font-serif font-normal italic tracking-[-0.01em] text-accent">Let&apos;s talk.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-md text-pretty text-[0.94rem] leading-relaxed text-muted md:mt-6 md:text-base">
                I&apos;m open to full-time roles, freelance projects and collaborations. Email or WhatsApp is the
                quickest way to reach me.
              </p>
            </Reveal>

            {/* Phones: quick actions */}
            <Reveal delay={0.1} className="md:hidden">
              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {[
                  { label: "Email", sub: "Write to me", href: `mailto:${profile.email}`, icon: FiMail, accent: true },
                  { label: "WhatsApp", sub: "Chat now", href: "https://wa.me/916006935523", icon: FaWhatsapp },
                  { label: "Call", sub: profile.phone, href: profile.phoneHref, icon: FiPhone },
                  { label: "LinkedIn", sub: "Connect", href: "https://www.linkedin.com/in/priyanshukumar1265/", icon: FaLinkedin },
                ].map((a) => (
                  <li key={a.label}>
                    <a
                      href={a.href}
                      target={a.href.startsWith("http") ? "_blank" : undefined}
                      rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex h-full flex-col gap-4 rounded-[1.3rem] border p-4 active:scale-[0.98] ${
                        a.accent ? "border-transparent bg-accent text-ink" : "border-line bg-surface text-fg"
                      }`}
                    >
                      <a.icon aria-hidden className="h-5 w-5" />
                      <span>
                        <span className="block text-[0.95rem] font-medium">{a.label}</span>
                        <span className={`block truncate text-[0.74rem] ${a.accent ? "text-ink/70" : "text-subtle"}`}>
                          {a.sub}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-2.5 flex w-full items-center justify-between rounded-[1.1rem] border border-line bg-surface px-4 py-3 text-left"
                aria-live="polite"
              >
                <span className="min-w-0 truncate text-[0.86rem]">{profile.email}</span>
                <span className="ml-3 inline-flex shrink-0 items-center gap-1.5 text-[0.76rem] text-muted">
                  {copied ? <FiCheck aria-hidden className="text-emerald-400" /> : <FiCopy aria-hidden />}
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </Reveal>

            <Reveal delay={0.12} className="hidden md:block">
              <div className="mt-10 flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="min-w-0 break-all text-lg font-medium tracking-[-0.01em] underline decoration-line-strong underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent sm:text-xl"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line-strong px-3 text-[0.78rem] text-muted transition-colors hover:border-fg hover:text-fg"
                  aria-live="polite"
                >
                  {copied ? <FiCheck aria-hidden className="text-emerald-400" /> : <FiCopy aria-hidden />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <a
                href={profile.phoneHref}
                className="mt-3 inline-block font-mono text-[0.85rem] text-subtle transition-colors hover:text-fg"
              >
                {profile.phone}
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="label-mono mb-2 mt-7 text-subtle md:hidden">Profiles</p>
              <ul className="grid grid-cols-1 overflow-hidden rounded-[1.3rem] border border-line bg-surface px-4 md:mt-12 md:grid-cols-2 md:gap-x-8 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0">
                {socials
                  .filter((s) => s.label !== "Email")
                  .map((s) => (
                    <li
                      key={s.label}
                      className={`border-b border-line last:border-b-0 md:last:border-b ${
                        ["WhatsApp", "LinkedIn"].includes(s.label) ? "hidden md:block" : ""
                      }`}
                    >
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 py-3.5"
                      >
                        <s.icon aria-hidden className="h-4 w-4 text-subtle transition-colors group-hover:text-accent" />
                        <span className="text-[0.92rem]">{s.label}</span>
                        <span className="ml-auto truncate font-mono text-[0.7rem] text-subtle md:hidden">
                          {s.handle}
                        </span>
                        <FiArrowUpRight
                          aria-hidden
                          className="shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg md:ml-auto"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.1} y={32}>
            <div className="relative rounded-[1.4rem] border border-line bg-surface p-4 sm:p-8 md:rounded-2xl">
              <AnimatePresence mode="wait" initial={false}>
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[22rem] flex-col items-start justify-center md:min-h-[26rem]"
                    role="status"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-ink">
                      <FiCheck aria-hidden className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-3xl font-medium tracking-[-0.03em]">Message sent.</h3>
                    <p className="mt-3 max-w-sm text-muted">
                      Thanks for reaching out. I&apos;ll get back to you at the email you provided.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-sm text-muted underline decoration-line-strong underline-offset-4 hover:text-fg"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    action={FORM_ENDPOINT}
                    method="POST"
                    onSubmit={onSubmit}
                    className="space-y-5"
                  >
                    <fieldset>
                      <legend className="label-mono mb-3 text-subtle">What&apos;s this about?</legend>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((t) => (
                          <label key={t} className="cursor-pointer">
                            <input
                              type="radio"
                              name="topic"
                              value={t}
                              checked={topic === t}
                              onChange={() => setTopic(t)}
                              className="peer sr-only"
                            />
                            <span className="inline-block rounded-full border border-line px-3.5 py-2 text-[0.84rem] text-muted transition-colors peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-fg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent hover:text-fg">
                              {t}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="relative">
                        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
                        <label htmlFor="name" className={labelClass}>Your name</label>
                      </div>
                      <div className="relative">
                        <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email address" className={fieldClass} />
                        <label htmlFor="email" className={labelClass}>Email address</label>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project or role"
                        className={`${fieldClass} resize-none`}
                      />
                      <label htmlFor="message" className={labelClass}>Tell me about your project or role</label>
                    </div>

                    <div className="flex flex-col-reverse items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[0.82rem] text-subtle" role={status === "error" ? "alert" : undefined}>
                        {status === "error" ? (
                          <span className="text-red-300">
                            Something went wrong. Please email me directly instead.
                          </span>
                        ) : (
                          "All fields are required."
                        )}
                      </p>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.92rem] font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
                      >
                        {status === "sending" ? "Sending…" : "Send message"}
                        <FiSend aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
