import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[68rem] px-6 md:px-10 mt-24 pb-12">
      <div className="border-t border-rule pt-6 flex flex-wrap justify-between gap-4 font-sans text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Views expressed here are my own.
        </p>
        <p className="flex gap-5">
          <a className="link" href={site.linkedin} rel="me noopener">LinkedIn</a>
          <a className="link" href={`mailto:${site.email}`}>Email</a>
        </p>
      </div>
    </footer>
  );
}
