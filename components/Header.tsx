'use client'

import { useEffect, useState } from 'react'
import { MapPin, Phone } from 'lucide-react'
import BookingButton from '@/components/BookingButton'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgb(0,0,0,0.06)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex flex-col leading-none select-none">
          <span className="font-elegant text-[1.6rem] tracking-widest text-primary italic">
            Loveliest
          </span>
          <span className="font-body text-[9px] tracking-[0.22em] text-muted-foreground uppercase mt-0.5">
            Total Beauty / 求人
          </span>
        </div>

        {/* Right: access + tel + 応募 */}
        <nav className="flex items-center gap-3">
          <a
            href="tel:08025628508"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            aria-label="電話でお問い合わせ: 080-2562-8508"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden />
            <span>080-2562-8508</span>
          </a>
          <a
            href="#access"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-white/70 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground text-xs sm:text-sm font-body font-medium px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full shadow-sm transition-colors whitespace-nowrap"
            aria-label="アクセスへ"
          >
            <MapPin className="size-3 sm:size-3.5 shrink-0" aria-hidden />
            <span>アクセス</span>
          </a>
          <BookingButton className="btn-cta inline-flex items-center gap-1 sm:gap-1.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary text-xs sm:text-sm font-body font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm shadow-primary/10 whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="size-3.5 sm:size-4 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>応募する</span>
          </BookingButton>
        </nav>
      </div>
    </header>
  )
}
