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
const PainelCorretor = () => {
  const [dados, SetDados] = useState<SellerDados[]>([]);
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

  return (
    <div>
      {/* header pc */}
      <HeaderPc />
      <main className="ml-3">
        <Table className="" align="center">
          <TableHeader>
            <TableRow>
              <TableHead>Nome Lote</TableHead>
              <TableHead>Vendedor</TableHead>
              <TableHead>Total Vendido</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dados.map((dado) => (
              <TableRow key={dado.lot_id}>
                <TableCell className="font-medium">{dado.nome_lote}</TableCell>
                <TableCell>{dado.seller_name}</TableCell>
                <TableCell>{dado.total_vendidos}</TableCell>
              </TableRow>
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
