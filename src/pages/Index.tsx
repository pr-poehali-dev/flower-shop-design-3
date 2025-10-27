import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import PromotionsSection from '@/components/PromotionsSection';
import DeliverySection from '@/components/DeliverySection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const products: Product[] = [
    {
      id: 1,
      name: 'Нежный рассвет',
      category: 'bouquet',
      price: '3500 ₽',
      image: 'https://cdn.poehali.dev/projects/ef4c65bd-c7ce-43c3-b3a8-d7ed088c9c67/files/11388d13-4893-4edb-86c1-546952e59185.jpg',
      description: 'Букет из розовых и белых роз в нежной упаковке',
    },
    {
      id: 2,
      name: 'Лавандовый сон',
      category: 'composition',
      price: '4200 ₽',
      image: 'https://cdn.poehali.dev/projects/ef4c65bd-c7ce-43c3-b3a8-d7ed088c9c67/files/df95c7a3-d7d0-415b-b6e9-9c4e3842d5a9.jpg',
      description: 'Изысканная композиция с лавандой и гортензией',
    },
    {
      id: 3,
      name: 'Весенняя свежесть',
      category: 'bouquet',
      price: '2900 ₽',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      description: 'Яркий букет из тюльпанов и ирисов',
    },
    {
      id: 4,
      name: 'Королевский сад',
      category: 'composition',
      price: '5500 ₽',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800',
      description: 'Роскошная композиция из пионов в элегантной вазе',
    },
    {
      id: 5,
      name: 'Романтика',
      category: 'bouquet',
      price: '3200 ₽',
      image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800',
      description: 'Классический букет из красных роз',
    },
    {
      id: 6,
      name: 'Полевые травы',
      category: 'composition',
      price: '2500 ₽',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800',
      description: 'Нежная композиция из полевых цветов',
    },
    {
      id: 7,
      name: 'Тропический рай',
      category: 'bouquet',
      price: '4800 ₽',
      image: 'https://images.unsplash.com/photo-1530916541049-5f1365cde1e6?w=800',
      description: 'Экзотический букет с орхидеями и антуриумами',
    },
    {
      id: 8,
      name: 'Осенний вальс',
      category: 'composition',
      price: '3900 ₽',
      image: 'https://images.unsplash.com/photo-1544376664-80b17f9c0eb9?w=800',
      description: 'Композиция в теплых осенних тонах',
    },
    {
      id: 9,
      name: 'Белоснежная мечта',
      category: 'bouquet',
      price: '4500 ₽',
      image: 'https://images.unsplash.com/photo-1535024966336-f48a0d3a4c23?w=800',
      description: 'Элегантный букет из белых роз и эустом',
    },
    {
      id: 10,
      name: 'Солнечный день',
      category: 'bouquet',
      price: '3100 ₽',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      description: 'Жизнерадостный букет из желтых гербер и подсолнухов',
    },
    {
      id: 11,
      name: 'Сиреневый туман',
      category: 'composition',
      price: '4700 ₽',
      image: 'https://images.unsplash.com/photo-1478118895115-b6c1e1c65a5d?w=800',
      description: 'Утонченная композиция в сиреневых тонах',
    },
    {
      id: 12,
      name: 'Летний сад',
      category: 'bouquet',
      price: '2800 ₽',
      image: 'https://images.unsplash.com/photo-1501597483149-4d1d3b0e4c3d?w=800',
      description: 'Разноцветный букет из садовых цветов',
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

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        toast({
          title: 'Товар уже в корзине',
          description: `Количество "${product.name}" увеличено`,
        });
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        toast({
          title: 'Добавлено в корзину',
          description: product.name,
        });
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({
      title: 'Товар удален',
      description: 'Товар удален из корзины',
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast({
      title: 'Корзина очищена',
      description: 'Все товары удалены из корзины',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        cartItems={cartItems}
        onRemoveCartItem={handleRemoveFromCart}
        onUpdateCartQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
      <HeroSection products={products} scrollToSection={scrollToSection} />
      <CatalogSection products={products} onAddToCart={handleAddToCart} />
      <PromotionsSection />
      <DeliverySection />
      <AboutSection />
      <ReviewsSection reviews={reviews} />
      <FAQSection />
      <SubscriptionSection />
      <ContactsSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
