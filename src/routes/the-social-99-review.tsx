import { createFileRoute } from "@tanstack/react-router";
import { ReviewPageView, reviewHead } from "@/components/review-page";

export const Route = createFileRoute("/the-social-99-review")({
  head: () => reviewHead(),
  component: ReviewPageView,
});
