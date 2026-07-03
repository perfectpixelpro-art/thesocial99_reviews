import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ctaUrl } from "@/data/site";

interface Props {
  variant?: "primary" | "secondary";
  action: "book" | "trial";
  pageSlug: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  variant = "primary",
  action,
  pageSlug,
  children,
  className,
}: Props) {
  const href = ctaUrl(action, pageSlug);
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-150 whitespace-nowrap";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md"
      : "bg-tint text-primary hover:bg-tint/70 border border-transparent";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={cn(base, styles, className)}
    >
      {children}
    </a>
  );
}

export { Link };
