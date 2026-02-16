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
  quantityLotes: number;
  lotes: Lote[];
};

export { Lote, Loteamento };