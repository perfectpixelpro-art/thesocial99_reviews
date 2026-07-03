import { Check, X } from "lucide-react";

interface Props {
  title: string;
  pros: string[];
  cons: string[];
  tone?: "us" | "them";
}

export function ProsConsBox({ title, pros, cons, tone = "us" }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <h3 className="text-base font-[650] text-ink">
        {title}
        <span
          className={
            "ml-2 rounded-full px-2 py-0.5 text-[10px] font-[650] uppercase tracking-wider " +
            (tone === "us"
              ? "bg-tint text-primary"
              : "bg-surface text-muted-foreground")
          }
        >
          {tone === "us" ? "Our side" : "Their side"}
        </span>
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="text-xs font-[650] uppercase tracking-wider text-success">
            Pros
          </div>
          <ul className="mt-2 space-y-2">
            {pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-ink">
                <Check
                  size={16}
                  className="mt-0.5 flex-none text-success"
                  strokeWidth={2.5}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-[650] uppercase tracking-wider text-muted-foreground">
            Cons
          </div>
          <ul className="mt-2 space-y-2">
            {cons.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <X size={16} className="mt-0.5 flex-none" strokeWidth={2.5} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
