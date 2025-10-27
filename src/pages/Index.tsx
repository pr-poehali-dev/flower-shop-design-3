import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import DeliverySection from '@/components/DeliverySection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

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
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection products={products} scrollToSection={scrollToSection} />
      <CatalogSection products={products} />
      <DeliverySection />
      <AboutSection />
      <ReviewsSection reviews={reviews} />
      <ContactsSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
