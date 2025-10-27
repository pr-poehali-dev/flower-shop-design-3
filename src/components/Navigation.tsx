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
    <nav className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold gradient-text">✿ Florа</h1>
          <div className="hidden lg:flex gap-8">
            {['home', 'catalog', 'promotions', 'delivery', 'about', 'reviews', 'faq', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-semibold transition-all relative group ${
                  activeSection === section ? 'text-primary' : 'text-foreground/80 hover:text-primary'
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
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex hover:bg-primary/10">
              <Icon name="Phone" size={18} />
              <span className="font-semibold">+7 (999) 123-45-67</span>
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