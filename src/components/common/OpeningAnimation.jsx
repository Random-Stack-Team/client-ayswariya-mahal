import { useCallback, useEffect, useRef, useState } from "react";
import "./OpeningAnimation.css";
import { openingTextPaths } from "./openingTextPaths";

const INTRO_DURATION = 3600;
const EXIT_DURATION = 650;

export default function OpeningAnimation({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const glyphRefs = useRef([]);
  const hasCompleted = useRef(false);

  useEffect(() => {
    glyphRefs.current.forEach((path) => {
      if (!path) return;

      // SVG handwriting works by measuring each generated glyph path, hiding the
      // stroke with dashoffset, then animating the offset back to zero.
      const length = path.getTotalLength();
      path.style.setProperty("--path-length", length);
    });
  }, []);

  const startExit = useCallback(() => {
    if (hasCompleted.current) return;
    hasCompleted.current = true;
    setIsExiting(true);
    window.setTimeout(onComplete, EXIT_DURATION);
  }, [onComplete]);

  useEffect(() => {
    const finishTimer = window.setTimeout(startExit, INTRO_DURATION);
    return () => window.clearTimeout(finishTimer);
  }, [startExit]);

  const renderGlyphs = (glyphs, offset = 0) =>
    glyphs.map((glyph, index) => (
      <path
        key={`${glyph.ch}-${index}-${offset}`}
        ref={(node) => {
          glyphRefs.current[offset + index] = node;
        }}
        className="opening-animation__glyph"
        d={glyph.d}
        style={{ "--letter-delay": `${glyph.delay}s` }}
        aria-hidden="true"
      />
    ));

  return (
    <section
      className={`opening-animation ${isExiting ? "opening-animation--exit" : ""}`}
      aria-label="Welcome to Aswariya Mahal"
    >
      <div className="opening-animation__frame">
        <div className="opening-animation__rule" />

        <div className="opening-animation__title-wrap">
          <svg
            className="opening-animation__title"
            viewBox="-55 0 860 175"
            role="img"
            aria-labelledby="opening-title"
          >
            <title id="opening-title">Welcome to Aswariya Mahal</title>
            <defs>
              <filter id="openingGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g className="opening-animation__line opening-animation__line--top">
              {renderGlyphs(openingTextPaths.top)}
            </g>
            <g className="opening-animation__line opening-animation__line--bottom" filter="url(#openingGlow)">
              {renderGlyphs(openingTextPaths.bottom, openingTextPaths.top.length)}
            </g>
          </svg>
          <span className="opening-animation__shine" aria-hidden="true" />
        </div>

        <p className="opening-animation__tagline">Creating Memorable Celebrations</p>
      </div>
    </section>
  );
}
