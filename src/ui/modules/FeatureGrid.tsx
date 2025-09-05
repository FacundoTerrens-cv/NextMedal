'use client';

import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import moduleProps from '@/lib/moduleProps';
import { cn } from '@/lib/utils';
import Icon from '@/ui/Icon';
import Pretitle from '@/ui/Pretitle';
import { PortableText } from 'next-sanity';

export default function FeatureGrid({
  pretitle,
  intro,
  items,
  ...props
}: Partial<{
  pretitle: string;
  intro: any;
  items: {
    summary: string;
    content: any;
    icon?: Sanity.Icon;
    _key: string;
  }[];
}> &
  Sanity.Module) {
  return (
    <section className="py-24 bg-white dark:bg-[#1a1a2e]" {...moduleProps(props)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(pretitle || intro) && (
          <div className="text-center mb-20">
            {pretitle && <Pretitle className="mb-4">{pretitle}</Pretitle>}
            {intro && Array.isArray(intro) && (
              <>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white">
                  <PortableText value={[intro[0]]} />
                </div>
                <div className="mb-4" />
                {intro[1] && (
                  <div className="text-lg md:text-xl text-center font-normal mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
                    <PortableText value={[intro[1]]} />
                  </div>
                )}
                <PortableText value={intro.slice(2)} />
              </>
            )}
          </div>
        )}
        <div className={cn('grid gap-6 md:grid-cols-3')}>
          {/* Hardcoded features with translations */}
          <div className="bg-white dark:bg-[#252b36] border border-gray-200 dark:border-purple-500 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Utvikling
                </h3>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Vi utvikler skreddersydde løsninger som passer perfekt til dine behov
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#252b36] border border-gray-200 dark:border-purple-500 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Markedsføring
                </h3>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Vi hjelper deg å nå ut til riktig målgruppe med effektive markedsføringsstrategier
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#252b36] border border-gray-200 dark:border-purple-500 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Internasjonalisering
                </h3>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Vi hjelper deg å ekspandere til nye markeder med flerspråklige løsninger
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#252b36] border border-gray-200 dark:border-purple-500 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Innovasjon
                </h3>
                <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Vi bruker de nyeste teknologiene for å levere fremtidsrettede løsninger
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
