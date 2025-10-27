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
      gradient: 'from-primary to-primary/80',
    },
    {
      id: 2,
      title: 'Бесплатная доставка от 3000 ₽',
      description: 'Доставим букет в любую точку города совершенно бесплатно',
      badge: 'Популярное',
      icon: 'Truck',
      gradient: 'from-secondary to-secondary/80',
    },
    {
      id: 3,
      title: 'Акция на букеты из роз',
      description: 'При покупке 2 букетов — третий в подарок',
      badge: '-30%',
      icon: 'Sparkles',
      gradient: 'from-accent to-accent/80',
    },
  ];

  return (
    <section id="promotions" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">🎁 Акции</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">Выгодные предложения для наших клиентов</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="hover-lift fade-in border-0 shadow-2xl overflow-hidden group glow-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${promo.gradient} text-white p-8 relative overflow-hidden`}>
                  <Badge className="absolute top-4 right-4 bg-white/30 backdrop-blur text-white border-0 text-sm px-3 py-1 font-bold">
                    {promo.badge}
                  </Badge>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={promo.icon as any} size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{promo.title}</h3>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <Icon name={promo.icon as any} size={160} />
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-muted-foreground mb-6 text-base">{promo.description}</p>
                  <Button variant="outline" className="w-full border-2 hover:bg-primary/5">
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