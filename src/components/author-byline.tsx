interface Props {
  name: string;
  role: string;
  lastUpdated: string; // YYYY-MM-DD
  methodology?: string;
}

function fmt(date: string) {
  try {
    return new Date(date + "T00:00:00Z").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return date;
  }
}

export function AuthorByline({ name, role, lastUpdated, methodology }: Props) {
  return (
    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-tint text-[11px] font-[650] text-primary">
            {name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </span>
          <span className="text-ink font-[600]">{name}</span>
          <span className="text-muted-foreground">· {role}</span>
        </span>
        <span aria-hidden className="text-border">
          •
        </span>
        <time dateTime={lastUpdated}>
          Last updated <span className="text-ink font-[600]">{fmt(lastUpdated)}</span>
        </time>
      </div>
      {methodology && (
        <p className="text-xs italic text-muted-foreground">{methodology}</p>
      )}
    </div>
  );
}
