import { Award, DollarSign, MessageSquare, TrendingUp, Handshake, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';

function SalaryNegotiation() {
  const steps = [
    {
      number: 1,
      icon: Lightbulb,
      title: 'Preparation (Non-Negotiable)',
      subtitle: 'You are not negotiating "needs". You are negotiating risk reduction and value creation.',
      guidance: [
        'Research industry salary ranges.',
        'Know your value: experience, skills, achievements.',
        'Decide your minimum acceptable salary and ideal range.',
        'Prepare examples showing your impact and results.',
      ],
      example: 'I researched market data and found the typical range for this role is $60K–$75K. Based on my experience leading campaigns that increased engagement by 50% and delivered measurable ROI, I feel a salary at the higher end of this range is justified.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      icon: MessageSquare,
      title: 'Opening the Conversation',
      guidance: [
        'Be polite and confident.',
        'Express enthusiasm for the role.',
        'State you\'d like to discuss compensation.',
      ],
      example: 'Thank you for the offer. I\'m very excited about the role and the team. Before accepting, I\'d like to discuss the salary to ensure it aligns with my experience and the market.',
      color: 'from-green-500 to-green-600',
    },
    {
      number: 3,
      icon: TrendingUp,
      title: 'Presenting Your Case',
      guidance: [
        'Focus on value, achievements, and skills.',
        'Use market research.',
        'Be specific and concise.',
      ],
      example: 'Based on my six years managing multi-platform campaigns and achieving measurable results—like a 40% increase in engagement and media coverage in 10+ outlets—combined with market research, I feel a salary in the $70K–$75K range is appropriate.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 4,
      icon: AlertCircle,
      title: 'Responding to Pushback',
      guidance: [
        'Listen carefully.',
        'Stay professional and calm.',
        'Reiterate value.',
      ],
      example: 'I understand budget constraints. Considering my track record and the scope of responsibilities, is there flexibility to meet $70K, or can we explore other benefits to bridge the gap?',
      color: 'from-orange-500 to-orange-600',
    },
    {
      number: 5,
      icon: Handshake,
      title: 'Negotiating Other Benefits',
      guidance: 'If salary is fixed, negotiate bonuses, vacation, remote work, training, or professional development.',
      example: 'If the base salary is fixed, could we discuss additional vacation days or a performance-based bonus structure?',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      number: 6,
      icon: CheckCircle,
      title: 'Closing the Conversation',
      guidance: [
        'Stay positive, whatever the outcome.',
        'Confirm next steps in writing.',
      ],
      example: 'Thank you for considering my request. I\'m excited to join the team and contribute to the projects we discussed. I look forward to receiving the updated offer.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  const tips = [
    'Practice your script aloud.',
    'Avoid ultimatums.',
    'Be clear about your minimum acceptable offer.',
    'Stay professional, calm, and confident.',
    'Time the discussion after the official offer is made.',
  ];

  return (
    <section id="salary" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80" 
            alt="Business negotiation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Salary Negotiation Script</h2>
            <p className="text-red-100 text-lg">Master the art of negotiating your worth</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction */}
        <div className="mb-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <DollarSign className="w-12 h-12 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Salary negotiation is a critical skill that can significantly impact your career earnings. This script guides you through each step of the negotiation process, from preparation to closing.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    Remember: You're not negotiating "needs" — you're negotiating value and risk reduction.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                alt="Salary negotiation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
            alt="Salary negotiation process" 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="space-y-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="mt-3 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-red-600">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      
                      {step.subtitle && (
                        <p className="text-gray-600 italic mb-4 font-semibold">{step.subtitle}</p>
                      )}

                      {Array.isArray(step.guidance) ? (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Guidance:</p>
                          <ul className="space-y-2">
                            {step.guidance.map((item, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-2">Guidance:</p>
                          <p className="text-gray-700">{step.guidance}</p>
                        </div>
                      )}

                      {step.example && (
                        <div className="mt-6 p-5 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-500">
                          <div className="flex items-start gap-2 mb-2">
                            <MessageSquare className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="font-semibold text-gray-900">Example:</span>
                          </div>
                          <p className="text-gray-700 italic pl-7">{step.example}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips for Success */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center gap-4 mb-6">
            <Lightbulb className="w-10 h-10 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Tips for Success</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" 
              alt="Negotiation success" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalaryNegotiation;
