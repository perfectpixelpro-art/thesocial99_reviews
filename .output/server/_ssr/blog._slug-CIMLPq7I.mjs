import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Inbox } from "../_libs/lucide-react.mjs";
import { r as SiteShell, t as COMPARISONS } from "./comparisons-4oUkJES9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CIMLPq7I.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ title, description, action, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-dashed border-border bg-surface/60 p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-tint text-primary",
				children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { size: 20 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-base font-[650] text-ink",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-1.5 max-w-md text-sm text-muted-foreground",
				children: description
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: action
			})
		]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-page py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "That comparison doesn't exist",
			description: "It may have been renamed. Here's the current list.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: COMPARISONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: c.slug },
					className: "rounded-lg bg-tint px-3 py-1.5 text-sm font-[600] text-primary hover:bg-tint/70",
					children: ["vs ", c.competitor]
				}, c.slug))
			})
		})
	}) });
}
//#endregion
export { NotFound as notFoundComponent };
