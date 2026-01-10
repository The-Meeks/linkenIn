import { Check, Star, ArrowRight, Users, Search, TrendingUp, Award, Linkedin, Zap, Shield, Target, Eye, Briefcase, MessageSquare, DollarSign, Clock, Download, FileText, Video, BookOpen, CheckCircle2, ArrowRight2, TrendingUp2, UserCheck, Globe, BarChart3, Lightbulb, Award2, Gift, Lock, Mail, Phone, MapPin } from 'lucide-react';

const ImageProductDetail = ({ product }) => {
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

        {/* Detailed Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* LinkedIn Optimization */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">LinkedIn Profile Optimization</h3>
                  <p className="text-gray-600">Complete transformation guide</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=center" 
                  alt="LinkedIn Optimization" 
                  className="rounded-lg w-full object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">12-Step Checklist</h4>
                      <p className="text-sm text-gray-600">Complete profile optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">SEO Strategies</h4>
                      <p className="text-sm text-gray-600">Rank higher in searches</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Content Templates</h4>
                      <p className="text-sm text-gray-600">Professional headline & summary</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-linkedin-50 rounded-lg p-6">
                <h4 className="font-bold text-linkedin-600 mb-3">What You'll Achieve:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp2 className="w-5 h-5 text-linkedin-600" />
                    <span className="text-sm text-gray-700">300% more profile views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-linkedin-600" />
                    <span className="text-sm text-gray-700">5x more connection requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-linkedin-600" />
                    <span className="text-sm text-gray-700">Top search rankings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-linkedin-600" />
                    <span className="text-sm text-gray-700">Enhanced credibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Testimonials */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Success Stories</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Marketing Manager",
                    content: "This bundle helped me land my dream job with a 40% salary increase!",
                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c79666b3d?w=60&h=60&fit=crop&crop=faces"
                  },
                  {
                    name: "Michael Chen",
                    role: "Software Developer",
                    content: "The hidden job market strategies alone were worth 10x the price.",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1f7338b5a?w=60&h=60&fit=crop&crop=faces"
                  },
                  {
                    name: "Emily Davis",
                    role: "HR Director",
                    content: "Professional templates saved me hours and made me stand out.",
                    avatar: "https://images.unsplash.com/photo-1438761681033-64721a3e926?w=60&h=60&fit=crop&crop=faces"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex items-start gap-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">{testimonial.name}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                        <p className="text-sm text-gray-700 italic">"{testimonial.content}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8" />
                <h3 className="text-xl font-bold">Limited Time Bonus</h3>
              </div>
              <p className="mb-4">Order now and get these exclusive bonuses:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Resume Optimization Guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cover Letter Templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Personal Branding Course</span>
                </li>
              </ul>
              <div className="mt-4 bg-white/20 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold">Worth $297</div>
                <div className="text-sm">FREE for limited time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Job Market Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Access the Hidden Job Market</h3>
                <p className="text-xl mb-6 text-white/90">
                  80% of jobs are never advertised. Learn how to find and land them with our proven strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <div className="text-sm">Proven Strategies</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold mb-2">3x</div>
                    <div className="text-sm">More Interview Opportunities</div>
                  </div>
                </div>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Learn More About Hidden Jobs
                </button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop&crop=center" 
                  alt="Hidden Job Market" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Career Success Bundle?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Comprehensive Content",
                description: "500+ pages of proven career strategies and templates",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Award2 className="w-8 h-8" />,
                title: "Expert Created",
                description: "Developed by career coaches and HR professionals",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <TrendingUp2 className="w-8 h-8" />,
                title: "Proven Results",
                description: "50,000+ success stories and 96% satisfaction rate",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Secure Purchase",
                description: "SSL encrypted checkout and instant digital delivery",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Access",
                description: "Works for any industry and career level worldwide",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Regular Updates",
                description: "Lifetime access with continuous content updates",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compare Our Packages
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Basic Package */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">$27</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">LinkedIn Profile Guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic Templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Email Support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Choose Basic
                </button>
              </div>

              {/* Professional Package */}
              <div className="border-2 border-linkedin-600 p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-linkedin-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-linkedin-600 mb-2">Professional</h3>
                <div className="text-3xl font-bold text-linkedin-600 mb-4">$47</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Everything in Basic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Hidden Job Market</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Interview Prep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority Support</span>
                  </li>
                </ul>
                <button className="w-full bg-linkedin-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-linkedin-700 transition-colors">
                  Choose Professional
                </button>
              </div>

              {/* Executive Package */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Executive</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">$97</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1-on-1 Coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Resume Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">VIP Support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Choose Executive
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Trusted by Professionals Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">96%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">127</div>
                <div className="text-gray-300">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's included in the bundle?",
                answer: "You get LinkedIn optimization guide, hidden job market strategies, interview prep, salary negotiation scripts, and all templates."
              },
              {
                question: "Is this suitable for my industry?",
                answer: "Yes! Our strategies work for all industries and career levels from entry to executive positions."
              },
              {
                question: "How long do I have access?",
                answer: "You get lifetime access to all materials plus free updates as we add new content."
              },
              {
                question: "What if I'm not satisfied?",
                answer: "We offer a 30-day money-back guarantee. No questions asked if you're not completely satisfied."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <Download className="w-5 h-5" />
              <span>Get Instant Access Now</span>
            </button>
            <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
          </div>
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

export default ImageProductDetail;
