import { Star } from "lucide-react";

export function RatingStars({
  rating,
  size = 16,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(5, rating));
  return (
    <div
      className={"inline-flex items-center gap-0.5 " + (className ?? "")}
      role="img"
      aria-label={`${clamped} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(clamped)
              ? "fill-primary text-primary"
              : "text-border"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
