import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { LangConfig } from '../types';

export function Reviews({ data }: { data: LangConfig['reviews'] }) {
  return (
    <section id="reviews" className="py-24 bg-brand-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            {data.title}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm"
          >
            <div className="flex text-yellow-400">
               {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <span className="font-bold text-gray-900 text-lg ml-2">5.0</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.list.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-emerald-50 relative"
            >
              <div className="text-brand-turquoise bg-emerald-50 p-3 rounded-full inline-block mb-6 absolute -top-6 -left-2 sm:left-6 border-4 border-white">
                <Star fill="currentColor" size={28} />
              </div>
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed mt-2">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.author}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Star size={12} fill="currentColor" className="text-yellow-400"/> Verified Customer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
