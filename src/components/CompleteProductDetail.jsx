import { Check, Star, ArrowRight, Users, Search, TrendingUp, Award, Linkedin, Zap, Shield, Target, Eye, Briefcase, MessageSquare, DollarSign, Clock } from 'lucide-react';

const CompleteProductDetail = ({ product }) => {
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

        {/* What's Included Bundle */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Career Success Bundle - Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-linkedin-50 to-white border border-linkedin-100 hover:shadow-linkedin-glow transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                  {index === 0 && <Linkedin className="w-8 h-8 text-white" />}
                  {index === 1 && <Briefcase className="w-8 h-8 text-white" />}
                  {index === 2 && <MessageSquare className="w-8 h-8 text-white" />}
                  {index === 3 && <MessageSquare className="w-8 h-8 text-white" />}
                  {index === 4 && <DollarSign className="w-8 h-8 text-white" />}
                  {index === 5 && <MessageSquare className="w-8 h-8 text-white" />}
                  {index === 6 && <Users className="w-8 h-8 text-white" />}
                  {index === 7 && <Target className="w-8 h-8 text-white" />}
                  {index === 8 && <Award className="w-8 h-8 text-white" />}
                  {index === 9 && <Zap className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-linkedin-600 transition-colors">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Hidden Job Market Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {product.detailedContent.hiddenJobMarket.title}
          </h2>
          <div className="card p-8 bg-gradient-to-br from-linkedin-50 to-white border-2 border-linkedin-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                {product.detailedContent.hiddenJobMarket.title}
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              {product.detailedContent.hiddenJobMarket.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.detailedContent.hiddenJobMarket.strategies.map((strategy, index) => (
                <div key={index} className="group">
                  <h3 className="text-xl font-bold text-linkedin-600 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-full flex items-center justify-center group-hover:animate-pulse-slow">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    {strategy.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {strategy.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-gradient-to-br from-success-400 to-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-linkedin-100 rounded-lg p-3 border-l-4 border-linkedin-600">
                    <p className="text-linkedin-700 text-sm font-medium">
                      <span className="font-bold">Key:</span> {strategy.key}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-8 bg-gradient-to-r from-linkedin-600 to-linkedin-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.detailedContent.hiddenJobMarket.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Actions */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bonus: Quick Daily Actions Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(product.detailedContent.hiddenJobMarket.dailyActions).map(([time, action]) => (
                  <div key={time} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-linkedin-600" />
                      <span className="font-bold text-linkedin-600">{time}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interview Cheat Sheet */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {product.detailedContent.interviewCheatSheet.title}
          </h2>
          <div className="card p-8 bg-gradient-to-br from-linkedin-50 to-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-linkedin-600 to-linkedin-700 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-linkedin-600">
                  {product.detailedContent.interviewCheatSheet.title}
                </h3>
                <p className="text-gray-600 text-sm">Master's interview with proven strategies</p>
              </div>
            </div>
            <div className="space-y-6">
              {product.detailedContent.interviewCheatSheet.questions.map((qa, index) => (
                <div key={index} className="group border-l-4 border-linkedin-600 pl-6 hover:bg-linkedin-50 rounded-r-lg p-4 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-linkedin-600 transition-colors">
                    {qa.question}
                  </h3>
                  <div className="mb-3">
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold text-linkedin-600">Guidance:</span> {qa.guidance}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold text-gray-700">Example:</span>
                    </p>
                    <p className="text-gray-700 italic">{qa.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteProductDetail;
