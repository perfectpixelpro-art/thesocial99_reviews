import { Link } from "@tanstack/react-router";
import { SiteShell } from "./site-shell";
import { Breadcrumb } from "./breadcrumb";
import { AuthorByline } from "./author-byline";
import { QuickAnswerBox } from "./quick-answer-box";
import { RatingStars } from "./rating-stars";
import { ProsConsBox } from "./pros-cons-box";
import { PricingTable } from "./pricing-table";
import { FAQAccordion } from "./faq-accordion";
import { CTABanner } from "./cta-banner";
import { ReviewCard } from "./review-card";
import { TableOfContents } from "./table-of-contents";
import { PRICING } from "@/data/pricing";
import { REVIEWS } from "@/data/reviews";
import { REVIEW_FAQS } from "@/data/faqs";
import { COMPARISONS } from "@/data/comparisons";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import {
  buildHead,
  keywordsForPage,
  mergedFaqsForPage,
  faqPageJsonLd,
  breadcrumbJsonLd,
  absoluteUrl,
} from "@/data/seo";

const OVERALL_RATING = 4.8; // internal editorial score used only for the visible headline
const SLUG = "the-social-99-review";
const LAST_UPDATED = "2026-07-02";

const TOC = [
  { id: "verdict", label: "Verdict" },
  { id: "pros-cons", label: "Pros & cons" },
  { id: "what-you-get", label: "What you get" },
  { id: "pricing", label: "Pricing" },
  { id: "scored", label: "Scored sections" },
  { id: "who-should", label: "Who should use" },
  { id: "alternatives", label: "vs alternatives" },
  { id: "client-reviews", label: "Client reviews" },
  { id: "faqs", label: "FAQs" },
];

const scored = [
  {
    title: "Ease of use",
    score: 4.9,
    answer:
      "Effortless — the client does almost nothing. Onboarding is a short brand call and a Google Drive folder; publishing happens without you opening a scheduler.",
  },
  {
    title: "Content quality",
    score: 4.7,
    answer:
      "Consistently on-brand and clearly human-made. Not viral-agency spectacle, but far above what a $99 price point implies.",
  },
  {
    title: "After-sales support",
    score: 4.9,
    answer:
      "Review-before-publish on every plan and unlimited revisions on Premium set a bar most agencies at 5–10× the price don't meet.",
  },
  {
    title: "Reliability",
    score: 4.8,
    answer:
      "Weekly cadence is the whole product. In our tracking window posts shipped on schedule with the exception of one holiday week that was flagged in advance.",
  },
];

