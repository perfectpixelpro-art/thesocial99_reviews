/**
 * Canonical base URL for the microsite. Keep in sync with SITE.domain in
 * `@/data/site`. Change here when the production domain changes.
 */
export const BASE_URL = "https://thesocial99reviews.com";

export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return BASE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${BASE_URL}${path}`;
}

export interface HeadMetaInput {
  title: string;
  description: string;
  path: string; // site-relative canonical path, e.g. "/blog"
  type?: "website" | "article";
  keywords?: string[];
  image?: string; // absolute or site-relative
  robots?: string;
  jsonLd?: unknown[]; // schema.org objects
}

export interface HeadMetaOutput {
  meta: Array<Record<string, string>>;
  links: Array<Record<string, string>>;
  scripts: Array<{ type: string; children: string }>;
}

/**
 * Build the head({ meta, links, scripts }) return shape for a route.
 * Ensures canonical + og:url are absolute and self-referential (see
 * head-meta guidance), and stringifies JSON-LD blocks safely.
 */
export function buildHead(input: HeadMetaInput): HeadMetaOutput {
  const canonical = absoluteUrl(input.path);
  const type = input.type ?? "website";
  const meta: Array<Record<string, string>> = [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonical },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
  ];
  if (input.keywords && input.keywords.length) {
    meta.push({ name: "keywords", content: input.keywords.join(", ") });
  }
  if (input.image) {
    const img = absoluteUrl(input.image);
    meta.push({ property: "og:image", content: img });
    meta.push({ name: "twitter:image", content: img });
  }
  if (input.robots) {
    meta.push({ name: "robots", content: input.robots });
  }

  const scripts = (input.jsonLd ?? []).map((obj) => ({
    type: "application/ld+json",
    children: JSON.stringify(obj),
  }));

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }],
    scripts,
  };
}
