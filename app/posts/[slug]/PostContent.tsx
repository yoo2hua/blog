"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PostContentProps {
  title: string;
  date: string;
  description: string;
  htmlContent: string;
}

export default function PostContent({
  title,
  date,
  description,
  htmlContent,
}: PostContentProps) {
  return (
    <>
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-700"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-slate-300 group-hover:bg-slate-50 group-hover:shadow-sm">
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </span>
          <span className="font-medium">Back to home</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-12"
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
            Article
          </span>
          <time>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-500">
          {description}
        </p>
      </motion.header>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="mt-12"
      >
        <div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm sm:p-12">
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </motion.div>

      {/* Footer divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 flex items-center justify-center"
      >
        <div className="h-px w-16 bg-slate-200" />
        <div className="mx-4 h-1.5 w-1.5 rounded-full bg-slate-300" />
        <div className="h-px w-16 bg-slate-200" />
      </motion.div>

      {/* Back to posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 text-center"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Browse all posts
        </Link>
      </motion.div>
    </>
  );
}
