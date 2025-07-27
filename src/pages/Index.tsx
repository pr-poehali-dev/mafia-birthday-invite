import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Семья уведомлена:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/img/961abb5b-4454-424b-9ebf-83aa4f160320.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Icon name="Crown" size={64} className="text-secondary mx-auto mb-4" />
          </div>
          
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-secondary mb-6">
            Приглашение
          </h1>
          
          <p className="font-cormorant text-2xl md:text-3xl text-muted-foreground mb-8 italic">
            в семью на празднование дня рождения
          </p>
          
          <div className="bg-card/90 backdrop-blur-sm border-2 border-secondary p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="font-cormorant text-3xl font-semibold text-secondary mb-4">
              Дон приглашает на торжество
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Уважаемый член семьи, ваше присутствие требуется на важном мероприятии. 
              Отказ не принимается. Дресс-код обязателен.
            </p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cormorant text-5xl font-bold text-center text-secondary mb-16">
            Детали события
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card/80 border-secondary">
                <CardHeader>
                  <CardTitle className="font-cormorant text-3xl text-secondary flex items-center gap-3">
                    <Icon name="MapPin" size={32} />
                    Место проведения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-accent">
                    "Золотая Подкова" - Частный клуб
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Эксклюзивное заведение в центре города, где собирается только избранная публика. 
                    Атмосфера роскоши 1930-х годов, приглушенный свет, звуки джаза и аромат 
                    кубинских сигар создают идеальную обстановку для нашего торжества.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Clock" size={20} />
                      <span>21:00 - до последнего гостя</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Calendar" size={20} />
                      <span>15 февраля 2024</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Users" size={20} />
                      <span>Только для членов семьи</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div 
              className="h-96 bg-cover bg-center rounded-lg border-2 border-secondary"
              style={{
                backgroundImage: "url('/img/bd9ff093-aace-429e-8283-4dd9ffc42538.jpg')"
              }}
            />
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl font-bold text-secondary mb-12">
            Дресс-код
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/80 border-secondary">
              <CardHeader>
                <CardTitle className="font-cormorant text-3xl text-secondary text-center">
                  Цветовая палитра вечера
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Строго соблюдайте цветовой код семьи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-black border-2 border-secondary rounded-full mx-auto"></div>
                    <h3 className="font-cormorant text-xl font-semibold text-secondary">Черный</h3>
                    <p className="text-sm text-muted-foreground">Основной цвет костюмов и платьев</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-white border-2 border-secondary rounded-full mx-auto"></div>
                    <h3 className="font-cormorant text-xl font-semibold text-secondary">Белый</h3>
                    <p className="text-sm text-muted-foreground">Рубашки, аксессуары и акценты</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-primary border-2 border-secondary rounded-full mx-auto"></div>
                    <h3 className="font-cormorant text-xl font-semibold text-secondary">Красный</h3>
                    <p className="text-sm text-muted-foreground">Детали и украшения для стиля</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-muted">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="space-y-3">
                      <Icon name="Shirt" size={40} className="text-secondary mx-auto" />
                      <h4 className="font-cormorant text-xl font-semibold">Джентльмены</h4>
                      <p className="text-sm text-muted-foreground">
                        Элегантный черно-белый образ с красными акцентами: галстук, платок или запонки
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Icon name="Sparkles" size={40} className="text-secondary mx-auto" />
                      <h4 className="font-cormorant text-xl font-semibold">Дамы</h4>
                      <p className="text-sm text-muted-foreground">
                        Изысканное черное или белое платье с красными украшениями: помада, перчатки или аксессуары
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-primary/10 border border-primary rounded-lg">
            <p className="text-lg font-semibold text-primary mb-2">
              ⚠️ Важное предупреждение
            </p>
            <p className="text-muted-foreground">
              Нарушение дресс-кода может повлечь за собой неприятные последствия. 
              Семья ценит стиль и респектабельность.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cormorant text-5xl font-bold text-center text-secondary mb-12">
            Подтверждение участия
          </h2>
          
          <Card className="bg-card/80 border-secondary">
            <CardHeader>
              <CardTitle className="font-cormorant text-3xl text-secondary text-center">
                Уведомите семью о вашем решении
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Ваш ответ должен поступить не позднее 10 февраля
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-semibold">
                    Ваше имя в семье
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2 bg-background/50 border-muted"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-lg font-semibold">
                    Ваше присутствие
                  </Label>
                  <RadioGroup 
                    value={formData.attendance} 
                    onValueChange={(value) => setFormData({...formData, attendance: value})}
                    className="mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Буду присутствовать (как и положено члену семьи)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">Не смогу присутствовать (имею веские причины)</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-lg font-semibold">
                    Сообщение для дона (необязательно)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-2 bg-background/50 border-muted"
                    placeholder="Ваши поздравления или объяснения..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg py-6"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить ответ семье
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl font-bold text-secondary mb-12">
            Галерея семейных моментов
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg border border-secondary/30 flex items-center justify-center"
              >
                <Icon name="Camera" size={32} className="text-muted-foreground" />
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground text-lg">
            Фотографии с прошлых семейных собраний. 
            Новые воспоминания будут добавлены после торжества.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-secondary/30">
        <div className="max-w-2xl mx-auto">
          <p className="font-cormorant text-2xl text-secondary mb-4">
            "Семья - это все"
          </p>
          <p className="text-muted-foreground">
            С уважением и надеждой на ваше присутствие
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Icon name="Heart" size={24} className="text-primary" />
            <Icon name="Crown" size={24} className="text-secondary" />
            <Icon name="Heart" size={24} className="text-primary" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;