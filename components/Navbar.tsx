"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, UtensilsCrossed, LogOut, PlusCircle, LayoutList } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";

const PUBLIC_LINKS = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const AUTH_LINKS = [
  { href: "/items/add", label: "Add Item" },
  { href: "/items/manage", label: "Manage Items" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const links = session ? [...PUBLIC_LINKS, ...AUTH_LINKS] : PUBLIC_LINKS;

  async function handleSignOut() {
    await signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-paper-200 bg-paper-50/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-harvest-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-harvest-600 text-white">
            <UtensilsCrossed className="h-4 w-4" />
          </span>
          SharePlate
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-harvest-50 text-harvest-700" : "text-paper-700 hover:bg-paper-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {isPending ? (
            <div className="h-9 w-24 animate-pulse rounded-full bg-paper-200" />
          ) : session ? (
            <div className="flex items-center gap-2">
              <span className="hidden xl:inline text-sm text-paper-600">
                Hi, {session.user.name?.split(" ")[0] || "there"}
              </span>
              <button onClick={handleSignOut} className="btn-secondary !px-4 !py-2">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn-secondary !px-4 !py-2">
                Log in
              </Link>
              <Link href="/register" className="btn-primary !px-4 !py-2">
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-paper-700 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper-200 bg-paper-50 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium ${
                  pathname === link.href ? "bg-harvest-50 text-harvest-700" : "text-paper-700 hover:bg-paper-100"
                }`}
              >
                {link.href === "/items/add" && <PlusCircle className="h-4 w-4" />}
                {link.href === "/items/manage" && <LayoutList className="h-4 w-4" />}
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-paper-200 pt-3">
              {session ? (
                <button onClick={handleSignOut} className="btn-secondary w-full justify-center">
                  <LogOut className="h-4 w-4" /> Sign out
                </button>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)} className="btn-secondary w-full justify-center">
                    Log in
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
