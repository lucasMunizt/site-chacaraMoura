// import LotCard from "./components/LotCard";
import Navegador from "./components/navegador";
import StatusCard from "./components/statusCard";
import { MapPin, CheckCircle, Clock } from "lucide-react";
import LotCard from "./components/LotCard";
// import { LotCardProps } from "./components/LotCard"
import { Lote, Loteamento } from "../../hooks/TypeLoteamento";
import getLotes from "./services/GetLotes";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import HeaderPc from "./components/header-pc";
import { useLocation } from "react-router-dom";

const SubLotesPage = () => {
  type Filtro = "todos" | "disponivel" | "reservado" | "vendido";
  const location = useLocation();
  //id navigate
  const { id } = location.state as { id: string };

  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>("todos");
  // hook especifico para buscar os lotes
  const [lotesA, setLotes] = useState<Loteamento | null>(null);
  const [nomChacara, setNomChacara] = useState<string>("");
  const cores = {
    todos: "bg-[#31814F] text-white",
    disponiveis: "bg-[#599970] text-white",
    reservados: "bg-[#CFAF3E] text-white",
    vendidos: "bg-[#8B2C2C] text-white",
  };

  const lotesFiltrados =
    lotesA?.lotes
      .filter((lote) => {
        if (filtroAtivo === "todos") return true;
        return lote.status === filtroAtivo;
      })
      .sort((a, b) => a.numberLote - b.numberLote) || [];

  useEffect(() => {
    async function carregar() {
      try {
        console.log("id sublotes: ", id);
        const data = await getLotes(id);
        setLotes(data);
        setNomChacara(data?.name || "");
      } catch (err) {
        console.error(err);
      }
    }
    carregar();
  }, [id]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* header para pc */}
      <HeaderPc />
      <header className="text-white bg-[#121e30] p-4 sm:hidden">
        <div className="flex items-center gap-3 mb-2 font-ibmPlex font-medium">
          <img src="/logo-menor.png" alt="" className=" relative top-2 w-24" />
          <h5 className="text-2xl mb-2 font-bold">{nomChacara}</h5>
        </div>
        <div className="flex items-center justify-between gap-2.5 mb-2">
          <p className="bg-green-600 border-none rounded-2xl p-1.5">
            Disponiveis{" "}
            {lotesA?.lotes.filter((l) => l.status === "disponivel").length || 0}
          </p>
          <p className="bg-yellow-600 border-none rounded-2xl p-2">
            Reservados{" "}
            {lotesA?.lotes.filter((l) => l.status === "reservado").length || 0}
          </p>
          <p className="bg-red-600 border-none rounded-2xl p-2">
            Vendidos{" "}
            {lotesA?.lotes.filter((l) => l.status === "vendido").length || 0}
          </p>
        </div>
      </header>

      {/* status para pc mostrando o contador de lotes */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 hidden sm:grid">
          <StatusCard
            title="Lotes Vendidos"
            colorText="primeira-cor"
            value={
              lotesA?.lotes.filter((l) => l.status === "vendido").length || 0
            }
            color="primeira"
            icon={<CheckCircle size={24} />}
          />
          <StatusCard
            title="Disponíveis"
            colorText="terceira-cor"
            value={
              lotesA?.lotes.filter((l) => l.status === "disponivel").length || 0
            }
            icon={<MapPin className="w-6 h-6" />}
            color="segunda"
          />
          <StatusCard
            title="Reservados"
            colorText="segunda-cor"
            value={
              lotesA?.lotes.filter((l) => l.status === "reservado").length || 0
            }
            icon={<Clock className="w-6 h-6" />}
            color="terceira"
          />
        </div>

        {/* Filtros de status para pc */}
        <div className="sm:block hidden">
          <div className="grid grid-cols-2 gap-1.5 text-center font-ibmPlex text-black sm:flex">
            <button
              onClick={() => setFiltroAtivo("todos")}
              className={`p-2 rounded-2xl transition  border-[#a5a5a5] border
              ${filtroAtivo === "todos" ? cores.todos : "bg-[#ffffff]"}`}
            >
              Todos{" "}
              <span className="p-1 rounded-2xl">
                {lotesA?.lotes.length || 0}
              </span>
            </button>

            <button
              onClick={() => setFiltroAtivo("disponivel")}
              className={`p-2 rounded-2xl transition
              ${
                filtroAtivo === "disponivel"
                  ? cores.disponiveis
                  : "border-[#a5a5a5] border"
              }`}
            >
              Disponíveis{" "}
              <span className="p-1">
                {lotesA?.lotes.filter((l) => l.status === "disponivel")
                  .length || 0}
              </span>
            </button>

            <button
              onClick={() => setFiltroAtivo("reservado")}
              className={`p-2 rounded-2xl transition
              ${
                filtroAtivo === "reservado"
                  ? cores.reservados
                  : "border-[#a5a5a5] border"
              }`}
            >
              Reservados{" "}
              <span className="p-1">
                {lotesA?.lotes.filter((l) => l.status === "reservado").length ||
                  0}
              </span>
            </button>

            <button
              onClick={() => setFiltroAtivo("vendido")}
              className={`p-2 rounded-2xl transition
              ${
                filtroAtivo === "vendido"
                  ? cores.vendidos
                  : "border-[#a5a5a5] border"
              }`}
            >
              Vendidos{" "}
              <span className="p-1">
                {lotesA?.lotes.filter((l) => l.status === "vendido").length ||
                  0}
              </span>
            </button>
          </div>
        </div>

        {/* filtro para o status para mobile */}
        <div className="sm:hidden">
          <div>
            <Select
              value={filtroAtivo}
              onValueChange={(value) => setFiltroAtivo(value as Filtro)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="disponivel">Disponível</SelectItem>
                <SelectItem value="reservado">Reservado</SelectItem>
                <SelectItem value="vendido">Vendido</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards de lotes */}
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
          {lotesFiltrados.map((lote: Lote) => (
            <LotCard
              key={lote.id}
              status={lote.status}
              Vendedorname={lote.seller}
              vendedor={lote.buyer}
              nameChacara={nomChacara}
              NumeroSubLote={lote.numberLote}
              idLotes={id} // id do lote, não do
              subLotes={true}
              idSublote={lote.id}
            />
          ))}
        </div>
      </main>
      {/* Navegador para mobile */}
      <div className="sm:hidden">
        <Navegador />
      </div>
    </div>
  );
};

export default SubLotesPage;
