import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertaProps {
  deletar: boolean;
  setDeletar: (value: boolean) => void;
  ErroTitulo: string;
}
const AlertaErro = ({ deletar, setDeletar, ErroTitulo }: AlertaProps) => {
  return (
    <AlertDialog open={deletar} onOpenChange={setDeletar}>
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline">Show Dialog</Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Erro ao {ErroTitulo}!</AlertDialogTitle>
          <AlertDialogDescription className="font-ibmPlex font-black">
            Error ao {ErroTitulo}! acesso insuficente!
          </AlertDialogDescription>
          <AlertDialogCancel className="mt-3" onClick={() => setDeletar(false)}>
            ok
          </AlertDialogCancel>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertaErro;
