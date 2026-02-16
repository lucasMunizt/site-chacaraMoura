import React from "react";

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


interface AlertaProps {
  deletar: boolean;
  setDeletar: (value: boolean) => void;
}


const Alerta = ({ deletar, setDeletar }: AlertaProps) => {
  return (
     <AlertDialog open={deletar} onOpenChange={setDeletar}>
            <AlertDialogTrigger asChild>
              {/* <Button variant="outline">Show Dialog</Button> */}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Você deseja excluir este lote?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Isso excluirá permanentemente
                  o lote do nosso servidor.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={()=> setDeletar(false)}>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
  );
};

export default Alerta;
