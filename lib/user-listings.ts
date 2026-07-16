"use client";

import { useCallback, useEffect, useState } from "react";
import { FoodListing, ListingCategory } from "@/lib/types";

const STORAGE_KEY = "shareplate:user-listings";
const EVENT_NAME = "shareplate:user-listings-changed";

export interface NewListingInput {
  title: string;
  description: string;
  fullDescription: string;
  category: ListingCategory;
  servings: number;
  price: number;
  area: string;
  city: string;
  imageUrl?: string;
  pickupHours: number; // how many hours from now the pickup window stays open
  authorName: string;
}

function readAll(): FoodListing[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as FoodListing[];
  } catch {
    return [];
  }
}

function writeAll(listings: FoodListing[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
  window.dispatchEvent(new Event(EVENT_NAME));
}

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&h=700&q=80";

function isValidImageUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;
  return (
    trimmed.startsWith("/") ||
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  );
}

export function createListing(input: NewListingInput): FoodListing {
  const now = Date.now();
  const safeImage = isValidImageUrl(input.imageUrl ?? "")
    ? (input.imageUrl as string).trim()
    : FALLBACK_IMG;

  const listing: FoodListing = {
    id: `user-${now}-${Math.random().toString(36).slice(2, 8)}`,
    title: input.title,
    description: input.description,
    fullDescription: input.fullDescription,
    images: [safeImage],
    category: input.category,
    donor: {
      name: input.authorName || "You",
      type: "Individual",
      rating: 5,
      reviewCount: 0,
      verified: false,
      avatarInitial: (input.authorName || "Y").charAt(0).toUpperCase(),
    },
    area: input.area,
    city: input.city,
    servings: input.servings,
    price: input.price,
    postedAt: new Date(now).toISOString(),
    pickupStart: new Date(now).toISOString(),
    pickupEnd: new Date(now + input.pickupHours * 60 * 60 * 1000).toISOString(),
    dietaryTags: [],
    status: "available",
    specifications: [
      { label: "Servings", value: `${input.servings}` },
      { label: "Posted by", value: input.authorName || "You" },
    ],
    reviews: [],
  };
  const all = readAll();
  writeAll([listing, ...all]);
  return listing;
}

export function deleteListing(id: string) {
  const all = readAll().filter((l) => l.id !== id);
  writeAll(all);
}

export function getUserListingById(id: string): FoodListing | undefined {
  return readAll().find((l) => l.id === id);
}

export function useUserListings() {
  const [listings, setListings] = useState<FoodListing[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    setListings(readAll());
  }, []);

  useEffect(() => {
    refresh();
    setHydrated(true);
    window.addEventListener(EVENT_NAME, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(EVENT_NAME, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  return { listings, hydrated, refresh, deleteListing: (id: string) => { deleteListing(id); refresh(); } };
}