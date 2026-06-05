import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Этап 1 — Инвентаризация активов",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Собственник получает карту бизнеса. CTO — реестр всех активов, сервисов, API-эндпоинтов и зависимостей,
            включая «тёмную» инфраструктуру. CISO — базу для threat modeling.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Реестр активов с классификацией критичности
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выявление «тёмной» инфраструктуры
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Этап 2 — Анализ угроз",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Собственник получает контекстный профиль угроз для своего типа бизнеса. CTO — threat-модель под конкретную
            архитектуру. CISO — DRL-матрицу с приоритизацией по вектору атаки.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Threat-профиль компании
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Карта векторов атаки
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Этап 3 — Количественная оценка риска",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Собственник видит риск в количественных значениях: денежный эквивалент и вероятность атаки. CTO —
            приоритизированный список уязвимостей с финансовым весом. CISO — аргументацию для бюджета.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              «Риск на 18 млн руб. с вероятностью 23%»
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Risk Register по формуле R = P × I × E
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Этап 4 — Меры защиты и приоритизация",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Собственник получает стратегический план: что закрыть за 30 дней, что — в квартал, что — в год. CTO —
            технический roadmap. CISO — план обработки рисков для защиты перед руководством.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Risk Treatment Plan с приоритетами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Roadmap: 30 дней / квартал / год
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Этап 5 — Отчётность",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Собственник получает Executive Summary. CTO — технический отчёт с документацией по каждой уязвимости.
            CISO — аудиторское заключение для регулятора.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Executive Report + Technical Report
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Chain of custody
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">GRC-аудит за 5 этапов</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Каждый этап даёт собственнику, CTO и CISO конкретные результаты для принятия решений — от карты активов
            до аудиторского заключения.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}