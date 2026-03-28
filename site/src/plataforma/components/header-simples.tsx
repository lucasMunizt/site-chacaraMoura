import React from "react";

const HeaderSimples = () => {
  return (
    <div>
      <div className="sm:hidden flex items-center border-b border-border justify-start">
        <img src="/logo-menor.png" className="relative top-3 w-24" />
        <h1 className="font-display flex items-center text-2xl sm:hidden md:flex lg:text-4xl  font-bold text-foreground">
          Mini-Chácaras
        </h1>
      </div>
    </div>
  );
};

export default HeaderSimples;
