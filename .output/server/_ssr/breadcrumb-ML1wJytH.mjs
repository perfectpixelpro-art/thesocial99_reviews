import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breadcrumb-ML1wJytH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumb({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "text-sm text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-1",
			children: items.map((c, i) => {
				const last = i === items.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c.to && !last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: c.to,
					className: "hover:text-primary",
					children: c.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: last ? "text-ink font-medium" : "",
					children: c.label
				}) }), !last && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					size: 14,
					className: "text-border"
				})] }, i);
			})
		})
	});
}
//#endregion
export { Breadcrumb as t };
