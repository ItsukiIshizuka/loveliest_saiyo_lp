import { Clock, Wallet, GraduationCap, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: Heart,
    title: 'ペット同伴出勤OK',
    body: '専用の待機スペースを完備。勤務中も愛犬と一緒に過ごせます。災害時もすぐ対応できる安心感も。面接時にペット同伴必須（相性確認のため）。※猫ちゃんはアレルギーのため不可。',
    stagger: 'reveal-stagger-1',
  },
  {
    icon: Clock,
    title: '完全フレックス制で自由な働き方',
    body: '営業時間（8:30〜20:30）の中で、出退勤は自由。予約も自分で調整OK。育児・プライベートと両立しやすい、ライフスタイルに合わせた働き方が実現できます。',
    stagger: 'reveal-stagger-2',
  },
  {
    icon: Wallet,
    title: '頑張った分だけ稼げる歩合制度',
    body: '売上60万円以上で40%還元。正社員は月給230,000円、パートは時給1,250円とベースもしっかり。リピーター中心の高単価サロンだから、安定した収入が見込めます。',
    stagger: 'reveal-stagger-3',
  },
  {
    icon: GraduationCap,
    title: '未経験・ブランクOKの充実サポート',
    body: '1〜3ヶ月のカリキュラムを完備。営業時間内に練習できるので自宅練習の負担なし。新卒・ブランクOK。技術をしっかり身につけてからデビューできます。',
    stagger: 'reveal-stagger-4',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 sm:py-32 bg-background" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Why Loveliest
          </p>
          <h2
            id="benefits-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            <span className="whitespace-nowrap">Loveliestで働く</span>
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">４つの魅力</span>
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            <span className="whitespace-nowrap">ペットと過ごせる・自由に働ける・しっかり稼げる。</span>
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">あなたの「こうしたい」を叶える職場がここにあります。</span>
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className={`reveal ${b.stagger}`}>
                <Card className="h-full border-primary/10 hover:border-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-br from-card to-[var(--blush)]/40">
                  <CardContent className="pt-6 pb-6 px-6 flex flex-col gap-4 h-full">
                    <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/8">
                      <Icon className="size-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2 leading-snug">
                        {b.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-[1.9]">
                        {b.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