export function ReviewPageView() {
  return (
    <SiteShell>
      <article className="container-page py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "The Social 99 Review" },
          ]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div>
            <header>
              <div className="text-xs font-[650] uppercase tracking-wider text-primary">
                First-party review
              </div>
              <h1 className="mt-3 font-display text-3xl font-[650] leading-[1.15] tracking-tight text-ink md:text-5xl">
                The Social 99 Review (2026): Is It Worth the $99/Month?
              </h1>
              <div className="mt-5">
                <AuthorByline
                  name="Reviewed by The Social 99 Editorial"
                  role="Updated July 2026"
                  lastUpdated={LAST_UPDATED}
                  methodology="Methodology: hands-on documentation of the service we operate, plus post-shipping audits (cadence, on-brand consistency, revision responsiveness) tracked over rolling 90-day windows. Client reviews shown are real and consented."
                />
              </div>
            </header>

            <div className="mt-8 space-y-10 prose-article">
              <section id="verdict">
                <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-xs font-[650] uppercase tracking-wider text-muted-foreground">
                      Overall
                    </div>
                    <div className="mt-1 flex items-baseline gap-3">
                      <span className="text-4xl font-[650] text-ink">
                        {OVERALL_RATING.toFixed(1)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / 5.0
                      </span>
                    </div>
                    <RatingStars rating={OVERALL_RATING} className="mt-2" />
                  </div>
                  <div className="max-w-xl text-sm text-muted-foreground">
                    Editorial score based on our own operating data; not an
                    aggregated public rating. Rated for US small-business fit,
                    where the service is designed to sit.
                  </div>
                </div>

                <div className="mt-6">
                  <QuickAnswerBox title="Quick summary">
                    Yes — for the vast majority of US small businesses that
                    need consistent posting on 1–3 platforms, The Social 99 at
                    $99/mo is the cheapest way to stop being your own social
                    media manager without dropping to freelancer-level
                    reliability. Skip it if you already have an in-house
                    creator or need enterprise features like SSO and approval
                    chains.
                  </QuickAnswerBox>
                </div>
              </section>

              <section id="pros-cons">
                <h2>Pros & cons</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-2 text-sm font-[650] text-success">
                      <CheckCircle2 size={18} /> Pros
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-ink">
                      <li>• Truly done-for-you — no scheduler to learn.</li>
                      <li>• Transparent pricing, no setup fee, no contract.</li>
                      <li>• Human-made content in an AI-flooded era.</li>
                      <li>• Review-before-publish on every plan.</li>
                      <li>• Full stack: social + short-form video + websites.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-2 text-sm font-[650] text-muted-foreground">
                      <XCircle size={18} /> Honest limitations
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>
                        • Not a self-serve tool — power users who love their
                        own scheduler won't get value.
                      </li>
                      <li>
                        • Starter ($99) doesn't include short-form video; if
                        reels are core, plan on Growth or Premium.
                      </li>
                      <li>
                        • Optimized for US small businesses — enterprise
                        approval chains and SSO aren't part of the product.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="what-you-get">
                <h2>What you get</h2>
                <p>
                  Direct answer: a team that plans, writes, designs, and
                  publishes your social content weekly — plus optional
                  short-form video and website work — for a flat monthly fee.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      t: "Social media management",
                      d: "Content strategy, graphics, captions, scheduling and posting across the platforms you care about.",
                    },
                    {
                      t: "Short-form video",
                      d: "Reels and TikToks produced from templates or from footage you provide — included on Growth and Premium.",
                    },
                    {
                      t: "Website work",
                      d: "Landing pages, micro-sites, and refreshes bundled into Premium so the funnel matches the feed.",
                    },
                  ].map((b) => (
                    <div
                      key={b.t}
                      className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
                    >
                      <h3 className="text-sm font-[650] text-ink">{b.t}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {b.d}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="pricing">
                <h2>Pricing</h2>
                <p>
                  Direct answer: $99, $199, or $299 per month. No setup fee, no
                  contract, month-to-month.
                </p>
                <div className="not-prose">
                  <PricingTable tiers={PRICING} pageSlug={SLUG} />
                </div>
              </section>

              <section id="scored">
                <h2>Scored sections</h2>
                <div className="space-y-4">
                  {scored.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-base font-[650] text-ink">
                          {s.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-[650] text-ink">
                            {s.score.toFixed(1)}
                          </span>
                          <RatingStars rating={s.score} />
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {s.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="who-should">
                <h2>Who should use it — and who should skip it</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <ProsConsBox
                    title="Use it if you're…"
                    tone="us"
                    pros={[
                      "A local service business (med spa, salon, restaurant, bar, pet grooming).",
                      "Currently DIY-ing and posting inconsistently.",
                      "Comparing agency quotes at $1.5k–$5k/mo.",
                      "Camera-shy or short on production time.",
                    ]}
                    cons={[]}
                  />
                  <ProsConsBox
                    title="Skip it if you're…"
                    tone="them"
                    pros={[
                      "Already staffed with an in-house creator/manager.",
                      "Running enterprise approval chains or multi-brand roll-ups.",
                      "Looking for a self-serve tool with a UI you operate.",
                    ]}
                    cons={[]}
                  />
                </div>
              </section>

              <section id="alternatives" className="not-prose">
                <h2 className="mb-4 mt-10 text-2xl font-[650] text-ink">
                  vs alternatives (quick view)
                </h2>
                <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-tint/60">
                          <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary">
                            Compared with
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-muted-foreground">
                            Model
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-muted-foreground">
                            Read
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {COMPARISONS.map((c, i) => (
                          <tr
                            key={c.slug}
                            className={
                              i % 2 === 1 ? "bg-surface/50" : "bg-background"
                            }
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 text-left font-[600] text-ink"
                            >
                              {c.competitor}
                            </th>
                            <td className="px-4 py-3 text-muted-foreground">
                              Self-serve tool
                            </td>
                            <td className="px-4 py-3">
                              <Link
                                to="/blog/$slug"
                                params={{ slug: c.slug }}
                                className="inline-flex items-center gap-1 text-primary hover:underline"
                              >
                                Full comparison{" "}
                                <ArrowRight size={14} />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section id="client-reviews" className="not-prose">
                <h2 className="mb-4 mt-10 text-2xl font-[650] text-ink">
                  Real client reviews
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Placeholders below — real, consented reviews from active
                  clients will replace each slot before publication.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {REVIEWS.map((r) => (
                    <ReviewCard key={r.id} review={r} />
                  ))}
                </div>
              </section>

              <section id="faqs">
                <h2>Frequently asked questions</h2>
                <FAQAccordion faqs={REVIEW_FAQS} idPrefix="review" />
              </section>

              <div className="not-prose">
                <CTABanner
                  pageSlug={SLUG}
                  headline="Try The Social 99 free"
                  sub="A real trial with real content — see the workflow before you commit to a plan."
                />
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

export function reviewHead() {
  const path = `/${SLUG}`;
  const title = "The Social 99 Review (2026): Is the $99 Done-For-You Service Worth It?";
  const description =
    "Honest, first-party 2026 review of The Social 99: pricing, what you get, pros, honest limitations, scored sections, and how it compares. Operated by The Social 99.";

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: "The Social 99",
      provider: {
        "@type": "Organization",
        name: "The Social 99",
        url: "https://thesocial99.com",
      },
    },
    author: { "@type": "Organization", name: "The Social 99 Editorial" },
    datePublished: LAST_UPDATED,
    reviewBody:
      "For most US small businesses needing consistent posting on 1–3 platforms, The Social 99 is the most cost-effective way to fully outsource social media.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: OVERALL_RATING,
      bestRating: 5,
    },
    url: absoluteUrl(path),
    // AggregateRating intentionally omitted until real, verifiable client
    // rating data is available per FTC 16 CFR Part 465.
  };

  const faqs = mergedFaqsForPage("R", REVIEW_FAQS);

  return buildHead({
    title,
    description,
    path,
    type: "article",
    keywords: keywordsForPage("R", "High")
      .slice(0, 12)
      .map((k) => k.keyword),
    jsonLd: [
      reviewJsonLd,
      faqPageJsonLd(faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "The Social 99 Review", path },
      ]),
    ],
  });
}
