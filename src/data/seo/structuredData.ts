import { SITE } from "@/data/site";
import { PRICING } from "@/data/pricing";
import { COMPARISONS } from "@/data/comparisons";
import { SEO_KEYWORDS } from "./seoKeywords";
import { keywordListForPage } from "./seoMap";
import { BASE_URL, absoluteUrl } from "./metadata";

const SERVICE_URL = SITE.parentUrl;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.parentBrand,
    url: SITE.parentUrl,
    sameAs: [BASE_URL],
    description:
      "Done-for-you social media management for US small businesses from $99/mo. Real human-made content, review-before-publish, no setup fee, no contract.",
    knowsAbout: SEO_KEYWORDS.filter((k) => k.priority === "High")
      .slice(0, 20)
      .map((k) => k.keyword),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: BASE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SITE.parentUrl,
    },
    inLanguage: "en-US",
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social media management",
    name: `${SITE.parentBrand} — Done-for-you social media management`,
    provider: {
      "@type": "Organization",
      name: SITE.parentBrand,
      url: SERVICE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "US small businesses (med spas, salons, restaurants, bars, pet grooming)",
    },
    description:
      "A human-led, done-for-you social media service that plans, creates, and publishes weekly content for US small businesses.",
    url: absoluteUrl("/the-social-99-review"),
    keywords: keywordListForPage("H", 15),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: PRICING[0].price,
      highPrice: PRICING[PRICING.length - 1].price,
      offerCount: PRICING.length,
      offers: PRICING.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.price,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: tier.price,
          priceCurrency: "USD",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "MON",
          },
        },
        availability: "https://schema.org/InStock",
        url: SITE.trialUrl,
      })),
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string; // site-relative, e.g. "/blog"
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function comparisonItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: COMPARISONS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/blog/${c.slug}`),
      name: c.metaTitle,
    })),
  };
}
