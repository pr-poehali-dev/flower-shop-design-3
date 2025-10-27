import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (section: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
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
  );
};

export default Footer;
