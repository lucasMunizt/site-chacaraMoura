import Navegador from "./components/navegador";
import StatusCard from "./components/statusCard";
import { MapPin, CheckCircle, Clock } from "lucide-react";
import LotCard from "./components/LotCard";
import { Lote } from "../../hooks/TypeLoteamento";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import HeaderPc from "./components/header-pc";
import { useLocation } from "react-router-dom";
import DadosLotes from "./services/GetLotes";

const SubLotesPage = () => {
  type Filtro = "todos" | "disponivel" | "reservado" | "vendido";

  const location = useLocation();
  const { id, nameLote } = location.state as { id: string; nameLote: string };
  const navigate = useNavigate();
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>("todos");
  const [lotes, setLotes] = useState<Lote[]>([]);
  const cores = {
    todos: "bg-[#31814F] text-white",
    disponiveis: "bg-[#599970] text-white",
    reservados: "bg-[#CFAF3E] text-white",
    vendidos: "bg-[#8B2C2C] text-white",
  };

  // buscar lotes
  useEffect(() => {
    async function carregar() {
      try {
        const data = await DadosLotes(id);

        const lista = Array.isArray(data) ? data : [];

        setLotes(lista);

        if (lista.length === 0) {
          navigate("/home");
        }
      } catch (err) {
        console.error(err);
        navigate("/home"); // opcional: fallback em erro
      }
    }

    carregar();
  }, [id, navigate]);

  // contadores (calculado apenas quando lotes muda)
  const contadores = useMemo(() => {
    return {
      todos: lotes.length,
      disponivel: lotes.filter((l) => l.status === "disponivel").length,
      reservado: lotes.filter((l) => l.status === "reservado").length,
      vendido: lotes.filter((l) => l.status === "vendido").length,
    };
  }, [lotes]);

  // filtro de lotes
  const lotesFiltrados = useMemo(() => {
    return lotes
      .filter((lote) => {
        if (filtroAtivo === "todos") return true;
        return lote.status === filtroAtivo;
      })
      .sort((a, b) => a.number_sublots - b.number_sublots);
  }, [lotes, filtroAtivo]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <HeaderPc />

      {/* HEADER MOBILE */}
      <header className="text-black bg-[#f5fcf7] p-4 border-b border-border sm:hidden">
        <div className="flex items-center justify-center  mb-2 font-ibmPlex font-medium">
          <img src="/logo-menor.png" className="relative top-2 w-24" />
          <h5 className="text-2xl mb-2 font-bold">{nameLote}</h5>
        </div>

        <div className="flex justify-between gap-2.5 mb-2">
          <p className="bg-green-600 rounded-2xl p-1.5 text-white">
            Disponíveis ({contadores.disponivel})
          </p>

          <p className="bg-yellow-600 rounded-2xl p-2 text-white">
            Reservados ({contadores.reservado})
          </p>

          <p className="bg-red-600 rounded-2xl p-2 text-white">
            Vendidos ({contadores.vendido})
          </p>
        </div>
      </header>

      {/* STATUS PC */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 hidden sm:grid">
          <StatusCard
            title="Lotes Vendidos"
            value={contadores.vendido}
            color="primeira"
            icon={<CheckCircle size={24} />}
            colorText="primeira-cor"
          />

          <StatusCard
            title="Disponíveis"
            value={contadores.disponivel}
            icon={<MapPin className="w-6 h-6" />}
            color="segunda"
            colorText="segunda-cor"
          />

          <StatusCard
            title="Reservados"
            value={contadores.reservado}
            icon={<Clock className="w-6 h-6" />}
            color="terceira"
            colorText="terceira-cor"
          />
        </div>

        {/* FILTROS PC */}
        <div className="sm:block hidden">
          <div className="flex gap-2 text-center font-ibmPlex">
            <button
              onClick={() => setFiltroAtivo("todos")}
              className={`p-2 rounded-2xl border ${
                filtroAtivo === "todos" ? cores.todos : ""
              }`}
            >
              Todos ({contadores.todos})
            </button>

            <button
              onClick={() => setFiltroAtivo("disponivel")}
              className={`p-2 rounded-2xl border ${
                filtroAtivo === "disponivel" ? cores.disponiveis : ""
              }`}
            >
              Disponíveis ({contadores.disponivel})
            </button>

            <button
              onClick={() => setFiltroAtivo("reservado")}
              className={`p-2 rounded-2xl border ${
                filtroAtivo === "reservado" ? cores.reservados : ""
              }`}
            >
              Reservados ({contadores.reservado})
            </button>

            <button
              onClick={() => setFiltroAtivo("vendido")}
              className={`p-2 rounded-2xl border ${
                filtroAtivo === "vendido" ? cores.vendidos : ""
              }`}
            >
              Vendidos ({contadores.vendido})
            </button>
          </div>
        </div>

        {/* FILTRO MOBILE */}
        <div className="sm:hidden">
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

        {/* CARDS */}
        <div className="mt-6 mb-26 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl place-items-center">
          {lotesFiltrados.map((lote: Lote) => (
            <LotCard
              key={lote.id}
              status={lote.status}
              comprador={lote.seller_name}
              vendedor={lote.buyer_name}
              nameChacara={nameLote}
              NumeroSubLote={lote.number_sublots}
              idLotes={id}
              subLotes={true}
              idSublote={lote.id}
            />
          ))}
        </div>
      </main>

      {/* NAV MOBILE */}
      <div className="sm:hidden">
        <Navegador />
      </div>
    </div>
  );
};

export default SubLotesPage;
