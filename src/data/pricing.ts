export interface PricingTier {
  name: string;
  price: number;
  cadence: "mo";
  tagline: string;
  features: string[];
  highlight?: boolean;
}

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: 99,
    cadence: "mo",
    tagline: "Consistent presence on the essentials.",
    features: [
      "12 posts / month across 2 platforms",
      "Custom graphics + captions",
      "Review-before-publish",
      "Monthly performance snapshot",
      "No setup fee · cancel anytime",
    ],
  },
  {
    name: "Growth",
    price: 199,
    cadence: "mo",
    tagline: "Add short-form video and stories.",
    highlight: true,
    features: [
      "20 posts / month across 3 platforms",
      "4 short-form reels / month",
      "Stories + engagement replies",
      "Bi-weekly report",
      "Priority turnaround",
    ],
  },
  {
    name: "Premium",
    price: 299,
    cadence: "mo",
    tagline: "Full-service, weekly, with revisions.",
    features: [
      "30+ posts / month across 4 platforms",
      "8 short-form reels / month",
      "Unlimited revisions",
      "Weekly report + strategy call",
      "Landing page or micro-site refresh",
    ],
  },
];
