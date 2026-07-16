"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { unsplash, FOOD_IMAGES } from "@/lib/images";
import { CATEGORIES } from "@/lib/data/listings";

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/explore?${params.toString()}`);
  }

  return (
    <section className="relative flex min-h-[62vh] items-center overflow-hidden bg-harvest-900 py-14 sm:min-h-[65vh]">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <Image
          src={unsplash(FOOD_IMAGES.community[9], 1600, 1000)}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-harvest-900 via-harvest-900/90 to-harvest-900/60" />
      </div>

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center rounded-full bg-turmeric-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-turmeric-300">
            Extra food, new home — same evening
          </span>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The biryani your neighbor cooked too much of shouldn&apos;t end up in the bin.
          </h1>
          <p className="mt-4 max-w-lg text-base text-harvest-100 sm:text-lg">
            SharePlate connects restaurants, home cooks, bakeries, and grocers with surplus
            food to people nearby — posted in minutes, picked up within the hour.
          </p>

          <form onSubmit={handleSearch} className="mt-7 flex max-w-md gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search biryani, bakery, area..."
                className="w-full rounded-full border-0 bg-white py-3 pl-10 pr-3 text-sm text-paper-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-turmeric-400"
              />
            </div>
            <button type="submit" className="btn-accent !px-5">
              Search
            </button>
          </form>

          <div className="mt-5 flex flex-wrap gap-2">
            {CATEGORIES.slice(0, 4).map((c) => (
              <a
                key={c.name}
                href={`/explore?category=${encodeURIComponent(c.name)}`}
                className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/15"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden aspect-square w-full max-w-md justify-self-end lg:block">
          <div className="absolute right-8 top-0 h-3/5 w-3/5 overflow-hidden rounded-card shadow-2xl ring-4 ring-white/10">
            <Image src={unsplash(FOOD_IMAGES.riceAndCurry[0], 700, 700)} alt="Fresh biryani shared on SharePlate" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 h-3/5 w-3/5 overflow-hidden rounded-card shadow-2xl ring-4 ring-white/10">
            <Image src={unsplash(FOOD_IMAGES.bakery[0], 700, 700)} alt="Bakery surplus shared on SharePlate" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 flex items-end justify-center pb-2">
            <span className="flex items-center gap-1 rounded-full bg-turmeric-400 px-4 py-2 text-xs font-bold text-paper-900 shadow-xl">
              Live near you <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
