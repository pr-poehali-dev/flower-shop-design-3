import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface HeroSectionProps {
  products: Product[];
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ products, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative pt-32 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in space-y-8">
            <Badge className="gradient-bg text-white border-0 px-6 py-2 text-sm font-medium glow-effect">
              ✨ Доставка за 2 часа по всему городу
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="gradient-text">Цветы</span>
              <br />
              для особенных
              <br />
              <span className="gradient-text">моментов</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Создаём авторские букеты и композиции из свежих цветов. Каждый день радуем наших клиентов красотой и
              качеством 🌸
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('catalog')} 
                className="gap-2 h-14 px-8 text-lg gradient-bg border-0 hover:scale-105 transition-transform"
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('contacts')}
                className="h-14 px-8 text-lg border-2 hover:bg-primary/10"
              >
                Связаться с нами
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">1000+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">видов цветов</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in relative">
            <div className="absolute -inset-4 gradient-bg opacity-20 blur-2xl rounded-3xl"></div>
            <Carousel className="w-full relative">
              <CarouselContent>
                {products.slice(0, 3).map((product, index) => (
                  <CarouselItem key={product.id}>
                    <Card className="border-0 shadow-2xl overflow-hidden hover-lift glass-effect relative group">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <Badge className="absolute top-4 right-4 gradient-bg text-white border-0 px-4 py-1">
                          Хит продаж
                        </Badge>
                      </div>
                      <CardContent className="p-6 bg-white/90 backdrop-blur">
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold gradient-text">{product.price}</span>
                          <Button className="gap-2 gradient-bg border-0 hover:scale-105 transition-transform">
                            Заказать
                            <Icon name="ShoppingCart" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="glass-effect border-0" />
              <CarouselNext className="glass-effect border-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
