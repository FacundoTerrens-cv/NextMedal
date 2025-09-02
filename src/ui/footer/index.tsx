'use client';

import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 relative">
      {/* Purple line at the top */}
      <div className="h-1 bg-purple-500 w-full"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Tech Norway Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* 3D Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-6 h-6 bg-white rounded-sm transform -rotate-12"></div>
              </div>
              <h3 className="text-xl font-bold text-white">Tech Norway</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Norges ledende akselerator for ambisiøse tech-startups.
            </p>
          </div>

          {/* Column 2: Tjenester (Services) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tjenester</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Strategisk rådgivning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Nettverk & Partnere
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Akselerasjonsprogram
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ressurser (Resources) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ressurser</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Webinarer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontakt (Contact) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Oslo, Norge</p>
              <a 
                href="mailto:post@technorway.no" 
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                post@technorway.no
              </a>
              <a 
                href="tel:+4712345678" 
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                +47 123 45 678
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section: Copyright and Scroll-to-Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 Tech Norway. Alle rettigheter reservert.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
