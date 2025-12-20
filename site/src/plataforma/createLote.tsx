import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const CreateLote = () => {
  const form = useForm({
    defaultValues: {
      nomeLote: "",
      quantidade: "",
      area: "",
    },
  });

  const onSubmit = () => {
    console.log("ola");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* NOME DO LOTE */}
        <FormField
          control={form.control}
          name="nomeLote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do lote</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Coloque o nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* QUANTIDADE */}
        <FormField
          control={form.control}
          name="quantidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade de lotes</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="200 lotes" />
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
              <FormLabel>Área do lote</FormLabel>
              <FormControl>
                <Input type="text" {...field} placeholder="1X200" />
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
