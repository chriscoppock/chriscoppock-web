import type { Metadata } from "next";
import Section from "@/components/Section";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description: `How to reach ${site.name}.`,
};

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-[68rem] px-6 md:px-10">
      <div className="pt-14 md:pt-20 pb-14">
        <h1 className="font-normal tracking-[-0.02em] leading-[1.1] text-[clamp(2rem,4.5vw,3.4rem)]">
          Contact
        </h1>
      </div>
      <Section label="Reach me">
        <div className="space-y-5">
          <p>
            Email is the best way to reach me for conversations about security engineering, red
            teaming, threat intelligence, or AI. I read everything and reply when I can.
          </p>
          <p>
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="text-muted">
            You can also find me on{" "}
            <a className="link" href={site.linkedin} rel="me noopener">LinkedIn</a>.
          </p>
        </div>
      </Section>
    </div>
  );
}
