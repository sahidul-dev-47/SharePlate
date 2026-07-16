"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Lock, LogIn, Sparkles, UtensilsCrossed } from "lucide-react";
import { signIn } from "@/lib/auth-client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/explore";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  function validate(): string | null {
    if (!email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email address.";
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  }

  async function performLogin(loginEmail: string, loginPassword: string) {
    setError("");
    const validationError =
      loginEmail === "demo@shareplate.app" ? null : validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    const { error: authError } = await signIn.email({
      email: loginEmail,
      password: loginPassword,
    });
    setLoading(false);
    if (authError) {
      setError(authError.message || "Could not log in with those credentials.");
      return;
    }
    router.push(redirectTo);
    router.refresh();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    performLogin(email, password);
  }

  function handleDemoLogin() {
    setEmail("demo@shareplate.app");
    setPassword("demopass123");
    performLogin("demo@shareplate.app", "demopass123");
  }

  async function handleGoogleLogin() {
    setError("");
    setGoogleLoading(true);
    const { error: authError } = await signIn.social({
      provider: "google",
      callbackURL: redirectTo,
    });
    setGoogleLoading(false);

    if (authError) {
      setError(authError.message || "Could not log in with Google.");
    }
  
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <div className="card-surface w-full max-w-md p-8">
        <div className="flex items-center gap-2 font-display text-lg font-bold text-harvest-700">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-harvest-600 text-white">
            <UtensilsCrossed className="h-4 w-4" />
          </span>
          SharePlate
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold text-paper-900">Welcome back</h1>
        <p className="mt-1 text-sm text-paper-600">Log in to reserve pickups and manage your listings.</p>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading || googleLoading}
          className="btn-secondary mt-6 w-full justify-center gap-2"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {googleLoading ? "Redirecting…" : "Continue with Google"}
        </button>

        <button
          onClick={handleDemoLogin}
          disabled={loading || googleLoading}
          className="btn-accent mt-3 w-full justify-center"
          type="button"
        >
          <Sparkles className="h-4 w-4" /> Try demo login
        </button>

        <div className="my-5 flex items-center gap-3 text-xs font-medium uppercase text-paper-400">
          <span className="h-px flex-1 bg-paper-200" /> or continue with email <span className="h-px flex-1 bg-paper-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="label-field">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-field pl-10"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="label-field">Password</label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field pl-10"
                autoComplete="current-password"
              />
            </div>
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button type="submit" disabled={loading || googleLoading} className="btn-primary w-full justify-center">
            <LogIn className="h-4 w-4" /> {loading ? "Logging in…" : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-paper-600">
          New to SharePlate?{" "}
          <Link href="/register" className="font-semibold text-harvest-700 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="container-page py-16 text-center text-sm text-paper-500">Loading…</div>}>
      <LoginForm />
    </Suspense>
  );
}