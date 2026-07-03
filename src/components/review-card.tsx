import type { ClientReview } from "@/data/reviews";
import { RatingStars } from "./rating-stars";
import { Quote } from "lucide-react";

export function ReviewCard({ review }: { review: ClientReview }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <RatingStars rating={review.rating} />
        {review.placeholder && (
          <span className="rounded-full bg-tint px-2 py-0.5 text-[10px] font-[650] uppercase tracking-wider text-primary">
            Placeholder
          </span>
        )}
      </div>
      <Quote size={20} className="mt-4 text-primary/60" />
      <blockquote className="mt-2 flex-1 text-[0.98rem] leading-7 text-ink">
        {review.quote}
      </blockquote>
      <footer className="mt-5 border-t border-border pt-4">
        <div className="text-sm font-[650] text-ink">{review.name}</div>
        <div className="text-xs text-muted-foreground">
          {review.role} · {review.business} · {review.niche}
        </div>
      </footer>
    </article>
  );
}
