import { User } from "lucide-react";
//import {Phone, Ruler} from "lucide-react";
import { MapPin, CheckCircle, Clock, ChevronRight, Trash } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Alerta from "./alerta";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteSubLotes } from "../services/DeleteLotes";
import AlterarLote from "./alterar-lote";
import AlertaErro from "./alerta-erro";
export interface LotCardProps {
  status: "disponivel" | "reservado" | "vendido";
  vendedor: string;
  NumeroSubLote: number;
  Vendedorname: string;
  nameChacara: string;
  idLotes: string;
  subLotes: boolean;
  idSublote?: string;
}
const LotCard = ({
  status,
  Vendedorname,
  vendedor,
  nameChacara,
  NumeroSubLote,
  idLotes,
  idSublote,

  subLotes = false,
}: LotCardProps) => {
  const cores = {
    disponivel: "bg-[#00C951]",
    reservado: "bg-[#CFAF3E]",
    vendido: "bg-[#FB2C36]",
  };
  const [dadosVendidos, setDadosVendidos] = useState(false);
  const [deletar, setDeletar] = useState(false);
  const [alterarStatus, setAlterarStatus] = useState(false);
  const [erroDeletar, setErroDeletar] = useState(false);
  const role = localStorage.getItem("role");
  const classebg = cores[status];
  const deletarLote = async (e: boolean) => {
    setDeletar(e);
  };

  const deletarSubLote = async () => {
    try {
      await DeleteSubLotes(idLotes, NumeroSubLote);

      alert("SubLote deletado com sucesso!");
      window.location.reload();
    } catch (error) {
      setErroDeletar(true);
      console.error("erro ao deletar", error);
    }
  };

  const alterarlote = () => {
    setAlterarStatus(true);
  };
  return (
    <div>
      <Card className="p-2.5 bg-[#F0F6F2] w-[300px]">
        <CardHeader className="">
          <div className="flex items-center justify-between">
            <h1 className="font-bold -ml-4">Lote</h1>
            <div
              className={`flex items-center p-1.5 gap-0.5 -mr-4 font-medium font-ibmPlex 
                text-white rounded-3xl ${classebg}`}
            >
              {status === "disponivel" && <MapPin className="w-4 h-4 mr-1" />}
              {status === "reservado" && <Clock className="w-4 h-4 mr-1" />}
              {status === "vendido" && <CheckCircle className="w-4 h-4 mr-1" />}
              <h5>{status}</h5>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg relative right-5">
              {nameChacara}
            </h2>
            <p
              className="font-medium text-sm relative w-6 h-6 p-0.5 bg-[#3b3737]
             text-white rounded-full flex justify-center items-center"
            >
              {NumeroSubLote}
            </p>
          </div>
        </CardHeader>
        <div className="w-full border-1 p-0 border-green-600" />

        <CardContent>
          {/* botão de mostrar dados vendidos */}
          {subLotes && status === "vendido" && (
            <>
              <div className="flex items-center gap-2 justify-start p-0">
                <div className="flex justify-end items-center gap-7 w-full">
                  <button
                    onClick={() => {
                      setDadosVendidos((prev) => !prev);
                    }}
                    className={`
            w-6 h-6 p-0.5 relative -top-1 rounded-full
            flex items-center justify-center
            transition-all duration-300
            ${dadosVendidos ? "bg-[#3b3737]" : "bg-[#d8d8d8]"}
          `}
                  >
                    <ChevronRight
                      className={`
              transition-transform duration-300
              ${dadosVendidos ? "rotate-90 text-white" : "rotate-0"}
            `}
                    />
                  </button>
                </div>
              </div>

              {dadosVendidos && (
                <>
                  <div className="relative right-5 mb-2.5">
                    <p>Comprador</p>
                    <p className="flex items-center gap-1">
                      <User className="w-4 h-4 mr-1" color="#00C951" />
                      {vendedor}
                    </p>
                  </div>

                  <div className="relative right-5">
                    <p>Vendedor</p>
                    <p className="flex items-center gap-1">
                      <User className="w-4 h-4 mr-1" color="#00C951" />
                      {Vendedorname}
                    </p>
                  </div>
                </>
              )}
            </>
          )}

          <Alerta deletar={deletar} setDeletar={setDeletar} idLotes={idLotes} />
          <AlterarLote
            open={alterarStatus}
            onOpenChange={setAlterarStatus}
            id={idSublote}
            numberLote={NumeroSubLote}
            idLotes={idLotes}
          />
          <AlertaErro
            deletar={erroDeletar}
            setDeletar={setErroDeletar}
            ErroTitulo="deletar"
          />
        </CardContent>
        {role === "admin" && (
          <div>
            {subLotes ? (
              <div className="mt-3.5 w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full border rounded-md p-2 bg-[#d2ebda]">
                    opções
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-52">
                    <DropdownMenuItem
                      className="text-center"
                      onClick={alterarlote}
                    >
                      Alterar status
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="text-red-500"
                      onClick={deletarSubLote}
                    >
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletarLote(true);
                }}
                className="bg-transparent p-2 cursor-pointer flex items-center justify-center gap-2
        hover:text-white font-ibmPlex font-bold hover:bg-red-500 w-full rounded-2xl"
              >
                <Trash size={18} />
                Excluir Lote
              </button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default LotCard;
