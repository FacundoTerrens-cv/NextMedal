'use client';

import moduleProps from '@/lib/moduleProps';
import { Img } from '@/ui/Img';
import { useTranslation } from '@/hooks/useTranslation';

export default function PartnersSection({
  title,
  subtitle,
  partners,
  ...props
}: {
  title?: string;
  subtitle?: string;
  partners?: {
    _key: string;
    name: string;
    logo: Sanity.Img;
    website?: string;
  }[];
} & Sanity.Module) {
  const { t, language } = useTranslation();
  
  return (
    <section className="py-24 bg-white dark:bg-[#1a1a2e]" {...moduleProps(props)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-6 leading-tight">
            {t.partners.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        {partners && partners.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div
                key={partner._key}
                className="bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 p-8 flex items-center justify-center"
              >
                {partner.logo ? (
                  <div className="flex items-center justify-center w-full h-24">
                    <Img
                      image={partner.logo.image}
                      className="max-h-16 max-w-full object-contain"
                      alt={partner.logo.alt || partner.name}
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
                      {partner.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {language === 'no' ? 'Logo ikke tilgjengelig' : 'Logo not available'}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {t.partners.cta}
          </p>
          <button className="bg-purple-600 dark:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors duration-200">
            {t.partners.contactButton}
          </button>
        </div>
      </div>
    </section>
  );
}
