import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteShell } from "../components/site-shell";
import { CTAButton } from "../components/cta-button";
import { organizationJsonLd, webSiteJsonLd } from "../data/seo/structuredData";

const SITE_TITLE =
  "The Social 99 Reviews — Honest reviews & comparisons of a $99/mo done-for-you social media service";
const SITE_DESC =
  "First-party reviews and honest comparisons of The Social 99 — a done-for-you social media service for US small businesses from $99/mo. Operated by The Social 99.";

function NotFoundComponent() {
  return (
    <SiteShell>
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <div className="rounded-2xl bg-tint px-4 py-1 text-xs font-[650] uppercase tracking-wider text-primary">
          404
        </div>
        <h1 className="mt-6 max-w-xl font-display text-4xl font-[650] tracking-tight text-ink md:text-5xl">
          We couldn't find that page
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The link might be old, or the page moved. Try the review, the
          comparisons index, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
          <Link
            to="/the-social-99-review"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-tint"
          >
            Read the review
          </Link>
          <CTAButton action="book" pageSlug="404" variant="secondary">
            Book a call
          </CTAButton>
        </div>
      </section>
    </SiteShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteShell>
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <h1 className="max-w-xl font-display text-3xl font-[650] text-ink md:text-4xl">
          Something went wrong loading this page
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Try again in a moment. If it keeps happening, the home page will
          always work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-tint"
          >
            Go home
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

const orgJsonLd = organizationJsonLd();
const siteJsonLd = webSiteJsonLd();

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "The Social 99" },
      { name: "theme-color", content: "#013186" },
      { property: "og:site_name", content: "The Social 99 Reviews" },
      { property: "og:type", content: "website" },
      {
        name: "google-site-verification",
        content: "UheCaoHxvQm-lzYf3eo1hKoV4VoPVNLZpzPaWuyJNcI",
      },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;650;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(siteJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
