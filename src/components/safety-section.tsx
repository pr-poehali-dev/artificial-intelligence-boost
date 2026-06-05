import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const cycle = [
  { icon: "Search", title: "Аудит генерирует данные", text: "Аудиторская практика собирает данные о реальных уязвимостях клиентов." },
  { icon: "FlaskConical", title: "R&D превращает их в решения", text: "Данные включаются в аналитику при формировании исследований уязвимостей." },
  { icon: "Cpu", title: "Решения усиливают аудит", text: "На основе комплексной аналитики формируется технологическое решение." },
]

export function SafetySection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-accent text-accent-foreground mb-4">R&D-направление</Badge>
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Аудит — не услуга, а источник данных</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Замкнутый цикл: каждый аудит пополняет базу угроз, R&D превращает данные в продукты, продукты усиливают
            аудит. Методология валидирована академически — РТУ МИРЭА, кафедра КБ-4.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cycle.map((item, i) => (
            <Card key={i} className="glow-border slide-up" style={{ animationDelay: `${i * 0.12}s` }}>
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Icon name={item.icon} size={32} />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glow-border border-accent/40">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="text-accent">
                <Icon name="Radar" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-card-foreground font-display">SLEMGUARD</h3>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">В разработке</Badge>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Концепция системы защиты API-периметра на основе машинного обучения и принципа Zero Trust. Система
              анализирует входящие и исходящие API-запросы в реальном времени. ML-детекция выявляет аномалии поведения
              до того, как атака реализуется.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Утечка через API — один из самых незаметных и дорогих векторов. SLEMGUARD делает его видимым.",
                "Контроль над тем, кто и что делает с данными на уровне каждого запроса.",
                "CISO и CTO получают измеримую картину API-трафика — не постфактум, а в реальном времени.",
                "Zero Trust + ML-детекция аномалий поведения в потоке запросов.",
              ].map((t, i) => (
                <div key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-accent mt-1 shrink-0"><Icon name="Check" size={18} /></span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
