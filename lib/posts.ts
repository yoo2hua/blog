import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
};

function generateSlug(fileName: string): string {
  return fileName
    .replace(/\.md$/, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const slug =
        data.slug && typeof data.slug === "string"
          ? data.slug
          : generateSlug(fileName);

      return {
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        description: String(data.description ?? ""),
        content,
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const fileNames = fs.readdirSync(postsDirectory);

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const fileSlug =
      data.slug && typeof data.slug === "string"
        ? data.slug
        : generateSlug(fileName);

    if (fileSlug === slug) {
      return {
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        description: String(data.description ?? ""),
        content,
        slug: fileSlug,
      };
    }
  }

  return null;
}

export async function markdownToHtml(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}
