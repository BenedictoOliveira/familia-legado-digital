
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-legal-navy via-legal-navy to-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Pronto para proteger o patrimônio da sua família?
            </h2>
            <p className="text-xl text-white/80 mb-6">
              Entre em contato hoje mesmo e descubra como podemos ajudar na estruturação da sua holding familiar.
            </p>
          </div>
          
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4 justify-end">
            <a href="#contact" className="bg-legal-gold hover:bg-legal-lightgold text-legal-navy font-semibold px-8 py-4 rounded-md transition-all duration-300 text-center">
              Agende uma Consulta
            </a>
            <a href="tel:(11)55555555" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
              Ligue Agora <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
