import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SubscriptionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 border-0 shadow-2xl bg-white/90 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Icon name="Mail" size={32} className="text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Подпишитесь на рассылку</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Получайте эксклюзивные предложения, советы по уходу за цветами и первыми узнавайте о новых коллекциях
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Скидка 10% на первый заказ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Специальные предложения для подписчиков</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <span>Полезные статьи о флористике</span>
                </li>
              </ul>
            </div>

            <div className="fade-in">
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="h-12"
                  />
                </div>
                <Button className="w-full h-12 text-base gap-2">
                  Подписаться
                  <Icon name="Send" size={18} />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SubscriptionSection;
