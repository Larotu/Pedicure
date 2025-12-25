
import React from 'react';
import { Plus } from 'lucide-react';
import { ServiceItem } from '../types';

const MenuSection: React.FC = () => {
  const treatments: ServiceItem[] = [
    { 
      id: '01', 
      name: 'Complete Medical Pedicure', 
      duration: '45 mins', 
      description: 'Comprehensive care for all foot issues', 
      price: '45' 
    },
    { 
      id: '02', 
      name: 'Ingrown Nail Correction', 
      duration: '30 mins', 
      description: 'Nail bracing technique (Orthonyxia)', 
      price: '35' 
    },
    { 
      id: '03', 
      name: 'Diabetic Screening & Care', 
      duration: '60 mins', 
      description: 'Sensory testing & preventative care', 
      price: '55' 
    },
    { 
      id: '04', 
      name: 'Spa Pedicure Deluxe', 
      duration: '75 mins', 
      description: 'Scrub, mask, massage & polish', 
      price: '65' 
    },
  ];

  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display text-text-main-light dark:text-text-main-dark">
            Our <span className="text-primary italic">Treatment</span> Menu
          </h2>
        </div>

        <div className="space-y-4">
          {treatments.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-[2rem] hover:bg-white dark:hover:bg-card-dark hover:shadow-xl-soft transition-all duration-300 cursor-pointer border-b border-stone-100 dark:border-stone-800 hover:border-transparent"
            >
              <div className="flex items-center gap-8 mb-4 sm:mb-0">
                <span className="text-primary font-display text-2xl group-hover:scale-125 transition-transform duration-300 w-8">
                  {item.id}
                </span>
                <div>
                  <h4 className="text-xl font-bold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-base text-text-muted-light dark:text-text-muted-dark mt-1 flex items-center gap-2">
                    <span className="font-semibold">{item.duration}</span>
                    <span className="opacity-30">•</span>
                    <span>{item.description}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 ml-16 sm:ml-0">
                <span className="text-2xl font-display font-semibold text-text-main-light dark:text-text-main-dark">
                  €{item.price}
                </span>
                <button className="w-12 h-12 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform group-hover:rotate-90">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-text-main-light dark:bg-white text-white dark:text-text-main-light px-10 py-5 rounded-full font-bold text-lg hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-xl shadow-stone-200 dark:shadow-none transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
