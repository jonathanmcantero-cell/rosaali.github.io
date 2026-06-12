import React, { useState } from 'react';
import { Language } from './types';
import { content } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlowerShop } from './components/FlowerShop';
import { RefreshmentBar } from './components/RefreshmentBar';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const d = content[lang];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-brand-pink selection:text-pink-900">
      <Navbar lang={lang} setLang={setLang} data={d.nav} />
      
      <main>
        <Hero data={d.hero} />
        <FlowerShop data={d.flowers} />
        <RefreshmentBar data={d.drinks} />
        <Reviews data={d.reviews} />
        <Contact data={d.contact} />
      </main>

      <Footer data={d.footer} />
      <FloatingWidgets />
    </div>
  );
}

