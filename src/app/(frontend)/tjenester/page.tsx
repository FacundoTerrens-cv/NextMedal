import { Metadata } from 'next';
import { getSite, getPageContent } from '@/sanity/lib/fetch';
import { useTranslation } from '@/hooks/useTranslation';
import { CheckCircle, Users, Target, TrendingUp, Lightbulb, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Tech Norway',
  description: 'Comprehensive services for Norwegian tech startups: Strategic Consulting, Network & Partners, and Acceleration Program.',
};

export default async function ServicesPage() {
  const pageContent = await getPageContent('services');
  
  // Fallback content if no Sanity content is available
  const defaultContent = {
    hero: {
      pretitle: 'Our Services',
      title: 'Empowering Norwegian Tech Startups',
      subtitle: 'We provide comprehensive support to help your startup scale and achieve market leadership through strategic consulting, powerful networks, and intensive acceleration programs.'
    },
    sections: [
      {
        _type: 'contentSection',
        title: 'Our Services',
        content: [
          {
            _type: 'service',
            title: 'Strategic Consulting',
            description: 'Expert guidance to help you navigate the complex landscape of scaling a tech startup in Norway and beyond.',
            icon: 'Target',
            features: [
              'Business strategy development',
              'Market analysis & positioning',
              'Growth planning & execution',
              'Investor introductions',
              'Mentor matching',
              'Strategic partnerships'
            ]
          },
          {
            _type: 'service',
            title: 'Network & Partners',
            description: 'Access to our extensive network of industry experts, investors, and strategic partners across Norway and Europe.',
            icon: 'Handshake',
            features: [
              'Investor network access',
              'Industry expert connections',
              'Strategic partnership opportunities',
              'Peer startup connections',
              'Mentor network',
              'International expansion support'
            ]
          },
          {
            _type: 'service',
            title: 'Acceleration Program',
            description: 'Intensive 12-week program designed to accelerate growth and prepare you for the next level of success.',
            icon: 'TrendingUp',
            features: [
              'Weekly workshops',
              '1-on-1 mentoring sessions',
              'Demo Day presentation',
              'Pitch deck development',
              'Product-market fit validation',
              'Investor readiness preparation'
            ]
          }
        ]
      },
      {
        _type: 'statsSection',
        title: 'Proven Results',
        subtitle: 'Our track record speaks for itself',
        stats: [
          { number: '100%', label: 'Success rate in capital raising for our projects' },
          { number: 'Under 3 weeks', label: 'Can we build a complete application' }
        ]
      }
    ],
    cta: {
      title: 'Ready to accelerate your startup?',
      subtitle: 'Join the 150+ Norwegian tech startups that have scaled with our help',
      primaryButton: 'Get Started',
      secondaryButton: 'Learn More'
    }
  };

  const content = pageContent || defaultContent;
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {content.hero.pretitle && (
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
                {content.hero.pretitle}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.sections
              .filter(section => section._type === 'contentSection')
              .map(section => 
                section.content
                  .filter(item => item._type === 'service')
                  .map((service, index) => {
                    const IconComponent = service.icon === 'Target' ? Target : 
                                        service.icon === 'Handshake' ? Handshake : 
                                        service.icon === 'TrendingUp' ? TrendingUp : Target;
                    
                    return (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                          <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })
              )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {content.sections
        .filter(section => section._type === 'statsSection')
        .map((section, index) => (
          <section key={index} className="bg-gray-50 dark:bg-gray-800 py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {section.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

      {/* CTA Section */}
      {content.cta && (
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {content.cta.title}
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                {content.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  {content.cta.primaryButton}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                  {content.cta.secondaryButton}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
