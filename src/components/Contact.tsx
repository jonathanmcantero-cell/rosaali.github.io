import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { LangConfig } from '../types';

export function Contact({ data }: { data: LangConfig['contact'] }) {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {data.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
          
          {/* Info Side */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="bg-brand-turquoise/10 p-4 rounded-full min-w-fit mt-1">
                  <MapPin className="text-brand-turquoise" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{data.addressLabel}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    1202 E Houston St<br />
                    Cleveland, TX 77327<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-brand-pink p-4 rounded-full border border-pink-100 min-w-fit mt-1">
                  <Phone className="text-pink-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{data.phoneLabel}</h3>
                  <p className="text-gray-600 text-lg mb-4">+1 832-480-5061</p>
                  <a 
                    href="tel:+18324805061"
                    className="inline-flex justify-center items-center px-6 py-2 border border-transparent text-sm font-semibold rounded-full text-white bg-green-500 hover:bg-green-600 shadow-md transition-colors gap-2"
                  >
                    <Phone size={16} /> {data.callBtn}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{data.socialLabel}</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/rosablancaflowers/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-pink-100 text-gray-600 hover:text-pink-600 p-4 rounded-full transition-colors flex items-center justify-center">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.facebook.com/RosaBlancaFlorist/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-blue-100 text-gray-600 hover:text-blue-600 p-4 rounded-full transition-colors flex items-center justify-center">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-auto min-h-[400px]">
            <iframe 
               src="https://maps.google.com/maps?q=Rosa%20blanca%20flower%20shop,%201202%20E%20Houston%20St,%20Cleveland,%20TX%2077327,%20USA&t=&z=17&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full grayscale-[20%] contrast-125"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
