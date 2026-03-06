"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        // Use transform for better performance (GPU accelerated)
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div
        ref={glowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 25%, rgba(139, 92, 246, 0.04) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
