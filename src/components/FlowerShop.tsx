import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Heart, Gift, Sparkles, Ribbon } from 'lucide-react';
import { LangConfig } from '../types';

export function FlowerShop({ data }: { data: LangConfig['flowers'] }) {
  const icons = [Flower2, Heart, Ribbon, Sparkles, Gift];

  return (
    <section id="flowers" className="py-24 bg-brand-pink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {data.subtitle}
            </p>

            <div className="space-y-6">
              {data.services.map((service, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 bg-white/60 p-4 rounded-xl shadow-sm border border-white/50 hover:bg-white transition-colors"
                  >
                    <div className="bg-pink-100 p-3 rounded-full text-pink-500">
                      <Icon size={24} />
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{service}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <div className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-3 scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000" 
              alt="Beautiful flower arrangement" 
              className="relative z-10 rounded-3xl shadow-2xl object-cover h-[600px] w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-pink-50">
               <div className="flex items-center gap-3">
                 <Flower2 className="text-pink-500" size={32} />
                 <div>
                   <p className="text-sm text-gray-500 font-medium">Est. 2026</p>
                   <p className="font-bold text-gray-900">Quality Blooms</p>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
