import { Suspense } from "react";
import ExploreClient from "@/components/explore/ExploreClient";

export const metadata = {
  title: "Explore listings — SharePlate",
  description: "Search and filter surplus food listings near you by category, city, and price.",
};

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="container-page py-10 text-sm text-paper-500">Loading listings…</div>}>
      <ExploreClient />
    </Suspense>
  );
}
