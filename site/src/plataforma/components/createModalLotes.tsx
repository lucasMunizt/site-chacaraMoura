import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import CreateLote from "@/plataforma/createLote";

interface CreateLoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateLoteModal = ({ open, onOpenChange }: CreateLoteModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogTitle>Novo Lote</DialogTitle>
        <CreateLote />
      </DialogContent>
    </Dialog>
  );
};

export default CreateLoteModal;
