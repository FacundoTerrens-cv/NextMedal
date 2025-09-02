'use client';

import { Globe, Search, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section: Logo and Brand Name */}
          <div className="flex items-center gap-3">
            {/* 3D Logo */}
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
              <div className="w-5 h-5 bg-white rounded-sm transform -rotate-12"></div>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900 font-serif">
              Tech Norway
            </Link>
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/tjenester" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Tjenester
            </Link>
            <Link 
              href="/prosjekter" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Prosjekter
            </Link>
            <Link 
              href="/om-oss" 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Om oss
            </Link>
          </nav>

          {/* Right Section: Utility Icons and Links */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">EN</span>
            </div>

            {/* User Account */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Min side</span>
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Søk</span>
            </div>

            {/* Avatar/Profile Menu */}
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200">
              <User className="w-4 h-4 text-gray-600" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/tjenester" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjenester
              </Link>
              <Link 
                href="/prosjekter" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Prosjekter
              </Link>
              <Link 
                href="/om-oss" 
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </Link>
              
              {/* Mobile Utility Links */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">EN</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Min side</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Søk</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
