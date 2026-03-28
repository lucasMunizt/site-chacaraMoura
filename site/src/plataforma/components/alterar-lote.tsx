import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { AlterarStatusSubLote } from "../services/Putlotes";
import AlertaErro from "./alerta-erro";
interface AlterarLoteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id?: string;
  numberLote: number;
  idLotes?: string;
}

type FormValues = {
  status: "disponivel" | "reservado" | "vendido";
  buyer: string;
  seller: string;
  commission: number;
};

const AlterarLote = ({
  open,
  onOpenChange,
  id,
  numberLote,
  idLotes,
}: AlterarLoteProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      status: "disponivel",
      buyer: "",
      seller: "",
      commission: 0,
    },
  });
  const [deletarFull, setDeletarFull] = useState(false);
  const [erroDeletar, setErroDeletar] = useState(false);

  const onSubmit = async (data: FormValues) => {
    if (!id) {
      setDeletarFull(true);
      return;
    }
    console.log("commision number ", data.commission);

    const alterar = await AlterarStatusSubLote(
      id,
      numberLote,
      idLotes,
      data.status,
      data.buyer || undefined,
      data.seller || undefined,
      data.commission,
    );

    if (alterar) {
      window.location.reload();
    } else {
      setErroDeletar(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white">
        <DialogTitle className="text-black">Alterar Lote</DialogTitle>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* STATUS */}
            <FormField
              control={form.control}
              name="status"
              render={() => (
                <FormItem>
                  <FormLabel className="text-black">Status do lote</FormLabel>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full border rounded-md p-2 bg-[#d2ebda]">
                        {form.watch("status")}
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-52">
                        <DropdownMenuItem
                          onClick={() => form.setValue("status", "disponivel")}
                        >
                          Disponível
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() => form.setValue("status", "reservado")}
                        >
                          Reservado
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() => form.setValue("status", "vendido")}
                        >
                          Vendido
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* COMPRADOR */}
            <FormField
              control={form.control}
              name="buyer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Nome do comprador
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nome do comprador"
                      className="placeholder:text-black text-black"
                      disabled={form.watch("status") !== "vendido"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* VENDEDOR */}
            <FormField
              control={form.control}
              name="seller"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Nome do vendedor</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nome do vendedor"
                      className="placeholder:text-black text-black"
                      disabled={form.watch("status") !== "vendido"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* comissão */}
            <FormField
              control={form.control}
              name="commission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Adicione a comissão
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="R$ 0,00"
                      className="placeholder:text-black text-black"
                      disabled={form.watch("status") !== "vendido"}
                      value={
                        field.value
                          ? (field.value / 100).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })
                          : ""
                      }
                      onChange={(e) => {
                        const rawValue = e.target.value.replace(/\D/g, ""); // só números

                        const numberValue = Number(rawValue);

                        field.onChange(numberValue); // salva em centavos
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-blue-950">
              Salvar alterações
            </Button>
          </form>
          <AlertaErro
            deletar={erroDeletar}
            setDeletar={setErroDeletar}
            ErroTitulo="Erro ao alterar lote."
          />

          <AlertaErro
            deletar={deletarFull}
            setDeletar={setDeletarFull}
            ErroTitulo="ID do lote não encontrado"
          />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AlterarLote;
