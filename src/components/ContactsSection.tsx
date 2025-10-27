import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="fade-in space-y-6">
            <Card className="p-6 border-0 shadow-lg hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3">
                  <Icon name="Phone" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-3">
                  <Icon name="Mail" size={24} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@flora-flowers.ru</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full p-3">
                  <Icon name="MapPin" size={24} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Цветочная, д. 15</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 fade-in border-0 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <Input type="tel" placeholder="Телефон" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea placeholder="Сообщение" rows={4} />
              </div>
              <Button className="w-full gap-2">
                Отправить сообщение
                <Icon name="Send" size={16} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
