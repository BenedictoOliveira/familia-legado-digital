
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Redução da carga tributária sobre a transmissão de bens",
    "Proteção patrimonial contra riscos empresariais",
    "Prevenção de conflitos na sucessão familiar",
    "Administração profissional do patrimônio",
    "Planejamento sucessório eficiente",
    "Preservação do controle familiar sobre os negócios"
  ];

  return (
    <section id="benefits" className="section-padding bg-legal-navy text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher uma <span className="text-legal-gold">Holding Familiar</span>?
            </h2>
            <p className="text-lg mb-8 text-white/80">
              A constituição de uma holding familiar representa uma estratégia jurídica sofisticada que proporciona múltiplos benefícios para a proteção e gestão do patrimônio familiar.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-legal-gold rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-legal-navy" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <a href="#contact" className="bg-legal-gold hover:bg-legal-lightgold text-legal-navy font-semibold px-6 py-3 rounded-md transition-all duration-300 inline-block">
                Consulta Personalizada
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-legal-gold/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-legal-gold/20 rounded-full filter blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Benefícios da Holding Familiar" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
