"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { LISTINGS, CATEGORIES, CITIES } from "@/lib/data/listings";
import FoodCard from "@/components/FoodCard";
import CardSkeleton from "@/components/CardSkeleton";
import { ListingCategory } from "@/lib/types";

type SortOption = "newest" | "ending-soon" | "price-low" | "price-high" | "rating";

const PAGE_SIZE = 8;

export default function ExploreClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState<string>(searchParams.get("category") || "All");
  const [city, setCity] = useState<string>(searchParams.get("city") || "All");
  const [freeOnly, setFreeOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query, category, city, freeOnly, sort]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "All") params.set("category", category);
    if (city !== "All") params.set("city", city);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, city]);

  const filtered = useMemo(() => {
    let results = LISTINGS.filter((l) => l.status === "available");

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      results = results.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          l.category.toLowerCase().includes(q) ||
          l.area.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q)
      );
    }
    if (category !== "All") {
      results = results.filter((l) => l.category === (category as ListingCategory));
    }
    if (city !== "All") {
      results = results.filter((l) => l.city === city);
    }
    if (freeOnly) {
      results = results.filter((l) => l.price === 0);
    }

    switch (sort) {
      case "ending-soon":
        results = [...results].sort((a, b) => new Date(a.pickupEnd).getTime() - new Date(b.pickupEnd).getTime());
        break;
      case "price-low":
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results = [...results].sort((a, b) => b.donor.rating - a.donor.rating);
        break;
      default:
        results = [...results].sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
    }

    return results;
  }, [query, category, city, freeOnly, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setCity("All");
    setFreeOnly(false);
    setSort("newest");
  }

  return (
    <div className="container-page py-10">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-semibold text-paper-900">Explore listings</h1>
        <p className="mt-1 text-sm text-paper-600">
          {loading ? "Loading listings…" : `${filtered.length} listing${filtered.length === 1 ? "" : "s"} available right now`}
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by dish, area, or donor…"
            className="input-field pl-10"
            aria-label="Search listings"
          />
        </div>
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="btn-secondary lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>

        <div className={`${filtersOpen ? "grid" : "hidden"} grid-cols-2 gap-2 sm:grid-cols-4 lg:flex lg:gap-2`}>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field lg:w-48">
            <option value="All">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="input-field lg:w-40">
            <option value="All">All cities</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)} className="input-field lg:w-44">
            <option value="newest">Newest first</option>
            <option value="ending-soon">Ending soon</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="rating">Top rated donors</option>
          </select>
          <label className="input-field flex items-center gap-2 lg:w-32">
            <input type="checkbox" checked={freeOnly} onChange={(e) => setFreeOnly(e.target.checked)} className="h-4 w-4 accent-harvest-600" />
            Free only
          </label>
        </div>
      </div>

      {(query || category !== "All" || city !== "All" || freeOnly) && (
        <button onClick={resetFilters} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-harvest-700 hover:underline">
          <X className="h-3.5 w-3.5" /> Clear all filters
        </button>
      )}

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          Array.from({ length: PAGE_SIZE }).map((_, i) => <CardSkeleton key={i} />)
        ) : pageItems.length > 0 ? (
          pageItems.map((listing) => <FoodCard key={listing.id} listing={listing} />)
        ) : (
          <div className="col-span-full rounded-card border border-dashed border-paper-300 bg-white py-16 text-center">
            <p className="text-sm font-semibold text-paper-800">No listings match those filters.</p>
            <p className="mt-1 text-sm text-paper-500">Try widening your search or clearing filters.</p>
            <button onClick={resetFilters} className="btn-secondary mt-4">Clear filters</button>
          </div>
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-1.5">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="btn-secondary !px-3 !py-1.5 disabled:opacity-40"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`h-9 w-9 rounded-full text-sm font-semibold transition-colors ${
                page === i + 1 ? "bg-harvest-600 text-white" : "text-paper-700 hover:bg-paper-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="btn-secondary !px-3 !py-1.5 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
