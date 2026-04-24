"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        {/* Top-center soft blue glow */}
        <div
          className="absolute -top-[10%] left-1/2 h-[70vh] w-[80vh] -translate-x-1/2 rounded-full animate-float opacity-60"
          style={{
            background: "radial-gradient(circle, #e0f2fe 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Top-right soft sky glow */}
        <div
          className="absolute -top-[5%] -right-[10%] h-[50vh] w-[50vh] rounded-full animate-float-delayed opacity-40"
          style={{
            background: "radial-gradient(circle, #f0f9ff 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-left subtle warm glow */}
        <div
          className="absolute -bottom-[10%] -left-[10%] h-[50vh] w-[50vh] rounded-full animate-float-slow opacity-30"
          style={{
            background: "radial-gradient(circle, #f8fafc 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
