import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-muted">The first posts are on the way.</p>;
  }
  return (
    <ul className="space-y-8">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link href={`/writing/${p.slug}/`} className="group block">
            <h3 className="text-[1.35rem] leading-snug font-medium group-hover:text-accent">
              {p.title}
            </h3>
            <p className="font-sans text-sm text-muted mt-1">{formatDate(p.date)}</p>
            {p.description && <p className="mt-2 text-muted">{p.description}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
