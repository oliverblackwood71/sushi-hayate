"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const user = {
  name: "田中 陽子",
  rank: "目利き",
  level: 3,
  points: 1240,
  currentLevelAt: 800,
  nextLevelAt: 1400,
  nextRank: "達人",
  visits: 8,
  fishermenSupported: 3,
  recentVisits: [
    { date: "2024年12月14日", label: "おまかせコース", points: 80 },
    { date: "2024年11月22日", label: "旬の握りお好み", points: 60 },
    { date: "2024年10月05日", label: "おまかせコース", points: 80 },
  ],
};

const rankLevels = ["初来店", "常連", "目利き", "達人", "颯の番人"];

export default function MypageClient() {
  const [barWidth, setBarWidth] = useState(0);

  const progressPct = Math.round(
    ((user.points - user.currentLevelAt) /
      (user.nextLevelAt - user.currentLevelAt)) *
      100
  );

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(progressPct), 400);
    return () => clearTimeout(t);
  }, [progressPct]);

  return (
    <div className="min-h-screen bg-[#0c0b09] pt-28 pb-20">
      <div className="max-w-sm mx-auto px-6">

        {/* ── 会員証カード ── */}
        <div className="border border-[#c9a84c]/30 p-8 mb-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-5">
            会員証 / Membership
          </p>

          {/* ランク段階インジケーター */}
          <div className="flex gap-1 mb-6">
            {rankLevels.map((r, i) => (
              <div
                key={r}
                className={`h-0.5 flex-1 transition-all duration-700 delay-300 ${
                  i < user.level ? "bg-[#c9a84c]" : "bg-[#c9a84c]/15"
                }`}
              />
            ))}
          </div>

          <h2 className="text-[#f0ebe0] font-serif text-5xl font-light mb-1">
            {user.rank}
          </h2>
          <p className="text-[#8a7f6e] text-sm tracking-widest mb-8">
            {user.name} さん
          </p>

          {/* ポイント */}
          <p className="text-[#c9a84c] text-5xl font-light tracking-wider mb-6">
            {user.points.toLocaleString()}
            <span className="text-sm ml-1.5 tracking-widest">pt</span>
          </p>

          {/* 次レベルまでの進捗 */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-[#8a7f6e] text-[10px] tracking-wider">
                {user.rank}
              </span>
              <span className="text-[#8a7f6e] text-[10px] tracking-wider">
                「{user.nextRank}」まで あと{" "}
                <span className="text-[#c9a84c]">
                  {user.nextLevelAt - user.points}pt
                </span>
              </span>
            </div>
            <div className="h-px bg-[#c9a84c]/15 relative">
              <div
                className="absolute inset-y-0 left-0 bg-[#c9a84c] transition-all duration-1000 ease-out"
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── 貢献 ── */}
        <div className="border border-[#c9a84c]/10 p-8 mb-6">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-6">
            あなたの貢献
          </p>
          <p className="text-[#f0ebe0] font-serif text-2xl font-light leading-loose">
            島根の漁師
            <span className="text-[#c9a84c] text-3xl mx-2 tabular-nums">
              {user.fishermenSupported}
            </span>
            人を支えました。
          </p>
          <p className="text-[#8a7f6e] text-xs leading-loose mt-4">
            {user.visits}回の来店が、島根の海と漁師を守っています。
            <br />
            あなたの「おいしい」が、産地を支えています。
          </p>
        </div>

        {/* ── 来店履歴 ── */}
        <div className="mb-10">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-2">
            来店履歴
          </p>
          {user.recentVisits.map((v, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-4 border-b border-[#c9a84c]/10"
            >
              <div>
                <p className="text-[#f0ebe0] text-sm">{v.label}</p>
                <p className="text-[#8a7f6e] text-xs mt-0.5">{v.date}</p>
              </div>
              <span className="text-[#c9a84c] text-sm tabular-nums">
                +{v.points}pt
              </span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <Link
          href="/#reservation"
          className="block w-full border border-[#c9a84c] text-[#c9a84c] py-4 text-center text-xs tracking-[0.3em] hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300"
        >
          次の来店を予約する →
        </Link>

        <p className="text-center text-[#8a7f6e] text-[10px] tracking-wider mt-8">
          ※ これはデモ画面です。実際の会員データは反映されていません。
        </p>
      </div>
    </div>
  );
}
