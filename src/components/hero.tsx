import { CTAButton } from "./cta-button";
import { SITE } from "@/data/site";
import { ShieldCheck } from "lucide-react";

interface Props {
  pageSlug: string;
}

export function Hero({ pageSlug }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tint/60 via-background to-background">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,var(--tint)_0%,transparent_70%)]" />
      <div className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck size={14} className="text-primary" />
            Operated by {SITE.parentBrand} · Real reviews only
          </div>
          <h1 className="mt-6 font-display text-4xl font-[650] leading-[1.1] tracking-tight text-ink md:text-6xl">
            Honest reviews & comparisons of{" "}
            <span className="text-primary">The Social 99</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Direct answers for owners deciding whether a $99/mo done-for-you
            social media service beats running a tool yourself — or hiring an
            agency at 10× the price.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton action="trial" pageSlug={pageSlug}>
              Start a free trial
            </CTAButton>
           
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            No setup fee · Month-to-month · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
