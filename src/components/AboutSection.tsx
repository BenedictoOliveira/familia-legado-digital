
import { Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-legal-gray">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-legal-gold/20 rounded-full filter blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Escritório de advocacia" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-3 right-10 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-legal-gold" />
                  <div>
                    <p className="text-sm text-legal-charcoal/70">Atuando desde</p>
                    <p className="text-xl font-bold text-legal-navy">2005</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-legal-navy">
              Sobre Nossa <span className="text-gradient-gold">Equipe</span>
            </h2>
            
            <p className="text-legal-charcoal mb-4">
              Com mais de 15 anos de experiência no mercado, somos especialistas em direito empresarial e planejamento patrimonial para famílias e empresários.
            </p>
            
            <p className="text-legal-charcoal mb-4">
              Nossa equipe é formada por advogados com ampla experiência no assessoramento de famílias empresárias e na estruturação de holdings familiares, proporcionando soluções jurídicas personalizadas para cada cliente.
            </p>
            
            <p className="text-legal-charcoal mb-6">
              Trabalhamos em estreita colaboração com contadores e consultores financeiros para oferecer uma abordagem multidisciplinar que atenda a todas as necessidades do seu planejamento patrimonial e sucessório.
            </p>
            
            <div className="flex gap-4">
              <div className="flex-1 border-t-2 border-legal-gold pt-4">
                <p className="text-3xl font-bold text-legal-navy">500+</p>
                <p className="text-sm text-legal-charcoal">Clientes Atendidos</p>
              </div>
              
              <div className="flex-1 border-t-2 border-legal-gold pt-4">
                <p className="text-3xl font-bold text-legal-navy">15+</p>
                <p className="text-sm text-legal-charcoal">Anos de Experiência</p>
              </div>
              
              <div className="flex-1 border-t-2 border-legal-gold pt-4">
                <p className="text-3xl font-bold text-legal-navy">100%</p>
                <p className="text-sm text-legal-charcoal">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
