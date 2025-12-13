import { Card, CardContent } from "../ui/card";

const produtos = [
  {
    title: "Chácaras Moura 3 - bloco 2",
    imgSrc: "/img-1.png",
    description: "Chácaras - Tamanho padrão 10 x 50 Parcelas aparti de 195",
  },

  {
    title: "Chácaras Moura 13 - Ramal do Coco 2",
    imgSrc: "/img-2.png",
    description: "Chácaras - Tamanho padrão 10 x 50 Parcelas aparti de 195",
  },
  {
    title: "Chácaras Moura 15 - bloco 2",
    imgSrc: "/img-3.png",
    description: "Chácaras - Tamanho padrão 10 x 50 Parcelas aparti de 195",
  },
  {
    title: "Chácaras Moura 16",
    imgSrc: "/img-4.png",
    description: "Chácaras - Tamanho padrão 10 x 50 Parcelas aparti de 195",
  },
];

export const CardComponent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas mini chácaras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios de ter seu próprio refúgio no campo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((produto, index) => {
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={produto.imgSrc}
                    className=""
                  />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {produto.title}
                  </h3>
                  <p className="text-muted-foreground relative top-3.5">{produto.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
