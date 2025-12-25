
import React from 'react';
import { ShieldCheck, Sparkles, Footprints } from 'lucide-react';

const USPSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-stone-50 dark:bg-[#251f1b]" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-text-main-light dark:text-text-main-dark mb-16">
          Why <span className="text-primary italic">Choose</span> SanaPed
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#EBE5E1] dark:bg-[#3D342F] p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group">
            <div className="h-14 w-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-soft group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-text-main-light dark:text-text-main-dark">Medical Hygiene</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Strict sterilization protocols meeting hospital standards. Your safety is our absolute priority during every procedure.
            </p>
          </div>

          <div className="bg-[#EBE5E1] dark:bg-[#3D342F] p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 group">
            <div className="h-14 w-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-soft group-hover:scale-110 transition-transform">
              <Sparkles className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-text-main-light dark:text-text-main-dark">Painless Treatment</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Specialized techniques for ingrown nails and corn removal that minimize discomfort and promote rapid healing.
            </p>
          </div>

          <div className="bg-secondary p-10 rounded-[2.5rem] text-white lg:row-span-2 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="mb-auto">
              <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Footprints className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-display mb-2">Diabetic Foot Care</h3>
              <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Specialized certification</p>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mt-12 mb-8">
              We specialize in high-risk foot care for diabetic and rheumatic patients. We partner with your insurance provider for qualified treatments.
            </p>
            <div className="pt-8 border-t border-white/20">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Certifications</span>
              <div className="flex gap-4 mt-4">
                <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold border border-white/5">ProVoet</span>
                <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold border border-white/5">KRP</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-card-dark p-0 rounded-[2.5rem] overflow-hidden h-80 md:h-auto relative lg:col-span-2 shadow-soft group">
            <img 
              alt="Relaxing spa setting" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBia0TSt7l-Umn_QUlPSNd0QxpKeCWv5mFI5d3vcjLiVhZ3uuw3R0AYSBNX_l8EUsn9r_J2M4U9xUsIucB-HCWgtVjhSlOTp8hLETfu3VPgLA2qC1zrP8BhWGfvJhkAI8y8YYMA-PeFNG2wluZJcl7oy06RSlLV5KGFvxCXewXvlQksMg8Cmu-8v1TGgoMknUu3iZL6_FQWPfAunZgYBsGa6L8ZIyoWcmSDi9Y1o9fSY764YkiQD3Kasiv-gbS4XlNE5_A1Txb7XJaV"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-white text-3xl font-display mb-2">Superior Products</h3>
              <p className="text-white/80 text-lg max-w-md">We use only organic, dermatologically tested antifungal and restorative creams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
