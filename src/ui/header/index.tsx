'use client';

import { Globe, Menu, User, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Img } from '@/ui/Img';
import HeaderThemeToggle from './ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';

interface HeaderProps {
  site?: {
    title?: string;
    logo?: Sanity.LogoObject;
  };
}

export default function Header({ site }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#1a1a2e] border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section: Logo and Brand Name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              {/* Fallback 3D Logo */}
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                <div className="w-5 h-5 bg-white rounded-sm transform -rotate-12"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white font-sans">
                Tech Norway
              </span>
            </Link>
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/tjenester" 
              className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Tjenester
            </Link>
            <Link 
              href="/prosjekter" 
              className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Prosjekter
            </Link>
            <Link 
              href="/om-oss" 
              className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
            >
              Om oss
            </Link>
          </nav>

          {/* Right Section: Utility Icons and Links */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="hidden sm:flex">
              <LanguageSelector />
            </div>

            {/* Theme Toggle */}
            <HeaderThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-700 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/tjenester" 
                className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjenester
              </Link>
              <Link 
                href="/prosjekter" 
                className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Prosjekter
              </Link>
              <Link 
                href="/om-oss" 
                className="text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </Link>
              
              {/* Mobile Utility Links */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Språk</span>
                  <LanguageSelector />
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Min side</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Søk</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tema</span>
                  <HeaderThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
