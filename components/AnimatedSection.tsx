"use client";

import { useRef } from "react";
import { useSpring, animated, useInView } from "@react-spring/web";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: "-100px 0px",
  });

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 280, friction: 60 },
    delay,
  });

  return (
    <animated.div ref={ref} style={spring}>
      {children}
    </animated.div>
  );
}
