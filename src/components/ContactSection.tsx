
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-legal-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Entre em <span className="text-legal-gold">Contato</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas e oferecer a melhor solução jurídica para a proteção do seu patrimônio familiar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-legal-navy">Agende uma Consulta</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-legal-charcoal mb-1">Nome Completo</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-legal-charcoal mb-1">E-mail</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-legal-charcoal mb-1">Telefone</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-legal-charcoal mb-1">Mensagem</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    rows={4} 
                    className="w-full" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-legal-gold hover:bg-legal-lightgold text-legal-navy font-semibold transition-colors"
                >
                  Enviar Mensagem <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-legal-gold">Informações de Contato</h3>
                <p className="text-white/80 mb-6">
                  Entre em contato conosco para agendar uma consulta com nossos especialistas em holding familiar e planejamento sucessório.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-legal-gold/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-legal-gold" />
                </div>
                <div>
                  <p className="text-legal-gold font-medium mb-1">Telefone</p>
                  <p className="text-white">(11) 5555-5555</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-legal-gold/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-legal-gold" />
                </div>
                <div>
                  <p className="text-legal-gold font-medium mb-1">E-mail</p>
                  <p className="text-white">contato@familialegal.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-legal-gold/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-legal-gold" />
                </div>
                <div>
                  <p className="text-legal-gold font-medium mb-1">Endereço</p>
                  <p className="text-white">Av. Paulista, 1000, São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
