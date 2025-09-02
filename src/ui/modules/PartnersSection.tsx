import moduleProps from '@/lib/moduleProps';
import { Img } from '@/ui/Img';

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
  
  // Debug: Log the data
  console.log('PartnersSection Debug:', { title, subtitle, partners });
  console.log('Partners array:', partners);
  if (partners && partners.length > 0) {
    partners.forEach((partner, index) => {
      console.log(`Partner ${index + 1}:`, {
        name: partner.name,
        logo: partner.logo,
        logoImage: partner.logo?.image,
        hasLogo: !!partner.logo,
        hasLogoImage: !!partner.logo?.image
      });
    });
  }
  
  return (
    <section className="py-24 bg-white" {...moduleProps(props)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Partners Grid */}
        {partners && partners.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div
                key={partner._key}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 flex items-center justify-center"
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
                    <div className="text-2xl font-bold text-gray-400 mb-2">
                      {partner.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      Logo ikke tilgjengelig
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Er du interessert i å bli partner?
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
            Kontakt oss
          </button>
        </div>
      </div>
    </section>
  );
}
