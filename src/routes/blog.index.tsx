import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { COMPARISONS } from "@/data/comparisons";
import { ArrowRight } from "lucide-react";
import {
  buildHead,
  breadcrumbJsonLd,
  comparisonItemListJsonLd,
  keywordsForPage,
} from "@/data/seo";

const TITLE = "Comparisons: The Social 99 vs the market";
const DESC =
  "Honest, first-party comparisons of The Social 99 (done-for-you social media, from $99/mo) vs Buffer, Hootsuite, Later, Sprout Social and Metricool.";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildHead({
      title: TITLE,
      description: DESC,
      path: "/blog",
      type: "website",
      keywords: keywordsForPage("C", "High")
        .slice(0, 10)
        .map((k) => k.keyword),
      jsonLd: [
        comparisonItemListJsonLd(),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Comparisons", path: "/blog" },
        ]),
      ],
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteShell>
      <section className="container-page py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Comparisons" },
          ]}
        />
        <header className="mt-8 max-w-3xl">
          <div className="text-xs font-[650] uppercase tracking-wider text-primary">
            Comparisons
          </div>
          <h1 className="mt-3 font-display text-4xl font-[650] leading-tight tracking-tight text-ink md:text-5xl">
            The Social 99 vs the market — done-for-you vs the tools you'd run
            yourself
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Direct comparisons framed by service model, not by claims about
            competitors' internals. Real pricing, real trade-offs, updated
            monthly.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {COMPARISONS.map((c) => (
            <Link
              key={c.slug}
              to="/blog/$slug"
              params={{ slug: c.slug }}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
            >
              <div>
                <div className="text-xs font-[650] uppercase tracking-wider text-primary">
                  vs {c.competitor}
                </div>
                <h2 className="mt-2 text-lg font-[650] leading-snug text-ink">
                  {c.h1}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {c.quickVerdict}
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-[600] text-primary">
                Read comparison{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
