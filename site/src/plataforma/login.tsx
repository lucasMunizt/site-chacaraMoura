import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#213125]">
      <div className="bg-white lg:w-[960px] lg:h-[420px] rounded-3xl shadow-xl/30 m-auto">
        <div className="flex items-center gap-12 m-auto">
          <div className="hidden lg:inline">
            {/* <h4
              className="
                absolute 
                top-1/3
                text-center
                text-[#1f1a61]
                left-0
                right-0
                font-ibmPlex 
                font-black
                lg:left-[15%] 
                lg:-translate-y-1/2 
                lg:text-2xl
                md:text-6xl
                md:left-[5%] 
                md:text-left
                md:-translate-y-1/2 
                sm:text-5xl
                "
            >
              Plataforma Chácaras Moura!
            </h4>
            <img
              src="/logo-semfundo.png"
              className="absolute top-48 left-[25%]"
              alt=""
            /> */}
            <img
              src="/hero-chacara.jpg"
              alt=""
              className="w-[580px] h-[420px] rounded-l-3xl"
            />
          </div>
          <div className="pb-1 pt-1">
            <Card className="w-full max-w-sm lg:w-[300px]">
              <img
                src="/logo-mini-nova.jpg"
                className="w-[70px] h-[70px] bg-red-500 m-auto"
              />

              <CardHeader>
                <CardTitle>Login Mini Chácaras Moura</CardTitle>
                <CardDescription>Coloque seu email e senha</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="l19r587#"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-[#2a8f43]"
                >
                  Login
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
