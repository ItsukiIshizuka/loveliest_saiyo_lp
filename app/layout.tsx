import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "アイリスト求人 千葉・我孫子 | Loveliest（ラヴリエスト）",
  description:
    "千葉県我孫子市のトータルビューティーサロン Loveliest（ラヴリエスト）のアイリスト求人。愛犬と一緒に出勤OK・完全フレックス制・歩合制度あり。未経験・新卒・ブランク歓迎。サロン見学随時受付中。",
  keywords: [
    "アイリスト",
    "求人",
    "我孫子",
    "千葉",
    "ペット同伴",
    "フレックス",
    "美容師",
    "まつげエクステ",
    "トータルビューティー",
    "サロン",
    "未経験",
  ],
  openGraph: {
    title: "アイリスト求人 千葉・我孫子 | Loveliest",
    description:
      "愛犬と一緒に働けるサロン。完全フレックス制・歩合あり・未経験OK。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
