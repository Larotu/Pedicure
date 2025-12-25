
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display text-text-main-light dark:text-text-main-dark mb-16 max-w-2xl leading-[1.1]">
          How We <span className="text-primary italic">Simplify</span> Your<br/> Recovery Journey
        </h2>
        
        <div className="relative mt-20">
          <div className="absolute top-0 left-0 w-full h-full -mt-6 transform scale-[0.98] bg-stone-100 dark:bg-stone-800 rounded-[3rem] -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full -mt-12 transform scale-[0.96] bg-stone-50 dark:bg-stone-900 rounded-[3rem] -z-20"></div>
          
          <div className="relative z-10 bg-card-light dark:bg-card-dark rounded-[3rem] overflow-hidden shadow-xl-soft border border-stone-100 dark:border-stone-800 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-between order-2 lg:order-1">
              <span className="text-[12rem] font-display text-primary/10 -ml-12 -mt-16 block leading-none select-none">01</span>
              <div className="-mt-12">
                <h3 className="text-4xl font-display text-text-main-light dark:text-text-main-dark mb-6 leading-tight">
                  Comprehensive <span className="text-primary italic">Analysis</span><br/> and Diagnosis
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg mt-6 leading-relaxed mb-8">
                  Our commitment begins with a thorough examination. We don't just treat symptoms; we identify the root cause of your foot pain, calluses, or nail issues using state-of-the-art diagnostic tools.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Gait analysis', 'Dermatological assessment', 'Custom treatment plan', 'Orthopedic evaluation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-text-main-light dark:text-text-main-dark font-medium">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 group">
              <img 
                alt="Modern clinic interior" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXAt6K282nGkdCXUvf5MmpjGeGSzLcDhGWfIWO-8OCStEfMkUl3TLXvXsN3r4d5BBPPaY7G-y2Fll_jjnbi561Raao4RwE5MwMBcJtr7yiOMD3h42tRZJbeukw7Z5H0y2RTgH1B-gpeDmIHiVaCQkiGRKsftTydzaogi1wASIagdA4YkE7zDp5uev_5AqYQPpgL1_abr7TFs5cVGGVAKcwXRuQYPzIENf6BpErx1uz_UPcGFVs1nayVPZp84Ld_FoZcHDsQO579i8Q"
              />
              <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl text-xs font-mono uppercase tracking-[0.2em] text-text-main-light dark:text-white font-bold border border-white/20">
                State of the art facility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
