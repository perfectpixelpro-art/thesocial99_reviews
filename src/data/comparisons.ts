export interface ComparisonRow {
  feature: string;
  us: string;
  them: string;
}

export interface PricingRow {
  plan: string;
  us: string;
  them: string;
}

export interface Comparison {
  slug: string; // route: /blog/<slug>
  competitor: string;
  competitorType: "tool" | "agency" | "hybrid";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  quickVerdict: string; // 2-3 sentence answer-first
  overview: string[]; // paragraphs
  featureRows: ComparisonRow[];
  pricingRows: PricingRow[]; // placeholder — user fills from live sources
  pricingNote: string;
  usPros: string[];
  usCons: string[];
  themPros: string[];
  themCons: string[];
  bottomLine: {
    pickUs: string;
    pickThem: string;
  };
  faqs: { q: string; a: string }[];
  lastUpdated: string; // YYYY-MM-DD
}

const today = "2026-07-02";

const commonUsPros = [
  "Done-for-you: our team creates and posts weekly.",
  "$99 starting price with no setup fee or contract.",
  "Real human-made content, review-before-publish.",
  "In-house managed platform — nothing extra to buy.",
];

const commonUsCons = [
  "Not a self-serve tool - if you enjoy scheduling your own content, this isn't for you.",
  "Optimized for US small businesses; enterprise features (SSO, approval chains, multi-brand roll-ups) aren't part of the product.",
];

