import { Button } from "@/components/ui/button";
import { House, Search,} from "lucide-react";
import MenuModal from "./menu";
// CirclePlus
const header = () => {
  return (
    <div className="w-full bg-[#0b0f19]/95 backdrop-blur-md border-t p-6 z-40 flex bottom-0 fixed left-0 ">
      <div className="flex items-center justify-around w-full gap-2.5">
        <Button
          className="text-white flex-col justify-center items-center cursor-pointer hover:text-[#f77239]"
          variant="ghostWhite"
          size="icon-lg"
        >
          <House />
          inicio
        </Button>

        <Button
          className="text-white flex-col items-center cursor-pointer hover:text-[#f77239]"
          variant="ghostWhite"
          size="icon-sm"
        >
          <Search />
          Busca
        </Button>
        {/* 
          <Button
            className=" text-white flex-col items-center cursor-pointer hover:text-[#f77239]"
            variant="ghostWhite"
            size="icon-sm"
            onClick={FunctionMenu}
          >
            <Menu color="white" />
            Menu
          </Button> */}
        <MenuModal />
      </div>
    </div>
  );
};

export default header;
