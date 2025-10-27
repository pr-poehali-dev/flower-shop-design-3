const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">О нас</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Florа — это команда профессиональных флористов с многолетним опытом. Мы создаём букеты и композиции,
              которые дарят радость и оставляют незабываемые впечатления.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Каждый день мы работаем с лучшими поставщиками, чтобы предложить вам только свежие и качественные цветы.
              Наша миссия — делать мир красивее, один букет за раз.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 rounded-2xl glass-effect hover-lift">
                <div className="text-5xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="text-center p-4 rounded-2xl glass-effect hover-lift">
                <div className="text-5xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Счастливых клиентов</div>
              </div>
              <div className="text-center p-4 rounded-2xl glass-effect hover-lift">
                <div className="text-5xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Видов цветов</div>
              </div>
            </div>
          </div>
          <div className="fade-in relative">
            <div className="absolute -inset-4 gradient-bg opacity-20 blur-2xl rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800"
              alt="О нас"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10 hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;