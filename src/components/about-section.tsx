import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const team = [
  {
    name: "Владимир Петухов",
    role: "CEO и основатель",
    note: "Стратегический партнёр РТУ МИРЭА",
  },
  {
    name: "Александр Ноев",
    role: "Стратегический партнёр",
    note: "Заведующий кафедрой КБ-4 РТУ МИРЭА",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Команда</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы строим безопасность вместе с вами, потому что кибербезопасность — это часть бизнес-стратегии.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <Card key={i} className="glow-border slide-up" style={{ animationDelay: `${i * 0.12}s` }}>
              <CardContent className="p-8 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Icon name="UserRound" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
