"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="w-full max-w-sm">
      <div className="rounded-2xl border border-[#1e1e1e] bg-[#111] p-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <p className="text-[10px] font-bold tracking-widest text-[#c9932c] uppercase">
            Luxury Auto Vehicles
          </p>
          <p className="mt-1 text-2xl font-bold tracking-tight text-white">
            LAV Motors
          </p>
          <p className="mt-2 text-sm text-[#666]">Admin Portal</p>
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#888] mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder:text-[#555] outline-none transition-colors focus:border-[#c9932c]/50 focus:ring-1 focus:ring-[#c9932c]/20"
              placeholder="admin@lavmotors.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#888] mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder:text-[#555] outline-none transition-colors focus:border-[#c9932c]/50 focus:ring-1 focus:ring-[#c9932c]/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-[#c9932c] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e] disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
