
import { Phone } from "lucide-react";

const WhatsappButton = () => {
  return (
    <a 
      href="https://wa.me/551155555555" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default WhatsappButton;
