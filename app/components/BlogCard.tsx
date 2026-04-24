"use client";

import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <a href="#" className="group block">
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-md transition-shadow duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-purple-500/5 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-300">
              {post.tag}
            </span>
            <span>{post.date}</span>
            <span className="text-gray-700">·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-gray-200 sm:text-2xl">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-gray-400">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
            <span>Read more</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </motion.div>
      </a>
    </motion.article>
  );
}
