"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-10"
      >
        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Alex Chen
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl"
        >
          Frontend engineer crafting thoughtful interfaces.
          Writing about React, design systems, and the web.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#blog"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 ease-out hover:brightness-110 hover:shadow-purple-500/30 hover:scale-105 active:scale-95"
          >
            View Blog
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-300 ease-out hover:border-white/20 hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-gray-600 uppercase">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
