import React from "react";

import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteLotes } from "../services/DeleteLotes";
interface AlertaProps {
  deletar: boolean;
  setDeletar: (value: boolean) => void;
  idLotes: string;
}

const Alerta = ({ deletar, setDeletar, idLotes }: AlertaProps) => {
  const navigate = useNavigate();
  const deletarLote = async () => {
    try {
      await DeleteLotes(idLotes);
      setDeletar(false); // fecha o dialog
      console.log("Lote excluído com sucesso");
      navigate("/home");
      window.location.reload();
    } catch (err) {
      console.error("Erro ao excluir lote: ", err);
    }
  };
  return (
    <AlertDialog open={deletar} onOpenChange={setDeletar}>
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline">Show Dialog</Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você deseja excluir este lote?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o
            lote do nosso servidor.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setDeletar(false)}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={deletarLote}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alerta;
