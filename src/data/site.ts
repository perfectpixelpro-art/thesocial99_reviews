export const SITE = {
  name: "The Social 99 Reviews",
  domain: "thesocial99reviews.com",
  parentBrand: "The Social 99",
  parentUrl: "https://thesocial99.com",
  bookUrl: "https://thesocial99.com/book-a-call",
  trialUrl: "https://thesocial99.com/free-trial",
  disclosure:
    "This site is operated by The Social 99. We disclose our ownership openly per FTC 16 CFR Part 465. All reviews shown are from real, consenting clients.",
  trust: {
    served: "1,450+ businesses served",
    active: "760+ active clients",
  },
} as const;

export function ctaUrl(base: "book" | "trial", pageSlug: string) {
  const url = base === "book" ? SITE.bookUrl : SITE.trialUrl;
  const params = new URLSearchParams({
    utm_source: "reviews",
    utm_medium: "microsite",
    utm_campaign: pageSlug,
  });
  return `${url}?${params.toString()}`;
}
