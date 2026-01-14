import { TrendingUp, Target, Users, MessageSquare, Search, Building2, Network, Eye, Zap, Lightbulb, CheckCircle2, Clock } from 'lucide-react';

function HiddenJobMarket() {
  const strategies = [
    {
      number: '1',
      icon: TrendingUp,
      title: 'Track Growth Before Jobs Exist',
      description: 'Hidden roles are created when companies experience change or growth.',
      whatToTrack: [
        'Company expansion or scaling',
        'Mergers and acquisitions',
        'New leadership appointments',
        'New products or services',
        'Awards, funding, or major contracts',
      ],
      insight: 'Growth creates problems. Problems create jobs. By identifying these early, you can position yourself before a role is advertised.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '2',
      icon: Target,
      title: 'Contact Decision Makers Directly',
      description: 'When you spot growth opportunities, do not wait for a job posting. Reach out directly to:',
      contacts: ['Department heads', 'Directors', 'Senior managers', 'Executives involved in the growth'],
      tip: 'Approach tip: Send a short, contextual message that congratulates or references the company\'s news and positions yourself as a solution, not just a job seeker. This reduces competition and makes your outreach memorable.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '3',
      icon: Building2,
      title: 'Focus on Growth Companies',
      description: 'Hidden jobs rarely exist in stagnant organizations.',
      targetCompanies: [
        'Scaling operations',
        'Reorganizing teams',
        'Entering new markets',
        'Launching new initiatives',
      ],
      insight: 'These companies often hire quietly to move fast and avoid public competition.',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '4',
      icon: Network,
      title: 'Use Social Media Strategically',
      description: 'Social platforms are tools for visibility, intelligence, and engagement, not just profile storage.',
      platforms: [
        { name: 'LinkedIn', tip: 'Engage daily by commenting thoughtfully, sharing insights, and liking posts. This builds familiarity and credibility.' },
        { name: 'Twitter', tip: 'Follow recruiters and search firms in your industry; monitor informal job postings.' },
        { name: 'Facebook', tip: 'Companies post openings and network opportunities. Join relevant groups and ask for referrals or advice.' },
      ],
      insight: 'Consistency in engagement creates awareness and opportunity.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      number: '5',
      icon: MessageSquare,
      title: 'Replace Applications with Conversations',
      description: 'Applications feel productive, but conversations get hired.',
      highValueActions: [
        'Schedule informational interviews',
        'Seek advisory conversations',
        'Request insights or industry perspective',
      ],
      reveals: [
        'Roles that do not yet exist',
        'Internal hiring plans',
        'Referral opportunities',
      ],
      insight: 'Most hidden jobs are filled before they reach the public.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      number: '6',
      icon: Search,
      title: 'Spend Less Time Applying Online',
      description: 'Limit online applications to about 20% of your effort. Focus the remaining 80% on networking, research, and direct outreach. This is where the majority of hidden opportunities exist.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      number: '7',
      icon: Target,
      title: 'Build a Target Employer List',
      description: 'A structured approach beats random applications.',
      steps: [
        'List 30–40 target companies you want to work for',
        'Research culture, leadership, and strategic direction',
        'Identify internal contacts on LinkedIn or other professional networks',
        'Track outreach, responses, and follow-ups',
      ],
      insight: 'This approach turns job searching from random guessing into a systematic, proactive strategy.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      number: '8',
      icon: Users,
      title: 'Leverage Alumni and Warm Networks',
      description: 'Warm connections dramatically increase your chances of success.',
      actions: [
        'Tap into college or university alumni networks',
        'Reach out to former colleagues or industry peers',
        'Ask for information and introductions, not direct jobs',
      ],
      insight: 'People are far more likely to respond positively when there\'s a shared connection.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      number: '9',
      icon: Eye,
      title: 'Stay Visible Through Small Daily Actions',
      description: 'You don\'t need hours every day — small actions compound.',
      dailyActions: [
        'Comment thoughtfully on LinkedIn posts',
        'Send one networking message or follow-up',
        'Share one insight or update',
        'Engage with decision-makers\' posts',
      ],
      insight: 'Consistency builds familiarity, credibility, and opportunities.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      number: '10',
      icon: Zap,
      title: 'Be Proactive, Not Passive',
      description: 'Hidden jobs reward initiative.',
      strongCandidates: [
        'Start conversations early',
        'Follow up professionally',
        'Position themselves as problem-solvers',
        'Stay visible without appearing desperate',
      ],
      color: 'from-red-500 to-red-600',
    },
  ];

  const keyTakeaways = [
    'Identify growth opportunities before roles exist',
    'Build and engage networks proactively',
    'Reduce competition by avoiding mass online applications',
    'Position themselves as solutions, not just applicants',
  ];

  const dailyChecklist = [
    { time: '5 minutes', actions: ['Like posts', 'Comment on connections\' content', 'Send a LinkedIn request'] },
    { time: '10 minutes', actions: ['Email a contact', 'Write a LinkedIn update', 'Follow a company page'] },
    { time: '30 minutes', actions: ['Write a LinkedIn article', 'Conduct an informational interview', 'Follow up on applications'] },
  ];

  return (
    <section id="hidden-jobs" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" 
            alt="Career growth" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Access the Hidden Job Market</h2>
            <p className="text-purple-100 text-lg">Discover opportunities that never get posted publicly</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction */}
        <div className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Did you know that only <span className="font-bold text-purple-600">5–15% of hiring</span> happens through job boards, while up to <span className="font-bold text-purple-600">80% of positions</span> are never publicly advertised?
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    If you rely solely on online applications, you are competing for the smallest and most crowded portion of opportunities. The majority of hiring occurs quietly through referrals, internal promotions, and direct outreach.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    Learning how to access the hidden job market drastically increases your chances of being noticed and advancing to interviews.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" 
                alt="Job search strategy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Strategies */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80" 
            alt="Job market strategies" 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="space-y-8 mb-12">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="mt-3 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-purple-600">{strategy.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{strategy.title}</h3>
                      <p className="text-lg text-gray-700 mb-6">{strategy.description}</p>

                      {strategy.whatToTrack && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">What to track:</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {strategy.whatToTrack.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.contacts && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Reach out directly to:</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {strategy.contacts.map((contact, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <Target className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{contact}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.targetCompanies && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Target companies that are:</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {strategy.targetCompanies.map((company, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <Building2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{company}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.platforms && (
                        <div className="mb-6 space-y-4">
                          {strategy.platforms.map((platform, i) => (
                            <div key={i} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                              <p className="font-bold text-gray-900 mb-2">{platform.name}:</p>
                              <p className="text-gray-700">{platform.tip}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {strategy.highValueActions && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">High-value actions:</p>
                          <div className="space-y-2">
                            {strategy.highValueActions.map((action, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <MessageSquare className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.reveals && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">These conversations often reveal:</p>
                          <div className="space-y-2">
                            {strategy.reveals.map((reveal, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{reveal}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.steps && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Steps:</p>
                          <ol className="space-y-2 ml-4">
                            {strategy.steps.map((step, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                <span className="text-gray-700 pt-0.5">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {strategy.actions && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Actionable steps:</p>
                          <div className="space-y-2">
                            {strategy.actions.map((action, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.dailyActions && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Daily actions (5–30 minutes):</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {strategy.dailyActions.map((action, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.strongCandidates && (
                        <div className="mb-6">
                          <p className="font-semibold text-gray-900 mb-3">Strong candidates:</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {strategy.strongCandidates.map((candidate, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                <span className="text-gray-700">{candidate}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {strategy.tip && (
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <p className="text-gray-700 italic">{strategy.tip}</p>
                        </div>
                      )}

                      {strategy.insight && (
                        <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-300">
                          <p className="text-gray-800 font-semibold">{strategy.insight}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Takeaways */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
              alt="Success strategy" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-2xl font-bold">Key Takeaways</h3>
            </div>
          <p className="text-blue-100 mb-6 text-lg">The hidden job market favors those who:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {keyTakeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{takeaway}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-lg font-semibold italic">
              Remember: Somewhere, someone is already looking for exactly what you offer. The difference is whether you are visible to them or lost in a pile of applications.
            </p>
          </div>
          </div>
        </div>

        {/* Daily Checklist */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-10 h-10 text-teal-600" />
            <h3 className="text-2xl font-bold text-gray-900">Bonus: Quick Daily Actions Checklist</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" 
              alt="Daily action checklist" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {dailyChecklist.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">{item.time}</span>
                </div>
                <ul className="space-y-2">
                  {item.actions.map((action, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HiddenJobMarket;
