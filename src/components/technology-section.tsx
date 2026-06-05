import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function TechnologySection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">
            Стратегия, а не ретроспектива
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compliance и требования регулятора — это необходимость, но недостаточная. Мы отвечаем на другой вопрос.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glow-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                <Icon name="FileClock" size={28} />
                <span className="font-semibold text-lg">Традиционный аудит</span>
              </div>
              <p className="text-2xl font-bold text-card-foreground mb-4 leading-snug">
                «Соответствуем ли мы требованиям?»
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Compliance — это ретроспектива. Он фиксирует прошлое и проверяет соответствие чек-листу.
              </p>
            </CardContent>
          </Card>

          <Card className="glow-border border-primary/40">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Icon name="ShieldAlert" size={28} />
                <span className="font-semibold text-lg">Подход SLEM</span>
              </div>
              <p className="text-2xl font-bold text-card-foreground mb-4 leading-snug">
                «Что уничтожит наш бизнес за одну ночь — и защищено ли это?»
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Стратегия — это ответ на то, что происходит сейчас. Мы строим безопасность как часть
                бизнес-стратегии.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Безопасность данных клиентов — это бизнес-этика. Компания, которая берёт ответственность за данные,
            строит доверие. <span className="text-foreground font-semibold">Доверие — актив, который невозможно
            купить, но легко потерять.</span> Клиенты выбирают. Инвесторы оценивают. Партнёры проверяют.
          </p>
        </div>
      </div>
    </section>
  )
}
