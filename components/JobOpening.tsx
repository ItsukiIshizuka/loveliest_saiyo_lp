import { Check } from 'lucide-react'
import BookingButton from '@/components/BookingButton'

const conditions = [
  '美容師免許をお持ちの方',
  '未経験・新卒・ブランクOK',
  '人と丁寧に関わることが好きな方',
  'ペットが好きな方（猫アレルギーの方はご相談ください）',
]

export default function JobOpening() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{ background: 'var(--blush)' }}
      aria-labelledby="job-opening-title"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* 左: 募集メイン */}
          <div className="flex-1">
            {/* NOW HIRING バッジ */}
            <div className="reveal reveal-stagger-1 inline-flex items-center gap-2.5 mb-7">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full size-2.5 bg-primary" />
              </span>
              <span className="font-body text-[11px] tracking-[0.25em] uppercase text-primary">
                Now Hiring
              </span>
            </div>

            {/* 見出し */}
            <h2
              id="job-opening-title"
              className="reveal reveal-stagger-2 font-display text-foreground leading-[1.2] tracking-tight mb-3"
            >
              <span className="block text-[2.2rem] sm:text-[3rem] lg:text-[3.2rem]">
                アイリスト
              </span>
              <span className="block font-body text-base sm:text-lg text-muted-foreground tracking-normal mt-1">
                まつげエクステ・トータルビューティー
              </span>
            </h2>

            {/* 免許要件バッジ */}
            <div className="reveal reveal-stagger-3 inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-body font-medium px-4 py-2 rounded-full mt-4 mb-8">
              <svg viewBox="0 0 24 24" className="size-3.5 stroke-current fill-none stroke-2 shrink-0" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              美容師免許 必須
            </div>

            {/* 応募ボタン */}
            <div className="reveal reveal-stagger-4">
              <BookingButton className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-md shadow-primary/10 whitespace-nowrap">
                <svg viewBox="0 0 24 24" className="size-5 shrink-0 stroke-current fill-none stroke-2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                応募・サロン見学を申し込む
              </BookingButton>
            </div>
          </div>

          {/* 右: 応募条件 */}
          <div className="reveal reveal-stagger-2 flex-1 lg:max-w-sm">
            <div className="rounded-2xl border border-primary/10 bg-card shadow-sm p-6 sm:p-8">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-5">
                応募条件
              </p>
              <ul className="space-y-4">
                {conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center size-5 rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" aria-hidden />
                    </span>
                    <span className="font-body text-sm text-foreground leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-border/60">
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  雇用形態
                </p>
                <div className="flex flex-wrap gap-2">
                  {['正社員', 'パート・アルバイト'].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-body font-medium bg-secondary border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
