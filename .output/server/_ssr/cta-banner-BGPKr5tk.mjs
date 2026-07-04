import { n as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as ArrowRight, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { i as cn } from "./comparisons-4oUkJES9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-banner-BGPKr5tk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuickAnswerBox({ title = "Quick answer", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": "Quick answer",
		className: "rounded-2xl border-l-4 border-primary bg-tint/60 p-5 md:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-[650] uppercase tracking-wider text-primary",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-[1.02rem] leading-7 text-ink",
			children
		})]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQAccordion({ faqs, idPrefix = "faq" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full",
		children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `${idPrefix}-${i}`,
			className: "border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "text-left text-[0.98rem] font-[650] text-ink hover:no-underline",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "text-[0.95rem] leading-7 text-muted-foreground",
				children: f.a
			})]
		}, `${idPrefix}-${i}`))
	});
}
function CTABanner({ pageSlug, headline = "Ready to hand off your social media?", sub = "Start a free trial or book a 15-minute call. No setup fee, no contract, cancel anytime." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-[#012465] p-8 md:p-12 text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl text-2xl font-[650] leading-tight md:text-3xl text-primary-foreground",
				children: headline
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-primary-foreground/80",
				children: sub
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `https://thesocial99.com/free-trial?utm_source=reviews&utm_medium=microsite&utm_campaign=${pageSlug}`,
					target: "_blank",
					rel: "noopener",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90",
					children: ["Start free trial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				})
			})]
		})]
	});
}
//#endregion
export { FAQAccordion as n, QuickAnswerBox as r, CTABanner as t };
