import { Phone } from 'lucide-react'
import BookingButton from '@/components/BookingButton'

const features = ['フレックス制', 'ペット同伴OK', '歩合制度あり', '未経験歓迎']

export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex items-center overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* プレースホルダー背景（画像準備後に差し替え） */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.93 0.022 10) 0%, oklch(0.89 0.028 355) 55%, oklch(0.85 0.035 5) 100%)',
        }}
        aria-hidden
      />

      {/* 右側装飾（イメージプレースホルダー枠） */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center"
        aria-hidden
      >
        <div className="w-[340px] h-[460px] rounded-3xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center gap-3 text-primary/30">
          <svg viewBox="0 0 24 24" className="size-12 stroke-current fill-none stroke-1" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className="font-body text-xs tracking-widest uppercase">Image Placeholder</span>
        </div>
      </div>

      {/* テキスト可読性のためのオーバーレイ */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255,245,247,0.7) 0%, rgba(255,245,247,0.5) 50%, transparent 100%)',
        }}
        aria-hidden
      />

      {/* テキストコンテンツ */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-14 xl:px-20 py-24 lg:py-32">
        {/* バッジ */}
        <p className="hero-tag flex items-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-7 max-w-full">
          <span className="block h-px w-6 bg-primary shrink-0" aria-hidden />
          <span className="truncate">千葉・我孫子 — トータルビューティーサロン 求人</span>
          <span className="block h-px w-6 bg-primary shrink-0" aria-hidden />
        </p>

        {/* H1 */}
        <h1 className="hero-title font-display text-[2.6rem] sm:text-[3.4rem] lg:text-[3rem] xl:text-[3.6rem] leading-[1.25] tracking-tight text-foreground mb-6">
          <span className="block">
            <span className="whitespace-nowrap">愛犬と一緒に</span>
            <span className="whitespace-nowrap">働けるサロン。</span>
          </span>
          <span className="block text-primary">
            <span className="whitespace-nowrap">自由な働き方で、</span>
            <span className="whitespace-nowrap">しっかり稼ぐ。</span>
          </span>
        </h1>

        {/* サブコピー */}
        <p className="hero-sub font-body text-base sm:text-lg text-muted-foreground leading-[1.9] mb-4">
          <span className="whitespace-nowrap">Loveliestは、</span>
          <span className="whitespace-nowrap">ネイル・まつげ・ヘアを提供する</span>
          <span className="whitespace-nowrap">我孫子市のプライベートサロン。</span>
          <span className="whitespace-nowrap"><strong className="text-foreground font-medium">完全フレックス制</strong>・</span>
          <span className="whitespace-nowrap"><strong className="text-foreground font-medium">ペット同伴OK</strong>・</span>
          <span className="whitespace-nowrap"><strong className="text-foreground font-medium">歩合制度あり</strong>。</span>
          <span className="whitespace-nowrap">頑張った分だけ稼げる環境です。</span>
        </p>

        {/* 特徴ピル */}
        <div className="hero-sub flex flex-wrap gap-2 mb-10">
          {features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-body font-medium bg-white/75 border border-primary/25 text-foreground shadow-sm"
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="hero-cta flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <BookingButton className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-lg px-8 py-4 rounded-full w-full sm:w-auto shadow-md shadow-primary/10 whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="size-6 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            まずは応募・見学申込
          </BookingButton>
          <a
            href="tel:08025628508"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body sm:self-center"
            aria-label="電話でお問い合わせ: 080-2562-8508"
          >
            <Phone className="size-4" aria-hidden />
            080-2562-8508
          </a>
        </div>

        {/* 社会的証明 */}
        <div className="hero-social mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span
              className="flex gap-0.5 text-[var(--gold-accent)]"
              aria-label="Google口コミ星5"
            >
              ★★★★★
            </span>
            <span>Google口コミ 5.0</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden />
          <span>📍 JR我孫子駅 徒歩15分</span>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden />
          <span>🐶 ペット同伴出勤OK</span>
        </div>
      </div>
    </section>
  )
}
