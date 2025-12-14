import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, LayoutGrid, CirclePlus, User } from "lucide-react";

const navegationItems = [
  {
    icon: BookOpen,
    title: "Lista de Lotes",
  },
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
  return (
    <Dialog>
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
        className="
         fixed
         bottom-0
          max-h-[85vh]
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
          <div className="grid grid-cols-2 gap-4 justify-items-center mt-4">
            {navegationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  className="text-white flex-col items-center cursor-pointer hover:text-[#f77239]"
                  variant="ghostWhite"
                  size="icon-sm"
                  key={index}
                >
                  <Icon />
                  {item.title.toLocaleLowerCase()}
                </Button>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
