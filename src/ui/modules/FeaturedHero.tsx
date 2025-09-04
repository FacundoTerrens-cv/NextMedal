'use client';

import { cn } from '@/lib/utils';
import CTAList from '@/ui/CTAList';
import { Img } from '@/ui/Img';
import Pretitle from '@/ui/Pretitle';
import { PortableText, stegaClean } from 'next-sanity';
import Icon from '../Icon';
import { useTranslation } from '@/hooks/useTranslation';

interface FeatureItem {
  name: string;
  description: string;
  icon: Sanity.Icon;
}

export interface FeaturedHeroProps {
  pretitle?: string;
  image?: Sanity.Img;
  direction?: 'left' | 'right';
  features?: FeatureItem[];
  textAlign?: 'left' | 'center' | 'right';
  ctas?: any[];
  className?: string;
  isTabbedModule?: boolean;
  content?: any;
}

export default function FeaturedHero({
  pretitle,
  image,
  direction = 'right',
  features = [],
  textAlign = 'left',
  ctas,
  className,
  isTabbedModule = false,
  content,
}: FeaturedHeroProps) {
  const { t } = useTranslation();
  const isRightDirection = stegaClean(direction) === 'right';
  // Dynamically get Lucide icon component
  const getIconComponent = (icon: Sanity.Icon) => {
    if (!icon?.ic0n) return null;
    return (
      <div className="absolute top-1 left-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon icon={icon} className="size-5 text-primary" />
      </div>
    );
  };
  return (
         <section className={cn(
       !isTabbedModule && 'py-32 sm:py-40 lg:py-48 relative overflow-hidden',
       className
     )}>
      {/* Background with connectivity dots animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] overflow-hidden">
        {/* Connectivity Network */}
        <div className="absolute inset-0">
          {/* Grid Network with Subtle Animations */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-25" 
            viewBox="0 0 1000 600"
            style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Organic distribution of dots */}
            <circle cx="120" cy="80" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="280" cy="90" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="420" cy="110" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="580" cy="85" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="720" cy="95" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="880" cy="105" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            
            <circle cx="140" cy="180" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="310" cy="190" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="450" cy="210" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="590" cy="185" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="740" cy="195" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="870" cy="205" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            
            <circle cx="130" cy="280" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="290" cy="290" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="430" cy="310" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="570" cy="285" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="710" cy="295" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="860" cy="305" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            
            <circle cx="150" cy="380" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="300" cy="390" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="440" cy="410" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="580" cy="385" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="730" cy="395" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="850" cy="405" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            
            <circle cx="110" cy="480" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="270" cy="490" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="410" cy="510" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="550" cy="485" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="690" cy="495" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            <circle cx="830" cy="505" r="3" fill="#8b5cf6" filter="url(#glow)" className="grid-dot" />
            
            {/* Organic connections - horizontal */}
            <line x1="120" y1="80" x2="280" y2="90" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="280" y1="90" x2="420" y2="110" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="420" y1="110" x2="580" y2="85" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="580" y1="85" x2="720" y2="95" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="720" y1="95" x2="880" y2="105" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            
            <line x1="140" y1="180" x2="310" y2="190" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="310" y1="190" x2="450" y2="210" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="450" y1="210" x2="590" y2="185" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="590" y1="185" x2="740" y2="195" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="740" y1="195" x2="870" y2="205" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            
            <line x1="130" y1="280" x2="290" y2="290" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="290" y1="290" x2="430" y2="310" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="430" y1="310" x2="570" y2="285" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="570" y1="285" x2="710" y2="295" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="710" y1="295" x2="860" y2="305" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            
            <line x1="150" y1="380" x2="300" y2="390" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="300" y1="390" x2="440" y2="410" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="440" y1="410" x2="580" y2="385" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="580" y1="385" x2="730" y2="395" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="730" y1="395" x2="850" y2="405" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            
            <line x1="110" y1="480" x2="270" y2="490" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="270" y1="490" x2="410" y2="510" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="410" y1="510" x2="550" y2="485" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="550" y1="485" x2="690" y2="495" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            <line x1="690" y1="495" x2="830" y2="505" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line horizontal" />
            
            {/* Organic connections - vertical */}
            <line x1="120" y1="80" x2="140" y2="180" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="280" y1="90" x2="310" y2="190" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="420" y1="110" x2="450" y2="210" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="580" y1="85" x2="590" y2="185" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="720" y1="95" x2="740" y2="195" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="880" y1="105" x2="870" y2="205" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            
            <line x1="140" y1="180" x2="130" y2="280" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="310" y1="190" x2="290" y2="290" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="450" y1="210" x2="430" y2="310" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="590" y1="185" x2="570" y2="285" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="740" y1="195" x2="710" y2="295" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="870" y1="205" x2="860" y2="305" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            
            <line x1="130" y1="280" x2="150" y2="380" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="290" y1="290" x2="300" y2="390" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="430" y1="310" x2="440" y2="410" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="570" y1="285" x2="580" y2="385" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="710" y1="295" x2="730" y2="395" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="860" y1="305" x2="850" y2="405" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            
            <line x1="150" y1="380" x2="110" y2="480" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="300" y1="390" x2="270" y2="490" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="440" y1="410" x2="410" y2="510" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="580" y1="385" x2="550" y2="485" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="730" y1="395" x2="690" y2="495" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
            <line x1="850" y1="405" x2="830" y2="505" stroke="#8b5cf6" strokeWidth="1.5" className="grid-line vertical" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                 <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div
            className={cn(
              'lg:pt-4',
              isRightDirection ? 'lg:mr-auto lg:pr-4' : 'lg:ml-auto lg:pl-4'
            )}
          >
                         <div
               className={cn(
                 'lg:max-w-2xl mb-10',
                 stegaClean(textAlign) === 'center' && 'text-center',
                 stegaClean(textAlign) === 'right' && 'text-right'
               )}
             >
              {pretitle && <Pretitle className="mb-4">{stegaClean(pretitle)}</Pretitle>}

              {content && (
                /* Default Tech Norway Hero Content */
                <div className="hero">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple-600 dark:text-white font-serif leading-tight mb-6">
                    {t.hero.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {t.hero.subtitle}
                  </p>
                </div>
              )}


              {/* Call-to-actions section */}
              {ctas && ctas.length > 0 && (
                <div
                  className={cn(
                    'mt-8 flex gap-4 ',
                    stegaClean(textAlign) === 'center' && 'justify-center',
                    stegaClean(textAlign) === 'right' && 'justify-end'
                  )}
                >
                  <CTAList className="max-sm:min-w-full" ctas={stegaClean(ctas)} />
                </div>
              )}
            </div>
          </div>
          <div
            className={cn(
              'flex items-center justify-center lg:justify-end lg:pt-4',
              !isRightDirection ? 'lg:order-first' : '',
              features.length > 0 && 'lg:items-center'
            )}
          >
            {image ? (
              <Img
                image={image.image}
                className="w-80 h-80 lg:w-96 lg:h-96 max-w-none rounded-xl object-cover"
                alt={image.alt || image.image?.alt || 'Featured image'}
              />
            ) : (
              /* Default 3D Tech Norway Graphic */
              <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <div className="relative">
                  {/* Large 3D Logo */}
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12">
                    <div className="w-40 h-40 bg-white rounded-xl transform -rotate-12 shadow-inner"></div>
                  </div>
                  {/* Additional 3D elements for depth */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-400 rounded-lg transform rotate-45 shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-300 rounded-lg transform -rotate-12 shadow-lg"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
