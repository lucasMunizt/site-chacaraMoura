export async function DeleteLotes(id: string) {
  const roleUser = localStorage.getItem("role");
  try {
    const url =
      import.meta.env.VITE_URL_CONEXAO + "loteamentos/lotes/excluir/" + id;
    if (roleUser === "gerente")
      throw new Error("Error ao deletar acesso insuficente");
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) throw new Error("Failed to delete lote");
    return response;
  } catch (error) {
    console.error("Error deleting lote:", error);
  }
}

export async function DeleteSubLotes(id: string, numeroSubLote: number) {
  const roleUser = localStorage.getItem("role");
  try {
    const url =
      import.meta.env.VITE_URL_CONEXAO +
      "loteamentos/lotes/excluir/" +
      id +
      "/sublote/" +
      numeroSubLote;
    console.log("url", url);
    if (roleUser === "gerente")
      throw new Error("Error ao deletar acesso insuficente");

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) throw new Error("Failed to delete sublote");
  } catch (error) {
    console.error("Error deleting sublote:", error);
  }
}
