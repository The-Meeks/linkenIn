import { ArrowRight, Star, Search, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <span className="text-gray-300">•</span>
            <span>50,000+ Professionals Helped</span>
            <span className="text-gray-300">•</span>
            <span>1B+ LinkedIn Users</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Optimize Your LinkedIn Profile for
            <span className="text-primary-600"> Maximum Visibility</span>
          </h1>

          {/* Supporting text */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            With over 1 billion users, LinkedIn is the top platform for professionals. 
            Our step-by-step guide helps your profile stand out, get more views, and build trust with visitors.
          </p>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100">
              <Search className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Search Results</h3>
              <p className="text-gray-600 text-sm">Show up in LinkedIn & Google searches</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">More Views</h3>
              <p className="text-gray-600 text-sm">Get profile views & connection requests</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100">
              <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Build Trust</h3>
              <p className="text-gray-600 text-sm">Establish credibility & authority</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100">
              <Star className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Get Opportunities</h3>
              <p className="text-gray-600 text-sm">Attract job offers & clients</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group">
              Get LinkedIn Guide - $47
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>

          {/* Social proof */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-900">Join thousands of professionals</span> who've 
              transformed their LinkedIn presence and career opportunities
            </p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-sm font-medium">
                +5k
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
