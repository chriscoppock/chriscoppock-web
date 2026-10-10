// A labelled row: the label sits in the left margin, content in the reading column.
// An optional aside (such as a portrait) sits under the label.
export default function Section({
  label,
  aside,
  children,
}: {
  label: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 border-t border-rule py-10">
      <div>
        <h2 className="font-sans text-[0.95rem] text-muted">{label}</h2>
        {aside && <div className="mt-5">{aside}</div>}
      </div>
      <div className="max-w-[38rem]">{children}</div>
    </section>
  );
}
