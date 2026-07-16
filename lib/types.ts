export type ListingCategory =
  | "Restaurant Surplus"
  | "Home Cooked"
  | "Bakery & Sweets"
  | "Grocery & Pantry"
  | "Event Leftovers";

export type DonorType = "Restaurant" | "Individual" | "Bakery" | "Grocery Store" | "Event Host";

export type ListingStatus = "available" | "reserved" | "picked-up";

export interface Donor {
  name: string;
  type: DonorType;
  rating: number;
  reviewCount: number;
  verified: boolean;
  avatarInitial: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string; // ISO date
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface FoodListing {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  category: ListingCategory;
  donor: Donor;
  area: string;
  city: string;
  servings: number;
  price: number; // 0 = free
  postedAt: string; // ISO datetime
  pickupStart: string; // ISO datetime
  pickupEnd: string; // ISO datetime
  dietaryTags: string[];
  status: ListingStatus;
  specifications: SpecItem[];
  reviews: Review[];
}
