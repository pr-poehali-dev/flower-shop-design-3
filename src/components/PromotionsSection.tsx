import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PromotionsSection = () => {
  const promotions = [
    {
      id: 1,
      title: 'Скидка 15% на первый заказ',
      description: 'Зарегистрируйтесь и получите приветственную скидку',
      badge: 'Новинка',
      icon: 'Gift',
      color: 'bg-primary',
    },
    {
      id: 2,
      title: 'Бесплатная доставка от 3000 ₽',
      description: 'Доставим букет в любую точку города совершенно бесплатно',
      badge: 'Популярное',
      icon: 'Truck',
      color: 'bg-secondary',
    },
    {
      id: 3,
      title: 'Акция на букеты из роз',
      description: 'При покупке 2 букетов — третий в подарок',
      badge: '-30%',
      icon: 'Sparkles',
      color: 'bg-accent',
    },
  ];

  return (
    <section id="promotions" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4">Акции и спецпредложения</h2>
          <p className="text-xl text-muted-foreground">Выгодные предложения для наших клиентов</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="hover-lift fade-in border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`${promo.color} text-white p-6 relative overflow-hidden`}>
                  <Badge className="absolute top-4 right-4 bg-white/20 text-white border-0">
                    {promo.badge}
                  </Badge>
                  <div className="relative z-10">
                    <Icon name={promo.icon as any} size={48} className="mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Icon name={promo.icon as any} size={160} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
