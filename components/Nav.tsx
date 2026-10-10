"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writing/", label: "Writing" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="flex gap-6 font-sans text-[0.95rem]">
      {links.map(({ href, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={
              "underline-offset-[0.35em] decoration-[1.5px] hover:text-accent hover:underline " +
              (active ? "underline decoration-accent" : "text-muted")
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
