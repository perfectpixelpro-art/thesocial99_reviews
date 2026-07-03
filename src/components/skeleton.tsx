import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-tint/70",
        className,
      )}
      aria-hidden
    />
  );
}
