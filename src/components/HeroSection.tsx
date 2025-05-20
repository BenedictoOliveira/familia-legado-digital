
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-legal-gray to-white">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-legal-navy leading-tight">
            Proteja seu <span className="text-gradient-gold">patrimônio</span> e o legado da sua família
          </h1>
          <p className="text-lg md:text-xl text-legal-charcoal mb-8">
            Holding familiar: a solução jurídica ideal para proteção patrimonial, planejamento sucessório e redução da carga tributária.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="cta-button flex items-center justify-center gap-2">
              Agende uma Consulta <ArrowRight size={16} />
            </a>
            <a href="#services" className="bg-transparent border-2 border-legal-navy text-legal-navy hover:bg-legal-navy hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
              Nossos Serviços
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-legal-gold/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-legal-gold/20 rounded-full filter blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Família e patrimônio" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
