import { useEffect, useState } from "react";

const introIsComplete = () =>
  typeof document === "undefined" ||
  !document.documentElement.classList.contains("intro-scroll-lock");

export function useIntroReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let readyFrame;
    const markReady = () => {
      readyFrame = requestAnimationFrame(() => setIsReady(true));
    };

    if (introIsComplete()) {
      markReady();
      return () => cancelAnimationFrame(readyFrame);
    }

    const observer = new MutationObserver(() => {
      if (introIsComplete()) {
        markReady();
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      if (readyFrame) cancelAnimationFrame(readyFrame);
    };
  }, []);

  return isReady;
}
