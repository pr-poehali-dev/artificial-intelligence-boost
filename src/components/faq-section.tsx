import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Чем вы отличаетесь от обычного аудита по требованиям регулятора?",
      answer:
        "Compliance отвечает на вопрос «соответствуем ли мы требованиям?» — это ретроспектива. Мы отвечаем на другой: «что уничтожит наш бизнес за одну ночь — и защищено ли это?» Безопасность мы строим как часть бизнес-стратегии.",
    },
    {
      question: "Вы продаёте оборудование или ПО вендоров?",
      answer:
        "Нет. Мы независимая стратегическая консалтинговая компания. Мы не продаём коробки и не получаем комиссию от вендоров — работаем только в ваших интересах.",
    },
    {
      question: "Как именно вы оцениваете риск?",
      answer:
        "Количественно. Было: «высокий/средний/низкий». Стало: «риск на 18 млн руб. с вероятностью 23%». Risk Register формируется по формуле R = P × I × E с финансовыми оценками.",
    },
    {
      question: "Что я получу по итогам аудита?",
      answer:
        "GRC-аудит из 5 этапов: реестр активов, threat-профиль, Risk Register с финансовыми оценками, Risk Treatment Plan с roadmap и финальную отчётность — Executive Report плюс Technical Report с chain of custody.",
    },
    {
      question: "Что такое SLEMGUARD?",
      answer:
        "Концепция системы защиты API-периметра на основе машинного обучения и Zero Trust. Анализирует API-запросы в реальном времени, а ML-детекция выявляет аномалии до того, как атака реализуется. В разработке.",
    },
    {
      question: "Как попасть в пилотную программу?",
      answer:
        "Летом 2026 мы формируем первую группу — три компании среднего бизнеса с реальной инфраструктурой и реальными результатами. Оставьте заявку, ответ в течение 24 часов.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на ключевые вопросы о подходе SLEM, GRC-аудите и пилотной программе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}