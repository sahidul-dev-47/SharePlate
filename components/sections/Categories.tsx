import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data/listings";
import { unsplash, FOOD_IMAGES } from "@/lib/images";

const CATEGORY_IMAGES: Record<string, string> = {
  "Restaurant Surplus": unsplash(FOOD_IMAGES.riceAndCurry[3], 500, 500),
  "Home Cooked": unsplash(FOOD_IMAGES.riceAndCurry[7], 500, 500),
  "Bakery & Sweets": unsplash(FOOD_IMAGES.bakery[2], 500, 500),
  "Grocery & Pantry": unsplash(FOOD_IMAGES.produce[8], 500, 500),
  "Event Leftovers": unsplash(FOOD_IMAGES.riceAndCurry[11], 500, 500),
};

export default function Categories() {
  return (
    <section className="container-page py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-turmeric-600">Browse by source</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-paper-900">
            Where the surplus comes from
          </h2>
        </div>
        <Link href="/explore" className="hidden text-sm font-semibold text-harvest-700 hover:underline sm:block">
          See all listings →
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CATEGORIES.map((c) => (
          <Link
            key={c.name}
            href={`/explore?category=${encodeURIComponent(c.name)}`}
            className="card-surface group overflow-hidden"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={CATEGORY_IMAGES[c.name]}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-sm font-semibold text-white">
                {c.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
