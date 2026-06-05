import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Пилотная программа — лето 2026</p>
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Не догонять, а предвосхищать</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Мы формируем первую группу: три компании среднего бизнеса, реальная инфраструктура, реальные результаты.
            Ответ в течение 24 часов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Подать заявку в пилот
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              vp@slempartners.ru
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}