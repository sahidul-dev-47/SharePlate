"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, UserPlus, UtensilsCrossed } from "lucide-react";
import { signUp, signIn } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [formError, setFormError] = useState("");

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    else if (password.length < 6) next.password = "Use at least 6 characters.";
    if (confirmPassword !== password) next.confirmPassword = "Passwords don't match.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setFormError("");
    setLoading(true);
    const { error } = await signUp.email({ name, email, password });
    setLoading(false);

    if (error) {
      setFormError(error.message || "Could not create an account with those details.");
      return;
    }
    router.push("/explore");
    router.refresh();
  }

  async function handleGoogleSignUp() {
    setFormError("");
    setGoogleLoading(true);
    const { error } = await signIn.social({
      provider: "google",
      callbackURL: "/explore",
    });
    setGoogleLoading(false);

    if (error) {
      setFormError(error.message || "Could not sign up with Google.");
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
        <h1 className="mt-6 font-display text-2xl font-semibold text-paper-900">Create your account</h1>
        <p className="mt-1 text-sm text-paper-600">Join to post surplus food or reserve a plate nearby.</p>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={googleLoading || loading}
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

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-paper-200" />
          <span className="text-xs font-medium uppercase tracking-wide text-paper-400">or</span>
          <div className="h-px flex-1 bg-paper-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="label-field">Full name</label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-400" />
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahim Uddin"
                className="input-field pl-10"
                autoComplete="name"
              />
            </div>
            {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
          </div>

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
            {errors.email && <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>}
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
                placeholder="At least 6 characters"
                className="input-field pl-10"
                autoComplete="new-password"
              />
            </div>
            {errors.password && <p className="mt-1 text-xs font-medium text-red-600">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="label-field">Confirm password</label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-400" />
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                className="input-field pl-10"
                autoComplete="new-password"
              />
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs font-medium text-red-600">{errors.confirmPassword}</p>}
          </div>

          {formError && <p className="text-sm font-medium text-red-600">{formError}</p>}

          <button type="submit" disabled={loading || googleLoading} className="btn-primary w-full justify-center">
            <UserPlus className="h-4 w-4" /> {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-paper-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-harvest-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}