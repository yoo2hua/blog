"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const posts = [
  {
    id: "1",
    title: "Building Accessible Component Libraries with React",
    excerpt:
      "A deep dive into creating reusable, accessible components that work for everyone. We'll explore ARIA patterns, keyboard navigation, and testing strategies.",
    date: "Apr 18, 2025",
    tag: "React",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "The Art of CSS Animation Performance",
    excerpt:
      "Why some animations feel buttery smooth while others stutter. Understanding the browser's rendering pipeline and how to optimize for 60fps.",
    date: "Mar 22, 2025",
    tag: "CSS",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Design Systems That Scale",
    excerpt:
      "Lessons from building design systems at scale. From token architecture to component APIs, here's what actually works in production.",
    date: "Feb 10, 2025",
    tag: "Design",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "TypeScript Patterns for Better APIs",
    excerpt:
      "Practical patterns to make your TypeScript code more expressive and maintainable. Generic constraints, conditional types, and type inference tricks.",
    date: "Jan 5, 2025",
    tag: "TypeScript",
    readTime: "7 min read",
  },
];

export default function BlogList() {
  return (
    <section id="blog" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Posts
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-400">
            Thoughts on engineering, design, and everything in between.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
