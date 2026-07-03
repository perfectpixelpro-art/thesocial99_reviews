import type { PricingTier } from "@/data/pricing";
import { CTAButton } from "./cta-button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingTable({
  tiers,
  pageSlug,
}: {
  tiers: PricingTier[];
  pageSlug: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={cn(
            "flex flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]",
            t.highlight
              ? "border-primary ring-1 ring-primary/40"
              : "border-border",
          )}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-[650] text-ink">{t.name}</h3>
            {t.highlight && (
              <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-[650] uppercase tracking-wider text-primary-foreground">
                Most picked
              </span>
            )}
          </div>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-[650] tracking-tight text-ink">
              ${t.price}
            </span>
            <span className="text-sm text-muted-foreground">/{t.cadence}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
          <ul className="mt-5 flex-1 space-y-2.5">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink">
                <Check
                  size={16}
                  className="mt-0.5 flex-none text-success"
                  strokeWidth={2.5}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <CTAButton
              variant={t.highlight ? "secondary" : "secondary"}
              action="trial"
              pageSlug={pageSlug}
              className="w-full"
            >
              Start with {t.name}
            </CTAButton>
          </div>
        </div>
      ))}
    </div>
  );
}
