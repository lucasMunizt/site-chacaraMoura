//criação do usuario
export default async function CreateUser(
  name: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
) {
  const url = import.meta.env.VITE_URL_CONEXAO + "user/create";
  try {
    const createUser = {
      name,
      lastName,
      email,
      password,
      role,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createUser),
    });
    if (!response.ok) {
      throw new Error(`Erro ao fazer login: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("erro ao criar usuario", error);
  }
}
