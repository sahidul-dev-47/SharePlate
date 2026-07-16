"use client";

import Link from "next/link";
import Image from "next/image";
import { LayoutList, Eye, Trash2, PlusCircle } from "lucide-react";
import { useUserListings } from "@/lib/user-listings";
import { formatPrice, formatRelativeDate } from "@/lib/format";

export default function ManageItemsPage() {
  const { listings, hydrated, deleteListing } = useUserListings();

  return (
    <div className="container-page py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-harvest-600 text-white">
            <LayoutList className="h-5 w-5" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-semibold text-paper-900">Manage your listings</h1>
            <p className="text-sm text-paper-600">Everything you've posted from this browser.</p>
          </div>
        </div>
        <Link href="/items/add" className="btn-primary">
          <PlusCircle className="h-4 w-4" /> Post new item
        </Link>
      </div>

      {!hydrated ? (
        <div className="mt-8 space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton h-24 w-full rounded-card" />
          ))}
        </div>
      ) : listings.length === 0 ? (
        <div className="mt-10 rounded-card border border-dashed border-paper-300 bg-white py-16 text-center">
          <p className="text-sm font-semibold text-paper-800">You haven't posted anything yet.</p>
          <p className="mt-1 text-sm text-paper-500">Listings you add will show up here for you to manage.</p>
          <Link href="/items/add" className="btn-primary mt-5 inline-flex">Post your first item</Link>
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-card border border-paper-200 bg-white">
          <div className="hidden grid-cols-[80px_1.6fr_0.8fr_0.8fr_0.8fr_auto] gap-4 border-b border-paper-200 bg-paper-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-paper-500 md:grid">
            <span>Photo</span>
            <span>Listing</span>
            <span>Category</span>
            <span>Price</span>
            <span>Posted</span>
            <span className="text-right">Actions</span>
          </div>
          <ul className="divide-y divide-paper-100">
            {listings.map((listing) => (
              <li key={listing.id} className="grid grid-cols-1 items-center gap-4 px-5 py-4 md:grid-cols-[80px_1.6fr_0.8fr_0.8fr_0.8fr_auto]">
                <div className="relative hidden h-14 w-16 overflow-hidden rounded-lg bg-paper-100 md:block">
                  <Image src={listing.images[0]} alt={listing.title} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <p className="line-clamp-1 text-sm font-semibold text-paper-900">{listing.title}</p>
                  <p className="line-clamp-1 text-xs text-paper-500">{listing.area}, {listing.city}</p>
                </div>
                <span className="text-sm text-paper-700">{listing.category}</span>
                <span className="text-sm font-semibold text-harvest-700">{formatPrice(listing.price)}</span>
                <span className="text-xs text-paper-500">{formatRelativeDate(listing.postedAt)}</span>
                <div className="flex items-center justify-start gap-2 md:justify-end">
                  <Link href={`/listings/${listing.id}`} className="btn-secondary !px-3 !py-1.5 !text-xs">
                    <Eye className="h-3.5 w-3.5" /> View
                  </Link>
                  <button
                    onClick={() => deleteListing(listing.id)}
                    className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
