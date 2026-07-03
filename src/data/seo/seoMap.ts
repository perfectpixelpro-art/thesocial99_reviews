import { SEO_KEYWORDS, type SeoKeyword } from "./seoKeywords";
import { GEO_AEO_ENTRIES, type GeoAeoEntry } from "./geoAeo";
import { CUSTOMER_PROBLEMS, type CustomerProblem } from "./customerProblems";

/**
 * Target-page codes used across all worksheets:
 *   H = Home, R = Review, C = Comparison
 * "Niche" filters (Med spa, Salon/beauty, Restaurant, Bar, Pet grooming)
 * can be combined with a page code to build niche-aware content.
 */
export type PageCode = "H" | "R" | "C";

const hasPage = (pages: string[], code: PageCode) => pages.includes(code);

export function keywordsForPage(code: PageCode, priority?: SeoKeyword["priority"]): SeoKeyword[] {
  return SEO_KEYWORDS.filter(
    (k) => hasPage(k.pages, code) && (!priority || k.priority === priority),
  );
}

export function keywordListForPage(code: PageCode, limit = 20): string {
  return keywordsForPage(code)
    .slice(0, limit)
    .map((k) => k.keyword)
    .join(", ");
}

export function aeoForPage(code: PageCode, priority?: GeoAeoEntry["priority"]): GeoAeoEntry[] {
  return GEO_AEO_ENTRIES.filter(
    (q) => hasPage(q.pages, code) && (!priority || q.priority === priority),
  );
}

export function problemsForPage(code: PageCode): CustomerProblem[] {
  return CUSTOMER_PROBLEMS.filter((p) => hasPage(p.pages, code));
}

/** All keywords that touch a competitor slug (used by comparison pages). */
export function keywordsForCompetitor(competitor: string): SeoKeyword[] {
  const needle = competitor.toLowerCase();
  return SEO_KEYWORDS.filter(
    (k) => k.pages.includes("C") && k.keyword.toLowerCase().includes(needle),
  );
}

/** AEO questions that mention the competitor by name. */
export function aeoForCompetitor(competitor: string): GeoAeoEntry[] {
  const needle = competitor.toLowerCase();
  return GEO_AEO_ENTRIES.filter(
    (q) =>
      q.pages.includes("C") &&
      (q.query.toLowerCase().includes(needle) ||
        q.answer.toLowerCase().includes(needle)),
  );
}
