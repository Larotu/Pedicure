
import React from 'react';
import { Mail, Phone, MapPin, Globe, AtSign } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card-dark text-white pt-24 pb-12 rounded-t-[4rem] px-6 mt-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20">
        <div className="lg:col-span-2">
          <a href="#" className="text-4xl font-display font-semibold tracking-tight text-white mb-8 block">
            Sana<span className="text-primary">Ped</span>
          </a>
          <h2 className="text-5xl lg:text-7xl font-display leading-[1.1] mb-12">
            Let's get your feet<br/> <span className="text-white/40 italic font-light">healthy again.</span>
          </h2>
          <a 
            href="#book" 
            className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-primary text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1"
          >
            Book an Appointment
          </a>
        </div>

        <div>
          <h4 className="text-xl font-display font-semibold mb-8">Explore</h4>
          <ul className="space-y-5 text-white/50 font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Price List</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Client Reviews</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-display font-semibold mb-8">Visit Us</h4>
          <address className="not-italic text-white/50 space-y-6 font-medium">
            <div className="flex gap-4">
              <MapPin size={20} className="text-primary shrink-0" />
              <p>Keizersgracht 123<br/>1015 CJ Amsterdam</p>
            </div>
            <div className="flex gap-4">
              <Mail size={20} className="text-primary shrink-0" />
              <a href="mailto:info@sanaped.nl" className="hover:text-primary transition-colors">info@sanaped.nl</a>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-primary shrink-0" />
              <a href="tel:+31201234567" className="hover:text-primary transition-colors">+31 20 123 4567</a>
            </div>
          </address>
          
          <div className="flex gap-4 mt-10">
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
              <Globe size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
              <AtSign size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30 font-medium">
        <p>© 2024 SanaPed Medical Pedicure. Crafted with clinical care.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
