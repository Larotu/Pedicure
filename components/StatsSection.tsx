
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-primary rounded-[2.5rem] p-12 flex flex-col justify-between text-white relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C12 22 17 18 17 13C17 11.34 15.66 10 14 10C12.34 10 11 11.34 11 13H13C13 12.45 13.45 12 14 12C14.55 12 15 12.45 15 13C15 15.19 12 19 12 19C12 19 9 15.19 9 13C9 12.45 9.45 12 10 12V10C8.34 10 7 11.34 7 13C7 18 12 22 12 22Z" />
            </svg>
          </div>
          <div>
            <p className="text-white/70 uppercase tracking-widest text-xs font-bold mb-4">Our Practice</p>
            <h3 className="font-display text-3xl font-medium">Excellence in numbers</h3>
          </div>
          <div className="mt-12 flex items-end gap-12">
            <div>
              <span className="block text-6xl font-display font-medium mb-1">2k+</span>
              <span className="text-sm text-white/70">Happy Patients</span>
            </div>
            <div>
              <span className="block text-6xl font-display font-medium mb-1">12+</span>
              <span className="text-sm text-white/70">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-card-light dark:bg-card-dark rounded-[2.5rem] p-12 flex flex-col justify-center border border-stone-100 dark:border-stone-800 shadow-soft">
          <h2 className="text-4xl font-display text-text-main-light dark:text-text-main-dark mb-6">
            Who <span className="text-primary italic">We Are</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed mb-6">
            At SanaPed, we understand the challenges of maintaining optimal foot health. We blend medical precision with aesthetic elegance.
          </p>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
            As the region's premier medical pedicure specialists, we've made it our mission to alleviate discomfort and restore confidence, ensuring every treatment is executed flawlessly from diagnosis to aftercare.
          </p>
        </div>

        <div className="lg:col-span-3 h-80 lg:h-auto rounded-[2.5rem] overflow-hidden relative group">
          <img 
            alt="Specialist examining foot" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwb-dZht6Z-DT5D9JZx4J2HA9_On4uBaMQSL_R-nVFCXoZRQdlOotJiV20UezVOpNX_RT5Llz-0JP_eMYVCWLW3fqQAWYS4kar9SMIq_ETcNoPIu7qlTlp1ETwy2ib5jArN91aENlcE54x69nQDwlwGcZ7srvzMbc2MvBw6-m_gCacpTOqJRsyrnQw0m0mdhAEVRh9-00tosruWyAafatVfDe_UP-F6mYnjXA661NAKDE6mBYOeL91REGNbdEEu2HrzPo8pZAIm1dh"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
