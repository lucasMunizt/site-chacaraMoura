import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// função para fazer Login
async function LoginPlataforma(email: string, password: string) {
  const url = import.meta.env.VITE_URL_CONEXAO + "user/login";

  try {
    const auth = getAuth();

    // login no firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // pegar token
    const token = await userCredential.user.getIdToken();

    // enviar token para backend
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao fazer login: ${response.status}`);
    }

    const data = await response.json();

    return data;
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
