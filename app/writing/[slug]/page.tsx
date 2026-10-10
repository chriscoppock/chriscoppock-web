import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// A static export needs at least one generated route. With no published posts yet,
// emit a placeholder page so the build still succeeds.
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.length > 0 ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getAllPosts().find((p) => p.slug === slug);
  if (!meta) return { title: "Post not found", robots: { index: false } };
  return { title: meta.title, description: meta.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  if (!getAllPosts().some((p) => p.slug === slug)) {
    return (
      <div className="mx-auto w-full max-w-[68rem] px-6 md:px-10 pt-20">
        <p className="max-w-[38rem]">
          There's no post here. <Link className="link" href="/writing/">See all writing</Link>.
        </p>
      </div>
    );
  }
  const { meta, html } = await getPost(slug);

  return (
    <article className="mx-auto w-full max-w-[68rem] px-6 md:px-10">
      <header className="pt-14 md:pt-20 pb-12 md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10">
        <p className="font-sans text-[0.95rem] text-muted mb-3 md:mb-0 md:pt-3">
          <Link className="link" href="/writing/">Writing</Link>
        </p>
        <div>
          <h1 className="font-normal tracking-[-0.02em] leading-[1.1] text-[clamp(2rem,4.5vw,3.4rem)] max-w-[24ch]">
            {meta.title}
          </h1>
          <p className="font-sans text-sm text-muted mt-5">{formatDate(meta.date)}</p>
        </div>
      </header>
      <div className="md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 border-t border-rule pt-10">
        <div />
        <div className="post max-w-[38rem]" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  );
}
