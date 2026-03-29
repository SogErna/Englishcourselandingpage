import { Plane, Users, BookOpen, Globe, MapPin, Heart, Laptop, Clock, CreditCard, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Plane className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold">Английский для путешествий</span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={scrollToEnroll}
            className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full hover:opacity-90 transition-opacity"
          >
            Записаться
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1549654501-5d270e56e92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzdW5zZXQlMjBhaXJwbGFuZXxlbnwxfHx8fDE3NzQ4MjQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Travel sunset"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Английский для путешествий
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToEnroll}
              className="px-8 py-4 text-lg bg-gradient-to-r from-primary via-secondary to-accent rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              Начать путешествие
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary">Для кого курс</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Возрастные группы</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">4-5</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Первая группа</h3>
              <p className="text-muted-foreground">4–5 класс</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-secondary">6-8</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Вторая группа</h3>
              <p className="text-muted-foreground">6–8 класс</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <BookOpen className="w-5 h-5 text-accent" />
              <span className="text-accent">Программа курса</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что мы изучаем</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {programItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">👉</span>
                      <p className="text-sm text-primary/80">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="text-secondary">Особенности</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему этот курс особенный?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySpecialItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-secondary/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <p className="text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Laptop className="w-5 h-5 text-primary" />
              <span className="text-primary">Требования</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что потребуется</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-accent">Расписание</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Когда проходят занятия</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30"
            >
              <div className="text-primary text-xl font-bold mb-2">Четверг</div>
              <div className="text-3xl font-bold mb-2">15:00 (МСК)</div>
              <p className="text-muted-foreground">Группа 4–5 класс</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/30"
            >
              <div className="text-secondary text-xl font-bold mb-2">Пятница</div>
              <div className="text-3xl font-bold mb-2">15:30 (МСК)</div>
              <p className="text-muted-foreground">Группа 6–8 класс</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full">
              <CreditCard className="w-5 h-5 text-secondary" />
              <span className="text-secondary">Стоимость</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Цены на обучение</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">Полный курс</h3>
              <div className="text-4xl font-bold text-primary mb-2">12 000 ₽</div>
              <p className="text-muted-foreground">10 уроков</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">Абонемент</h3>
              <div className="text-4xl font-bold text-secondary mb-2">1 300 ₽</div>
              <p className="text-muted-foreground">за урок</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll" className="py-20 px-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Набор открыт!</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            <p className="text-lg md:text-xl font-bold text-accent mb-8">
              Места ограничены!
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 text-xl bg-gradient-to-r from-primary via-secondary to-accent rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-3"
            >
              <Plane className="w-6 h-6" />
              Записаться на курс
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 Английский для путешествий. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

const programItems = [
  {
    icon: <Plane className="w-6 h-6 text-white" />,
    title: 'Аэропорт без стресса',
    description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
    benefit: 'Уверенность уже в первые часы за границей.',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'В отеле: заселение и помощь',
    description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
    benefit: 'Практика вежливых фраз и повседневной лексики.',
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Кафе и рестораны',
    description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
    benefit: 'Развитие гастрономического словаря и уверенности в общении.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: 'На улице: ориентирование и просьбы',
    description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
    benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: 'Экстренные случаи',
    description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
    benefit: 'Важные фразы, которые могут спасти отпуск.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: 'Туризм и развлечения',
    description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
    benefit: 'Погружение в культурный контекст через язык.',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Дружба в путешествиях',
    description: 'Как познакомиться с другими детьми или подростками за границей.',
    benefit: 'Игровая практика диалогов и неформального общения.',
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Дипломный проект: «Мой идеальный отпуск»',
    description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
    benefit: 'Развитие связной речи и творческого самовыражения.',
  },
];

const whySpecialItems = [
  { emoji: '🎯', text: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики.' },
  { emoji: '🌍', text: 'Все ситуации — из реальной жизни путешественника.' },
  { emoji: '🎮', text: 'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.' },
  { emoji: '📈', text: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.' },
];

const requirements = [
  'Стационарный компьютер или ноутбук с наушниками и микрофоном',
  'Стабильный интернет и Zoom',
];
