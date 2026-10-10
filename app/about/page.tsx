import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-[68rem] px-6 md:px-10">
      <div className="pt-14 md:pt-20 pb-14">
        <h1 className="font-normal tracking-[-0.02em] leading-[1.1] text-[clamp(2rem,4.5vw,3.4rem)] max-w-[22ch]">
          About
        </h1>
      </div>

      {/* DRAFT COPY: rewrite in your own voice. Keep it general: no customer or agency names,
          nothing from cleared work. */}
      <Section
        label="Background"
        aside={
          <Image
            src="/chris.jpg"
            alt="Portrait of Chris Coppock"
            width={600}
            height={750}
            priority
            className="w-40 md:w-full h-auto"
          />
        }
      >
        <div className="space-y-5">
          <p>
            I’m Chris, a cybersecurity engineer with 24 years across cybersecurity, IT, and
            intelligence. The most recent stretch of my career has been in offensive security,
            asking how defenses actually hold up.
          </p>
          <p>
            I built and ran a red team of a dozen operators. I went into the work expecting
            breaking in to be hard. Sometimes it was. More often than defenders would like to hear,
            it was easy, and rarely because of anything clever. It was because of trust nobody had
            questioned: one system assuming another was safe, one team assuming another had handled
            it. Environments tend to fail at the seams, between components and between people, far
            more than inside the components themselves.
          </p>
          <p>
            That changed what I think defense is for. It isn’t only stopping the best attacker you
            can imagine. It’s finding the assumptions of trust that any attacker would test first
            and making each one prove itself. Today my work is security engineering and AI, and I’m
            using what I learned on the offensive side to build things that make defenders faster
            and more certain.
          </p>
        </div>
      </Section>

      <Section label="Credentials">
        <ul className="space-y-1">
          {site.credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section label="Elsewhere">
        <p>
          The full work history is on{" "}
          <a className="link" href={site.linkedin} rel="me noopener">LinkedIn</a>. If you'd like to
          talk, <Link className="link" href="/contact/">get in touch</Link>.
        </p>
      </Section>
    </div>
  );
}
