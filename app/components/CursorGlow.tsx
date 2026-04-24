"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const targetRef = useRef({ x: -500, y: -500 });
  const currentRef = useRef({ x: -500, y: -500 });
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);

      const el = document.getElementById("cursor-glow");
      if (el) {
        el.style.transform = `translate3d(${current.x - 200}px, ${current.y - 200}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    const timer = setTimeout(() => setVisible(true), 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed top-0 left-0 z-0 h-[400px] w-[400px] transition-opacity duration-700"
      style={{
        opacity: visible ? 0.2 : 0,
        background:
          "radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(14,165,233,0.08) 40%, transparent 70%)",
        filter: "blur(80px)",
        willChange: "transform",
      }}
    />
  );
}
