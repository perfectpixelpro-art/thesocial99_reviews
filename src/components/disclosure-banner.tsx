import { Info } from "lucide-react";
import { SITE } from "@/data/site";

export function DisclosureBanner() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground">
      <Info size={18} className="mt-0.5 flex-none text-primary" />
      <p>
        <span className="font-[650] text-ink">
          This site is operated by {SITE.parentBrand}.
        </span>{" "}
        {SITE.disclosure}
      </p>
    </div>
  );
}