export const COMPARISONS: Comparison[] = [
  {
    slug: "the-social-99-vs-buffer",
    competitor: "Buffer",
    competitorType: "tool",
    h1: "The Social 99 vs Buffer: which one actually posts for you?",
    metaTitle: "The Social 99 vs Buffer (2026): Done-For-You vs DIY Scheduler",
    metaDescription:
      "Honest 2026 comparison of The Social 99 (done-for-you social media, from $99/mo) vs Buffer (self-serve scheduler). Pricing, features, pros and cons.",
    quickVerdict:
      "Buffer is a self-serve scheduling tool - you still write, design, and plan every post. The Social 99 is a done-for-you service starting at $99/mo where our team creates and posts the content for you. Pick Buffer if you want to run your own social; pick us if you want the outcome without the work.",
    overview: [
      "Buffer and The Social 99 solve different problems. Buffer sells software that schedules content you've already made. The Social 99 sells the content - planned, written, designed, and published by a team - with the scheduling handled internally.",
      "This comparison frames the difference as a service model: 'you run the tool' vs 'we do it for you.' We don't make claims about Buffer's internal roadmap or team.",
    ],
    featureRows: [
      { feature: "Model", us: "Done-for-you managed service", them: "Self-serve SaaS scheduler" },
      { feature: "Who creates the content", us: "Our in-house team", them: "You (or your team)" },
      { feature: "Short-form video included", us: "Yes, from the Growth plan", them: "Not a video production service" },
      { feature: "Review-before-publish", us: "Included on all plans", them: "N/A - you author it" },
      { feature: "Weekly reports", us: "Growth & Premium", them: "In-app analytics you review yourself" },
      { feature: "Contract", us: "Month-to-month, cancel anytime", them: "Monthly/annual SaaS plans" },
      { feature: "Setup fee", us: "None", them: "None" },
    ],
    pricingRows: [
      { plan: "Entry", us: "$99/mo - 12 posts, 2 platforms, DFY", them: "[Fill from buffer.com - Free / Essentials tier]" },
      { plan: "Mid", us: "$199/mo - 20 posts + 4 reels, DFY", them: "[Fill from buffer.com - Team / Agency tier]" },
      { plan: "Top", us: "$299/mo - 30+ posts + 8 reels, unlimited revisions", them: "[Fill from buffer.com - highest published tier]" },
    ],
    pricingNote:
      "Competitor pricing is based on publicly available information and is reviewed regularly for accuracy. Prices may change over time, so always confirm the latest pricing on the provider's official website.",
    usPros: commonUsPros,
    usCons: commonUsCons,
    themPros: [
      "Clean, well-known scheduling UI.",
      "Works if you already have a content pipeline and just need to queue posts.",
      "Free tier available.",
    ],
    themCons: [
      "You still have to plan, write, design, and edit every post.",
      "Video, graphics, and strategy are not part of the product.",
      "The 'time saved' claim assumes you already have content.",
    ],
    bottomLine: {
      pickUs:
        "Pick The Social 99 if you're a small-business owner who doesn't want to log into a scheduler at all - you want posts appearing on-brand every week without touching it.",
      pickThem:
        "Pick Buffer if you (or someone on your team) enjoys making content and just needs a tidy way to queue it up.",
    },
    faqs: [
      {
        q: "Does Buffer create content or just schedule it?",
        a: "Buffer is a scheduling and analytics tool - it does not create posts, graphics, or reels. If you want the content itself produced for you, that's a service, not a tool.",
      },
      {
        q: "Is The Social 99 cheaper than Buffer?",
        a: "They aren't directly comparable - Buffer is software you use, The Social 99 is a done-for-you service. At $99/mo we include the content itself, which you'd otherwise pay a freelancer or in-house hire to make on top of any tool.",
      },
      {
        q: "Can I keep using Buffer if I switch?",
        a: "You don't need to. We run our own managed platform, so there's no extra scheduler to pay for.",
      },
    ],
    lastUpdated: today,
  },
  {
    slug: "vs-hootsuite",
    competitor: "Hootsuite",
    competitorType: "tool",
    h1: "The Social 99 vs Hootsuite: enterprise tool or done-for-you service?",
    metaTitle: "The Social 99 vs Hootsuite (2026): Which Fits a Small Business?",
    metaDescription:
      "Hootsuite is a multi-account social suite priced for teams. The Social 99 is a $99/mo done-for-you service. Honest 2026 comparison for small businesses.",
    quickVerdict:
      "Hootsuite is built for teams that already have social operations and need dashboards, approvals, and reporting. The Social 99 is built for small-business owners who don't want a dashboard at all - we plan and post for them starting at $99/mo.",
    overview: [
      "Hootsuite is one of the older, broader social-suite tools. It's aimed at teams that centralize multiple accounts, run approval workflows, and want deep analytics.",
      "The Social 99 doesn't compete on features - we compete on model. If you'd rather someone else own the whole workflow, our service starts where Hootsuite's cheapest self-serve tier begins.",
    ],
    featureRows: [
      { feature: "Model", us: "Done-for-you managed service", them: "Self-serve social suite (teams)" },
      { feature: "Best for", us: "Owner-run small businesses", them: "Marketing teams managing many accounts" },
      { feature: "Content production", us: "Included", them: "Not included" },
      { feature: "Reels / short-form video", us: "Growth & Premium plans", them: "Scheduled by you, not produced" },
      { feature: "Approvals", us: "Review-before-publish by default", them: "Configurable approval workflows" },
      { feature: "Contract", us: "Month-to-month", them: "Monthly / annual SaaS" },
    ],
    pricingRows: [
      { plan: "Entry", us: "$99/mo - DFY", them: "[Fill from hootsuite.com - Professional tier]" },
      { plan: "Mid", us: "$199/mo - DFY + video", them: "[Fill from hootsuite.com - Team tier]" },
      { plan: "Top", us: "$299/mo - DFY + unlimited revisions", them: "[Fill from hootsuite.com - Business tier]" },
    ],
    pricingNote:
      "Hootsuite pricing is based on publicly available information at the time of review. For the latest plans and pricing, please visit Hootsuite's official pricing page.",
    usPros: commonUsPros,
    usCons: commonUsCons,
    themPros: [
      "Deep multi-account dashboards.",
      "Approval workflows for larger teams.",
      "Long-standing integrations across networks.",
    ],
    themCons: [
      "You still need someone (in-house or freelance) making the content.",
      "Pricing is oriented toward teams, not solo owners.",
      "Learning curve on a tool the owner may never truly use.",
    ],
    bottomLine: {
      pickUs:
        "Pick The Social 99 if you're a small-business owner who wants posts made and published, not a dashboard to manage.",
      pickThem:
        "Pick Hootsuite if you already have a marketing team and need centralized scheduling, approvals, and reporting across many accounts.",
    },
    faqs: [
      {
        q: "Is Hootsuite worth it for a solo small business?",
        a: "For most solo owners, no - you'd pay for a tool and still have to make the content. A done-for-you service usually costs less than tool + freelancer combined.",
      },
      {
        q: "Do I need to know Hootsuite to work with The Social 99?",
        a: "No. We handle scheduling internally, so there's nothing for you to learn.",
      },
    ],
    lastUpdated: today,
  },
  {
    slug: "vs-later",
    competitor: "Later",
    competitorType: "tool",
    h1: "The Social 99 vs Later: visual planner or full-service posting?",
    metaTitle: "The Social 99 vs Later (2026): DIY Planner vs Done-For-You",
    metaDescription:
      "Later is a visual planner and link-in-bio tool. The Social 99 is a $99/mo done-for-you service. Honest 2026 comparison for US small businesses.",
    quickVerdict:
      "Later is great if you already produce visual content and want a drag-and-drop planner. The Social 99 is for owners who don't want to plan at all - we make and post the content weekly, starting at $99/mo.",
    overview: [
      "Later's strength is a visual grid planner and link-in-bio, especially for Instagram-first brands.",
      "The Social 99 replaces the planner + creator combo with a service: our team produces the content and publishes it on schedule.",
    ],
    featureRows: [
      { feature: "Model", us: "Done-for-you managed service", them: "Self-serve visual planner + link-in-bio" },
      { feature: "Content creation", us: "Included", them: "You create, Later organizes" },
      { feature: "Short-form video production", us: "Growth & Premium", them: "Not a production service" },
      { feature: "Link-in-bio", us: "Optional, built as part of Premium site work", them: "Included in most plans" },
      { feature: "Review-before-publish", us: "Included on all plans", them: "N/A — your own content" },
      { feature: "Contract", us: "Month-to-month", them: "Monthly / annual SaaS" },
    ],
    pricingRows: [
      { plan: "Entry", us: "$99/mo — DFY", them: "[Fill from later.com — Starter tier]" },
      { plan: "Mid", us: "$199/mo — DFY + video", them: "[Fill from later.com — Growth tier]" },
      { plan: "Top", us: "$299/mo — DFY + revisions", them: "[Fill from later.com — Advanced tier]" },
    ],
    pricingNote:
      "Competitor pricing rows are placeholders. Pull live figures from later.com/pricing before publishing.",
    usPros: commonUsPros,
    usCons: commonUsCons,
    themPros: [
      "Genuinely nice visual grid preview.",
      "Solid link-in-bio product.",
      "Instagram-first workflow feels natural.",
    ],
    themCons: [
      "You still need to produce the visuals.",
      "Video-heavy strategies mean paying for editing on top.",
      "Not a strategy or reporting service.",
    ],
    bottomLine: {
      pickUs:
        "Pick The Social 99 if 'consistent, on-brand posts' is the outcome — not planning grids.",
      pickThem:
        "Pick Later if you already shoot your own photos/reels and want a clean tool to arrange and schedule them.",
    },
    faqs: [
      {
        q: "Can Later create Instagram reels for me?",
        a: "No. Later schedules and previews content you produce. If you want reels produced for you, that's a service.",
      },
      {
        q: "Do you handle link-in-bio?",
        a: "Yes, as part of Premium we can set up and maintain a link-in-bio or dedicated micro-page.",
      },
    ],
    lastUpdated: today,
  },
  {
    slug: "vs-sprout-social",
    competitor: "Sprout Social",
    competitorType: "tool",
    h1: "The Social 99 vs Sprout Social: enterprise suite or done-for-you at $99?",
    metaTitle: "The Social 99 vs Sprout Social (2026): Small-Business Reality Check",
    metaDescription:
      "Sprout Social is a premium team suite. The Social 99 is a $99/mo done-for-you service for small businesses. Honest 2026 comparison and pricing.",
    quickVerdict:
      "Sprout Social is a premium suite priced per user for marketing teams. The Social 99 is a done-for-you service priced from $99/mo total. If you have one owner and no marketing team, we're the pragmatic choice; if you have a team that lives in dashboards, Sprout is built for that.",
    overview: [
      "Sprout Social sits at the higher end of the social suite market. Its per-seat pricing is designed for teams with real headcount managing many brands or clients.",
      "Small business owners often over-buy Sprout because they see the feature list and assume they need it. The Social 99 removes the dashboard entirely.",
    ],
    featureRows: [
      { feature: "Model", us: "Done-for-you managed service", them: "Self-serve suite, per-seat pricing" },
      { feature: "Best for", us: "Owner-run small businesses", them: "Marketing teams and agencies" },
      { feature: "Content production", us: "Included", them: "Not included" },
      { feature: "Reporting", us: "Weekly plain-English report", them: "Deep in-app analytics you interpret" },
      { feature: "CRM / inbox", us: "Handled via your accounts", them: "Unified inbox included" },
      { feature: "Contract", us: "Month-to-month", them: "Typically annual" },
    ],
    pricingRows: [
      { plan: "Entry", us: "$99/mo — DFY", them: "[Fill from sproutsocial.com — Standard tier]" },
      { plan: "Mid", us: "$199/mo — DFY + video", them: "[Fill from sproutsocial.com — Professional tier]" },
      { plan: "Top", us: "$299/mo — DFY + revisions", them: "[Fill from sproutsocial.com — Advanced tier]" },
    ],
    pricingNote:
      "Competitor pricing rows are placeholders. Pull live figures from sproutsocial.com/pricing before publishing.",
    usPros: commonUsPros,
    usCons: commonUsCons,
    themPros: [
      "Powerful multi-network inbox.",
      "Serious reporting and listening features.",
      "Well-suited to agencies with many client accounts.",
    ],
    themCons: [
      "Per-seat pricing adds up quickly.",
      "Feature depth is overkill for a single owner.",
      "You still need creators and strategists producing the work.",
    ],
    bottomLine: {
      pickUs:
        "Pick The Social 99 if you're a local business owner who wants results without hiring a marketing team.",
      pickThem:
        "Pick Sprout Social if you already have a marketing team and need enterprise-grade tooling to run it.",
    },
    faqs: [
      {
        q: "Is Sprout Social overkill for a small business?",
        a: "For most owner-run small businesses, yes — the pricing and feature depth are built for teams, not solo operators.",
      },
      {
        q: "Do you replace Sprout Social's inbox features?",
        a: "We handle publishing and reporting. Inbox and community management can be scoped into Premium engagements.",
      },
    ],
    lastUpdated: today,
  },
  {
    slug: "vs-metricool",
    competitor: "Metricool",
    competitorType: "tool",
    h1: "The Social 99 vs Metricool: analytics-first tool or done-for-you service?",
    metaTitle: "The Social 99 vs Metricool (2026): Tool vs Managed Service",
    metaDescription:
      "Metricool is an analytics-first scheduler. The Social 99 is a $99/mo done-for-you service. Honest 2026 comparison, pricing, and who should pick what.",
    quickVerdict:
      "Metricool is a solid analytics + scheduling tool for people who want to run their own social. The Social 99 is a done-for-you service - from $99/mo we plan, create, and post so you don't have to open a tool at all.",
    overview: [
      "Metricool has earned a following for competitive analytics and a clean scheduler at a fair price. It's a tool for operators.",
      "The Social 99 doesn't try to out-analytics Metricool. We're the answer to 'I don't want to be the operator.'",
    ],
    featureRows: [
      { feature: "Model", us: "Done-for-you managed service", them: "Self-serve scheduler + analytics" },
      { feature: "Content production", us: "Included", them: "Not included" },
      { feature: "Reels production", us: "Growth & Premium plans", them: "Scheduling only" },
      { feature: "Competitor analytics", us: "Used internally to inform strategy", them: "Surfaced in the app for you" },
      { feature: "Review-before-publish", us: "Included", them: "N/A — your own content" },
      { feature: "Contract", us: "Month-to-month", them: "Monthly / annual SaaS" },
    ],
    pricingRows: [
      { plan: "Entry", us: "$99/mo — DFY", them: "[Fill from metricool.com — Starter tier]" },
      { plan: "Mid", us: "$199/mo — DFY + video", them: "[Fill from metricool.com — Advanced tier]" },
      { plan: "Top", us: "$299/mo — DFY + revisions", them: "[Fill from metricool.com — Enterprise tier]" },
    ],
    pricingNote:
      "Competitor pricing rows are placeholders. Pull live figures from metricool.com/pricing before publishing.",
    usPros: commonUsPros,
    usCons: commonUsCons,
    themPros: [
      "Strong analytics for a mid-tier price.",
      "Competitor benchmarking built in.",
      "Good multi-network scheduling.",
    ],
    themCons: [
      "You (or your team) still create the content.",
      "Analytics only matter if someone acts on them weekly.",
      "Not a strategy or production service.",
    ],
    bottomLine: {
      pickUs:
        "Pick The Social 99 if you'd rather have someone else do the work and just get a weekly report.",
      pickThem:
        "Pick Metricool if you love the data and want to run your own social program with better instruments.",
    },
    faqs: [
      {
        q: "Do I still need Metricool if I hire The Social 99?",
        a: "No — we run our own managed platform and send you a plain-English report so you don't need to interpret dashboards.",
      },
      {
        q: "Do you provide competitor benchmarking?",
        a: "Yes, informally, as part of Growth and Premium strategy — we tell you what's working in your niche and adjust.",
      },
    ],
    lastUpdated: today,
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
