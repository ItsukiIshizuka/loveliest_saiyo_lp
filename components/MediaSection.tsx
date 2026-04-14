'use client'

import { useState, useEffect, useCallback } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/led_datsumo_loveliest_abiko'

const galleryItems = [
  {
    label: 'サロン内部',
    sub: 'プライベート個室',
  },
  {
    label: '施術スペース',
    sub: '清潔感のある環境',
  },
  {
    label: 'ペット待機スペース',
    sub: '専用エリア完備',
  },
  {
    label: 'ラウンジ・休憩エリア',
    sub: 'リラックスできる空間',
  },
] as const

type GalleryItem = (typeof galleryItems)[number]

export default function MediaSection() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const close = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, close])

  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: 'var(--blush)' }}
      aria-labelledby="media-title"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Gallery
          </p>
          <h2
            id="media-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            サロンの雰囲気
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
            <span className="whitespace-nowrap">清潔感のある完全個室で、</span>
            <span className="whitespace-nowrap">落ち着いて働ける環境を整えています。</span>
          </p>
        </div>

        {/* 画像グリッド（プレースホルダー） */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-stagger-${i + 1}`}
            >
              <div
                className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[3/4] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                onClick={() => setSelected(item)}
                role="button"
                aria-label={`${item.label}を拡大表示`}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected(item) }}
              >
                {/* プレースホルダー */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--pearl)] to-[var(--blush)] flex flex-col items-center justify-center gap-2 p-3">
                  <svg viewBox="0 0 24 24" className="size-8 stroke-current fill-none stroke-1 text-primary/30" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <p className="font-body text-[10px] text-center text-muted-foreground leading-tight">
                    {item.label}
                  </p>
                </div>
                {/* ラベルオーバーレイ */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/25 to-transparent px-3 py-2.5">
                  <p className="font-body text-[10px] text-white/70">{item.sub}</p>
                  <p className="font-display text-xs text-white">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram誘導 */}
        <div className="reveal reveal-stagger-1 text-center">
          <p className="font-body text-sm text-muted-foreground mb-4">
            <span className="whitespace-nowrap">サロンの最新情報は</span>
            <span className="whitespace-nowrap">Instagramで発信中</span>
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2.5 border border-primary/30 text-primary font-body font-medium text-sm px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-200"
            aria-label="InstagramでLoveliestをフォローする（新しいタブで開きます）"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @led_datsumo_loveliest_abiko
          </a>
        </div>
      </div>

      {/* ライトボックスモーダル（プレースホルダー） */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.label}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={close}
            aria-label="閉じる"
          >
            <svg viewBox="0 0 24 24" className="size-8 stroke-current fill-none stroke-2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--pearl)] to-[var(--blush)]"
            style={{ aspectRatio: '4/3' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="size-16 stroke-current fill-none stroke-1 text-primary/20" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <p className="font-body text-sm text-muted-foreground">画像準備中</p>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-5 py-4">
              <p className="font-body text-xs text-white/70 mb-0.5">{selected.sub}</p>
              <p className="font-display text-sm text-white">{selected.label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
