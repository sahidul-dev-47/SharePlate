"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PackagePlus } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { createListing } from "@/lib/user-listings";
import { CATEGORIES, CITIES } from "@/lib/data/listings";
import { ListingCategory } from "@/lib/types";

export default function AddItemPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [category, setCategory] = useState<ListingCategory>("Home Cooked");
  const [servings, setServings] = useState(4);
  const [price, setPrice] = useState(0);
  const [area, setArea] = useState("");
  const [city, setCity] = useState(CITIES[0]);
  const [pickupHours, setPickupHours] = useState(3);
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!title.trim()) next.title = "Title is required.";
    if (!description.trim()) next.description = "Short description is required.";
    if (!fullDescription.trim()) next.fullDescription = "Full description is required.";
    if (!area.trim()) next.area = "Pickup area is required.";
    if (servings < 1) next.servings = "Servings must be at least 1.";
    if (price < 0) next.price = "Price can't be negative.";
    if (pickupHours < 1) next.pickupHours = "Pickup window must be at least 1 hour.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    createListing({
      title,
      description,
      fullDescription,
      category,
      servings,
      price,
      area,
      city,
      imageUrl,
      pickupHours,
      authorName: session?.user?.name || "You",
    });
    setSubmitted(true);
    setTimeout(() => router.push("/items/manage"), 900);
  }

  return (
    <div className="container-page max-w-2xl py-10">
      <div className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-harvest-600 text-white">
          <PackagePlus className="h-5 w-5" />
        </span>
        <div>
          <h1 className="font-display text-2xl font-semibold text-paper-900">Post surplus food</h1>
          <p className="text-sm text-paper-600">Takes under two minutes. Your listing goes live immediately.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card-surface mt-6 space-y-5 p-6" noValidate>
        <div>
          <label htmlFor="title" className="label-field">Title</label>
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" placeholder="e.g. Chicken Khichuri — 10 servings extra" />
          {errors.title && <p className="mt-1 text-xs font-medium text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="label-field">Short description</label>
          <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="input-field" placeholder="One line that shows up on the listing card" />
          {errors.description && <p className="mt-1 text-xs font-medium text-red-600">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="fullDescription" className="label-field">Full description</label>
          <textarea id="fullDescription" value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} rows={4} className="input-field" placeholder="What is it, when was it made, any allergens or dietary notes?" />
          {errors.fullDescription && <p className="mt-1 text-xs font-medium text-red-600">{errors.fullDescription}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="label-field">Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value as ListingCategory)} className="input-field">
              {CATEGORIES.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="servings" className="label-field">Servings</label>
            <input id="servings" type="number" min={1} value={servings} onChange={(e) => setServings(Number(e.target.value))} className="input-field" />
            {errors.servings && <p className="mt-1 text-xs font-medium text-red-600">{errors.servings}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="label-field">Price (Tk, 0 = free)</label>
            <input id="price" type="number" min={0} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="input-field" />
            {errors.price && <p className="mt-1 text-xs font-medium text-red-600">{errors.price}</p>}
          </div>
          <div>
            <label htmlFor="pickupHours" className="label-field">Pickup window (hours)</label>
            <input id="pickupHours" type="number" min={1} value={pickupHours} onChange={(e) => setPickupHours(Number(e.target.value))} className="input-field" />
            {errors.pickupHours && <p className="mt-1 text-xs font-medium text-red-600">{errors.pickupHours}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="area" className="label-field">Pickup area</label>
            <input id="area" value={area} onChange={(e) => setArea(e.target.value)} className="input-field" placeholder="e.g. Dhanmondi 27" />
            {errors.area && <p className="mt-1 text-xs font-medium text-red-600">{errors.area}</p>}
          </div>
          <div>
            <label htmlFor="city" className="label-field">City</label>
            <select id="city" value={city} onChange={(e) => setCity(e.target.value)} className="input-field">
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="label-field">Image URL (optional)</label>
          <input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="input-field" placeholder="https://images.unsplash.com/..." />
          <p className="mt-1 text-xs text-paper-500">Leave blank to use a default food photo.</p>
        </div>

        {submitted && (
          <p className="rounded-lg bg-harvest-50 px-4 py-3 text-sm font-semibold text-harvest-700">
            Listing posted! Redirecting to your listings…
          </p>
        )}

        <button type="submit" className="btn-primary w-full justify-center">
          Submit listing
        </button>
      </form>
    </div>
  );
}
