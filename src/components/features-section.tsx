import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Независимость",
    description: "Мы не продаём коробки и не получаем комиссию от вендоров. Только ваши интересы и объективная картина рисков.",
    icon: "ShieldCheck",
    badge: "Без вендоров",
  },
  {
    title: "Риск в деньгах",
    description: "Было: «высокий/средний/низкий». Стало: «риск на 18 млн руб. с вероятностью 23%». Цифры для решений.",
    icon: "Calculator",
    badge: "Quant",
  },
  {
    title: "Стратегия, не отчёт",
    description: "Compliance отвечает «соответствуем ли мы?». Мы — «что уничтожит бизнес за одну ночь и защищено ли это?».",
    icon: "Target",
    badge: "Strategy",
  },
  {
    title: "GRC-аудит за 5 этапов",
    description: "От инвентаризации активов до Executive Report. Каждый этап даёт собственнику, CTO и CISO готовые решения.",
    icon: "ListChecks",
    badge: "Методология",
  },
  {
    title: "R&D-замкнутый цикл",
    description: "Каждый аудит пополняет базу угроз. Данные идут в исследования и продукты, продукты усиливают аудит.",
    icon: "Atom",
    badge: "R&D",
  },
  {
    title: "Академическая валидация",
    description: "Методология валидирована академически — РТУ МИРЭА, кафедра КБ-4. Наука, а не маркетинг.",
    icon: "GraduationCap",
    badge: "МИРЭА",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему SLEM</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Первая в России компания, которая переводит киберриск в стратегическую бизнес-плоскость
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary">
                    <Icon name={feature.icon} size={32} />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}