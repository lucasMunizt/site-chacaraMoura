import { UserRound } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      once: true, // anima apenas uma vez
    });
  }, []);
  return (
    <header className="relative w-full h-full overflow-x-hidden">
      {/* Imagem de fundo */}
      <img
        src="/hero-chacara.jpg"
        alt="imagem de fundo header"
        className="
                w-full
                h-90
                 object-cover
                 object-center
                 brightness-75
                  md:h-full"
      />
      <img
        src="/chacaras-moura-test2.svg"
        className="absolute top-1/12 left-[5%] w-44"
        alt=""
      />
      <h1
        className="
       absolute 
       top-1/3
       text-center
       text-white 
       text-3xl 
       left-0
       right-0
       font-ibmPlex 
       font-black
       lg:left-[5%] 
       lg:-translate-y-1/2 
       lg:text-7xl
       md:text-6xl
       md:left-[5%] 
       md:text-left
       md:-translate-y-1/2 
       sm:text-5xl
       "
      >
        Agricultor aqui você <br /> têm valor!
      </h1>
      <div
        className="
         absolute
         flex
         items-center
         gap-2
         top-[75%] 
         justify-center
         right-0
         m-auto
         left-0
         md:justify-end 
         md:right-8
        "
      >
        <a
          href="https://wa.me/93991539111"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:shadow-lg transition-all border-none
          duration-300 hover:-translate-y-1 font-ibmPlex font-medium
          md:flex md:gap-1 md:p-2.5 md:bg-[#E6E6E6] md:rounded-2xl
          
          "
        >
          <FaWhatsapp
            className="cursor-pointer text-white md:text-black"
            size={24}
          />
          <p className="hidden md:flex">Entrar em contato</p>
        </a>
        <div
          className="flex items-center cursor-pointer gap-1 
        bg-[#E6E6E6] justify-center p-2.5 hover:shadow-lg transition-all 
        duration-300 hover:-translate-y-1 border-none rounded-2xl"
        >
          <UserRound className="cursor-pointer" color="black" size={20} />
          <a
            onClick={() => {
              navigate("/login");
            }}
            className="text-black font-medium font-ibmPlex"
          >
            Plataforma
          </a>
        </div>
      </div>
    </header>
  );
};
