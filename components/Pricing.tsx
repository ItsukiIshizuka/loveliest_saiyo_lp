import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import BookingButton from '@/components/BookingButton'

const employmentTypes = [
  {
    name: 'パート・アルバイト',
    nameEn: 'Part Time',
    mainLabel: '時給',
    mainSalary: '1,250',
    mainUnit: '円',
    badge: null,
    features: [
      '勤務時間は自由に設定',
      '社会保険完備',
      '歩合制度あり',
      '社食無料（豆乳パン・毎日）',
    ],
  },
  {
    name: '正社員',
    nameEn: 'Full Time',
    mainLabel: '月給',
    mainSalary: '230,000',
    mainUnit: '円',
    badge: '募集中',
    features: [
      '完全フレックス制',
      '社会保険完備',
      '歩合制度あり',
      '社食無料（豆乳パン・毎日）',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-24 sm:py-32 bg-background" aria-labelledby="salary-title">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Salary &amp; Benefits
          </p>
          <h2
            id="salary-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            <span className="whitespace-nowrap">給与・</span>
            <span className="whitespace-nowrap">福利厚生</span>
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            <span className="whitespace-nowrap">頑張った分だけ正直に反映される仕組み。</span>
            <br />
            <span className="whitespace-nowrap">ベースもしっかり、歩合でさらに稼げます。</span>
          </p>
        </div>

        {/* 雇用形態カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {employmentTypes.map((e, i) => (
            <div key={e.name} className={`reveal reveal-stagger-${i + 1}`}>
              <Card
                className={[
                  'h-full transition-all duration-300',
                  e.badge
                    ? 'border-2 border-primary shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/15'
                    : 'border-primary/15 hover:border-primary/30 hover:shadow-lg',
                ].join(' ')}
              >
                <CardContent className="pt-7 pb-7 px-6 flex flex-col gap-5 h-full">
                  {e.badge && (
                    <Badge className="w-fit bg-primary text-primary-foreground text-xs font-body">
                      {e.badge}
                    </Badge>
                  )}

                  <div>
                    <p className="font-elegant text-sm tracking-widest text-muted-foreground italic mb-0.5">
                      {e.nameEn}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {e.name}
                    </h3>
                  </div>

                  <div className="bg-secondary/60 rounded-xl p-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-body text-xs text-muted-foreground w-14 shrink-0">
                        {e.mainLabel}
                      </span>
                      <span className="font-display text-3xl font-medium text-primary">
                        ¥{e.mainSalary}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        / {e.mainUnit}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {e.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* 歩合制度ハイライト */}
        <div className="reveal reveal-stagger-3 rounded-2xl border border-primary/20 bg-gradient-to-br from-[var(--blush)] to-[var(--pearl)] p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 shrink-0">
              <svg viewBox="0 0 24 24" className="size-6 stroke-primary fill-none stroke-2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
            </div>
            <div>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-1">
                歩合制度
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mb-1">
                売上 60万円以上 → <span className="text-primary">40% 還元</span>
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                頑張った分だけしっかりお給料に反映される仕組みです。
                リピーター中心の高単価サロンだから、安定した歩合が見込めます。
              </p>
            </div>
          </div>
        </div>

        {/* 注意書き + CTA */}
        <div className="reveal reveal-stagger-4 text-center space-y-6">
          <p className="font-body text-xs text-muted-foreground">
            ※ 募集職種はアイリスト（美容師免許必須）です。詳細はお問い合わせください。
          </p>
          <BookingButton className="btn-cta inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm px-8 py-4 rounded-full shadow-md shadow-primary/10 whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="size-5 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            応募・見学申込はこちら
          </BookingButton>
        </div>
      </div>
    </section>
  )
}
