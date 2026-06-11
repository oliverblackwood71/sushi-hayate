"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "signup") {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }
      if (data.user) {
        await supabase.from("profiles").upsert({
          id: data.user.id,
          name: name || email.split("@")[0],
        });
        router.push("/mypage");
        router.refresh();
      }
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        setError("メールアドレスまたはパスワードが正しくありません");
        setLoading(false);
        return;
      }
      router.push("/mypage");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0b09] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link
            href="/"
            className="text-[#f0ebe0] font-serif font-light text-2xl tracking-widest"
          >
            鮨&nbsp;颯
          </Link>
          <p className="text-[#a09880] text-xs tracking-widest mt-3">
            {mode === "login" ? "会員ログイン" : "新規会員登録"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-[#a09880] text-xs tracking-widest mb-2">
                お名前
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="田中 陽子"
                className="w-full bg-transparent border border-[#c9a84c]/30 text-[#f0ebe0] px-4 py-3 text-sm tracking-wide placeholder-[#a09880]/40 focus:outline-none focus:border-[#c9a84c]/70 transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-[#a09880] text-xs tracking-widest mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="w-full bg-transparent border border-[#c9a84c]/30 text-[#f0ebe0] px-4 py-3 text-sm tracking-wide placeholder-[#a09880]/40 focus:outline-none focus:border-[#c9a84c]/70 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[#a09880] text-xs tracking-widest mb-2">
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full bg-transparent border border-[#c9a84c]/30 text-[#f0ebe0] px-4 py-3 text-sm tracking-wide placeholder-[#a09880]/40 focus:outline-none focus:border-[#c9a84c]/70 transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs tracking-wide">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-[#c9a84c]/60 text-[#c9a84c] text-xs tracking-widest py-3 mt-2 hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "処理中..." : mode === "login" ? "ログイン" : "登録する"}
          </button>
        </form>

        <p className="text-center text-[#a09880] text-xs tracking-wide mt-8">
          {mode === "login" ? (
            <>
              会員登録がまだの方は{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-[#c9a84c] hover:underline"
              >
                こちら
              </button>
            </>
          ) : (
            <>
              すでに会員の方は{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#c9a84c] hover:underline"
              >
                ログイン
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
