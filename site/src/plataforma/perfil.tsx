import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import CreateUserDialog from "./components/create-user";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logout } from "./services/Login";
interface PerfilProps {
  abrir: boolean;
  setAbrir: (value: boolean) => void;
}
const Perfil = ({ abrir, setAbrir }: PerfilProps) => {
  const name = localStorage.getItem("name") || "";
  const role = localStorage.getItem("role") || "";
  const uid = localStorage.getItem("uid") || "";
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const submmitlogout = async () => {
    try {
      const response = await Logout(uid);
      if (response) {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.error("error ao executar o logout", error);
    }
  };

  return (
    <>
      <Drawer direction="right" open={abrir} onOpenChange={setAbrir}>
        <DrawerContent>
          <DrawerClose asChild>
            <Button className="w-1 flex items-end" variant="outline">
              X
            </Button>
          </DrawerClose>
          <DrawerHeader>
            <div className="flex items-center gap-3">
              {/* <div className="w-[40px] h-[40px] bg-gray-300 border-0 rounded-3xl items-center flex justify-center font-ibmPlex font-bold">
              LM
            </div> */}
              <Avatar>
                <AvatarImage />
                <AvatarFallback>
                  {name?.split(" ")?.[0]?.[0].toUpperCase()}
                  {name?.split(" ")?.[1]?.[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <DrawerTitle>
                Nome: {name?.charAt(0).toUpperCase() + name?.slice(1)}
              </DrawerTitle>
            </div>
            <DrawerDescription>Cargo: {role}</DrawerDescription>
          </DrawerHeader>
          <DrawerDescription></DrawerDescription>
          <DrawerFooter>
            <Button onClick={submmitlogout}>
              {" "}
              <LogOut />
              Sair
            </Button>
            {role == "admin" && (
              <Button
                onClick={() => {
                  setOpen(true);
                }}
              >
                Criar Conta
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <CreateUserDialog open={open} setOpen={setOpen} />
    </>
  );
};
export default Perfil;
