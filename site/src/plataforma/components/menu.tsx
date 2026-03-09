import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Home, LayoutGrid, CirclePlus, User } from "lucide-react";
import CreateLoteModal from "./createModalLotes";
import { useState } from "react";
import Perfil from "../perfil";
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
    icon: User,
    title: "Perfil",
  },
];

const MenuModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCreateLote, setOpenCreateLote] = useState(false);
  const [abrir, setAbrir] = useState(false);
  return (
    <>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        {/* BOTÃO QUE ABRE */}
        <DialogTrigger asChild>
          <Button
            variant="ghostWhite"
            size="icon-sm"
            className="flex-col text-white"
          >
            <LayoutGrid />
            Menu
          </Button>
        </DialogTrigger>

        {/* MODAL */}
        <DialogContent
          closeInconColor="white"
          className="
       fixed
       bottom-0
        max-h-[85vh]
        z-50
        rounded-t-2xl
        bg-[#0b0f19]/95
        backdrop-blur-xl
        border-t
        w-full
        p-0
      [&>button]:text-white
      [&>button:hover]:text-[#f77239]
      
      "
        >
          {/* HANDLE */}
          <div className="flex justify-center pt-3">
            <div className="h-1 w-12 rounded-full bg-muted/40" />
          </div>
          <DialogTitle className="text-white font-ibmPlex font-bold text-center">
            Menu
          </DialogTitle>

          {/* CONTEÚDO SCROLLÁVEL */}
          <div className="px-6 pb-6 overflow-y-auto">
            <div className="grid grid-cols-2 gap-3 justify-items-center mt-4">
              {navegationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button
                    className="text-white flex-col items-center cursor-pointer hover:text-[#f77239]"
                    variant="ghostOrange"
                    size="icon-sm"
                    key={index}
                    onClick={() => {
                      if (item.title === "Novo Lote") {
                        setOpenModal(false);
                        setOpenCreateLote(true);
                      } else if (item.title === "Perfil") {
                        setAbrir(true);
                        setOpenModal(false);
                      }
                    }}
                  >
                    <Icon />
                    {item.title}
                  </Button>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <CreateLoteModal open={openCreateLote} onOpenChange={setOpenCreateLote} />

      <Perfil abrir={abrir} setAbrir={setAbrir} />
    </>
  );
};

export default MenuModal;
