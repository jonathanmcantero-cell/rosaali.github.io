import React from 'react';
import { LangConfig } from '../types';

export function Footer({ data }: { data: LangConfig['footer'] }) {
  return (
    <footer className="bg-gray-900 py-12 text-center border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-white mb-4">
          Rosa Blanca <span className="text-brand-turquoise">& Aly</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          {data.thanks}
        </p>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>{data.rights}</p>
        </div>
      </div>
    </footer>
  );
}
