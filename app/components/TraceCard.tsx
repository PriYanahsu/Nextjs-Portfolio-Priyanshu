import { FiDatabase, FiLayout, FiServer } from "react-icons/fi";

const layers = [
  { name: "Interface", detail: "React · Next.js · TypeScript", icon: FiLayout },
  { name: "API", detail: "Spring Boot · FastAPI · JWT", icon: FiServer },
  { name: "Data", detail: "PostgreSQL · MySQL · Supabase", icon: FiDatabase },
];

/**
 * A small "request trace" illustrating the layers Priyanshu works across.
 * Pure CSS animation: a pulse travels between layers and each node lights up in turn.
 * Horizontal below lg, vertical at lg and above.
 */
export default function TraceCard() {
  return (
    <figure
      aria-label="Request lifecycle across interface, API and data layers"
      className="relative rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur-sm sm:p-5"
    >
      <figcaption className="mb-4 flex items-center justify-between gap-3">
        <span className="label-mono text-subtle">trace · request lifecycle</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 font-mono text-[0.68rem] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          200 OK
        </span>
      </figcaption>

      <ol className="flex items-stretch lg:flex-col">
        {layers.map((layer, i) => (
          <li key={layer.name} className="flex flex-1 items-stretch lg:flex-col">
            <div
              className="node-ping flex min-w-0 flex-1 flex-col items-center gap-2 rounded-xl border border-line-strong bg-ink/60 px-2 py-3 text-center sm:px-3 lg:flex-row lg:gap-4 lg:px-4 lg:py-3.5 lg:text-left"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-fg">
                <layer.icon aria-hidden className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.82rem] font-medium sm:text-sm">{layer.name}</span>
                <span className="mt-0.5 hidden font-mono text-[0.7rem] text-subtle sm:block">
                  {layer.detail}
                </span>
              </span>
              <span className="ml-auto hidden font-mono text-[0.68rem] text-subtle lg:block">
                0{i + 1}
              </span>
            </div>

            {i < layers.length - 1 && (
              <span
                aria-hidden
                className="relative mx-1.5 h-px w-4 shrink-0 self-center overflow-hidden bg-line-strong lg:self-start sm:mx-2 sm:w-8 lg:mx-0 lg:ml-8 lg:h-7 lg:w-px"
              >
                <span
                  className="pulse-x absolute inset-y-0 left-0 w-1/3 bg-accent lg:hidden"
                  style={{ animationDelay: `${i * 0.8 + 0.4}s` }}
                />
                <span
                  className="pulse-y absolute inset-x-0 top-0 hidden h-1/3 bg-accent lg:block"
                  style={{ animationDelay: `${i * 0.8 + 0.4}s` }}
                />
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-4 hidden border-t border-line pt-4 font-mono text-[0.72rem] leading-relaxed text-subtle lg:block">
        <p>
          <span className="text-accent">→</span> owned end to end: schema, API, UI
        </p>
        <p>
          <span className="text-accent">→</span> avg. API response time{" "}
          <span className="text-fg">−30%</span> after optimization
          <span className="caret ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-fg/70" />
        </p>
      </div>
    </figure>
  );
}
