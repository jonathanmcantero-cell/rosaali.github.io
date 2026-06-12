import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, LangConfig } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  data: LangConfig['nav'];
}

export function Navbar({ lang, setLang, data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  const links = [
    { name: data.home, href: '#home' },
    { name: data.flowers, href: '#flowers' },
    { name: data.drinks, href: '#drinks' },
    { name: data.reviews, href: '#reviews' },
    { name: data.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-brand-pink/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo string */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              Rosa Blanca <br className="hidden sm:block"/> <span className="text-brand-turquoise text-lg sm:text-xl">& Aly</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-turquoise font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-brand-pink text-pink-900 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-pink-100 transition shadow-sm"
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-brand-pink text-pink-900 px-3 py-1.5 rounded-full text-sm font-semibold"
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-turquoise hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
