
//criação do usuario
export default async function CreateUser(
  name: string,
  lastName: string,
  email: string,
  role: string,
  password: string,
  passwordConfirm: string,
) {
  const url = import.meta.env.VITE_URL_CONEXAO + "user/create";
  try {
    const createUser = {
      name,
      lastName,
      email,
      role,
      password,
      passwordConfirm,
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
export async function Logout(uuid: string) {
  try {
    const url = import.meta.env.VITE_URL_CONEXAO + "logout";
    const data = {
      uuid,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Erro ao fazer login: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("error ao executar o logout", error);
  }
}
