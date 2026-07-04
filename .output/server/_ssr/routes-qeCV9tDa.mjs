import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowRight, S as BadgeDollarSign, c as Server, f as LifeBuoy, h as Hand, i as Target, n as Users, o as Sparkles, p as Layers, r as TrendingUp, s as ShieldCheck, x as CalendarCheck } from "../_libs/lucide-react.mjs";
import { n as SITE, r as SiteShell, t as COMPARISONS } from "./comparisons-4oUkJES9.mjs";
import { n as FAQAccordion, r as QuickAnswerBox, t as CTABanner } from "./cta-banner-BGPKr5tk.mjs";
import { n as HOME_FAQS, o as ReviewCard, r as REVIEWS, t as CTAButton } from "./faqs-CLF7t3zH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-qeCV9tDa.js
var import_jsx_runtime = require_jsx_runtime();
function Hero({ pageSlug }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-to-b from-tint/60 via-background to-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(60%_60%_at_50%_0%,var(--tint)_0%,transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							size: 14,
							className: "text-primary"
						}), "Verified Customer Reviews"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-4xl font-[650] leading-[1.1] tracking-tight text-ink md:text-6xl",
						children: [
							"The Social 99 Reviews",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-[-52] text-primary whitespace-nowrap",
								children: "Everything You Need to Know"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
						children: "Read verified customer reviews, compare pricing and features, and see if The Social 99 is right for your business."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
							action: "trial",
							pageSlug,
							children: "Start a free trial"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-xs text-muted-foreground",
						children: "✔ Verified Reviews • ✔ Transparent Comparisons • ✔ Updated Regularly"
					})
				]
			})
		})]
	});
}
function MoatCard({ moat }) {
	const Icon = moat.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-11 w-11 place-items-center rounded-xl bg-tint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 20 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-base font-[650] text-ink",
				children: moat.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: moat.body
			})
		]
	});
}
var NICHES = [
	{
		label: "Med Spa",
		emoji: "💉"
	},
	{
		label: "Salon & Beauty",
		emoji: "💇"
	},
	{
		label: "Restaurant",
		emoji: "🍽️"
	},
	{
		label: "Bar",
		emoji: "🍸"
	},
	{
		label: "Pet Grooming",
		emoji: "🐾"
	}
];
function NicheStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-surface p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center text-xs font-[650] uppercase tracking-wider text-muted-foreground",
			children: "Niche experience"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
			children: NICHES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "inline-flex items-center gap-2 text-sm font-[600] text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-lg",
					children: n.emoji
				}), n.label]
			}, n.label))
		})]
	});
}
var MOATS = [
	{
		icon: Hand,
		title: "Done-for-you, not a tool you operate",
		body: "You don't log in, schedule, or edit. Our team plans, creates, and posts every week - you approve and get back to running your business."
	},
	{
		icon: Server,
		title: "In-house managed platform",
		body: "We run our own workflow - no Buffer, Hootsuite, Later, Sprout, or Metricool for you to juggle or pay for on top."
	},
	{
		icon: Sparkles,
		title: "Real human-made content in the AI era",
		body: "Written and designed by people who understand your niche - not templated AI output - at a price small businesses can afford."
	},
	{
		icon: LifeBuoy,
		title: "Best-in-class after-sales support",
		body: "Review-before-publish on every plan, unlimited revisions on the top tier, and weekly reports so nothing goes live you haven't seen."
	},
	{
		icon: BadgeDollarSign,
		title: "Transparent pricing, no setup fee",
		body: "$99, $199, $299 flat. No hidden onboarding fees, no per-seat pricing, no surprise upsells."
	},
	{
		icon: CalendarCheck,
		title: "No contract, cancel anytime",
		body: "Month-to-month. If we're not earning our keep, you walk. That accountability is the whole point."
	},
	{
		icon: Layers,
		title: "Full stack: social + short-form video + websites",
		body: "One team for feed content, reels, and your site - so your brand looks the same everywhere a customer finds you."
	},
	{
		icon: Target,
		title: "Niche experience",
		body: "We've shipped for med spas, salons, restaurants, bars, and pet grooming. We know the offers, the seasons, and what actually converts."
	}
];
function Home() {
	const featured = COMPARISONS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { pageSlug: "home" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page mt-4 md:mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuickAnswerBox, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The direct answer:" }), " The Social 99 is a done-for-you social media service where a human team plans, creates, and publishes your content weekly - from $99/mo, no setup fee, no contract. It's the cheapest way to fully outsource social media without dropping to freelancer-level reliability. This site is operated by The Social 99 and shows only real, consented client reviews."] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-ink sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-tint text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-[650]",
							children: SITE.trust.served
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Since 2019"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-tint text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-[650]",
							children: SITE.trust.active
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Currently on plans"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-tint text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-[650]",
								children: "$99"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-[650]",
							children: "Flat plans, cancel anytime"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "No setup fee, no contract"
						})] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "moats",
			className: "container-page mt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-[650] uppercase tracking-wider text-primary",
						children: "Why owners pick The Social 99"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-[650] tracking-tight text-ink md:text-4xl",
						children: "Eight things a $99/mo done-for-you service actually does"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Answer-first: it's not a scheduler you operate - it's a team that ships weekly, in your voice, with your review before anything goes live."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: MOATS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoatCard, { moat: m }, m.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page mt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-tint/70 via-background to-background p-8 md:grid-cols-[1.3fr_1fr] md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-[650] uppercase tracking-wider text-primary",
						children: "Featured comparison"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl font-[650] leading-tight text-ink md:text-3xl",
						children: featured.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: featured.quickVerdict
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: featured.slug },
							className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90",
							children: ["Read the full comparison ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-tint",
							children: "All comparisons"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-[650] uppercase tracking-wider text-muted-foreground",
						children: "At a glance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-[600] text-ink",
									children: "Done-for-you · $99/mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: featured.competitor
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-[600] text-ink",
									children: "Self-serve scheduler"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Content included"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-[600] text-ink",
									children: "Us: yes · Them: no"
								})]
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page mt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-[650] uppercase tracking-wider text-primary",
						children: "The review"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-[650] tracking-tight text-ink",
						children: "The Social 99 Review (2026)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted-foreground",
						children: "Explore our in-depth review of The Social 99, including pricing, features, customer reviews, pros, cons, and comparisons to help you choose the right social media management service."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/the-social-99-review",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90",
					children: ["Read the review ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page mt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-[650] uppercase tracking-wider text-primary text-center",
					children: "VERIFIED CUSTOMER REVIEWS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-center font-display text-3xl font-[650] tracking-tight text-ink",
					children: "Real Customer Reviews & Testimonials"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground",
					children: "Read authentic reviews from verified customers who use The Social 99. Every testimonial published on this page is shared with the client's permission, giving you honest insights into our service quality, support, and overall experience."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { review: r }, r.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page mt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NicheStrip, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page mt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-[650] uppercase tracking-wider text-primary",
					children: "FAQs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-[650] tracking-tight text-ink",
					children: "Quick answers before you book a call"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-8 max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {
					faqs: HOME_FAQS,
					idPrefix: "home"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page mt-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, { pageSlug: "home" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-10 pt-20 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
				action: "trial",
				pageSlug: "home-footer",
				children: "See Pricing"
			})
		})
	] });
}
//#endregion
export { Home as component };
