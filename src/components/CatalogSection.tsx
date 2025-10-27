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
}

const CatalogSection = ({ products }: CatalogSectionProps) => {
  return (
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
  );
};

export default CatalogSection;
