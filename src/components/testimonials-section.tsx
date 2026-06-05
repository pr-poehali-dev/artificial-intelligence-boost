import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const roles = [
  {
    icon: "Briefcase",
    role: "Собственнику",
    content:
      "Карта бизнеса и риск в деньгах: «риск на 18 млн руб. с вероятностью 23%». Стратегический план — что закрыть за 30 дней, квартал и год.",
  },
  {
    icon: "Code2",
    role: "CTO",
    content:
      "Реестр всех активов, API-эндпоинтов и зависимостей, threat-модель под архитектуру и технический roadmap с конкретными мерами.",
  },
  {
    icon: "ShieldCheck",
    role: "CISO",
    content:
      "DRL-матрица с приоритизацией по вектору атаки, аргументация для бюджетных запросов и аудиторское заключение для регулятора.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Результат для каждой роли</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Один аудит — три уровня ценности. Каждый получает то, что нужно ему для решений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((item, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <p className="font-semibold text-lg text-primary">{item.role}</p>
                </div>
                <p className="text-card-foreground leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}