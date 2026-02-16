const HeaderPc = () => {
  return (
    <header className="bg-card border-b border-border hidden sm:block">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-2">
          <img src="/chacaras-moura-nova.jpg" alt="" className="" />

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Mini Chácaras
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Condomínio Recanto Verde — Gerenciamento de Lotes
        </p>
      </div>
    </header>
  );
};

export default HeaderPc;
