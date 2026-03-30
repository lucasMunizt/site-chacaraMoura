import { Card, CardContent } from "../ui/card";

const produtos = [
  {
    title: " Chácaras Moura - 18 ",
    imgSrc: "/propaganda.jpeg",
    description: "Parcelas apartir de R$: 390,00",
  },

  {
    title: "Chácaras Moura 17 - cipó Amber",
    imgSrc: "/moura-17-1.jpeg",
    description: "Ganhe 20 mudas de cacau",
  },
  {
    title: "Moura 17 - Cipó Amber - BLOCO 2",
    imgSrc: "/moura-17-2.jpeg",
    // description: "Chácaras - Tamanho padrão 10 x 50 Parcelas aparti de 195",
  },
  // {
  //   title: "Chácaras Moura 16",
  //   imgSrc: "/img-4.png",
  //   // description: "Chácaras - Tamanho padrão 10 x 50 Parcelas aparti de 195",
  // },
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
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 mx-auto w-full max-w-6xl
         md:grid-cols-2 lg:grid-cols-3 gap-8 items-center "
          >
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
                      className=" h-auto flex items-center justify-center m-auto max-h-50 mb-2 w-full rounded-md"
                    />
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {produto.title}
                    </h3>
                    <p className="text-muted-foreground relative top-3.5">
                      {produto.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
