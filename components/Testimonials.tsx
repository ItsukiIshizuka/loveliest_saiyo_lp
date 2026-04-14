import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const reviews = [
  {
    initials: 'S.M',
    name: 'スタッフ S.M（アイリスト歴3年）',
    stars: 5,
    body: '愛犬を連れて出勤できるのが何より嬉しいです。離れている時間がストレスだったので、毎日一緒に過ごせるようになって働くのが楽しくなりました。フレックスなので自分のペースで予約を組めて、無理なく続けられています。',
  },
  {
    initials: 'Y.K',
    name: 'スタッフ Y.K（育児中・パート）',
    stars: 5,
    body: '子育てと両立できる職場を探していて、こちらに出会いました。完全フレックスなので保育園の送迎に合わせて出退勤できます。オーナーがとても理解のある方で、無理なく長く続けられています。',
  },
  {
    initials: 'A.T',
    name: 'スタッフ A.T（未経験から入社）',
    stars: 5,
    body: '未経験で入社しましたが、カリキュラムがしっかりしていて安心してデビューできました。練習も営業時間内にできるので、自宅練習の負担がなかったのも助かりました。歩合もあってやりがいを感じています。',
  },
  {
    initials: 'M.H',
    name: 'スタッフ M.H（ブランクありで復帰）',
    stars: 5,
    body: 'ブランクがあって不安でしたが、丁寧にサポートしてもらえました。リピーター様中心のサロンなので落ち着いた環境で施術でき、人間関係のストレスもほとんどありません。長く続けられそうです。',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, var(--blush) 0%, var(--background) 100%)' }}
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Staff Voice
          </p>
          <h2
            id="testimonials-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            スタッフの声
          </h2>
          <div className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground">
            <span className="text-[var(--gold-accent)] text-base" aria-label="星5">
              ★★★★★
            </span>
            <span>Google口コミ 5.0（実際の口コミより）</span>
          </div>
        </div>

        {/* レビューカードグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal reveal-stagger-${(i % 4) + 1}`}
            >
              <Card className="h-full border-primary/10 hover:border-primary/25 hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6 pb-6 px-6 flex flex-col gap-4 h-full">
                  {/* 引用マーク */}
                  <span
                    className="font-elegant text-5xl text-primary/20 leading-none select-none"
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  {/* 星評価 */}
                  <p
                    className="text-[var(--gold-accent)] text-sm -mt-3"
                    aria-label={`${r.stars}点`}
                  >
                    {'★'.repeat(r.stars)}
                  </p>

                  {/* レビュー本文 */}
                  <p className="font-body text-sm text-foreground leading-[1.9] flex-1">
                    {r.body}
                  </p>

                  {/* 投稿者 */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-body">
                        {r.initials}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-body text-xs text-muted-foreground">{r.name}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
