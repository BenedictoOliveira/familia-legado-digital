
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-legal-navy">
            <span className="text-gradient-gold">Familia</span>Legal
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-legal-navy hover:text-legal-gold transition-colors">Serviços</a>
          <a href="#benefits" className="text-legal-navy hover:text-legal-gold transition-colors">Benefícios</a>
          <a href="#about" className="text-legal-navy hover:text-legal-gold transition-colors">Sobre</a>
          <a href="#testimonials" className="text-legal-navy hover:text-legal-gold transition-colors">Depoimentos</a>
          <a href="#contact" className="cta-button">Contato</a>
        </nav>
        
        <button className="md:hidden text-legal-navy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 py-4 shadow-lg">
          <div className="container-custom flex flex-col gap-4">
            <a href="#services" className="text-legal-navy hover:text-legal-gold transition-colors py-2" onClick={toggleMenu}>Serviços</a>
            <a href="#benefits" className="text-legal-navy hover:text-legal-gold transition-colors py-2" onClick={toggleMenu}>Benefícios</a>
            <a href="#about" className="text-legal-navy hover:text-legal-gold transition-colors py-2" onClick={toggleMenu}>Sobre</a>
            <a href="#testimonials" className="text-legal-navy hover:text-legal-gold transition-colors py-2" onClick={toggleMenu}>Depoimentos</a>
            <a href="#contact" className="cta-button text-center my-2" onClick={toggleMenu}>Contato</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
