import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, markdownToHtml, getAllPosts } from "@/lib/posts";
import PostContent from "./PostContent";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Alex Chen`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);

  return (
    <div className="relative min-h-screen bg-[#f8fafc]">
      {/* Subtle top gradient */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[50vh] w-full"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #e0f2fe 0%, transparent 70%)",
        }}
      />

      <article className="relative z-10 mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <PostContent
          title={post.title}
          date={post.date}
          description={post.description}
          htmlContent={htmlContent}
        />
      </article>
    </div>
  );
}
