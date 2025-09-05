'use client';

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import moduleProps from '@/lib/moduleProps';
import { cn } from '@/lib/utils';
import { Img } from '@/ui/Img';
import { PortableText } from 'next-sanity';
import { CheckCircle } from 'lucide-react';

export default function ServicesSection({
  pretitle,
  title,
  subtitle,
  services,
  ...props
}: Partial<{
  pretitle: string;
  title: string;
  subtitle: string;
  services: {
    _key: string;
    title: string;
    description: string;
    image: Sanity.Img;
    features: string[];
  }[];
}> &
  Sanity.Module) {
  return (
    <section className="py-24 bg-white dark:bg-[#1a1a2e]" {...moduleProps(props)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          {pretitle && (
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
              {typeof pretitle === 'string' ? pretitle : (pretitle as any)?.no || (pretitle as any)?.en || 'Pretitle'}
            </div>
          )}
          {title && (
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {typeof title === 'string' ? title : (title as any)?.no || (title as any)?.en || 'Title'}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {typeof subtitle === 'string' ? subtitle : (subtitle as any)?.no || (subtitle as any)?.en || 'Subtitle'}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-3">
          {services?.map((service, index) => (
            <div
              key={service._key}
              className="group h-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Service Image */}
              {service.image && (
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Img
                    image={service.image.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={service.image.alt || service.title}
                  />
                </div>
              )}
              
              {/* Service Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {typeof service.title === 'string' ? service.title : (service.title as any)?.no || (service.title as any)?.en || 'Service Title'}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base">
                  {typeof service.description === 'string' ? service.description : (service.description as any)?.no || (service.description as any)?.en || 'Service Description'}
                </p>

                {/* Features List */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {typeof feature === 'string' ? feature : (feature as any)?.no || (feature as any)?.en || 'Feature'}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






