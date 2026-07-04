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
      <div className="container-page py-12 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center px-4 md:px-0">

          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck size={14} className="text-primary" />
            Verified Customer Reviews
          </div>

          <h1 className="mt-6 font-display text-3xl font-[650] leading-[1.1] tracking-tight text-ink md:text-4xl lg:text-6xl">
            The Social 99 Reviews<br/>
            <span className="text-primary whitespace-normal md:whitespace-nowrap md:mx-[-52px]">
              Everything You Need to Know
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
            Read verified customer reviews, compare pricing and features, and see if The Social 99 is right for your business.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <CTAButton action="trial" pageSlug={pageSlug}>
              Start a free trial
            </CTAButton>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            ✔ Verified Reviews • ✔ Transparent Comparisons • ✔ Updated Regularly
          </p>

        </div>
      </div>
    </section>
  );
}