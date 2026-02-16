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

const CreateLote = () => {
  const [nameLote, setNameLote] = useState("");
  const [numberLote, setNumberLote] = useState(0);
  const [area, setArea] = useState("");

  const form = useForm({
    defaultValues: {
      numberLote,
      nameLote: "",
      area: "",
    },
  });

  const onSubmit = () => {
    CreateLotes(numberLote, nameLote, area);
    window.location.reload();
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
              <FormLabel className="text-white">Nome do lote</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Coloque o nome"
                  {...field}
                  value={nameLote}
                  className="placeholder:text-white text-white"
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
              <FormLabel className="text-white">Quantidade de lotes</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder="Coloque a quantidade de lotes"
                  className="placeholder:text-white text-white"
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
              <FormLabel className="text-white">Área do lote</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  placeholder="1X200"
                  value={area}
                  className="placeholder:text-white text-white"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-blue-950">
          Criar
        </Button>
      </form>
    </Form>
  );
};

export default CreateLote;
