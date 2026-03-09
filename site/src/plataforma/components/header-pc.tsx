import { Button } from "@/components/ui/button";
import { Home, CirclePlus, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import CreateLoteModal from "./createModalLotes";
import BuscaLotes from "./buscaLotes";
import Perfil from "../perfil";
const HeaderPc = () => {
  const navigate = useNavigate();
  const [openCreateLote, setOpenCreateLote] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [abrir, setAbrir] = useState(false);
  const navegationItems = [
    {
      icon: Home,
      title: "Inicio",
    },
    {
      icon: CirclePlus,
      title: "Novo Lote",
    },
    {
      icon: Search,
      title: "Busca",
    },
    {
      icon: User,
      title: "Perfil",
    },
  ];

  const reandleBusca = () => {
    setOpenModal(true);
  };

  return (
    <header className="bg-card border-b border-border hidden sm:block">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div className="flex gap-3 mb-2">
            <img src="/chacaras-moura-nova.jpg" alt="" className="" />

            <h1 className="font-display flex items-center text-2xl sm:hidden md:flex lg:text-4xl  font-bold text-foreground">
              Mini Chácaras
            </h1>
          </div>
          <div className="flex items-center">
            <nav className="flex items-center gap-3 justify-around ">
              {navegationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button
                    variant="menuDesktop"
                    key={index}
                    onClick={() => {
                      if (item.title === "Novo Lote") {
                        setOpenCreateLote(true);
                      } else if (item.title === "Inicio") {
                        navigate("/home");
                      } else if (item.title === "Busca") {
                        reandleBusca();
                      } else if (item.title === "Perfil") {
                        setAbrir(true);
                      }
                    }}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </Button>
                );
              })}
            </nav>
          </div>
        </div>
        <p className="text-muted-foreground text-lg">Gerenciamento de Lotes</p>
      </div>
      <CreateLoteModal open={openCreateLote} onOpenChange={setOpenCreateLote} />
      <BuscaLotes openModal={openModal} setOpenModal={setOpenModal} />
      <Perfil abrir={abrir} setAbrir={setAbrir} />
    </header>
  );
};

export default HeaderPc;
