import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as notFound, f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowRight, b as Check, u as Minus } from "../_libs/lucide-react.mjs";
import { o as getComparison, r as SiteShell, t as COMPARISONS } from "./comparisons-4oUkJES9.mjs";
import { a as TableOfContents, c as buildHead, d as keywordsForCompetitor, i as ProsConsBox, o as absoluteUrl, p as mergedFaqsForCompetitor, s as breadcrumbJsonLd, t as AuthorByline, u as faqPageJsonLd } from "./faqSchema-C_Qcepuv.mjs";
import { t as Breadcrumb } from "./breadcrumb-ML1wJytH.mjs";
import { n as FAQAccordion, r as QuickAnswerBox, t as CTABanner } from "./cta-banner-BGPKr5tk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BtCtv41H.js
var import_jsx_runtime = require_jsx_runtime();
function cellRender(value) {
	if (value.toLowerCase().startsWith("yes")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 text-success",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				size: 16,
				strokeWidth: 2.5
			}),
			" ",
			value
		]
	});
	if (value.toLowerCase() === "n/a" || value.toLowerCase().startsWith("no ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 }),
			" ",
			value
		]
	});
	return value;
}
function ComparisonTable({ rows, usLabel, themLabel, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full border-collapse text-sm",
				children: [
					caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "sr-only",
						children: caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "bg-tint/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "w-[32%] px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary",
								children: "Feature"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary",
								children: usLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-muted-foreground",
								children: themLabel
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: idx % 2 === 1 ? "bg-surface/50" : "bg-background",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								scope: "row",
								className: "px-4 py-3 text-left font-[600] text-ink",
								children: row.feature
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-ink",
								children: cellRender(row.us)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: cellRender(row.them)
							})
						]
					}, row.feature)) })
				]
			})
		})
	});
}
var TOC = [
	{
		id: "quick-verdict",
		label: "Quick verdict"
	},
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "feature-comparison",
		label: "Feature comparison"
	},
	{
		id: "pricing",
		label: "Pricing"
	},
	{
		id: "pros-cons",
		label: "Pros & cons"
	},
	{
		id: "bottom-line",
		label: "Bottom line"
	},
	{
		id: "faqs",
		label: "FAQs"
	},
	{
		id: "related",
		label: "Related comparisons"
	}
];
function ComparisonArticle({ data }) {
	const related = COMPARISONS.filter((c) => c.slug !== data.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container-page py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [
			{
				label: "Home",
				to: "/"
			},
			{
				label: "Comparisons",
				to: "/blog"
			},
			{ label: `${data.competitor}` }
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-12 lg:grid-cols-[1fr_220px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs font-[650] uppercase tracking-wider text-primary",
					children: ["The Social 99 vs ", data.competitor]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl font-[650] leading-[1.15] tracking-tight text-ink md:text-5xl",
					children: data.h1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthorByline, {
						name: "The Social 99 Editorial",
						role: "First-party analysis",
						lastUpdated: data.lastUpdated,
						methodology: "How we compare: we describe our own service in detail and frame competitors by public product model and pricing. We don't make claims about their internal operations or roadmap."
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-10 prose-article",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "quick-verdict",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickAnswerBox, {
							title: "Quick verdict",
							children: data.quickVerdict
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "overview",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Overview" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/90",
								children: data.overview[0]
							}),
							data.overview.slice(1).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "feature-comparison",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Feature comparison" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Side-by-side, the biggest gap isn't feature parity - it's who actually does the work each week." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonTable, {
								rows: data.featureRows,
								usLabel: "The Social 99",
								themLabel: data.competitor,
								caption: `Feature comparison of The Social 99 and ${data.competitor}`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "pricing",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Pricing comparison" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Direct answer: The Social 99 offers simple monthly pricing with no setup fees or long-term contracts. Pricing shown below reflects our current plans." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full border-collapse text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "bg-tint/60",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary",
													children: "Tier"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-primary",
													children: "The Social 99"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3 text-left text-xs font-[650] uppercase tracking-wider text-muted-foreground",
													children: data.competitor
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.pricingRows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: i % 2 === 1 ? "bg-surface/50" : "bg-background",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													scope: "row",
													className: "px-4 py-3 text-left font-[600] text-ink",
													children: r.plan
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-3 text-ink",
													children: r.us
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-3 text-muted-foreground",
													children: r.them
												})
											]
										}, r.plan)) })]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs italic text-muted-foreground",
								children: data.pricingNote
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "pros-cons",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Pros & cons - honest, both sides" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProsConsBox, {
								title: "The Social 99",
								tone: "us",
								pros: data.usPros,
								cons: data.usCons
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProsConsBox, {
								title: data.competitor,
								tone: "them",
								pros: data.themPros,
								cons: data.themCons
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "bottom-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Bottom line: who should pick what" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-primary/30 bg-tint/40 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-[650] uppercase tracking-wider text-primary",
									children: "Pick The Social 99 if"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink",
									children: data.bottomLine.pickUs
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-surface p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-[650] uppercase tracking-wider text-muted-foreground",
									children: [
										"Pick ",
										data.competitor,
										" if"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink",
									children: data.bottomLine.pickThem
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "faqs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Frequently asked questions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {
							faqs: data.faqs,
							idPrefix: data.slug
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "related",
						className: "not-prose",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Related comparisons" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: related.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog/$slug",
								params: { slug: c.slug },
								className: "group flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-[650] uppercase tracking-wider text-primary",
									children: ["vs ", c.competitor]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm font-[600] text-ink",
									children: c.metaTitle
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 18,
									className: "flex-none text-muted-foreground transition-colors group-hover:text-primary"
								})]
							}, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "not-prose",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, { pageSlug: data.slug })
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { items: TOC }) })]
		})]
	}) });
}
function comparisonHead(data) {
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
			url: "https://thesocial99.com"
		},
		publisher: {
			"@type": "Organization",
			name: "The Social 99",
			url: "https://thesocial99.com"
		},
		dateModified: data.lastUpdated,
		mainEntityOfPage: canonical,
		about: [{
			"@type": "Thing",
			name: "The Social 99"
		}, {
			"@type": "Thing",
			name: data.competitor
		}],
		keywords: competitorKeywords.join(", ")
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
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Comparisons",
					path: "/blog"
				},
				{
					name: `vs ${data.competitor}`,
					path
				}
			])
		]
	});
}
var $$splitNotFoundComponentImporter = () => import("./blog._slug-CIMLPq7I.mjs");
var $$splitComponentImporter = () => import("./blog._slug-DYQpXoo8.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const data = getComparison(params.slug);
		if (!data) throw notFound();
		return { data };
	},
	head: ({ loaderData }) => loaderData ? comparisonHead(loaderData.data) : { meta: [{ title: "Comparison not found" }] },
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as n, ComparisonArticle as t };
