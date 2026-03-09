import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import CreateLote from "@/plataforma/components/createLote";

interface CreateLoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateLoteModal = ({ open, onOpenChange }: CreateLoteModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent closeInconColor="black" className="max-h-[90vh] overflow-y-auto bg-white">
        <DialogTitle className="text-white">Novo Lote</DialogTitle>
        <CreateLote />
      </DialogContent>
    </Dialog>
  );
};

export default CreateLoteModal;
