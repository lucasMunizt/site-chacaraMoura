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
import { useEffect, useState } from "react";
import CreateUserDialog from "./components/create-user";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getUser } from "./services/GetLotes";
import { User } from "hooks/TypeLoteamento";
interface PerfilProps {
  abrir: boolean;
  setAbrir: (value: boolean) => void;
}
const Perfil = ({ abrir, setAbrir }: PerfilProps) => {
  // const name = localStorage.getItem("name") || "";
  // const role = localStorage.getItem("role") || "";
  const uid = localStorage.getItem("uid") || "";
  const [open, setOpen] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [lastNameUser, setlastName] = useState("");
  const [role, setRole] = useState("");
  // const [dados, setDados] = useState<User[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function dadosUser() {
      try {
        const response = await getUser();
        const users = response.result;
        const usuario = users.find((user: User) => user.id === Number(uid));

        if (usuario) {
          setNameUser(usuario.name);
          setlastName(usuario.lastname);
          setRole(usuario.role);
        }
      } catch (error) {
        console.error("dados não encotrados", error);
      }
    }
    dadosUser();
  }, [uid]);

  const submmitlogout = async () => {
    try {
      localStorage.clear();
      navigate("/login");
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
                  {nameUser?.split(" ")?.[0]?.[0]?.toUpperCase()}
                  {lastNameUser?.split(" ")?.[0]?.[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <DrawerTitle>
                Nome:{" "}
                {nameUser?.charAt(0).toUpperCase() +
                  nameUser?.slice(1) +
                  " " +
                  lastNameUser?.charAt(0).toUpperCase() +
                  lastNameUser?.slice(1)}
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
