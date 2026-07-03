import { createFileRoute, notFound } from "@tanstack/react-router";
import { ComparisonArticle, comparisonHead } from "@/components/comparison-article";
import { SiteShell } from "@/components/site-shell";
import { EmptyState } from "@/components/empty-state";
import { getComparison, COMPARISONS } from "@/data/comparisons";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const data = getComparison(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData }) =>
    loaderData
      ? comparisonHead(loaderData.data)
      : { meta: [{ title: "Comparison not found" }] },
  component: ComparisonRoute,
  notFoundComponent: NotFound,
});

function ComparisonRoute() {
  const { data } = Route.useLoaderData();
  return <ComparisonArticle data={data} />;
}

function NotFound() {
  return (
    <SiteShell>
      <div className="container-page py-20">
        <EmptyState
          title="That comparison doesn't exist"
          description="It may have been renamed. Here's the current list."
          action={
            <div className="flex flex-wrap justify-center gap-2">
              {COMPARISONS.map((c) => (
                <Link
                  key={c.slug}
                  to="/blog/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-lg bg-tint px-3 py-1.5 text-sm font-[600] text-primary hover:bg-tint/70"
                >
                  vs {c.competitor}
                </Link>
              ))}
            </div>
          }
        />
      </div>
    </SiteShell>
  );
}
