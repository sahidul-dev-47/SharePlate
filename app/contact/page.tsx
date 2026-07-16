"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    setSent(true);
  }

  return (
    <div className="container-page py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-semibold text-paper-900">Get in touch</h1>
        <p className="mt-2 text-sm text-paper-600">
          Questions, partnership ideas, or something not working right — we read every message.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="card-surface flex items-start gap-3 p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-harvest-600" />
            <div>
              <p className="text-sm font-semibold text-paper-900">Office</p>
              <p className="text-sm text-paper-600">House 12, Road 5, Dhanmondi, Dhaka 1209, Bangladesh</p>
            </div>
          </div>
          <div className="card-surface flex items-start gap-3 p-5">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-harvest-600" />
            <div>
              <p className="text-sm font-semibold text-paper-900">Phone</p>
              <a href="tel:+8801700000000" className="text-sm text-paper-600 hover:text-harvest-700">+880 1700-000000</a>
            </div>
          </div>
          <div className="card-surface flex items-start gap-3 p-5">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-harvest-600" />
            <div>
              <p className="text-sm font-semibold text-paper-900">Email</p>
              <a href="mailto:hello@shareplate.app" className="text-sm text-paper-600 hover:text-harvest-700">hello@shareplate.app</a>
            </div>
          </div>
        </div>

        <div className="card-surface p-6">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-harvest-600" />
              <p className="font-display text-lg font-semibold text-paper-900">Message sent</p>
              <p className="text-sm text-paper-600">Thanks for reaching out — we'll reply within a couple of days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="label-field">Name</label>
                <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your name" />
                {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="label-field">Email</label>
                <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="you@example.com" />
                {errors.email && <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="label-field">Message</label>
                <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field" placeholder="How can we help?" />
                {errors.message && <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="h-4 w-4" /> Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
