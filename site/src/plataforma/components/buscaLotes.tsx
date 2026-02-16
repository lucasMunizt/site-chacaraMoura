import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useState } from "react";
import { DadosBuscaInput } from "../services/GetLotes";

import { useNavigate } from "react-router-dom";
import { Loteamento } from "hooks/TypeLoteamento";
interface BuscaLotesProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const BuscaLotes = ({ openModal, setOpenModal }: BuscaLotesProps) => {
  const [dadosInput, setDadosInput] = useState("");
  const [dadosBusca, setDadosBusca] = useState<Loteamento[]>([]);
  const navigate = useNavigate();
  const handleBusca = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const valor = dadosInput.trim();
    if (!valor) return;

    const dados = await DadosBuscaInput(valor);
    setDadosBusca(dados);
  };

  //   const filteredItems = items.filter((item) =>
  //   item.label.toLowerCase().includes(dadosInput.toLowerCase())
  // )

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="bg-[#1E2939]">
        <DialogTitle className="ml-2 text-white font-ibmPlex font-medium">
          Encontre o lote criado aqui!
        </DialogTitle>
        <div className="flex items-center border-b border-border px-2 gap-1">
          <Search size={16} className="relative top-1" color="white" />
          <input
            type="text"
            autoFocus
            className="w-full p-2 text-white border-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(e) => setDadosInput(e.target.value)}
            onKeyDown={handleBusca}
            value={dadosInput}
          />
        </div>
        <div>
          {dadosBusca.map((loteamento) => (
            <ul key={loteamento.id}>
              <li
                className="text-white mt-2 bg-[#222C3D] rounded-2xl w-full pl-4 p-3 cursor-pointer hover:bg-[#2A3A50] transition-colors duration-200"
                onClick={() => {
                  navigate("/sublotes", { state: { id: loteamento.id } });
                }}
              >
                {loteamento.name}
              </li>
            </ul>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuscaLotes;
