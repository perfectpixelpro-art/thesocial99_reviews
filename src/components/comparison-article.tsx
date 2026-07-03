import { Link } from "@tanstack/react-router";
import type { Comparison } from "@/data/comparisons";
import { COMPARISONS } from "@/data/comparisons";
import { SiteShell } from "./site-shell";
import { Breadcrumb } from "./breadcrumb";
import { AuthorByline } from "./author-byline";
import { QuickAnswerBox } from "./quick-answer-box";
import { ComparisonTable } from "./comparison-table";
import { ProsConsBox } from "./pros-cons-box";
import { FAQAccordion } from "./faq-accordion";
import { CTABanner } from "./cta-banner";
import { TableOfContents } from "./table-of-contents";
import { ArrowRight } from "lucide-react";
import {
  buildHead,
  breadcrumbJsonLd,
  faqPageJsonLd,
  mergedFaqsForCompetitor,
  keywordsForCompetitor,
  absoluteUrl,
} from "@/data/seo";

const TOC = [
  { id: "quick-verdict", label: "Quick verdict" },
  { id: "overview", label: "Overview" },
  { id: "feature-comparison", label: "Feature comparison" },
  { id: "pricing", label: "Pricing" },
  { id: "pros-cons", label: "Pros & cons" },
  { id: "bottom-line", label: "Bottom line" },
  { id: "faqs", label: "FAQs" },
  { id: "related", label: "Related comparisons" },
];

export function ComparisonArticle({ data }: { data: Comparison }) {
  const related = COMPARISONS.filter((c) => c.slug !== data.slug).slice(0, 4);
  return (
    <SiteShell>
      <article className="container-page py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Comparisons", to: "/blog" },
            { label: `${data.competitor}` },
          ]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div>
            <header>
              <div className="text-xs font-[650] uppercase tracking-wider text-primary">
                The Social 99 vs {data.competitor}
              </div>
              <h1 className="mt-3 font-display text-3xl font-[650] leading-[1.15] tracking-tight text-ink md:text-5xl">
                {data.h1}
              </h1>
              <div className="mt-5">
                <AuthorByline
                  name="The Social 99 Editorial"
                  role="First-party analysis"
                  lastUpdated={data.lastUpdated}
                  methodology="How we compare: we describe our own service in detail and frame competitors by public product model and pricing. We don't make claims about their internal operations or roadmap."
                />
              </div>
            </header>

            <div className="mt-8 space-y-10 prose-article">
              <section id="quick-verdict">
                <QuickAnswerBox title="Quick verdict">
                  {data.quickVerdict}
                </QuickAnswerBox>
              </section>

              <section id="overview">
                <h2>Overview</h2>
                <p className="text-ink/90">{data.overview[0]}</p>
                {data.overview.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>

              <section id="feature-comparison">
                <h2>Feature comparison</h2>
                <p>
                  Side-by-side, the biggest gap isn't feature parity — it's who
                  actually does the work each week.
                </p>
                <ComparisonTable
                  rows={data.featureRows}
                  usLabel="The Social 99"
                  themLabel={data.competitor}
                  caption={`Feature comparison of The Social 99 and ${data.competitor}`}
                />
              </section>

              <section id="pricing">
                <h2>Pricing comparison</h2>
                <p>
                  Direct answer: our published price is a flat monthly fee that
                  includes content production. Tool pricing shown below is a
                  placeholder — verify at the source before quoting.
                </p>
                <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-tint/60">
                          <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary">
                            Tier
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary">
                            The Social 99
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-muted-foreground">
                            {data.competitor}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.pricingRows.map((r, i) => (
                          <tr
                            key={r.plan}
                            className={
                              i % 2 === 1 ? "bg-surface/50" : "bg-background"
                            }
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 text-left font-[600] text-ink"
                            >
                              {r.plan}
                            </th>
                            <td className="px-4 py-3 text-ink">{r.us}</td>
                            <td className="px-4 py-3 text-muted-foreground">
                              {r.them}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-xs italic text-muted-foreground">
                  {data.pricingNote}
                </p>
              </section>

              <section id="pros-cons">
                <h2>Pros & cons — honest, both sides</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <ProsConsBox
                    title="The Social 99"
                    tone="us"
                    pros={data.usPros}
                    cons={data.usCons}
                  />
                  <ProsConsBox
                    title={data.competitor}
                    tone="them"
                    pros={data.themPros}
                    cons={data.themCons}
                  />
                </div>
              </section>

              <section id="bottom-line">
                <h2>Bottom line: who should pick what</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-primary/30 bg-tint/40 p-6">
                    <div className="text-xs font-[650] uppercase tracking-wider text-primary">
                      Pick The Social 99 if
                    </div>
                    <p className="mt-2 text-ink">{data.bottomLine.pickUs}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <div className="text-xs font-[650] uppercase tracking-wider text-muted-foreground">
                      Pick {data.competitor} if
                    </div>
                    <p className="mt-2 text-ink">{data.bottomLine.pickThem}</p>
                  </div>
                </div>
              </section>

              <section id="faqs">
                <h2>Frequently asked questions</h2>
                <FAQAccordion faqs={data.faqs} idPrefix={data.slug} />
              </section>

              <section id="related" className="not-prose">
                <h2>Related comparisons</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((c) => (
                    <Link
                      key={c.slug}
                      to="/blog/$slug"
                      params={{ slug: c.slug }}
                      className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
                    >
                      <div>
                        <div className="text-xs font-[650] uppercase tracking-wider text-primary">
                          vs {c.competitor}
                        </div>
                        <div className="mt-1 text-sm font-[600] text-ink">
                          {c.metaTitle}
                        </div>
                      </div>
                      <ArrowRight
                        size={18}
                        className="flex-none text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </Link>
                  ))}
                </div>
              </section>

              <div className="not-prose">
                <CTABanner pageSlug={data.slug} />
              </div>
            </div>
          </div>

          <aside>
            <TableOfContents items={TOC} />
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}

// Route-side head builder (Article + FAQPage + BreadcrumbList JSON-LD).
export function comparisonHead(data: Comparison) {
  const path = `/blog/${data.slug}`;
  const canonical = absoluteUrl(path);
  const faqs = mergedFaqsForCompetitor(data.competitor, data.faqs);
  const competitorKeywords = keywordsForCompetitor(data.competitor).map((k) => k.keyword);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.h1,
    description: data.metaDescription,
    author: {
      "@type": "Organization",
      name: "The Social 99",
      url: "https://thesocial99.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Social 99",
      url: "https://thesocial99.com",
    },
    dateModified: data.lastUpdated,
    mainEntityOfPage: canonical,
    about: [
      { "@type": "Thing", name: "The Social 99" },
      { "@type": "Thing", name: data.competitor },
    ],
    keywords: competitorKeywords.join(", "),
  };

  return buildHead({
    title: data.metaTitle,
    description: data.metaDescription,
    path,
    type: "article",
    keywords: competitorKeywords.slice(0, 10),
    jsonLd: [
      articleJsonLd,
      faqPageJsonLd(faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Comparisons", path: "/blog" },
        { name: `vs ${data.competitor}`, path },
      ]),
    ],
  });
}
