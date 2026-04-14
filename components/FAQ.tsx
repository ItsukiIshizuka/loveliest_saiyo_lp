import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    value: 'q1',
    q: '美容師免許がなくても応募できますか？',
    a: '募集職種はアイリスト（まつげエクステ施術者）のため、美容師免許が必須となります。免許をお持ちの方であれば、未経験・新卒・ブランクがあっても歓迎しています。',
  },
  {
    value: 'q2',
    q: '未経験でも本当に大丈夫ですか？',
    a: 'はい、大丈夫です。1〜3ヶ月の個別カリキュラムを完備しています。練習も営業時間内に行えるので、自宅で練習する負担はありません。技術をしっかり身につけてからデビューできます。',
  },
  {
    value: 'q3',
    q: 'フレックスとは具体的にどういう働き方ですか？',
    a: '営業時間（8:30〜20:30）の中で、出退勤の時間を自由に設定できます。予約も自分で調整可能なので、育児や家事、趣味のスケジュールに合わせて働けます。週の勤務日数も応相談です。',
  },
  {
    value: 'q4',
    q: 'ペットは何匹まで連れてこられますか？',
    a: '専用の待機スペースをご用意しています。頭数については事前にご相談ください。なお、猫ちゃんはオーナーのアレルギーのため不可となっています。また、面接時にペットを連れてきていただき、相性確認をさせていただきます。',
  },
  {
    value: 'q5',
    q: '社会保険はありますか？',
    a: 'はい、社会保険を完備しています（健康保険・厚生年金・雇用保険）。安心して長く働ける環境を整えています。',
  },
  {
    value: 'q6',
    q: '歩合制度の詳細を教えてください。',
    a: '月の売上が60万円以上になると、売上の40%が歩合として還元されます。リピーター中心の高単価サロンのため、安定した売上が見込みやすい環境です。オーナー自身が複数メニューを担当できるため、セットメニューのお客様も多く単価も安定しています。',
  },
  {
    value: 'q7',
    q: 'サロン見学はできますか？',
    a: 'もちろんです！実際の雰囲気を確認してから応募・判断していただけます。お電話（080-2562-8508）またはLINE（準備中）からお気軽にご連絡ください。',
  },
  {
    value: 'q8',
    q: '応募方法を教えてください。',
    a: 'まずはお気軽にお電話（080-2562-8508）またはLINE（準備中）でご連絡ください。サロン見学も随時受け付けております。応募書類等の詳細はお問い合わせ後にご案内します。',
  },
]

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            よくあるご質問
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-sm mx-auto">
            不明な点はお電話でも気軽にご質問ください。
          </p>
        </div>

        {/* アコーディオン */}
        <div className="reveal reveal-stagger-2">
          <Accordion multiple className="divide-y divide-border rounded-2xl bg-card shadow-sm ring-1 ring-border overflow-hidden">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-0">
                <AccordionTrigger className="px-5 py-4 font-body text-sm font-medium text-foreground hover:text-primary hover:no-underline transition-colors rounded-none">
                  <span className="text-left pr-4">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  <div className="font-body text-sm text-muted-foreground leading-[1.9] pb-4">
                    {faq.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
