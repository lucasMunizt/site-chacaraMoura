export async function AlterarStatusSubLote(
  idSublote: string,
  numberLote: number,
  idLotes?: string,
  status?: string,
  buyer?: string,
  seller?: string,
  commission?: number,
) {
  try {
    const url =
      import.meta.env.VITE_URL_CONEXAO +
      "loteamentos/lotes/sublotes/" +
      idLotes +
      "/editar/" +
      numberLote;
    console.log("url: ", url);

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        status,
        buyerName: buyer,
        sellerName: seller,
        commission: commission,
      }),
    });
    if (!response.ok) throw new Error("Failed to update sublote");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating sublote:", error);
  }
}

export async function updateStatusCommission(
  id: number,
  selleName: string,
  status: string,
) {
  try {
    const url =
      import.meta.env.VITE_URL_CONEXAO + "loteamentos/sublotes/comissao/" + id;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        sellerName: selleName,
        stausCommission: status,
      }),
    });
    if (!response.ok) throw new Error("Failed to update sublote");
    return response;
  } catch (error) {
    console.error("erro ao alterar estatus da comisão", error);
  }
}
