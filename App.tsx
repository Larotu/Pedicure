
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import USPSection from './components/USPSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar onToggleTheme={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <main>
        <Hero />
        <StatsSection />
        <ProcessSection />
        <USPSection />
        <MenuSection />
      </main>

      <Footer />
      
      {/* AI Consultant floating widget */}
      <AIConsultant />
    </div>
  );
};

export default App;
