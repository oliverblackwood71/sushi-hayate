"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const rankLevels = ["初来店", "常連", "目利き", "達人", "颯の番人"];

const rankThresholds = [0, 300, 800, 1400, 2200];

function getRankInfo(points: number) {
  let level = 0;
  for (let i = rankThresholds.length - 1; i >= 0; i--) {
    if (points >= rankThresholds[i]) {
      level = i;
      break;
    }
  }
  const rank = rankLevels[level];
  const nextRank = rankLevels[level + 1] ?? null;
  const currentLevelAt = rankThresholds[level];
  const nextLevelAt = rankThresholds[level + 1] ?? null;
  return { level, rank, nextRank, currentLevelAt, nextLevelAt };
}

type Visit = {
  id: string;
  label: string;
  points_earned: number;
  visited_at: string;
};

type Profile = {
  name: string;
  points: number;
  visits: number;
};

export default function MypageClient() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [recentVisits, setRecentVisits] = useState<Visit[]>([]);
  const [barWidth, setBarWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("name, points, visits")
        .eq("id", user.id)
        .single();

      const { data: visitsData } = await supabase
        .from("visits")
        .select("id, label, points_earned, visited_at")
        .eq("user_id", user.id)
        .order("visited_at", { ascending: false })
        .limit(5);

      setProfile(profileData ?? { name: user.email ?? "", points: 0, visits: 0 });
      setRecentVisits(visitsData ?? []);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    if (!profile) return;
    const { currentLevelAt, nextLevelAt } = getRankInfo(profile.points);
    if (!nextLevelAt) {
      setBarWidth(100);
      return;
    }
    const pct = Math.round(
      ((profile.points - currentLevelAt) / (nextLevelAt - currentLevelAt)) * 100
    );
    const t = setTimeout(() => setBarWidth(pct), 400);
    return () => clearTimeout(t);
  }, [profile]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0b09] flex items-center justify-center">
        <p className="text-[#a09880] text-xs tracking-widest">読み込み中...</p>
      </div>
    );
  }

  if (!profile) return null;

  const { level, rank, nextRank, currentLevelAt, nextLevelAt } = getRankInfo(profile.points);
  const fishermenSupported = Math.max(1, Math.floor(profile.visits / 3));

  return (
    <div className="min-h-screen bg-[#0c0b09] pt-28 pb-20">
      <div className="max-w-sm mx-auto px-6">

        {/* 会員証カード */}
        <div className="border border-[#c9a84c]/30 p-8 mb-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-5">
            会員証 / Membership
          </p>

          <div className="flex gap-1 mb-6">
            {rankLevels.map((r, i) => (
              <div
                key={r}
                className={`h-0.5 flex-1 transition-all duration-700 delay-300 ${
                  i <= level ? "bg-[#c9a84c]" : "bg-[#c9a84c]/15"
                }`}
              />
            ))}
          </div>

          <h2 className="text-[#f0ebe0] font-serif text-5xl font-light mb-1">
            {rank}
          </h2>
          <p className="text-[#8a7f6e] text-sm tracking-widest mb-8">
            {profile.name} さん
          </p>

          <p className="text-[#c9a84c] text-5xl font-light tracking-wider mb-6">
            {profile.points.toLocaleString()}
            <span className="text-sm ml-1.5 tracking-widest">pt</span>
          </p>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[#8a7f6e] text-[10px] tracking-wider">
                {rank}
              </span>
              {nextRank && nextLevelAt ? (
                <span className="text-[#8a7f6e] text-[10px] tracking-wider">
                  「{nextRank}」まで あと{" "}
                  <span className="text-[#c9a84c]">
                    {nextLevelAt - profile.points}pt
                  </span>
                </span>
              ) : (
                <span className="text-[#c9a84c] text-[10px] tracking-wider">
                  最高ランク達成
                </span>
              )}
            </div>
            <div className="h-px bg-[#c9a84c]/15 relative">
              <div
                className="absolute inset-y-0 left-0 bg-[#c9a84c] transition-all duration-1000 ease-out"
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </div>
        </div>

        {/* 貢献 */}
        <div className="border border-[#c9a84c]/10 p-8 mb-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-6">
            あなたの貢献
          </p>
          <p className="text-[#f0ebe0] font-serif text-2xl font-light leading-loose">
            島根の漁師
            <span className="text-[#c9a84c] text-3xl mx-2 tabular-nums">
              {fishermenSupported}
            </span>
            人を支えました。
          </p>
          <p className="text-[#8a7f6e] text-xs leading-loose mt-4">
            {profile.visits}回の来店が、島根の海と漁師を守っています。
            <br />
            あなたの「おいしい」が、産地を支えています。
          </p>
        </div>

        {/* 来店履歴 */}
        <div className="mb-10">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-2">
            来店履歴
          </p>
          {recentVisits.length === 0 ? (
            <p className="text-[#8a7f6e] text-xs tracking-wide py-6 text-center">
              来店記録はまだありません
            </p>
          ) : (
            recentVisits.map((v) => (
              <div
                key={v.id}
                className="flex items-center justify-between py-4 border-b border-[#c9a84c]/10"
              >
                <div>
                  <p className="text-[#f0ebe0] text-sm">{v.label}</p>
                  <p className="text-[#8a7f6e] text-xs mt-0.5">
                    {new Date(v.visited_at).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <span className="text-[#c9a84c] text-sm tabular-nums">
                  +{v.points_earned}pt
                </span>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <Link
          href="/#reservation"
          className="block w-full border border-[#c9a84c] text-[#c9a84c] py-4 text-center text-xs tracking-[0.3em] hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300 mb-4"
        >
          次の来店を予約する →
        </Link>

        <button
          onClick={handleLogout}
          className="block w-full text-[#8a7f6e] text-[10px] tracking-widest py-3 text-center hover:text-[#f0ebe0] transition-colors"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
