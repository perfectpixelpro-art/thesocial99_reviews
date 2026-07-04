import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SiteShell, t as COMPARISONS } from "./comparisons-4oUkJES9.mjs";
import { _ as webSiteJsonLd, c as buildHead, f as keywordsForPage, g as serviceJsonLd, h as organizationJsonLd, l as comparisonItemListJsonLd, m as mergedFaqsForPage, n as BASE_URL, s as breadcrumbJsonLd, u as faqPageJsonLd } from "./faqSchema-C_Qcepuv.mjs";
import { n as Route$5 } from "./blog._slug-BtCtv41H.mjs";
import { n as HOME_FAQS, t as CTAButton } from "./faqs-CLF7t3zH.mjs";
import { n as reviewHead } from "./review-page-BEDLyamV.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CRDpx4KB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C8RPhs55.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var SITE_TITLE = "The Social 99 Reviews — Honest reviews & comparisons of a $99/mo done-for-you social media service";
var SITE_DESC = "First-party reviews and honest comparisons of The Social 99 — a done-for-you social media service for US small businesses from $99/mo. Operated by The Social 99.";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-tint px-4 py-1 text-xs font-[650] uppercase tracking-wider text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 max-w-xl font-display text-4xl font-[650] tracking-tight text-ink md:text-5xl",
				children: "We couldn't find that page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted-foreground",
				children: "The link might be old, or the page moved. Try the review, the comparisons index, or head back home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90",
						children: "Go home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/the-social-99-review",
						className: "inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-tint",
						children: "Read the review"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
						action: "book",
						pageSlug: "404",
						variant: "secondary",
						children: "Book a call"
					})
				]
			})
		]
	}) });
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "max-w-xl font-display text-3xl font-[650] text-ink md:text-4xl",
				children: "Something went wrong loading this page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-muted-foreground",
				children: "Try again in a moment. If it keeps happening, the home page will always work."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90",
					children: "Try again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-tint",
					children: "Go home"
				})]
			})
		]
	}) });
}
var orgJsonLd = organizationJsonLd();
var siteJsonLd = webSiteJsonLd();
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE_TITLE },
			{
				name: "description",
				content: SITE_DESC
			},
			{
				name: "author",
				content: "The Social 99"
			},
			{
				name: "theme-color",
				content: "#013186"
			},
			{
				property: "og:site_name",
				content: "The Social 99 Reviews"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: SITE_TITLE
			},
			{
				property: "og:description",
				content: SITE_DESC
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SITE_TITLE
			},
			{
				name: "twitter:description",
				content: SITE_DESC
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;650;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(orgJsonLd)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(siteJsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$2 = () => import("./the-social-99-review-B-7zE3jE.mjs");
var Route$3 = createFileRoute("/the-social-99-review")({
	head: () => reviewHead(),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/the-social-99-review",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.8"
			},
			...COMPARISONS.map((c) => ({
				path: `/blog/${c.slug}`,
				lastmod: c.lastUpdated,
				changefreq: "monthly",
				priority: "0.8"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./routes-qeCV9tDa.mjs");
var TITLE$1 = "Honest reviews of The Social 99 — done-for-you social media from $99/mo";
var DESC$1 = "First-party reviews and comparisons of The Social 99, a done-for-you social media management service for US small businesses. Pricing, pros/cons, vs Buffer, Hootsuite, Later, Sprout and Metricool.";
var Route$1 = createFileRoute("/")({
	head: () => buildHead({
		title: TITLE$1,
		description: DESC$1,
		path: "/",
		type: "website",
		keywords: keywordsForPage("H", "High").slice(0, 12).map((k) => k.keyword),
		jsonLd: [
			serviceJsonLd(),
			faqPageJsonLd(mergedFaqsForPage("H", HOME_FAQS)),
			breadcrumbJsonLd([{
				name: "Home",
				path: "/"
			}])
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-Bqjl1tOS.mjs");
var TITLE = "Comparisons: The Social 99 vs the market";
var DESC = "Honest, first-party comparisons of The Social 99 (done-for-you social media, from $99/mo) vs Buffer, Hootsuite, Later, Sprout Social and Metricool.";
var Route = createFileRoute("/blog/")({
	head: () => buildHead({
		title: TITLE,
		description: DESC,
		path: "/blog",
		type: "website",
		keywords: keywordsForPage("C", "High").slice(0, 10).map((k) => k.keyword),
		jsonLd: [comparisonItemListJsonLd(), breadcrumbJsonLd([{
			name: "Home",
			path: "/"
		}, {
			name: "Comparisons",
			path: "/blog"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TheSocial99ReviewRoute = Route$3.update({
	id: "/the-social-99-review",
	path: "/the-social-99-review",
	getParentRoute: () => Route$4
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute,
	SitemapDotxmlRoute,
	TheSocial99ReviewRoute,
	BlogSlugRoute: Route$5.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$4
	}),
	BlogIndexRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
