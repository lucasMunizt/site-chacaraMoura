import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-[#213125] from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Realize o Sonho da Sua Chácara
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e agende uma visita. Nossa equipe está
            pronta para ajudar você a encontrar a chácara perfeita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:++55-93-991539111">
              <Button
                size="lg"
                className="text-lg  w-[200px] px-8 bg-white text-primary hover:bg-white/10 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar agora
              </Button>
            </a>
            <a
              href="https://wa.me/93991539111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 w-[200px] border-white text-black hover:bg-white/10"
              >
                <FaWhatsapp color="green" size={17} />
                Entre em contato
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="
           text-lg px-8 w-[200px] border-white text-black hover:bg-white/10
            "
              onClick={() => {
                navigate("/login");
              }}
            >
              <UserRound className="cursor-pointer" color="black" size={20} />
              Plataforma
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Atendimento de segunda a sábado, das 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
