import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface HeaderScrollState {
  /** Page has scrolled past the top, so the bar floats on a solid surface. */
  floating: boolean;
  /** User is scrolling down, so the bar slides out of the way. */
  hidden: boolean;
}

const floatThreshold = 16;
const hideThreshold = 160;
const minDelta = 4;

export function useHeaderScroll(): HeaderScrollState {
  const { scrollY } = useScroll();
  const [state, setState] = useState<HeaderScrollState>({ floating: false, hidden: false });

  const update = (y: number, previous: number) => {
    const delta = y - previous;
    setState((current) => {
      const floating = y > floatThreshold;
      let hidden = current.hidden;
      if (y <= hideThreshold) hidden = false;
      else if (Math.abs(delta) >= minDelta) hidden = delta > 0;

      return current.floating === floating && current.hidden === hidden
        ? current
        : { floating, hidden };
    });
  };

  // Restore the correct state when the page loads mid-scroll (refresh, back navigation).
  useEffect(() => {
    update(window.scrollY, window.scrollY);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    update(y, scrollY.getPrevious() ?? y);
  });

  return state;
}
