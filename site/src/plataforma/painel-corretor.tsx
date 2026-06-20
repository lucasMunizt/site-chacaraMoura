import React, { useEffect, useState } from "react";
import HeaderPc from "./components/header-pc";
import Navegador from "./components/navegador";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTopSellerFull } from "./services/GetLotes";
import { SellerDados } from "hooks/TypeLoteamento";
import HeaderSimples from "./components/header-simples";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { updateStatusCommission } from "./services/Putlotes";
const PainelCorretor = () => {
  const [dados, SetDados] = useState<SellerDados[]>([]);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const cores = {
    aberto: "bg-green-500 text-white p-1.5 w-full rounded-[5px]",
    pago: "bg-red-500 text-white p-1.5 w-full rounded-[5px]",
  };
  useEffect(() => {
    async function DadosCorretor() {
      try {
        const response = await getTopSellerFull();
        SetDados(response.result);
      } catch (error) {
        console.error("dados não encotrados", error);
      }
    }
    DadosCorretor();
  }, []);

  const toggleRow = (row_id: string) => {
    setExpandedRow(expandedRow === row_id ? null : row_id);
  };

  const alterStatusCommission = async (
    id: number,
    selleName: string,
    status: string,
  ) => {
    const data = await updateStatusCommission(id, selleName, status);
    window.location.reload();
    console.log("data ", data);
  };

  return (
    <div>
      {/* header pc */}
      <HeaderPc />
      <HeaderSimples />
      <main className="ml-3 overflow-x-auto pb-24">
        <Table className="min-w-[500px]" align="center">
          <TableHeader>
            <TableRow>
              <TableHead className="font-ibmPlex font-medium">
                Nome do Lote
              </TableHead>
              <TableHead className="font-ibmPlex font-medium">
                Vendedor
              </TableHead>
              <TableHead className="font-ibmPlex font-medium">
                Total Vendido
              </TableHead>
              <TableHead className="font-ibmPlex font-medium">
                Comissão
              </TableHead>
              <TableHead className="font-ibmPlex font-medium">
                Comissões pagas
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dados.map((dado) => (
              <React.Fragment key={dado.row_id}>
                <TableRow
                  key={dado.lot_id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleRow(dado.row_id)}
                >
                  <TableCell className="font-medium">
                    {dado.nome_lote}
                  </TableCell>
                  <TableCell>{dado.seller_name}</TableCell>
                  <TableCell>{dado.total_vendidos}</TableCell>
                  <TableCell>
                    {(dado.total_comissao / 100).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        {/**/}
                        <button
                          onClick={(e) => e.stopPropagation()} // 🔥 evita abrir a linha
                          className={
                            dado.status_commission === "pago"
                              ? cores.pago
                              : cores.aberto
                          }
                        >
                          {dado.status_commission || "aberto"}
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-40">
                        <DropdownMenuItem
                          className="bg-green-400 mb-3 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            alterStatusCommission(
                              dado.lot_id,
                              dado.seller_name,
                              "aberto",
                            );
                          }}
                        >
                          Aberto
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="bg-red-400 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            alterStatusCommission(
                              dado.lot_id,
                              dado.seller_name,
                              "pago",
                            );
                          }}
                        >
                          Pago
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                {expandedRow === dado.row_id && (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-96 opacity-100">
                        <div className="p-4 bg-gray-100 rounded-md">
                          <p className="font-semibold mb-2">
                            Sublots vendidos:
                          </p>
                          {/* 👉 Aqui você pode substituir por dados reais */}
                          <ul className="list-none">
                            {[...dado.number_sublots]
                              .sort((a, b) => a - b)
                              .map((numerosSubLotes) => (
                                <li>sublotes: {numerosSubLotes}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </main>

      {/* Navegador para mobile */}
      <div className="sm:hidden">
        <Navegador />
      </div>
    </div>
  );
};

export default PainelCorretor;
