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
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Доставка за 2 часа</Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Цветы для особенных моментов
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Создаём авторские букеты и композиции из свежих цветов. Каждый день радуем наших клиентов красотой и
              качеством.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                Смотреть каталог
                <Icon name="ArrowRight" size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="fade-in">
            <Carousel className="w-full">
              <CarouselContent>
                {products.slice(0, 3).map((product) => (
                  <CarouselItem key={product.id}>
                    <Card className="border-0 shadow-2xl overflow-hidden hover-lift">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button className="gap-2">
                            Заказать
                            <Icon name="ShoppingCart" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
