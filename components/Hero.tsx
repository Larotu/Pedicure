
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto relative group">
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full dark:bg-primary/10 -z-10 animate-pulse"></div>
        <div className="relative overflow-hidden rounded-[2.5rem] h-[80vh] min-h-[600px] w-full shadow-2xl">
          <img 
            alt="Serene spa environment" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOJDr9g8lt_LMQOaRK3x8_r-Iq5V-qfdyNP_QOXwvLybIZdBAeIBJpBaa2tyk9i8P1jEUmi32fPk-c6dI-wgG30O_VYr2VDUR9lziw03LMBWzZgY-IafEPITWCefOgDNWvJU3lG98S7oRYaZ41vsGSLJM6eh3gboaEZ3L9vO3f7Jm2T_v7Exui5nvW9UM0vpXFbn0iRrf0soUv2bN2ZTe340fwKDZOV-PczyAbIKCx1M6Sc3DH8whGjKnAb8AQILrH6SZ-YLdfL7Pp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl animate-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-7xl font-display font-medium text-white mb-4 leading-tight">
                Restoring Comfort <br/>
                <span className="italic font-light opacity-90">Through Medical Care</span>
              </h1>
              <p className="text-white/80 text-lg font-light mb-8 max-w-md">
                Experience professional podiatry and medical pedicure treatments in a serene, luxurious environment designed for your well-being.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl max-w-sm animate-in slide-in-from-right-8 duration-700 delay-200">
              <p className="text-white/90 text-sm mb-6 leading-relaxed">
                SanaPed simplifies foot health care, blending clinical expertise with spa-like tranquility in Amsterdam & Utrecht.
              </p>
              <a 
                href="#book" 
                className="inline-flex items-center gap-3 bg-white text-text-main-light px-8 py-4 rounded-2xl text-sm font-bold hover:bg-stone-100 transition-all w-full justify-center group/btn"
              >
                Start Your Treatment
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
