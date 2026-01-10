import { Check, Star, ArrowRight, Users, Search, TrendingUp, Award, Linkedin, Zap, Shield, Target, Eye } from 'lucide-react';

const ProductDetail = ({ product }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header with enhanced styling */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse-slow" />
              <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse-slow" />
              <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse-slow" />
              <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse-slow" />
              <Star className="w-5 h-5 text-yellow-500 fill-current animate-pulse-slow" />
            </div>
            <span className="ml-2 text-gray-600 font-medium">(4.9/5)</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-linkedin-600 to-linkedin-700 bg-clip-text text-transparent bg-clip-text text-transparent">
              {product.title}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-4xl font-bold text-linkedin-600 animate-pulse-slow">${product.price}</div>
            <div className="text-gray-500 text-lg">USD</div>
          </div>
          
          <button className="group relative bg-gradient-to-r from-linkedin-600 to-linkedin-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-linkedin-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
            <Zap className="w-5 h-5 group-hover:animate-bounce-gentle" />
            <span>Get Instant Access</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
              <span>30-day guarantee</span>
            </div>
          </div>
        </div>

        {/* Why LinkedIn Optimization Matters */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why LinkedIn Profile Optimization Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.detailedContent.whyMatters.map((benefit, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-linkedin-50 to-white border border-linkedin-100 hover:shadow-linkedin-glow transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                  {index === 0 && <Search className="w-8 h-8 text-white" />}
                  {index === 1 && <Users className="w-8 h-8 text-white" />}
                  {index === 2 && <Award className="w-8 h-8 text-white" />}
                  {index === 3 && <TrendingUp className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-linkedin-600 transition-colors">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Checklist */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Step-by-Step LinkedIn Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.detailedContent.checklist.map((section, index) => (
              <div key={index} className="group card p-6 hover:shadow-xl transition-all duration-300 hover:scale-102 hover:border-linkedin-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-linkedin-600 to-linkedin-700 text-white rounded-full text-sm font-bold group-hover:animate-pulse-slow">
                    {index + 1}
                  </span>
                  <span className="group-hover:text-linkedin-600 transition-colors">{section.title}</span>
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-success-400 to-success-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advanced LinkedIn Tips
          </h2>
          <div className="card p-8 bg-gradient-to-br from-linkedin-50 to-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.detailedContent.advancedTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-slow">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-linkedin-600 transition-colors">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Free Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Free LinkedIn Audit Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.detailedContent.freeTools.map((tool, index) => (
              <div key={index} className="group card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-linkedin-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-lg flex items-center justify-center group-hover:animate-pulse-slow">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-linkedin-600 transition-colors">{tool.split(' – ')[0]}</h3>
                </div>
                <p className="text-gray-600 text-sm group-hover:text-linkedin-700 transition-colors">{tool.split(' – ')[1]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO & EEAT Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-linkedin-600" />
              LinkedIn SEO Tips
            </h2>
            <div className="card p-6 bg-gradient-to-br from-linkedin-50 to-white">
              <ul className="space-y-3">
                {product.detailedContent.seoTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 group hover:translate-x-1 transition-transform duration-300">
                    <div className="w-6 h-6 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-slow">
                      <Search className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm group-hover:text-linkedin-600 transition-colors">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-linkedin-600" />
              EEAT (Experience, Expertise, Authority, Trust)
            </h2>
            <div className="card p-6 bg-gradient-to-br from-linkedin-50 to-white">
              <ul className="space-y-3">
                {product.detailedContent.eeattips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 group hover:translate-x-1 transition-transform duration-300">
                    <div className="w-6 h-6 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-slow">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm group-hover:text-linkedin-600 transition-colors">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common LinkedIn Mistakes
          </h2>
          <div className="card p-8 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.detailedContent.commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-slow">
                    <span className="text-white font-bold text-lg">✗</span>
                  </div>
                  <span className="text-red-700 group-hover:text-red-800 transition-colors">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {product.detailedContent.faqs.map((faq, index) => (
              <div key={index} className="card border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102 hover:border-linkedin-200">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-linkedin-600 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 group-hover:text-linkedin-700 transition-colors">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-linkedin-600 via-linkedin-700 to-linkedin-800 rounded-3xl p-8 text-white shadow-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Zap className="w-8 h-8 text-yellow-300 animate-bounce-gentle" />
              Ready to Optimize Your LinkedIn Profile?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get instant access to complete guide and start transforming your LinkedIn presence today.
            </p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-4xl font-bold text-yellow-300 animate-pulse-slow">${product.price}</div>
              <div className="text-lg opacity-75">USD</div>
            </div>
            <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
              <Linkedin className="w-5 h-5 group-hover:animate-bounce-gentle" />
              <span>Get Instant Access Now</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <p className="text-sm mt-4 opacity-75">
              30-day money-back guarantee • Instant download • Lifetime updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
