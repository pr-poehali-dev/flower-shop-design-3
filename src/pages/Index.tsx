import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Нежный рассвет',
      category: 'bouquet',
      price: '3500 ₽',
      image: 'https://cdn.poehali.dev/projects/ef4c65bd-c7ce-43c3-b3a8-d7ed088c9c67/files/11388d13-4893-4edb-86c1-546952e59185.jpg',
      description: 'Букет из розовых и белых роз',
    },
    {
      id: 2,
      name: 'Лавандовый сон',
      category: 'composition',
      price: '4200 ₽',
      image: 'https://cdn.poehali.dev/projects/ef4c65bd-c7ce-43c3-b3a8-d7ed088c9c67/files/df95c7a3-d7d0-415b-b6e9-9c4e3842d5a9.jpg',
      description: 'Композиция с лавандой и гортензией',
    },
    {
      id: 3,
      name: 'Весенняя свежесть',
      category: 'bouquet',
      price: '2900 ₽',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      description: 'Букет из тюльпанов и ирисов',
    },
    {
      id: 4,
      name: 'Королевский сад',
      category: 'composition',
      price: '5500 ₽',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800',
      description: 'Роскошная композиция из пионов',
    },
    {
      id: 5,
      name: 'Романтика',
      category: 'bouquet',
      price: '3200 ₽',
      image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800',
      description: 'Классический букет красных роз',
    },
    {
      id: 6,
      name: 'Полевые травы',
      category: 'composition',
      price: '2500 ₽',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800',
      description: 'Композиция из полевых цветов',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      text: 'Потрясающие букеты! Заказывала для мамы на юбилей, все были в восторге. Цветы свежие, оформление изысканное.',
      date: '15 октября 2024',
    },
    {
      id: 2,
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Доставка точно в срок, букет превзошёл все ожидания. Флористы настоящие мастера своего дела!',
      date: '10 октября 2024',
    },
    {
      id: 3,
      name: 'Мария Иванова',
      rating: 5,
      text: 'Лучший цветочный салон в городе! Всегда свежие цветы, креативные композиции и отличный сервис.',
      date: '5 октября 2024',
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/10">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Florа</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'delivery', 'about', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'about' && 'О нас'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Phone" size={16} />
              <span className="hidden sm:inline">+7 (999) 123-45-67</span>
            </Button>
          </div>
        </div>
      </nav>

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

      <section id="catalog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-5xl font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-muted-foreground">Подберите идеальный букет или композицию</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="bouquet">Букеты</TabsTrigger>
              <TabsTrigger value="composition">Композиции</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover-lift fade-in border-0 shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                      <Badge className="absolute top-4 right-4 bg-white text-foreground">
                        {product.category === 'bouquet' ? 'Букет' : 'Композиция'}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button className="gap-2">
                          <Icon name="ShoppingCart" size={16} />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bouquet">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((p) => p.category === 'bouquet')
                  .map((product, index) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden hover-lift fade-in border-0 shadow-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button className="gap-2">
                            <Icon name="ShoppingCart" size={16} />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="composition">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((p) => p.category === 'composition')
                  .map((product, index) => (
                    <Card
                      key={product.id}
                      className="overflow-hidden hover-lift fade-in border-0 shadow-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button className="gap-2">
                            <Icon name="ShoppingCart" size={16} />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="fade-in">
              <h2 className="text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Florа — это команда профессиональных флористов с многолетним опытом. Мы создаём букеты и композиции,
                которые дарят радость и оставляют незабываемые впечатления.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Каждый день мы работаем с лучшими поставщиками, чтобы предложить вам только свежие и качественные цветы.
                Наша миссия — делать мир красивее, один букет за раз.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Счастливых клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Видов цветов</div>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800"
                alt="О нас"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют тысячи довольных покупателей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="p-6 hover-lift fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="fade-in space-y-6">
              <Card className="p-6 border-0 shadow-lg hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3">
                    <Icon name="Phone" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary rounded-full p-3">
                    <Icon name="Mail" size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@flora-flowers.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-muted rounded-full p-3">
                    <Icon name="MapPin" size={24} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Цветочная, д. 15</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 fade-in border-0 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Textarea placeholder="Сообщение" rows={4} />
                </div>
                <Button className="w-full gap-2">
                  Отправить сообщение
                  <Icon name="Send" size={16} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Florа</h3>
              <p className="text-sm opacity-80">Цветы для особенных моментов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:opacity-100 transition">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('catalog')} className="hover:opacity-100 transition">
                    Каталог
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('delivery')} className="hover:opacity-100 transition">
                    Доставка
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition">
                    О нас
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('reviews')} className="hover:opacity-100 transition">
                    Отзывы
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="hover:opacity-100 transition">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-sm opacity-80">
            <p>© 2024 Florа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
