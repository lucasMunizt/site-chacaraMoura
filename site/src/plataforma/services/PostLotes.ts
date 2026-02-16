// Função para criar lotes
export async function CreateLotes(
  quantityLotes: number,
  nameLote: string,
  area: string,
) {
  const url = import.meta.env.VITE_URL_CONEXAO + "criandolote";
  console.log("post url", url);
  try {
    const loteData = {
      quantityLotes,
      name: nameLote,
      area,
    };
    console.log("lote data", loteData);
    console.log(
      "nomeLotes",
      nameLote,
      "\n",
      "quantidade",
      quantityLotes,
      "\n",
      "area",
      area,
    );

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loteData),
    });
    if (!response.ok) {
      throw new Error(`Erro ao criar lote: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar lote:", error);
    throw error;
  }
}
