import { useState, useEffect } from "react";
import HeaderPc from "./components/header-pc";
import { useNavigate } from "react-router-dom";
import DadosLotes, { GetLotes } from "./services/GetLotes";
import { Loteamento } from "../../hooks/TypeLoteamento";
import LotCard from "./components/LotCard";
import Navegador from "./components/navegador";

const HomePage = () => {
  const [lotes, setLotes] = useState<Loteamento[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchLotes() {
      try {
        const data = await GetLotes();
        setLotes(data);
      } catch (error) {
        console.error("Error fetching lotes data:", error);
      }
    }
    fetchLotes();
  }, []);
  const handleLoteClick = async (id: string) => {
    await DadosLotes(id);
    navigate("/sublotes", { state: { id } });
  };

  // type StatusLote = "disponivel" | "reservado" | "vendido";

  // function calcularStatusLoteamento() {
  //   // console.log("quantidade de lotes", lotes.lote?.status);
  //   if (lotes.length === 0) {
  //     return "disponivel";
  //   }

  //   const temDisponivel = lotes.some((l) => l.lotes?.status === "disponivel");
  //   if (temDisponivel) {
  //     console.log("status", temDisponivel);
  //     return "disponivel";
  //   }

  //   const temReservado = lotes.some((l) => l.lotes?.status === "reservado");
  //   if (temReservado) {
  //     console.log("status", temReservado);
  //     return "reservado";
  //   }
  //   return "vendido";
  // }

  return (
    <div>
      {/* header pc */}
      <HeaderPc />
      {/* conteudo da home page */}
      <main className="mt-2.5 ml-2">
        <h1 className="font-ibmPlex font-bold  text-2xl">Lotes</h1>
        <div
          className="   
          mt-6 
          mb-26
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          sm:mt-2
          place-items-center
          max-w-7xl"
        >
          {lotes?.map((loteamento: Loteamento) => {
            // console.log("Status do loteamento", loteamento.name);
            // const status = calcularStatusLoteamento();
            return (
              <div
                role="button"
                tabIndex={0}
                className="cursor-pointer"
                onClick={() => handleLoteClick(loteamento.id)}
                key={loteamento.id}
              >
                <LotCard
                  nameChacara={loteamento.name}
                  NumeroSubLote={loteamento.quantityLotes}
                  status={"disponivel"}
                  vendedor={""}
                  Vendedorname={""}
                  idLotes={loteamento.id}
                  subLotes={false}
                />
              </div>
            );
          })}
        </div>
      </main>

      {/* Navegador para mobile */}
      <div className="sm:hidden">
        <Navegador />
      </div>
    </div>
  );
};

export default HomePage;
