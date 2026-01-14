import { Target, HelpCircle, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

function StrategicQuestions() {
  const sections = [
    {
      title: 'ROLE PURPOSE & EXPECTATIONS',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      questions: [
        'How long has this position been open, and what prompted the need to fill it now?',
        'Is this a new role or a replacement? If it is a replacement, what led to the previous person\'s departure?',
        'What are the most critical outcomes you expect from this role in the first 90 days?',
        'What problems or challenges would you like the person in this role to solve first?',
      ],
    },
    {
      title: 'PERFORMANCE & SUCCESS',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      questions: [
        'How will success be measured for this position?',
        'What specific results would indicate that hiring me was the right decision?',
        'What skills or capabilities would make the biggest immediate impact in this role?',
        'What distinguishes high performers in this role from average performers?',
      ],
    },
    {
      title: 'TEAM, LEADERSHIP & MANAGEMENT STYLE',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      questions: [
        'Can you describe the team I would be working with and how this role fits within it?',
        'How would you describe your management or leadership style?',
        'What type of employee tends to thrive under your leadership?',
        'Are there any current weaknesses or gaps within the department you are looking to improve?',
      ],
    },
    {
      title: 'CULTURE & WORKING ENVIRONMENT',
      icon: Award,
      color: 'from-orange-500 to-orange-600',
      questions: [
        'What values or behaviours are most rewarded within the organisation?',
        'How are feedback, accountability, and performance conversations handled?',
        'How does the organisation support collaboration and decision-making across teams?',
      ],
    },
    {
      title: 'GROWTH, FIT & NEXT STEPS',
      icon: Target,
      color: 'from-indigo-500 to-indigo-600',
      questions: [
        'What opportunities for growth or advancement exist within the organisation?',
        'Is there anything in my background or experience that gives you hesitation about my fit for this role?',
        'What are the next steps in the interview or selection process, and when should I expect feedback?',
      ],
    },
  ];

  return (
    <section id="questions" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" 
            alt="Professional discussion" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Target className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">18 Strategic Questions</h2>
            <p className="text-orange-100 text-lg">Position yourself as a high-value hire, not a desperate candidate</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction */}
        <div className="mb-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-12 h-12 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4 italic font-semibold">
                    Position Yourself as a High-Value Hire, Not a Desperate Candidate
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Job interviews are not interrogations. They are strategic conversations. The questions you ask signal how you think, how you work, and the level at which you operate.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Strategic interview questions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Questions by Section */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div key={sectionIndex} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-200">
                    <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Section {sectionIndex + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.questions.map((question, qIndex) => (
                      <div
                        key={qIndex}
                        className="group/question flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover/question:scale-110 transition-transform">
                          <span className="text-sm font-bold text-orange-600">
                            {sectionIndex + 1}.{qIndex + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                            <p className="text-gray-800 font-semibold leading-relaxed">{question}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
              alt="Strategic thinking" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-10 h-10" />
              <h3 className="text-2xl font-bold">Remember</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-lg text-orange-50 leading-relaxed flex-1">
                These strategic questions demonstrate your thinking process, show genuine interest, and help you evaluate if the role and company are the right fit for you. Use them to turn the interview into a two-way conversation.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-64 h-40">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                  alt="Professional conversation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicQuestions;
