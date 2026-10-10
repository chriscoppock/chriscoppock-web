import type { Metadata } from "next";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on offensive security, threat intelligence, and AI.",
};

export default function Writing() {
  const posts = getAllPosts();
  return (
    <div className="mx-auto w-full max-w-[68rem] px-6 md:px-10">
      <div className="pt-14 md:pt-20 pb-14">
        <h1 className="font-normal tracking-[-0.02em] leading-[1.1] text-[clamp(2rem,4.5vw,3.4rem)]">
          Writing
        </h1>
      </div>
      <section className="grid gap-3 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 border-t border-rule py-10">
        <p className="font-sans text-[0.95rem] text-muted">{posts.length} {posts.length === 1 ? "post" : "posts"}</p>
        <div className="max-w-[38rem]">
          <PostList posts={posts} />
        </div>
      </section>
    </div>
  );
}
