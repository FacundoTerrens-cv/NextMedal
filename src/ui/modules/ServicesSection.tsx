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
    <section className="py-24 bg-gray-50" {...moduleProps(props)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {pretitle && (
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
              {pretitle}
            </div>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-3">
          {services?.map((service) => (
            <Card
              key={service._key}
              className="h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Service Image */}
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <Img
                    image={service.image.image}
                    className="w-full h-full object-cover"
                    alt={service.image.alt || service.title}
                  />
                </div>
              )}
              
              {/* Service Content */}
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-purple-600 mb-4">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Features List */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



