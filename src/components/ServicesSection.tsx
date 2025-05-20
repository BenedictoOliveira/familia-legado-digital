
import { Users, Scale, Landmark, Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-legal-gold" />,
      title: "Holding Familiar",
      description: "Estruturação jurídica ideal para proteger e administrar o patrimônio familiar, garantindo segurança e planejamento sucessório."
    },
    {
      icon: <Landmark className="h-12 w-12 text-legal-gold" />,
      title: "Planejamento Sucessório",
      description: "Organize a sucessão patrimonial de forma eficiente, evitando conflitos familiares e minimizando a incidência de impostos."
    },
    {
      icon: <Scale className="h-12 w-12 text-legal-gold" />,
      title: "Proteção Patrimonial",
      description: "Estruturas jurídicas para proteger seu patrimônio contra riscos empresariais, divórcios e outros imprevistos."
    },
    {
      icon: <Gavel className="h-12 w-12 text-legal-gold" />,
      title: "Consultoria Tributária",
      description: "Estratégias legais para otimizar a carga tributária sobre seu patrimônio e investimentos."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-legal-navy">Nossos Serviços</h2>
          <p className="text-lg text-legal-charcoal max-w-2xl mx-auto">
            Oferecemos soluções jurídicas completas para a proteção e gestão do seu patrimônio familiar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-legal-gold/10">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-legal-navy">{service.title}</h3>
                  <p className="text-legal-charcoal">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="cta-button inline-flex items-center gap-2">
            Saiba Mais Sobre Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
