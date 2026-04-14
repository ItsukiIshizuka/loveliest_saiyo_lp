import { Phone } from 'lucide-react'
import BookingButton from '@/components/BookingButton'

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, oklch(0.50 0.085 5) 0%, oklch(0.56 0.09 355) 100%)',
      }}
      aria-labelledby="final-cta-title"
    >
      {/* 装飾 */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-6 text-center">
        <p className="reveal reveal-stagger-1 font-body text-[11px] tracking-[0.22em] uppercase text-white/70 mb-5">
          ご応募・見学受付中
        </p>

        <h2
          id="final-cta-title"
          className="reveal reveal-stagger-2 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-5 leading-[1.25]"
        >
          <span className="whitespace-nowrap">まずは、</span>
          <br className="sm:hidden" />
          <span className="whitespace-nowrap">サロン見学へ。</span>
        </h2>

        <p className="reveal reveal-stagger-3 font-body text-base text-white/80 leading-relaxed mb-10 max-w-md mx-auto">
          <span className="whitespace-nowrap">「合うかどうか不安…」という方も大歓迎。</span>
          <br />
          <span className="whitespace-nowrap">見学だけでも、</span>
          <span className="whitespace-nowrap">お気軽にどうぞ。</span>
          <br />
          <span className="whitespace-nowrap">お電話またはLINEで</span>
          <span className="whitespace-nowrap">お問い合わせください。</span>
        </p>

        <div className="reveal reveal-stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookingButton className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-lg px-10 py-5 rounded-full w-full sm:w-auto shadow-md shadow-primary/10 whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="size-6 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            応募・見学申込はこちら
          </BookingButton>
          <a
            href="tel:08025628508"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-body text-sm"
            aria-label="電話でお問い合わせ: 080-2562-8508"
          >
            <Phone className="size-4" aria-hidden />
            080-2562-8508
          </a>
        </div>

        <p className="reveal reveal-stagger-4 font-body text-xs text-white/50 mt-8">
          ご不明な点はお気軽にご連絡ください。
        </p>
      </div>
    </section>
  )
}
