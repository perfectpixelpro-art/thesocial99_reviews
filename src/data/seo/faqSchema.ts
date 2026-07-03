import type { GeoAeoEntry } from "./geoAeo";
import { aeoForPage, aeoForCompetitor, type PageCode } from "./seoMap";

export interface QA {
  q: string;
  a: string;
}

export function toQA(entries: GeoAeoEntry[]): QA[] {
  return entries.map((e) => ({ q: e.query, a: e.answer }));
}

export function faqPageJsonLd(entries: Array<QA | GeoAeoEntry>) {
  const items: QA[] = entries.map((e) =>
    "query" in e ? { q: e.query, a: e.answer } : e,
  );
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Merge on-page FAQs with high-priority AEO questions mapped to a page.
 * De-duplicates on question text (case-insensitive) so we never emit the
 * same Q twice in the FAQPage schema.
 */
export function mergedFaqsForPage(
  code: PageCode,
  onPage: QA[],
  extra: QA[] = [],
): QA[] {
  const aeo = toQA(aeoForPage(code, "High")).concat(toQA(aeoForPage(code, "Med")));
  const seen = new Set<string>();
  const out: QA[] = [];
  for (const item of [...onPage, ...extra, ...aeo]) {
    const key = item.q.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

export function mergedFaqsForCompetitor(
  competitor: string,
  onPage: QA[],
): QA[] {
  const aeo = toQA(aeoForCompetitor(competitor));
  const seen = new Set<string>();
  const out: QA[] = [];
  for (const item of [...onPage, ...aeo]) {
    const key = item.q.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}
