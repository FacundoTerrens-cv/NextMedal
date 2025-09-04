'use client';

import { ChevronUp } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Img } from '@/ui/Img';
import { urlFor } from '@/sanity/lib/image';

interface FooterProps {
  site?: {
    footerLogo?: {
      image?: {
        asset?: {
          _id: string;
          url: string;
          metadata?: {
            dimensions?: {
              width: number;
              height: number;
            };
          };
        };
        alt?: string;
      };
      width?: number;
      height?: number;
    };
    logo?: {
      image?: {
        asset?: {
          _id: string;
          url: string;
          metadata?: {
            dimensions?: {
              width: number;
              height: number;
            };
          };
        };
        alt?: string;
      };
      width?: number;
      height?: number;
    };
  };
}

export default function Footer({ site }: FooterProps) {
  const { t } = useTranslation();
  
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
              {/* Logo */}
              {site?.footerLogo?.image?.asset || site?.logo?.image?.asset ? (
                <div className="flex-shrink-0">
                  <Img
                    image={site?.footerLogo?.image || site?.logo?.image}
                    alt={site?.footerLogo?.image?.alt || site?.logo?.image?.alt || 'Tech Norway Logo'}
                    width={site?.footerLogo?.width || site?.logo?.width || 48}
                    height={site?.footerLogo?.height || site?.logo?.height || 48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white"
                  >
                    {/* Tech Norway Logo - Clean T + N design */}
                    <path 
                      d="M4 4H20V6H13V20H11V6H4V4Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M15 8H17V10H19V12H17V14H15V12H13V10H15V8Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M15 16H17V18H19V20H17V22H15V20H13V18H15V16Z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
              <h3 className="text-xl font-bold text-white">Tech Norway</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services.title}</h4>
            <ul className="space-y-2">
              {t.footer.services.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.resources.title}</h4>
            <ul className="space-y-2">
              {t.footer.resources.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact.title}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">{t.footer.contact.location}</p>
              <a 
                href="mailto:post@technorway.no" 
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                {t.footer.contact.email}
              </a>
              <a 
                href="tel:+4712345678" 
                className="text-gray-300 hover:text-white transition-colors duration-200 block"
              >
                {t.footer.contact.phone}
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
            {t.footer.copyright}
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
