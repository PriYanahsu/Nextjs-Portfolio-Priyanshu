"use client";

import { useEffect, useState } from "react";

/** Live clock for a given IANA time zone; renders a placeholder until mounted to avoid hydration drift. */
export default function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return <time className="tabular-nums text-fg/80">{time ?? "--:--"}</time>;
}
