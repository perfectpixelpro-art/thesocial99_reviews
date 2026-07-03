import type { Moat } from "@/data/moats";

export function MoatCard({ moat }: { moat: Moat }) {
  const Icon = moat.icon;
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-tint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-base font-[650] text-ink">{moat.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{moat.body}</p>
    </div>
  );
}
