import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, TreePine } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Vida Saudável",
    description:
      "Cultive seus próprios alimentos orgânicos e respire ar puro todos os dias.",
  },
  {
    icon: Heart,
    title: "Paz e Tranquilidade",
    description:
      "Ambiente calmo e silencioso, perfeito para relaxar e recarregar as energias.",
  },
  {
    icon: Users,
    title: "Momentos em Família",
    description:
      "Espaço ideal para criar memórias inesquecíveis com quem você ama.",
  },
  {
    icon: TreePine,
    title: "Conexão com a Natureza",
    description: "Cercado de verde, árvores frutíferas e o canto dos pássaros.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Ter Sua Mini Chácara?
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
