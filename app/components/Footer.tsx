import { FiArrowUp } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";
import LocalTime from "./ui/LocalTime";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-lg font-medium tracking-[-0.02em]">{profile.name}</p>
            <p className="mt-1 text-[0.92rem] text-muted">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-4 font-mono text-[0.72rem] text-subtle">
              Local time <LocalTime timeZone={profile.timezone} /> IST
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {[...navLinks, { label: "Contact", id: "contact" }].map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-[0.92rem] text-muted transition-colors hover:text-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-wrap content-start gap-1.5 md:col-span-4 md:justify-end">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-accent"
                >
                  <s.icon aria-hidden className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] text-subtle">
            © {new Date().getFullYear()} {profile.name}. Designed and built with Next.js.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start font-mono text-[0.72rem] uppercase tracking-[0.08em] text-subtle transition-colors hover:text-fg sm:self-auto"
          >
            Back to top
            <FiArrowUp aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
