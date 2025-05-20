
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO, Empresa de Construção",
      content: "A estruturação da holding familiar foi a melhor decisão para proteger nosso patrimônio. O atendimento foi excepcional e personalizado às nossas necessidades.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ana Rodrigues",
      position: "Empresária",
      content: "O planejamento sucessório realizado pela equipe trouxe tranquilidade para toda minha família. Profissionais altamente capacitados e atenciosos.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Marcelo Almeida",
      position: "Diretor Financeiro",
      content: "A redução da carga tributária obtida com a holding familiar superou nossas expectativas. Recomendo fortemente o serviço para empresários.",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Juliana Costa",
      position: "Proprietária, Rede de Lojas",
      content: "O conhecimento técnico da equipe nos deu segurança durante todo o processo de estruturação patrimonial. Profissionais excepcionais.",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Show 3 testimonials on desktop, 1 on mobile
  const visibleTestimonials = [];
  for (let i = 0; i < testimonials.length; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
    if (visibleTestimonials.length === 3) break;
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-legal-navy">
            O Que Nossos <span className="text-gradient-gold">Clientes</span> Dizem
          </h2>
          <p className="text-lg text-legal-charcoal max-w-2xl mx-auto">
            Confira os depoimentos de clientes que confiaram em nossa experiência para proteger seu patrimônio familiar.
          </p>
        </div>
        
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-legal-gold/30 mb-4" />
                <p className="mb-6 text-legal-charcoal">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-legal-navy">{testimonial.name}</p>
                    <p className="text-sm text-legal-charcoal/70">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="md:hidden">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-legal-gold/30 mb-4" />
              <p className="mb-6 text-legal-charcoal">{testimonials[currentIndex].content}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-legal-navy">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-legal-charcoal/70">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="p-2 border border-legal-navy rounded-full text-legal-navy hover:bg-legal-navy hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-2 border border-legal-navy rounded-full text-legal-navy hover:bg-legal-navy hover:text-white transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
