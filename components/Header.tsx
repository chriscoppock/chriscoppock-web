import Link from "next/link";
import Nav from "./Nav";
import { site } from "@/site.config";

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-[68rem] px-6 md:px-10 pt-8 pb-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
      <Link href="/" className="text-xl tracking-tight font-medium">
        {site.name}
      </Link>
      <Nav />
    </header>
  );
}
