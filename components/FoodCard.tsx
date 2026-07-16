import Image from "next/image";
import Link from "next/link";
import { FoodListing } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import FreshnessRing from "@/components/FreshnessRing";
import { freshnessFraction } from "@/lib/format";
import { MapPin, Star, Users } from "lucide-react";

export default function FoodCard({ listing }: { listing: FoodListing }) {
  const fraction = freshnessFraction(listing.postedAt, listing.pickupEnd);

  return (
    <Link
      href={`/listings/${listing.id}`}
      className="card-surface group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-100">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-harvest-700 shadow-sm">
          {listing.category}
        </span>
        <div className="absolute right-2 top-2 rounded-full bg-white/95 p-0.5 shadow-sm">
          <FreshnessRing fraction={fraction} pickupEnd={listing.pickupEnd} size={48} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-paper-900">
          {listing.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-paper-600">{listing.description}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-paper-600">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-harvest-600" />
            {listing.area}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-harvest-600" />
            {listing.servings} servings
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-turmeric-400 text-turmeric-400" />
            {listing.donor.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-paper-100 pt-3">
          <span className="text-sm font-bold text-harvest-700">{formatPrice(listing.price)}</span>
          <span className="btn-primary !px-4 !py-1.5 !text-xs">View details</span>
        </div>
      </div>
    </Link>
  );
}
