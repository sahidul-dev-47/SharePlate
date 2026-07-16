"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section className="bg-turmeric-50 py-16">
      <div className="container-page">
        <div className="card-surface mx-auto flex max-w-3xl flex-col items-center gap-5 p-8 text-center sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-turmeric-100 text-turmeric-600">
            <Mail className="h-6 w-6" />
          </span>
          <h2 className="font-display text-2xl font-semibold text-paper-900 sm:text-3xl">
            Get a nearby-listings digest
          </h2>
          <p className="max-w-md text-sm text-paper-600">
            Once a week, a short email with fresh surplus listings posted in your city.
            No spam, unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="flex items-center gap-2 rounded-full bg-harvest-50 px-4 py-2.5 text-sm font-semibold text-harvest-700">
              <CheckCircle2 className="h-4 w-4" /> You&apos;re subscribed — welcome aboard!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-field flex-1"
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary shrink-0">
                Subscribe
              </button>
            </form>
          )}
          {error && <p className="text-xs font-medium text-red-600">{error}</p>}
        </div>
      </div>
    </section>
  );
}
