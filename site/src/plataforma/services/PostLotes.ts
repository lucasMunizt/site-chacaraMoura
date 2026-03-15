// função para fazer Login
async function LoginPlataforma(email: string, password: string) {
  const url = import.meta.env.VITE_URL_CONEXAO + "login";
  const dados = {
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
    if (!response.ok) {
      throw new Error("erro ao fazer login");
    }

    return response.json();
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}

export default LoginPlataforma;

// Função para criar lotes
export async function CreateLotes(quantityLotes: number, nameLote: string) {
  // const roleUser = localStorage.getItem("role");
  const url = import.meta.env.VITE_URL_CONEXAO + "createlote";
  console.log("post url", url);
  try {
    const loteData = {
      quantityLotes,
      name: nameLote,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(loteData),
    });
    // if (roleUser === "gerente")
    //   throw new Error("Error ao criar! acesso insuficente");
    if (!response.ok) {
      throw new Error(`Erro ao criar lote: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar lote:", error);
    throw error;
  }
}
