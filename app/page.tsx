import Link from "next/link";
import Section from "@/components/Section";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/site.config";

export default function Home() {
  const recent = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-[68rem] px-6 md:px-10">
      <div className="pt-16 md:pt-28 pb-20 md:pb-28">
        <h1 className="settle font-normal tracking-[-0.025em] leading-[1.04] text-[clamp(2.4rem,6.2vw,4.9rem)] max-w-[24ch]">
          {site.hero.headline}
        </h1>
        <p className="settle-two mt-10 max-w-[38rem] text-[1.2rem] text-muted">
          {site.hero.intro}
        </p>
        <p className="settle-two mt-6 font-sans text-[0.95rem] flex gap-6">
          <Link className="link" href="/about/">About me</Link>
          <Link className="link" href="/writing/">Read the writing</Link>
        </p>
      </div>

      <Section label="What I work on">
        <dl className="space-y-6">
          {site.focus.map((f) => (
            <div key={f.title}>
              <dt className="font-medium">{f.title}</dt>
              <dd className="text-muted">{f.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Recent writing">
        <PostList posts={recent} />
      </Section>
    </div>
  );
}
