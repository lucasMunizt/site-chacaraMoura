import { House,CirclePlus  } from "lucide-react";
const header = () => {
  return (
    <div className="w-full bg-[#151561] p-6 flex bottom-0 fixed left-0">
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col items-center">
          <House color="white" />
          <p className="text-white">Inicio</p>
        </div>

        <div className="flex flex-col items-center">
          <CirclePlus color="white" />
          <p className="text-white">Adicionar</p>
        </div>
      </div>
    </div>
  );
};

export default header;
