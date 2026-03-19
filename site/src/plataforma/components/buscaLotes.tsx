import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { GetLotes } from "../services/GetLotes";

import { useNavigate } from "react-router-dom";
import { Loteamento } from "hooks/TypeLoteamento";
interface BuscaLotesProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const BuscaLotes = ({ openModal, setOpenModal }: BuscaLotesProps) => {
  const [dadosInput, setDadosInput] = useState("");
  const [resultados, setResultados] = useState<Loteamento[]>([]);
  const [lotes, setLotes] = useState<Loteamento[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const carregarLotes = async () => {
      try {
        const response = await GetLotes();
        setLotes(response);
      } catch (error) {
        console.error("error ao carregar dados", error);
      }
    };
    carregarLotes();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!dadosInput.trim()) {
        setResultados([]);
        return;
      }
      const filtrados = lotes.filter((lote) => {
        return lote.name?.toLowerCase().includes(dadosInput.toLowerCase());
      });
      console.log(filtrados);
      setResultados(filtrados);
    }, 300);
    return () => clearTimeout(delay);
  }, [dadosInput, lotes]);

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="bg-[#1E2939]" closeInconColor={"white"}>
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
            value={dadosInput}
          />
        </div>
        <div>
          {resultados.map((loteamento) => (
            <ul key={loteamento.id}>
              <li
                className="text-white mt-2 bg-[#222C3D] rounded-2xl w-full pl-4 p-3 cursor-pointer hover:bg-[#2A3A50] transition-colors duration-200"
                onClick={() => {
                  navigate("/sublotes", {
                    state: { id: loteamento.id, nameLote: loteamento.name },
                  });
                  setOpenModal(false);
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
