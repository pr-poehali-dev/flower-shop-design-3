import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface CatalogSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CatalogSection = ({ products, onAddToCart }: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-20 px-4 bg-muted/30">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover-lift fade-in border-0 shadow-lg bg-white"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-foreground border-0">
                      {product.category === 'bouquet' ? 'Букет' : 'Композиция'}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button size="sm" className="gap-2" onClick={() => onAddToCart(product)}>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter((p) => p.category === 'bouquet')
                .map((product, index) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover-lift fade-in border-0 shadow-lg bg-white"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button size="sm" className="gap-2" onClick={() => onAddToCart(product)}>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter((p) => p.category === 'composition')
                .map((product, index) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover-lift fade-in border-0 shadow-lg bg-white"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative">
                      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Button size="sm" className="gap-2" onClick={() => onAddToCart(product)}>
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
  );
};

export default CatalogSection;
