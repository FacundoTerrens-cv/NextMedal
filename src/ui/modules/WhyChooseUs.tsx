'use client';

import { Card, CardContent } from '@/components/ui/card';
import moduleProps from '@/lib/moduleProps';
import { CheckCircle } from 'lucide-react';
import TestimonialSlider from './TestimonialSlider';
import { useTranslation } from '@/hooks/useTranslation';

export default function WhyChooseUs({
  title,
  description,
  features,
  stats,
  testimonials,
  ...props
}: {
  title?: string;
  description?: string;
  features?: {
    _key: string;
    title: string;
    description: string;
  }[];
  stats?: {
    _key: string;
    number: string;
    label: string;
  }[];
  testimonials?: {
    _key: string;
    rating: number;
    quote: string;
    author: string;
    position: string;
  }[];
} & Sanity.Module) {
  const { t, language } = useTranslation();
  return (
    <section className="py-24 bg-white dark:bg-[#1a1a2e]" {...moduleProps(props)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda - Contenido Principal */}
          <div>
            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-6 leading-tight">
              {t.whyChooseUs.title}
            </h2>

            {/* Descripción */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {t.whyChooseUs.description}
            </p>

            {/* Lista de Características */}
            <div className="space-y-6">
              {t.whyChooseUs.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-600 dark:text-purple-400 text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha - Tarjeta de Estadísticas y Testimonio */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
              <CardContent className="p-8">
                {/* Sección de Estadísticas */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {t.whyChooseUs.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-200 dark:border-gray-600 mb-8"></div>

                {/* Sección de Testimonios con Slider */}
                <TestimonialSlider 
                  testimonials={t.whyChooseUs.testimonials}
                  autoPlay={true}
                  interval={6000}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
