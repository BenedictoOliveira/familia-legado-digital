
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

const Index = () => {
  useEffect(() => {
    // Change title on component mount
    document.title = "FamiliaLegal | Holding Familiar e Proteção Patrimonial";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
