type Lote = {
  status: "disponivel" | "reservado" | "vendido";
  // area: number;
  // price: number;
  // data: string;
  numberLote: number;
  buyer: string;
  name: string;
  // phone: string;
  Vendedorname: string;
  seller: string;
  id: string;
};

type Loteamento = {
  id: string;
  name: string;
  loteStatus: "disponivel" | "reservado" | "vendido";
  quantityLotes: number;
  lotes: Lote[];
};

export type { Lote, Loteamento };
