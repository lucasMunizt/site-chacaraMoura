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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateLotes } from "../services/PostLotes";
import AlertaErro from "./alerta-erro";

const CreateLote = () => {
  const [nameLote, setNameLote] = useState("");
  const [numberLote, setNumberLote] = useState(0);
  const [area, setArea] = useState("");
  const [erroCriar, seterroCriar] = useState(false);
  const form = useForm({
    defaultValues: {
      numberLote,
      nameLote: "",
      area: "",
    },
  });

  const onSubmit = async () => {
    try {
      await CreateLotes(numberLote, nameLote, area);
      window.location.reload();
    } catch (error) {
      seterroCriar(true);
      console.error("error ao criar", error);
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

        {/* ÁREA */}
        <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Área do lote</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  placeholder="1X200"
                  value={area}
                  className="placeholder:text-black text-black"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-[#00C951]">
          Criar
        </Button>
      </form>
      <AlertaErro
        deletar={erroCriar}
        setDeletar={seterroCriar}
        ErroTitulo="Criar"
      />
    </Form>
  );
};

export default CreateLote;
