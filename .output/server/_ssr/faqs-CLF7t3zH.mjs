import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Star, l as Quote } from "../_libs/lucide-react.mjs";
import { a as ctaUrl, i as cn } from "./comparisons-4oUkJES9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-CLF7t3zH.js
var import_jsx_runtime = require_jsx_runtime();
function CTAButton({ variant = "primary", action, pageSlug, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: ctaUrl(action, pageSlug),
		target: "_blank",
		rel: "noopener",
		className: cn("inline-flex items-center justify-center rounded-xl px-6 py-4 text-md font-semibold transition-all duration-150 whitespace-nowrap", variant === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md" : "bg-tint text-primary hover:bg-tint/70 border border-transparent", className),
		children
	});
}
function RatingStars({ rating, size = 16, className }) {
	const clamped = Math.max(0, Math.min(5, rating));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex items-center gap-0.5 " + (className ?? ""),
		role: "img",
		"aria-label": `${clamped} out of 5 stars`,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			size,
			className: i <= Math.round(clamped) ? "fill-primary text-primary" : "text-border",
			strokeWidth: 1.5
		}, i))
	});
}
function ReviewCard({ review }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingStars, { rating: review.rating })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				size: 20,
				className: "mt-4 text-primary/60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "mt-2 flex-1 text-[0.98rem] leading-7 text-ink",
				children: review.quote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-5 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-[650] text-ink",
					children: review.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [review.role, " ·"]
				})]
			})
		]
	});
}
var REVIEWS = [
	{
		id: "review-1",
		quote: "The Social 99 has completely transformed how we manage our social media. Their team consistently creates high-quality content, keeps our posting schedule on track, and saves us hours every week. We've seen stronger engagement and a much more professional online presence since joining.",
		name: "Sarah Mitchell",
		role: "Marketing Manager • Bright Dental Clinic • Healthcare",
		business: "Luxe Glow Aesthetics",
		niche: "Med Spa",
		rating: 5,
		placeholder: true
	},
	{
		id: "review-2",
		quote: "We wanted a reliable team to handle our social media without hiring an expensive agency. The Social 99 exceeded our expectations. The content matches our brand perfectly, communication is excellent, and everything is delivered on time. It's one of the best investments we've made.",
		name: "David Thompson",
		role: "Owner • Velvet Hair Studio • Salon & Beauty",
		business: "Velvet Hair Studio",
		niche: "Salon",
		rating: 5,
		placeholder: true
	},
	{
		id: "review-3",
		quote: "The Social 99 makes social media effortless. Instead of worrying about what to post each week, we simply review the content and approve it. Our pages look more professional, and our customers engage with us much more consistently.",
		name: "Emily Rodriguez",
		role: "General Manager • Harbor Grill • Restaurant",
		business: "Harbor Grill",
		niche: "Restaurant",
		rating: 5,
		placeholder: true
	}
];
var HOME_FAQS = [
	{
		q: "Is The Social 99 actually done-for-you, or do I still have to post?",
		a: "It's done-for-you. Our team plans, writes, designs, and publishes every post on your accounts. You approve content before it goes live and receive a report - you never open a scheduler."
	},
	{
		q: "How much does social media management cost with The Social 99?",
		a: "Plans are $99, $199, and $299 per month. There is no setup fee, no contract, and you can cancel anytime."
	},
	{
		q: "Do I need to use Buffer, Hootsuite, Later, Sprout, or Metricool?",
		a: "No. We run our own in-house managed platform, so you don't buy or learn a third-party scheduler on top of the service."
	},
	{
		q: "Is this site independent?",
		a: "No - and we say so openly. Thesocial99reviews.com is operated by The Social 99. Every published review is from a real, consenting client, per FTC 16 CFR Part 465."
	},
	{
		q: "What kinds of small businesses do you work with?",
		a: "US small businesses in service niches: med spas, salons, restaurants, bars, pet grooming, and adjacent local categories."
	}
];
var REVIEW_FAQS = [
	{
		q: "Is the $99 plan actually worth it for a small business?",
		a: "For most local service businesses that just need consistent, on-brand posting on one or two platforms, yes - $99/mo is well below the cost of a freelancer and eliminates the DIY burnout that stalls most accounts."
	},
	{
		q: "What are the honest downsides?",
		a: "The Starter plan doesn't include short-form video. If reels are core to your growth, you'll want Growth or Premium. Response times on Starter are also standard business-hours, not priority."
	},
	{
		q: "How is content approved before it's posted?",
		a: "Every plan includes review-before-publish. You see the month's content ahead of time and can request changes; Premium includes unlimited revisions."
	},
	{
		q: "Is there a contract?",
		a: "No. All plans are month-to-month with no setup fee. You can cancel anytime."
	},
	{
		q: "Do you work with businesses outside the US?",
		a: "The service is optimized for US small businesses, though we occasionally take on English-market clients in Canada and the UK."
	}
];
//#endregion
export { RatingStars as a, REVIEW_FAQS as i, HOME_FAQS as n, ReviewCard as o, REVIEWS as r, CTAButton as t };
