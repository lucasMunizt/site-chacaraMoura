import React from "react";
import {
  AlertDialog,
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
  textMessage: string;
  titulo: string;
}

const AlertaFull = ({ deletar, setDeletar, textMessage, titulo }: AlertaProps) => {
  return (
    <AlertDialog open={deletar} onOpenChange={setDeletar}>
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline">Show Dialog</Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{titulo}</AlertDialogTitle>
          <AlertDialogDescription>{textMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setDeletar(false)}>
            ok
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertaFull;
