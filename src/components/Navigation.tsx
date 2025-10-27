import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Cart from './Cart';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  cartItems: CartItem[];
  onRemoveCartItem: (id: number) => void;
  onUpdateCartQuantity: (id: number, quantity: number) => void;
  onClearCart: () => void;
}

const Navigation = ({
  activeSection,
  scrollToSection,
  cartItems,
  onRemoveCartItem,
  onUpdateCartQuantity,
  onClearCart,
}: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Florа</h1>
          <div className="hidden lg:flex gap-6">
            {['home', 'catalog', 'promotions', 'delivery', 'about', 'reviews', 'faq', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'catalog' && 'Каталог'}
                {section === 'promotions' && 'Акции'}
                {section === 'delivery' && 'Доставка'}
                {section === 'about' && 'О нас'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'faq' && 'FAQ'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex">
              <Icon name="Phone" size={16} />
              <span>+7 (999) 123-45-67</span>
            </Button>
            <Cart
              items={cartItems}
              onRemoveItem={onRemoveCartItem}
              onUpdateQuantity={onUpdateCartQuantity}
              onClearCart={onClearCart}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
