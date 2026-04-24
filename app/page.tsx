import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import GradientBackground from "./components/GradientBackground";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f8fafc]">
      <GradientBackground />
      <CursorGlow />
      <main className="relative z-10 flex-1">
        <Hero />

        <section id="blog" className="relative px-6 py-32 sm:py-40">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Latest Posts
            </h2>

            <div className="flex flex-col gap-8">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="group block"
                >
                  <article className="rounded-2xl border border-slate-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-300/80 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 sm:p-10">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-500">
                        Article
                      </span>
                      <time>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-sky-700 sm:text-2xl">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                      {post.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-600 transition-colors group-hover:text-sky-700">
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
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
