type Lote = {
  status: "disponivel" | "reservado" | "vendido";
  number_sublots: number;
  buyer_name: string;
  name: string;
  Vendedorname: string;
  seller_name: string;
  id: string;
};

type Loteamento = {
  id: string;
  name: string;
  status: "disponivel" | "reservado" | "vendido";
  quantity_lotes: number;
  lotes: Lote[];
};

type User = {
  name: string;
  lastname: string;
  role: string;
  id: number;
};

type SellerDados = {
  lot_id: number;
  nome_lote: string;
  seller_name: string;
  total_vendidos: number;
};

export type { Lote, Loteamento, User, SellerDados };
