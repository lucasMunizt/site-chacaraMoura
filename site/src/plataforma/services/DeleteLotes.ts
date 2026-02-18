export async function DeleteLotes(id: string) {
  try {
    const url =
      import.meta.env.VITE_URL_CONEXAO + "loteamentos/" + id + "/lotes";
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to delete lote");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting lote:", error);
  }
}

export async function DeleteSubLotes (id: string, numeroSubLote: number) {
  try{
    const url = import.meta.env.VITE_URL_CONEXAO + "loteamentos/" + id + "/lotes/" + numeroSubLote;
    console.log("url", url);
    
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to delete sublote");
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error deleting sublote:", error);
  }
}