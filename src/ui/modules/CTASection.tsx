'use client';

import moduleProps from '@/lib/moduleProps';

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  ...props
}: {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    url?: string;
    action?: string;
  };
  secondaryButton?: {
    text: string;
    url?: string;
    action?: string;
  };
} & Sanity.Module) {
  const handlePrimaryClick = () => {
    if (primaryButton?.url) {
      window.open(primaryButton.url, '_blank');
    } else if (primaryButton?.action === 'contact') {
      // Aquí puedes agregar lógica para abrir formulario de contacto
      console.log('Abrir formulario de contacto');
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryButton?.url) {
      window.open(secondaryButton.url, '_blank');
    } else if (secondaryButton?.action === 'download') {
      // Aquí puedes agregar lógica para descargar guía
      console.log('Descargar guía');
    }
  };

  return (
    <section className="py-24 bg-purple-600" {...moduleProps(props)}>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Primary Button */}
            {primaryButton && (
              <button
                onClick={handlePrimaryClick}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg min-w-[200px]"
              >
                {primaryButton.text}
              </button>
            )}

            {/* Secondary Button */}
            {secondaryButton && (
              <button
                onClick={handleSecondaryClick}
                className="bg-purple-600 text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 text-lg min-w-[200px]"
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
