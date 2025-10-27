import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4">Доставка</h2>
          <p className="text-xl text-muted-foreground">Быстро и бережно доставим цветы в любую точку города</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: 'Clock',
              title: 'Экспресс-доставка',
              description: 'Доставим букет за 2 часа в любую точку города',
            },
            {
              icon: 'MapPin',
              title: 'По всему городу',
              description: 'Работаем во всех районах без исключения',
            },
            {
              icon: 'Heart',
              title: 'Бережная упаковка',
              description: 'Каждый букет надёжно упакован для транспортировки',
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-center p-8 hover-lift fade-in border-0 shadow-lg bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Icon name={item.icon as any} size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 max-w-3xl mx-auto border-0 shadow-lg bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="flex items-start gap-4">
            <Icon name="Info" size={24} className="text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Условия доставки</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Бесплатная доставка при заказе от 3000 ₽</li>
                <li>• Стоимость доставки по городу — 300 ₽</li>
                <li>• Доставка в пригород — от 500 ₽</li>
                <li>• Экспресс-доставка (в течение 2 часов) — 600 ₽</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DeliverySection;
