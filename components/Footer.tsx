import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, UtensilsCrossed } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-paper-200 bg-white">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-harvest-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-harvest-600 text-white">
              <UtensilsCrossed className="h-4 w-4" />
            </span>
            SharePlate
          </Link>
          <p className="mt-3 max-w-sm text-sm text-paper-600">
            A place for restaurants, home cooks, and shops across Bangladesh to share extra
            food with neighbors instead of the bin.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-100 text-paper-700 hover:bg-harvest-50 hover:text-harvest-700">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-100 text-paper-700 hover:bg-harvest-50 hover:text-harvest-700">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-100 text-paper-700 hover:bg-harvest-50 hover:text-harvest-700">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-paper-900">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper-600">
            <li><Link href="/explore" className="hover:text-harvest-700">Browse listings</Link></li>
            <li><Link href="/explore?category=Restaurant+Surplus" className="hover:text-harvest-700">Restaurant surplus</Link></li>
            <li><Link href="/explore?category=Bakery+%26+Sweets" className="hover:text-harvest-700">Bakery & sweets</Link></li>
            <li><Link href="/items/add" className="hover:text-harvest-700">Post a listing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-paper-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper-600">
            <li><Link href="/about" className="hover:text-harvest-700">About us</Link></li>
            <li><Link href="/blog" className="hover:text-harvest-700">Blog</Link></li>
            <li><Link href="/help" className="hover:text-harvest-700">Help & FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-harvest-700">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-harvest-700">Privacy & Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-paper-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-paper-600">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-harvest-600" />
              House 12, Road 5, Dhanmondi, Dhaka 1209
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-harvest-600" />
              <a href="tel:+8801700000000" className="hover:text-harvest-700">+880 1700-000000</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-harvest-600" />
              <a href="mailto:hello@shareplate.app" className="hover:text-harvest-700">hello@shareplate.app</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper-200 py-5">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-paper-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SharePlate. All rights reserved.</p>
          <p>Made to keep good food off the bin and on a plate.</p>
        </div>
      </div>
    </footer>
  );
}
