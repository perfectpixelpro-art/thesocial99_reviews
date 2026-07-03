import type { LucideIcon } from "lucide-react";
import {
  Hand,
  Server,
  Sparkles,
  LifeBuoy,
  BadgeDollarSign,
  CalendarCheck,
  Layers,
  Target,
} from "lucide-react";

export interface Moat {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const MOATS: Moat[] = [
  {
    icon: Hand,
    title: "Done-for-you, not a tool you operate",
    body: "You don't log in, schedule, or edit. Our team plans, creates, and posts every week — you approve and get back to running your business.",
  },
  {
    icon: Server,
    title: "In-house managed platform",
    body: "We run our own workflow — no Buffer, Hootsuite, Later, Sprout, or Metricool for you to juggle or pay for on top.",
  },
  {
    icon: Sparkles,
    title: "Real human-made content in the AI era",
    body: "Written and designed by people who understand your niche — not templated AI output — at a price small businesses can afford.",
  },
  {
    icon: LifeBuoy,
    title: "Best-in-class after-sales support",
    body: "Review-before-publish on every plan, unlimited revisions on the top tier, and weekly reports so nothing goes live you haven't seen.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent pricing, no setup fee",
    body: "$99, $199, $299 flat. No hidden onboarding fees, no per-seat pricing, no surprise upsells.",
  },
  {
    icon: CalendarCheck,
    title: "No contract, cancel anytime",
    body: "Month-to-month. If we're not earning our keep, you walk. That accountability is the whole point.",
  },
  {
    icon: Layers,
    title: "Full stack: social + short-form video + websites",
    body: "One team for feed content, reels, and your site — so your brand looks the same everywhere a customer finds you.",
  },
  {
    icon: Target,
    title: "Niche experience",
    body: "We've shipped for med spas, salons, restaurants, bars, and pet grooming. We know the offers, the seasons, and what actually converts.",
  },
];
