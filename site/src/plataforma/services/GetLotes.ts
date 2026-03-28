// Pega todos os lotes
export async function GetLotes() {
  const url = import.meta.env.VITE_URL_CONEXAO + "loteamentos";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching lotes data:", error);
  }
}
// Pega os sublotes pelo o id do loteamento
async function DadosLotes(id: string) {
  const url = import.meta.env.VITE_URL_CONEXAO + "loteamentos/lotes/" + id;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lotes data:", error);
    return null;
  }
}
export default DadosLotes;

export async function getUser() {
  try {
    const url = import.meta.env.VITE_URL_CONEXAO + "user";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

export async function getTopSellerFull() {
  try {
    const url =
      import.meta.env.VITE_URL_CONEXAO + "loteamentos/listamaioresvendedores";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
