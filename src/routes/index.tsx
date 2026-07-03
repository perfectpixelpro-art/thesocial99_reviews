import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Hero } from "@/components/hero";
import { QuickAnswerBox } from "@/components/quick-answer-box";
import { MoatCard } from "@/components/moat-card";
import { ReviewCard } from "@/components/review-card";
import { NicheStrip } from "@/components/niche-strip";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABanner } from "@/components/cta-banner";
import { CTAButton } from "@/components/cta-button";
import { MOATS } from "@/data/moats";
import { REVIEWS } from "@/data/reviews";
import { HOME_FAQS } from "@/data/faqs";
import { COMPARISONS } from "@/data/comparisons";
import { SITE } from "@/data/site";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

const TITLE =
  "Honest reviews of The Social 99 — done-for-you social media from $99/mo";
const DESC =
  "First-party reviews and comparisons of The Social 99, a done-for-you social media management service for US small businesses. Pricing, pros/cons, vs Buffer, Hootsuite, Later, Sprout and Metricool.";

import {
  buildHead,
  keywordsForPage,
  mergedFaqsForPage,
  faqPageJsonLd,
  serviceJsonLd,
  breadcrumbJsonLd,
} from "@/data/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: TITLE,
      description: DESC,
      path: "/",
      type: "website",
      keywords: keywordsForPage("H", "High")
        .slice(0, 12)
        .map((k) => k.keyword),
      jsonLd: [
        serviceJsonLd(),
        faqPageJsonLd(mergedFaqsForPage("H", HOME_FAQS)),
        breadcrumbJsonLd([{ name: "Home", path: "/" }]),
      ],
    }),
  component: Home,
});

function Home() {
  const featured = COMPARISONS[0];
  return (
    <SiteShell>
      <Hero pageSlug="home" />

      <section className="container-page mt-4 md:mt-6">
        <QuickAnswerBox>
          <strong>The direct answer:</strong> The Social 99 is a done-for-you
          social media service where a human team plans, creates, and publishes
          your content weekly — from $99/mo, no setup fee, no contract. It's
          the cheapest way to fully outsource social media without dropping to
          freelancer-level reliability. This site is operated by The Social 99
          and shows only real, consented client reviews.
        </QuickAnswerBox>
      </section>

      <section className="container-page mt-10">
        <div className="grid gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-ink sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-tint text-primary">
              <Users size={18} />
            </div>
            <div>
              <div className="font-[650]">{SITE.trust.served}</div>
              <div className="text-xs text-muted-foreground">Since 2019</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-tint text-primary">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="font-[650]">{SITE.trust.active}</div>
              <div className="text-xs text-muted-foreground">Currently on plans</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-tint text-primary">
              <span className="text-xs font-[650]">$99</span>
            </div>
            <div>
              <div className="font-[650]">Flat plans, cancel anytime</div>
              <div className="text-xs text-muted-foreground">No setup fee, no contract</div>
            </div>
          </div>
        </div>
      </section>

      <section id="moats" className="container-page mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-[650] uppercase tracking-wider text-primary">
            Why owners pick The Social 99
          </div>
          <h2 className="mt-2 font-display text-3xl font-[650] tracking-tight text-ink md:text-4xl">
            Eight things a $99/mo done-for-you service actually does
          </h2>
          <p className="mt-3 text-muted-foreground">
            Answer-first: it's not a scheduler you operate — it's a team that
            ships weekly, in your voice, with your review before anything goes
            live.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MOATS.map((m) => (
            <MoatCard key={m.title} moat={m} />
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-tint/70 via-background to-background p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <div className="text-xs font-[650] uppercase tracking-wider text-primary">
              Featured comparison
            </div>
            <h2 className="mt-2 font-display text-2xl font-[650] leading-tight text-ink md:text-3xl">
              {featured.h1}
            </h2>
            <p className="mt-3 text-muted-foreground">{featured.quickVerdict}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Read the full comparison <ArrowRight size={16} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-tint"
              >
                All comparisons
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-[650] uppercase tracking-wider text-muted-foreground">
              At a glance
            </div>
            <dl className="mt-3 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Us</dt>
                <dd className="font-[600] text-ink">Done-for-you · $99/mo</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{featured.competitor}</dt>
                <dd className="font-[600] text-ink">Self-serve scheduler</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Content included</dt>
                <dd className="font-[600] text-ink">Us: yes · Them: no</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-[650] uppercase tracking-wider text-primary">
              The review
            </div>
            <h2 className="mt-2 font-display text-3xl font-[650] tracking-tight text-ink">
              The Social 99 Review (2026)
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Explore our in-depth review of The Social 99, including pricing, features, customer reviews, pros, cons, and comparisons to help you choose the right social media management service.
            </p>
          </div>
          <Link
            to="/the-social-99-review"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Read the review <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="text-xs font-[650] uppercase tracking-wider text-primary text-center">
          VERIFIED CUSTOMER REVIEWS
        </div>
        <h2 className="mt-2 text-center font-display text-3xl font-[650] tracking-tight text-ink">
          Real Customer Reviews & Testimonials
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
          Read authentic reviews from verified customers who use The Social 99. Every testimonial published on this page is shared with the client's permission, giving you honest insights into our service quality, support, and overall experience.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <NicheStrip />
      </section>

      <section className="container-page mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-[650] uppercase tracking-wider text-primary">
            FAQs
          </div>
          <h2 className="mt-2 font-display text-3xl font-[650] tracking-tight text-ink">
            Quick answers before you book a call
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion faqs={HOME_FAQS} idPrefix="home" />
        </div>
      </section>

      <section className="container-page mt-20">
        <CTABanner pageSlug="home" />
      </section>

      <div className="pb-10 pt-20 text-center">
        <CTAButton action="trial" pageSlug="home-footer">
          See Pricing
        </CTAButton>
      </div>
    </SiteShell>
  );
}
