import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateLotes } from "../services/PostLotes";
import AlertaErro from "./alerta-erro";
import AlertaFull from "./alerta-full";

const CreateLote = () => {
  const [nameLote, setNameLote] = useState("");
  const [numberLote, setNumberLote] = useState(0);
  const [deletar, setDeletar] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [area, setArea] = useState("");
  const [erroCriar, seterroCriar] = useState(false);
  const form = useForm({
    defaultValues: {
      numberLote,
      nameLote: "",
    },
  });

  const onSubmit = async () => {
    const role = localStorage.getItem("role");
    if (loading) return;
    setLoading(true);
    try {
      if (role === "admin") {
        await CreateLotes(numberLote, nameLote);
        window.location.reload();
      } else {
        console.log("Erro ao criar. nivel insuficiente!");
        setDeletar(true);
        navigate("/home");
      }
    } catch (error) {
      seterroCriar(true);
      console.error("error ao criar", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* NOME DO LOTE */}
        <FormField
          control={form.control}
          name="nameLote"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Nome do lote</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Coloque o nome"
                  {...field}
                  value={nameLote}
                  className="placeholder:text-black text-black"
                  onChange={(e) => setNameLote(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* numberLote */}
        <FormField
          control={form.control}
          name="numberLote"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Quantidade de lotes</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder="Coloque a quantidade de lotes"
                  className="placeholder:text-black text-black"
                  value={numberLote}
                  onChange={(e) => {
                    setNumberLote(Number(e.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={`w-full bg-[#00C951] ${loading && "opacity-50 cursor-not-allowed"}`}
        >
          {loading ? "Criando..." : "Criar"}
        </Button>
      </form>
      <AlertaErro
        deletar={erroCriar}
        setDeletar={seterroCriar}
        ErroTitulo="Criar"
      />
      <AlertaFull
        textMessage="Erro ao criar. nivel insuficiente!"
        titulo="Acesso insuficiente"
        setDeletar={setDeletar}
        deletar={deletar}
      />
    </Form>
  );
};

export default CreateLote;
