
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Who We Are', href: '#about' },
    { label: 'Treatments', href: '#services' },
    { label: 'The Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 ${scrolled ? 'top-4' : 'top-8'}`}>
      <div className={`max-w-6xl mx-auto rounded-full px-8 py-4 flex justify-between items-center shadow-soft border transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-card-dark/80 backdrop-blur-md border-stone-200 dark:border-stone-800' 
          : 'bg-white/90 dark:bg-card-dark/90 backdrop-blur-sm border-transparent'
      }`}>
        <a href="#" className="text-2xl font-display font-semibold tracking-tight text-primary">
          Sana<span className="text-text-main-light dark:text-white">Ped</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-text-muted-light dark:text-text-muted-dark"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a 
            href="#book" 
            className="hidden sm:block bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
          >
            Book Appointment
          </a>

          <button 
            className="md:hidden p-2 text-text-main-light dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-white dark:bg-card-dark rounded-3xl p-8 shadow-xl border border-stone-100 dark:border-stone-800 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-lg font-medium text-text-main-light dark:text-text-main-dark hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#book" 
              className="bg-primary text-white py-4 rounded-2xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
