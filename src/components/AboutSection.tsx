const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in">
            <h2 className="text-5xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Florа — это команда профессиональных флористов с многолетним опытом. Мы создаём букеты и композиции,
              которые дарят радость и оставляют незабываемые впечатления.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Каждый день мы работаем с лучшими поставщиками, чтобы предложить вам только свежие и качественные цветы.
              Наша миссия — делать мир красивее, один букет за раз.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Счастливых клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Видов цветов</div>
              </div>
            </div>
          </div>
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800"
              alt="О нас"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
