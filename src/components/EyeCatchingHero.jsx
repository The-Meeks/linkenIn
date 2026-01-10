import { ArrowRight, Star, Search, Users, TrendingUp, Linkedin, Zap, Shield, Target, Eye, CheckCircle, Sparkles } from 'lucide-react';

const EyeCatchingHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-linkedin-600 via-linkedin-500 to-linkedin-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-linkedin-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-linkedin-300 rounded-full blur-2xl opacity-30 animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-linkedin-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-linkedin-300 rounded-full blur-3xl opacity-20 animate-gradient-shift" 
             style={{ backgroundSize: '200% 200%' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* LinkedIn branding with image */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-xl flex items-center justify-center animate-pulse-slow">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <span className="text-2xl font-bold">LinkedIn</span>
                <span className="text-lg ml-2">Profile Optimization</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-linkedin-400 to-linkedin-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-white">
                <span className="text-2xl font-bold">Career Success</span>
                <span className="text-lg ml-2">Bundle</span>
              </div>
            </div>
          </div>

          {/* Main headline with supporting image */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Transform Your LinkedIn Profile into a
              <span className="text-yellow-300 animate-pulse-slow"> Career Magnet</span>
            </h1>
            
            {/* Supporting visual elements */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Search className="w-8 h-8 text-yellow-300 animate-bounce-gentle" />
                <span className="text-white text-lg">Top Rankings</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-yellow-300 animate-bounce-gentle" />
                <span className="text-white text-lg">300% More Views</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-yellow-300 animate-bounce-gentle" />
                <span className="text-white text-lg">Build Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-8 h-8 text-yellow-300 animate-bounce-gentle" />
                <span className="text-white text-lg">Get Opportunities</span>
              </div>
            </div>
          </div>

          {/* Subtitle with image */}
          <div className="text-xl md:text-2xl text-linkedin-100 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-bounce-gentle" />
              <span>Stand out to 1 billion+ professionals</span>
            </span>
            <br />
            <span className="text-linkedin-200">Get noticed by recruiters & land your dream job</span>
          </div>

          {/* Key benefits with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-linkedin-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                Top Search Rankings
              </h3>
              <p className="text-linkedin-100 text-sm">Show up in LinkedIn & Google searches</p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-linkedin-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                300% More Views
              </h3>
              <p className="text-linkedin-100 text-sm">Profile views & connection requests</p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-linkedin-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                Build Trust
              </h3>
              <p className="text-linkedin-100 text-sm">Establish credibility & authority</p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-linkedin-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                Get Opportunities
              </h3>
              <p className="text-linkedin-100 text-sm">Job offers & client leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyeCatchingHero;
