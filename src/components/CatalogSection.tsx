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
    <section id="catalog" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Наш каталог</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">Подберите идеальный букет или композицию из нашей коллекции</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-12 glass-effect border-0">
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
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-3 right-3 glass-effect text-foreground border-0 px-3 py-1">
                      {product.category === 'bouquet' ? 'Букет' : 'Композиция'}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gradient-text">{product.price}</span>
                      <Button size="sm" className="gap-2 gradient-bg border-0 hover:scale-105 transition-transform" onClick={() => onAddToCart(product)}>
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