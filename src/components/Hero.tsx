import React from 'react';
import { motion } from 'motion/react';
import { LangConfig } from '../types';

interface HeroProps {
  data: LangConfig['hero'];
}

export function Hero({ data }: HeroProps) {
  return (
    <div id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background with multiple images overlayed or a beautiful gradient + image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10 sm:hidden" /> {/* Darker overlay on mobile for text readability */}
        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000"
          alt="Beautiful flowers"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start w-full md:w-2/3 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl border border-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
            <span className="text-brand-turquoise block mb-2">Rosa Blanca</span>
            <span className="text-2xl sm:text-3xl text-pink-500 font-sans tracking-wide uppercase">& Aly Refresquería</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-800 font-medium mb-8 leading-relaxed max-w-lg">
            {data.title}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#flowers"
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-pink-500 hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              {data.btnFlowers}
            </a>
            <a
              href="#drinks"
              className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-brand-turquoise text-base font-semibold rounded-full text-brand-turquoise hover:bg-brand-turquoise hover:text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              {data.btnMenu}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
