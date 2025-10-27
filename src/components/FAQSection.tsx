import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Как сделать заказ?',
      answer:
        'Выберите понравившийся букет в каталоге, добавьте его в корзину и оформите заказ. Мы свяжемся с вами для подтверждения деталей доставки.',
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer:
        'Мы принимаем оплату банковскими картами, наличными при получении, а также переводом на расчётный счет для юридических лиц.',
    },
    {
      question: 'Можно ли заказать букет к определённому времени?',
      answer:
        'Да, при оформлении заказа вы можете указать желаемое время доставки. Мы постараемся выполнить ваш заказ точно в срок.',
    },
    {
      question: 'Что делать, если цветы быстро завяли?',
      answer:
        'Мы гарантируем свежесть наших цветов. Если букет завял раньше срока, свяжитесь с нами — мы заменим его или вернём деньги.',
    },
    {
      question: 'Можно ли создать индивидуальный букет?',
      answer:
        'Конечно! Наши флористы создадут уникальный букет по вашим пожеланиям. Просто опишите ваши предпочтения при заказе.',
    },
    {
      question: 'Доставляете ли вы цветы в другие города?',
      answer:
        'На данный момент мы осуществляем доставку только по Москве и ближайшему Подмосkovью. Работаем над расширением географии.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-muted-foreground">Ответы на популярные вопросы наших клиентов</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 shadow-sm bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
