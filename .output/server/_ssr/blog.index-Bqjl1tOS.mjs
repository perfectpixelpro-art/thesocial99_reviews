import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as SiteShell, t as COMPARISONS } from "./comparisons-4oUkJES9.mjs";
import { t as Breadcrumb } from "./breadcrumb-ML1wJytH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-Bqjl1tOS.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-10 md:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, { items: [{
				label: "Home",
				to: "/"
			}, { label: "Comparisons" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-8 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-[650] uppercase tracking-wider text-primary",
						children: "Comparisons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-[650] leading-tight tracking-tight text-ink md:text-5xl",
						children: "The Social 99 vs the market - done-for-you vs the tools you'd run yourself"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "Direct comparisons framed by service model, not by claims about competitors' internals. Real pricing, real trade-offs, updated monthly."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: COMPARISONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: c.slug },
					className: "group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-[650] uppercase tracking-wider text-primary",
							children: ["vs ", c.competitor]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-lg font-[650] leading-snug text-ink",
							children: c.h1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: c.quickVerdict
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-flex items-center gap-1.5 text-sm font-[600] text-primary",
						children: [
							"Read comparison",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 16,
								className: "transition-transform group-hover:translate-x-0.5"
							})
						]
					})]
				}, c.slug))
			})
		]
	}) });
}
//#endregion
export { BlogIndex as component };
