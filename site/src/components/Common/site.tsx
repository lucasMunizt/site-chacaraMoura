import { Header } from "./Header";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { CardComponent } from "./cardComponent";
import Benefits from "./beneficios";
import { CardComponent } from "./cardComponent";
import Footer from "./footer";

export const Site = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // duração da animação
      once: true, // anima apenas uma vez
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <section className=" mx-auto text-center p-8 px-4 font-display md:p-0 bg-[#213125]">
        <div className="md:flex">
          <img
            src="/img-gemini-semmarca.png"
            className="hidden w-[650px] mr-5 md:flex"
            alt="imagem gerada por IA de um terreno com casas ao fundo"
          />
          <div className="mx-auto flex flex-col items-center justify-center gap-9 px-6">
            <img src="/logo-semfundo.png" className="" alt="" />
            <h1
              className="text-[24px] font-bold text-white mb-4 underline
             decoration-yellow-400 decoration-2 underline-offset-6 uppercase"
            >
              Quem somos
            </h1>
            <div className="text-justify max-w-x1 mx-auto leading-relaxed">
              <p
                data-aos="fade-up"
                className="font-medium text-[18px] leading-normal text-white animate-jump 
              animate-alternate-reverse animate-duration-[600ms] 
              animate-delay-[400ms] md:max-w-3xl"
              >
                A Chácaras Moura é uma empresa especializada na venda de mini
                chácaras para quem busca o equilíbrio perfeito entre natureza e
                conforto. Localizada em uma área privilegiada, a Chácaras Moura
                oferece terrenos amplos, ideais para moradia longe do agito
                urbano, mas com toda a comodidade necessária. Mini chácaras com
                vista para a natureza exuberante, a empresa proporciona
                qualidade de vida e tranquilidade, além de um atendimento
                personalizado, facilitando a realização do sonho da sua casa de
                campo.
              </p>
            </div>
            <a
              href="https://wa.me/93991539111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="group mb-4 flex items-center gap-2 text-black font-medium font-ibmPlex bg-white 
             hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-3 rounded-2xl cursor-pointer"
              >
                <FaWhatsapp color="green" size={17} />
                Entre em contato
              </button>
            </a>
          </div>
        </div>
      </section>

      <Benefits />
      <CardComponent />
      <Footer />
    </div>
  );
};
