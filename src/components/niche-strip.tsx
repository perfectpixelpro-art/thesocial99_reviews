import { NICHES } from "@/data/niches";

export function NicheStrip() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="text-center text-xs font-[650] uppercase tracking-wider text-muted-foreground">
        Niche experience
      </div>
      <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {NICHES.map((n) => (
          <li
            key={n.label}
            className="inline-flex items-center gap-2 text-sm font-[600] text-ink"
          >
            <span aria-hidden className="text-lg">
              {n.emoji}
            </span>
            {n.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
