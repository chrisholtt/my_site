"use client";

import { useEffect, useState } from "react";

export function GlintBadge() {
  const [showGlint, setShowGlint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlint(false);
    }, 2000); // 2 loops at 2s each

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="relative inline-flex items-center rounded-md bg-violet-400/10 px-2.5 py-0.5 text-xs font-medium text-violet-300 ring-1 ring-inset ring-violet-400/30 overflow-hidden">
      v5.0
      {showGlint && (
        <>
          {/* Rotating gradient overlay */}
          <span className="absolute inset-0 pointer-events-none glint-spin" />
          {/* Pulsing glow */}
          <span className="absolute inset-0 rounded-md pointer-events-none glint-glow" />
        </>
      )}
      <style jsx>{`
        .glint-spin {
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            transparent 50deg,
            rgba(139, 92, 246, 0.2) 70deg,
            rgba(199, 210, 254, 0.4) 85deg,
            rgba(199, 210, 254, 0.5) 90deg,
            rgba(199, 210, 254, 0.4) 95deg,
            rgba(139, 92, 246, 0.2) 110deg,
            transparent 130deg,
            transparent 360deg
          );
          mix-blend-mode: screen;
          animation: spinAndFade 2s ease-in-out;
          animation-iteration-count: 2;
          filter: blur(3px);
        }

        .glint-glow {
          box-shadow: inset 0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 0 30px rgba(199, 210, 254, 0.2);
          animation: pulseGlow 2s ease-in-out;
          animation-iteration-count: 2;
        }

        @keyframes spinAndFade {
          0% {
            transform: rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulseGlow {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
