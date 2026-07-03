import { CTAButton } from "./cta-button";
import { ArrowRight } from "lucide-react";

interface Props {
  pageSlug: string;
  headline?: string;
  sub?: string;
}

export function CTABanner({
  pageSlug,
  headline = "Ready to hand off your social media?",
  sub = "Start a free trial or book a 15-minute call. No setup fee, no contract, cancel anytime.",
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-[#012465] p-8 md:p-12 text-primary-foreground">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-2xl text-2xl font-[650] leading-tight md:text-3xl text-primary-foreground">
            {headline}
          </h2>
          <p className="mt-2 max-w-xl text-primary-foreground/80">{sub}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://thesocial99.com/free-trial?utm_source=reviews&utm_medium=microsite&utm_campaign=${pageSlug}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90"
          >
            Start free trial <ArrowRight size={16} />
          </a>
         
        </div>
      </div>
    </section>
  );
}
