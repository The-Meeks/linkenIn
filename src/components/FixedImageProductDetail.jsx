import { Check, Star, ArrowRight, Users, Search, TrendingUp, Award, Linkedin, Zap, Shield, Target, Eye, Briefcase, MessageSquare, DollarSign, Clock, Download, FileText, Video, BookOpen, CheckCircle2, ArrowRight2, TrendingUp2, UserCheck, Globe, BarChart3, Lightbulb, Award2, Gift, Lock, Mail, Phone, MapPin } from 'lucide-react';

const FixedImageProductDetail = ({ product }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header with Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <span className="ml-2 text-gray-600 font-medium">(4.9/5 from 2,847 reviews)</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-linkedin-600 to-linkedin-700 bg-clip-text text-transparent">
                Complete Career Success Bundle
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your career with our comprehensive LinkedIn optimization, hidden job market strategies, interview preparation, and professional networking templates. Everything you need to land your dream job.
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="text-4xl font-bold text-linkedin-600">${product.price}</div>
              <div className="text-gray-500 text-lg line-through">$197</div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">76% OFF</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="group relative bg-gradient-to-r from-linkedin-600 to-linkedin-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Download className="w-5 h-5" />
                <span>Instant Download</span>
              </button>
              <button className="bg-white border-2 border-linkedin-600 text-linkedin-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-linkedin-50 transition-all duration-300 flex items-center gap-3">
                <Video className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Lifetime Updates</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center" 
                alt="Career Success Bundle" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">50,000+ Happy Customers</div>
                  <div className="text-sm text-gray-600">Join successful professionals</div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg transform -rotate-3">
              Bestseller 2024
            </div>
          </div>
        </div>

        {/* What's Included - Visual Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Everything You Get in This Bundle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: "LinkedIn Profile Optimization",
                description: "Complete step-by-step guide to optimize your profile",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Hidden Job Market Access",
                description: "Strategies to find 80% of unadvertised jobs",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Interview Cheat Sheet",
                description: "35+ questions with proven answer frameworks",
                image: "https://images.unsplash.com/photo-1551434675678-0f2e7338b5a?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Salary Negotiation Scripts",
                description: "Professional scripts to maximize your salary",
                image: "https://images.unsplash.com/photo-1554224154-260325c0572e?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Thank You Templates",
                description: "Professional email templates for every situation",
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Networking Templates",
                description: "LinkedIn and email networking templates",
                image: "https://images.unsplash.com/photo-1515189021221-c5e4ff5cc094?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Strategic Questions Guide",
                description: "18 questions to ask in interviews",
                image: "https://images.unsplash.com/photo-1552664730-d307be889dab?w=300&h=200&fit=crop&crop=center"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Career Success Tools",
                description: "Bonus resources and lifetime updates",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-linkedin-600 via-linkedin-700 to-linkedin-800 rounded-3xl p-8 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of professionals who've landed their dream jobs with our comprehensive career success bundle.
          </p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-4xl font-bold text-yellow-300">${product.price}</div>
            <div className="text-lg opacity-75 line-through">$197</div>
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">76% OFF</div>
          </div>
          <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            <span>Get Instant Access Now</span>
          </button>
          <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Lifetime Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedImageProductDetail;
