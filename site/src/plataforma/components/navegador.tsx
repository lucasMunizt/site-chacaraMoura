import { Button } from "@/components/ui/button";
import { House, Search } from "lucide-react";

import { useNavigate } from "react-router-dom";
import MenuModal from "./menu";
import { useState } from "react";
import BuscaLotes from "./buscaLotes";
// CirclePlus
const Navegador = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const reandleBusca = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="w-full bg-[#0b0f19]/95 backdrop-blur-md border-t p-6 z-40 flex bottom-0 fixed left-0 ">
        <div className="flex items-center justify-around w-full gap-2.5">
          <Button
            className="text-white flex-col justify-center items-center cursor-pointer hover:text-[#f77239]"
            variant="ghostWhite"
            size="icon-lg"
            onClick={() => {
              navigate("/home");
            }}
          >
            <House />
            inicio
          </Button>

          <Button
            className="text-white flex-col items-center cursor-pointer hover:text-[#f77239]"
            variant="ghostWhite"
            size="icon-sm"
            onClick={reandleBusca}
          >
            <Search />
            Busca
          </Button>
          <MenuModal />
        </div>
      </div>
      <BuscaLotes openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Navegador;
