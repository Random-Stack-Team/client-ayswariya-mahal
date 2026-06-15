import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  const onChange = useCallback((event) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query, onChange]);

  return matches;
}
