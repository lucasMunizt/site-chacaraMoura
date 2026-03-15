import { useState, useEffect } from "react";
import HeaderPc from "./components/header-pc";
import { useNavigate } from "react-router-dom";
import { GetLotes } from "./services/GetLotes";
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
        setLotes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching lotes data:", error);
      }
    }
    fetchLotes();
  }, []);
  const handleLoteClick = async (id: string, nameLote: string) => {
    navigate("/sublotes", { state: { id, nameLote } });
  };

  return (
    <div>
      {/* header pc */}
      <HeaderPc />
      {/* conteudo da home page */}
      <main className="mt-2.5 ml-2">
        <div className="sm:hidden flex items-center border-b border-border justify-center">
          <img src="/logo-menor.png" className="relative top-3 w-24" />
          <h1 className="font-ibmPlex font-bold sm:text-left text-center sm:ml-10 text-2xl">
            Lotes
          </h1>
        </div>
        <div
          className="   
          mt-6 
          mb-26
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          sm:mt-2
          place-items-center
          max-w-7xl"
        >
          {lotes?.map((loteamento: Loteamento) => {
            return (
              <div
                role="button"
                tabIndex={0}
                className="cursor-pointer"
                onClick={() => handleLoteClick(loteamento.id, loteamento.name)}
                key={loteamento.id}
              >
                <LotCard
                  nameChacara={loteamento.name}
                  NumeroSubLote={loteamento.quantity_lotes}
                  status={loteamento.status}
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
