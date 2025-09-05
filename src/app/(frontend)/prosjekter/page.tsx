import { Metadata } from 'next';
import { getSite } from '@/sanity/lib/fetch';
import { ExternalLink, Github, Users, Calendar, TrendingUp, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects | Tech Norway',
  description: 'Discover the successful tech startups and projects we have helped scale in Norway.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold uppercase tracking-wide rounded-full mb-6">
              Our Projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We have helped over 150 Norwegian tech startups scale and achieve market leadership. Here are some of our most successful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                150+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                Startups Helped
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100%
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                3 weeks
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                Average Build Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real startups, real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Analytics Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">B2B SaaS</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Advanced analytics platform using machine learning to help businesses make data-driven decisions.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Scaled from 5 to 50 employees in 18 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Raised $2M Series A</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">50+ enterprise clients</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors duration-200">
                  View Case Study
                </button>
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">EcoTech Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">CleanTech</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Sustainable technology solutions for reducing carbon footprint in manufacturing industries.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">300% revenue growth in 12 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">EU Innovation Grant recipient</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">25+ manufacturing partners</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors duration-200">
                  View Case Study
                </button>
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">FinTech Mobile App</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">FinTech</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Mobile-first financial services platform for small businesses and freelancers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">10,000+ active users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Best FinTech Startup 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">$500K+ processed monthly</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors duration-200">
                  View Case Study
                </button>
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real feedback from real entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Tech Norway gave us the strategic direction and network access we needed to scale from 5 to 50 employees in 18 months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">LA</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Lars Andersen</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">CEO, AI Analytics Platform</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "The acceleration program was exactly what we needed. The mentors were incredible and the network connections were invaluable."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">MH</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Maria Hansen</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Founder, EcoTech Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Their holistic approach covered everything from strategy to execution. We couldn't have done it without them."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">EJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Erik Johansen</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">CTO, FinTech Mobile App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the growing community of successful Norwegian tech startups
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
