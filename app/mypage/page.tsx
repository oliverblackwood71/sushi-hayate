import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MypageClient from "./MypageClient";

export const metadata: Metadata = {
  title: "マイページ | 鮨 颯",
  description: "来店ポイントと貢献度を確認できる会員ページです。",
};

export default function MypagePage() {
  return (
    <>
      <Header />
      <main>
        <MypageClient />
      </main>
      <Footer />
    </>
  );
}
