"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Star,
  Users,
  ShieldCheck,
  Clock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { FoodListing } from "@/lib/types";
import { getListingById, getRelatedListings } from "@/lib/data/listings";
import { getUserListingById } from "@/lib/user-listings";
import { formatPrice, formatRelativeDate, formatTimeUntil, freshnessFraction } from "@/lib/format";
import FreshnessRing from "@/components/FreshnessRing";
import FoodCard from "@/components/FoodCard";

export default function ListingDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const [listing, setListing] = useState<FoodListing | null | undefined>(undefined);
  const [activeImage, setActiveImage] = useState(0);
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    const staticListing = getListingById(id);
    if (staticListing) {
      setListing(staticListing);
      return;
    }
    const userListing = getUserListingById(id);
    setListing(userListing || null);
  }, [id]);

  if (listing === undefined) {
    return <div className="container-page py-16 text-center text-sm text-paper-500">Loading listing…</div>;
  }

  if (listing === null) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-paper-900">Listing not found</h1>
        <p className="mt-2 text-sm text-paper-600">It may have been picked up already or removed by the donor.</p>
        <Link href="/explore" className="btn-primary mt-6 inline-flex">Browse other listings</Link>
      </div>
    );
  }

  const related = getRelatedListings(listing, 4);
  const fraction = freshnessFraction(listing.postedAt, listing.pickupEnd);
  const avgRating =
    listing.reviews.length > 0
      ? listing.reviews.reduce((sum, r) => sum + r.rating, 0) / listing.reviews.length
      : listing.donor.rating;

  return (
    <div className="container-page py-8">
      <button onClick={() => router.back()} className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-paper-600 hover:text-harvest-700">
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-paper-100">
            <Image src={listing.images[activeImage]} alt={listing.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" priority />
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-harvest-700 shadow-sm">
              {listing.category}
            </span>
          </div>
          {listing.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {listing.images.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                    i === activeImage ? "ring-harvest-600" : "ring-transparent"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}

          {/* Overview */}
          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-paper-900">Description &amp; overview</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-paper-700">{listing.fullDescription}</p>
            {listing.dietaryTags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {listing.dietaryTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-harvest-50 px-3 py-1 text-xs font-medium text-harvest-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Specifications */}
          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-paper-900">Key information</h2>
            <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {listing.specifications.map((spec) => (
                <div key={spec.label} className="card-surface p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-paper-500">{spec.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-paper-900">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Reviews */}
          <section className="mt-8">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-xl font-semibold text-paper-900">Reviews &amp; ratings</h2>
              <span className="flex items-center gap-1 rounded-full bg-turmeric-50 px-2.5 py-1 text-xs font-semibold text-turmeric-700">
                <Star className="h-3.5 w-3.5 fill-turmeric-500 text-turmeric-500" /> {avgRating.toFixed(1)} · {listing.reviews.length} review{listing.reviews.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="mt-4 space-y-4">
              {listing.reviews.length === 0 ? (
                <p className="text-sm text-paper-500">No reviews yet for this donor's recent listings.</p>
              ) : (
                listing.reviews.map((review) => (
                  <div key={review.id} className="card-surface p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-paper-900">{review.author}</p>
                      <span className="flex items-center gap-1 text-xs font-semibold text-turmeric-600">
                        <Star className="h-3.5 w-3.5 fill-turmeric-500 text-turmeric-500" /> {review.rating}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-paper-600">{review.comment}</p>
                    <p className="mt-1.5 text-xs text-paper-400">{formatRelativeDate(review.date)}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="card-surface sticky top-24 p-5">
            <h1 className="font-display text-2xl font-semibold leading-snug text-paper-900">{listing.title}</h1>
            <p className="mt-2 text-sm text-paper-600">{listing.description}</p>

            <div className="mt-4 flex items-center gap-3 border-y border-paper-100 py-4">
              <FreshnessRing fraction={fraction} pickupEnd={listing.pickupEnd} size={56} />
              <div>
                <p className="text-sm font-semibold text-paper-900">Pickup closes in {formatTimeUntil(listing.pickupEnd)}</p>
                <p className="text-xs text-paper-500">Posted {formatRelativeDate(listing.postedAt)}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-1.5 text-paper-700">
                <MapPin className="h-4 w-4 text-harvest-600" /> {listing.area}, {listing.city}
              </div>
              <div className="flex items-center gap-1.5 text-paper-700">
                <Users className="h-4 w-4 text-harvest-600" /> {listing.servings} servings
              </div>
              <div className="flex items-center gap-1.5 text-paper-700">
                <Clock className="h-4 w-4 text-harvest-600" /> Pickup window open
              </div>
              <div className="flex items-center gap-1.5 font-bold text-harvest-700">
                {formatPrice(listing.price)}
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-paper-50 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-harvest-600 text-sm font-bold text-white">
                  {listing.donor.avatarInitial}
                </span>
                <div>
                  <p className="flex items-center gap-1 text-sm font-semibold text-paper-900">
                    {listing.donor.name}
                    {listing.donor.verified && <ShieldCheck className="h-4 w-4 text-harvest-600" />}
                  </p>
                  <p className="text-xs text-paper-500">
                    {listing.donor.type} · {listing.donor.rating.toFixed(1)}★ ({listing.donor.reviewCount})
                  </p>
                </div>
              </div>
            </div>

            {reserved ? (
              <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-harvest-50 px-4 py-3 text-sm font-semibold text-harvest-700">
                <CheckCircle2 className="h-4 w-4" /> Reserved — see you at pickup!
              </div>
            ) : (
              <button onClick={() => setReserved(true)} className="btn-primary mt-5 w-full justify-center">
                Reserve for pickup
              </button>
            )}
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-paper-900">Related listings</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <FoodCard key={r.id} listing={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
