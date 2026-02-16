// Pega todos os lotes
export async function GetLotes() {
  const url = import.meta.env.VITE_URL_CONEXAO + "loteamentos";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch lotes data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lotes data:", error);
  }
}
// Pega os sublotes pelo o id do loteamento
async function DadosLotes(id: string) {
  const url = import.meta.env.VITE_URL_CONEXAO + "loteamento/" + id;

  try {
    // console.log("url", url);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch lotes data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lotes data:", error);
    return null;
  }
}
export default DadosLotes;

// Busca os lotes pelo nome
export async function DadosBuscaInput(input: string) {
  const textLimpo = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "");
  const url = import.meta.env.VITE_URL_CONEXAO + "loteamentos/" + textLimpo;
  console.log("url", url);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch lotes data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lotes data:", error);
  }
}
