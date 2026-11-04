"use client";

import { useEffect, useState } from "react";

import { timeZone } from "@/data/profile";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone,
});

/** Live local time, rendered after mount so server and client markup always match. */
export function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const tick = () => setNow(new Date());

    tick();
    // Align updates to the start of each minute.
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(tick, 60_000);
    }, 60_000 - (Date.now() % 60_000));

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!now) {
    // Reserve the width so the line does not shift when the time appears.
    return <span aria-hidden="true" className="invisible">00:00 UTC+8</span>;
  }

  return <time dateTime={now.toISOString()}>{formatter.format(now)} UTC+8</time>;
}
