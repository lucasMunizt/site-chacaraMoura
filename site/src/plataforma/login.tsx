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
import LoginPlataforma from "./services/PostLotes";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [falseLogin, setfalseLogin] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await LoginPlataforma(email, password);
      if (response) {
        const valorAuthentication = "true";
        localStorage.setItem("token", response.result.token);
        localStorage.setItem("name", response.result.user.name);
        localStorage.setItem("uid", response.result.user.id);
        localStorage.setItem("role", response.result.user.role);
        localStorage.setItem("authetication", valorAuthentication);
        console.log("role:", response.result.user.role);
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setfalseLogin(true);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#213125]">
      <div className="bg-white lg:w-[960px] lg:h-[420px]  sm:w-[600px] rounded-3xl shadow-xl/30 m-auto">
        <div className="flex items-center gap-12 m-auto">
          <div className="hidden sm:inline">
            <img
              src="/hero-chacara.jpg"
              alt=""
              className="w-[580px] h-[420px] rounded-l-3xl"
            />
          </div>
          <div className="sm:mr-7">
            <Card className="w-72  lg:w-[300px] block sm:hidden">
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
                    <div className="grid gap-2 mt-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {falseLogin && (
                        <span className="text-red-500 font-ibmPlex font-medium text-[12px]">
                          {" "}
                          Email ou senha Incorreta
                        </span>
                      )}
                    </div>
                    <div className="grid gap-2">
                      <div className=" relative">
                        <div className="flex-col">
                          <Label htmlFor="password">Senha</Label>

                          <Input
                            id="password"
                            className="mt-2"
                            type={showPassword ? "text" : "password"}
                            placeholder="l19r587#"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        {falseLogin && (
                          <span className="text-red-500 font-ibmPlex font-medium text-[12px]">
                            {" "}
                            Email ou senha Incorreta
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-[32px] text-gray-500 hover:text-black"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mt-7 bg-[#2a8f43]"
                >
                  Login
                </Button>
              </CardFooter>
            </Card>
            <div className=" hidden sm:flex  items-center flex-col justify-center  w-[334.77px] h-[224px]">
              <img
                src="/logo-mini-nova.jpg"
                className="w-[70px] h-[70px] m-auto"
              />
              <h4 className="font-ibmPlex">Login Mini Chácaras Moura</h4>
              <h5 className="font-ibmPlex mb-2">Coloque seu email e senha</h5>

              <div className="flex flex-col items-center justify-center">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    className="w-[334.77px] mt-2 pr-10"
                    type="email"
                    placeholder="email@exemplo.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {falseLogin && (
                    <span className="text-red-500 font-ibmPlex font-medium text-[12px]">
                      {" "}
                      Email ou senha Incorreta
                    </span>
                  )}
                </div>
                <div className="relative">
                  <Label className="mt-2" htmlFor="password">
                    Senha
                  </Label>

                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-[334.77px] mt-2 pr-10"
                    placeholder="l19r587#"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {falseLogin && (
                    <span className="text-red-500 font-ibmPlex font-medium text-[12px]">
                      {" "}
                      Email ou senha Incorreta
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-[40px] text-gray-500 hover:text-black"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <Button
                  className="mt-4 w-full flex items-center"
                  onClick={handleSubmit}
                >
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
