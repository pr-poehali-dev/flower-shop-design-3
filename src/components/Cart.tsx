import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClearCart: () => void;
}

const Cart = ({ items, onRemoveItem, onUpdateQuantity, onClearCart }: CartProps) => {
  const totalPrice = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\D/g, ''));
    return sum + price * item.quantity;
  }, 0);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 relative">
          <Icon name="ShoppingCart" size={18} />
          <span className="hidden sm:inline">Корзина</span>
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Корзина</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Icon name="ShoppingCart" size={64} className="text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">Корзина пуста</p>
            <p className="text-sm text-muted-foreground mt-2">Добавьте товары из каталога</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mt-6">
              {items.map((item) => (
                <Card key={item.id} className="border shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.name}</h4>
                        <p className="text-lg font-bold text-primary mb-2">{item.price}</p>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="h-8 w-8 p-0"
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => onRemoveItem(item.id)}
                            className="ml-auto text-destructive hover:text-destructive"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Итого:</span>
                  <span className="text-primary">{totalPrice.toLocaleString()} ₽</span>
                </div>
                <Button className="w-full gap-2 h-12 text-base">
                  Оформить заказ
                  <Icon name="ArrowRight" size={18} />
                </Button>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={onClearCart}
                >
                  Очистить корзину
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
