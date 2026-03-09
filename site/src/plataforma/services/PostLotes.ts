
// função para fazer Login
async function LoginPlataforma(email: string, password: string) {
  const url = import.meta.env.VITE_URL_CONEXAO + "user/login";

  try {
    const loginData = {
      email,
      password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error(`Erro ao fazer login: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}
export default LoginPlataforma;
// Função para criar lotes
export async function CreateLotes(
  quantityLotes: number,
  nameLote: string,
  area: string,
) {
  const roleUser = localStorage.getItem("role");
  const url = import.meta.env.VITE_URL_CONEXAO + "criandolote";
  console.log("post url", url);
  try {
    const loteData = {
      quantityLotes,
      name: nameLote,
      area,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loteData),
    });
    if (roleUser === "gerente")
      throw new Error("Error ao criar! acesso insuficente");
    if (!response.ok) {
      throw new Error(`Erro ao criar lote: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar lote:", error);
    throw error;
  }
}
