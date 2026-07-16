"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LISTINGS } from "@/lib/data/listings";
import FoodCard from "@/components/FoodCard";
import CardSkeleton from "@/components/CardSkeleton";

export default function FeaturedListings() {
  const [loading, setLoading] = useState(true);
  const featured = LISTINGS.slice(0, 8);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-turmeric-600">Fresh right now</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-paper-900">
              Just posted near you
            </h2>
          </div>
          <Link href="/explore" className="hidden text-sm font-semibold text-harvest-700 hover:underline sm:block">
            See all listings →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
            : featured.map((listing) => <FoodCard key={listing.id} listing={listing} />)}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/explore" className="btn-primary">
            See all listings
          </Link>
        </div>
      </div>
    </section>
  );
}
