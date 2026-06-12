import React from 'react';
import { motion } from 'motion/react';
import { LangConfig } from '../types';

export function RefreshmentBar({ data }: { data: LangConfig['drinks'] }) {
  const categories: ('snacks' | 'desserts' | 'drinks')[] = ['snacks', 'desserts', 'drinks'];

  return (
    <section id="drinks" className="py-24 bg-brand-yellow relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            {data.title}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="space-y-16">
          {categories.map((cat, catIndex) => (
            <div key={cat} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-brand-turquoise inline-block pb-2">
                {data.menuLabels[cat]}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.menuData.filter(item => item.category === cat).map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-yellow-100 flex flex-col"
                  >
                    <div className="aspect-square bg-gray-50 flex items-center justify-center relative overflow-hidden group-hover:bg-brand-turquoise/10 transition-colors">
                      <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </span>
                    </div>
                    <div className="p-4 text-center my-auto">
                      <h4 className="font-semibold text-gray-800 group-hover:text-brand-turquoise transition-colors">
                        {item.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
