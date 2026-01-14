import { Briefcase, Camera, Image, Type, FileText, Star, Users, GraduationCap, Link2, CheckCircle, Search, TrendingUp, Award, AlertCircle, HelpCircle, Sparkles } from 'lucide-react';

function LinkedInOptimization() {
  const checklistItems = [
    { icon: Camera, title: 'Profile Photo', tips: ['Use a clear, friendly, professional headshot', 'Smile and look approachable', 'Keep the background simple'] },
    { icon: Image, title: 'Background Banner', tips: ['Add a banner image that fits your industry or personal brand', 'Use Canva to create a simple design'] },
    { icon: Type, title: 'Headline', tips: ['Go beyond your job title', 'Include keywords showing what you do and how you help', 'Example: "Marketing Consultant | Helping Small Businesses Grow with Social Media"'] },
    { icon: FileText, title: 'About Section', tips: ['Write in first person ("I" and "my")', 'Share what you do, who you help, and your biggest wins', 'Use short paragraphs', 'Add a call to action: "Let\'s connect" or "Message me to collaborate"'] },
    { icon: Briefcase, title: 'Experience', tips: ['Focus on results, not duties', 'Use bullet points', 'Include numbers when possible (e.g., "Boosted sales by 25%")'] },
    { icon: Star, title: 'Featured Section', tips: ['Add links, videos, or files showcasing your work', 'Include blog posts, interviews, case studies, or awards'] },
    { icon: Award, title: 'Skills & Endorsements', tips: ['Pick 10–15 top skills', 'Match them to your job and goals', 'Ask for endorsements'] },
    { icon: Users, title: 'Recommendations', tips: ['Get 3–5 short recommendations from past clients or managers', 'Shows proof of your work and credibility'] },
    { icon: GraduationCap, title: 'Education & Certifications', tips: ['List degrees, certifications, and relevant online courses'] },
    { icon: Link2, title: 'Custom LinkedIn URL', tips: ['Make it clean and easy to share: linkedin.com/in/yourname'] },
    { icon: CheckCircle, title: '"Open to Work" or "Providing Services"', tips: ['Turn on if job hunting or freelancing'] },
    { icon: Search, title: 'Add Keywords', tips: ['Use job titles and skill terms in headline, About section, experience, and skills'] },
  ];

  const benefits = [
    { icon: Search, text: 'Shows up in search results (LinkedIn & Google)' },
    { icon: TrendingUp, text: 'Gets more profile views and connection requests' },
    { icon: Award, text: 'Builds trust and credibility' },
    { icon: Briefcase, text: 'Brings in job offers, clients, and business leads' },
  ];

  const advancedTips = [
    'Post weekly with career tips or personal stories',
    'Upload short videos to build connection',
    'Join LinkedIn groups in your industry',
    'Comment on others\' posts to grow network',
    'Use 2–5 hashtags per post',
    'Turn on Creator Mode for extra visibility',
  ];

  const tools = [
    'Resume Worded – Profile score and tips',
    'Jobscan – Compares profile to job listings',
    'Teal – AI-based suggestions',
    'Zopto – Profile visibility analysis',
    'SkillSyncer – Matches profile to job descriptions',
  ];

  const mistakes = [
    'Blurry or no photo',
    'Weak headline',
    'Blank About section',
    'Listing duties instead of results',
    'Not using keywords',
    'Ignoring profile views & engagement stats',
  ];

  return (
    <section id="linkedin" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&q=80" 
            alt="LinkedIn profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Briefcase className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">LinkedIn Profile Optimization</h2>
            <p className="text-blue-100 text-lg">Complete checklist and guide to maximize your professional presence</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction */}
        <div className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="hidden md:block flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Professional networking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Optimizing your LinkedIn profile is one of the easiest and most powerful ways to grow your career, business, or personal brand online. With over <span className="font-bold text-blue-600">1 billion users</span>, LinkedIn is now the top platform for professionals, job seekers, freelancers, and business owners.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This guide provides step-by-step instructions, checklists, free tools, and expert tips to help your profile stand out, get more views, and build trust with visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Why LinkedIn Profile Optimization Matters</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
              alt="LinkedIn success metrics" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Checklist */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-green-400 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Step-by-Step LinkedIn Checklist</h3>
          </div>
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
              alt="LinkedIn checklist" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {checklistItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="mt-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                      <ul className="space-y-2">
                        {item.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advanced Tips */}
        <div className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900">Advanced LinkedIn Tips</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
              alt="LinkedIn growth tips" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {advancedTips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Free LinkedIn Audit Tools</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
              alt="LinkedIn tools and analytics" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Tips */}
        <div className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">LinkedIn SEO Tips</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
              alt="SEO optimization" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="text-gray-700">Use job-related keywords in headline and About section</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="text-gray-700">Repeat essential skills across sections</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="text-gray-700">Post content regularly</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="text-gray-700">Use hashtags and join keyword-rich groups</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-bold text-gray-900">Common LinkedIn Mistakes</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80" 
              alt="Avoid common mistakes" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {mistakes.map((mistake, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">{mistake}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">How to improve my profile fast?</p>
              <p className="text-gray-700">Update photo, headline, and About section first.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">How often to update?</p>
              <p className="text-gray-700">Every 3–6 months or after big projects.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">Can freelancers benefit?</p>
              <p className="text-gray-700">Yes, clients search LinkedIn for services directly.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">What keywords to use?</p>
              <p className="text-gray-700">Job titles, skills, tools from real job listings.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">Is connecting with strangers okay?</p>
              <p className="text-gray-700">Yes, add a short message.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">What is Creator Mode?</p>
              <p className="text-gray-700">Feature for extra visibility and follow button.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-indigo-200">
              <p className="font-bold text-gray-900 mb-2">What is SSI?</p>
              <p className="text-gray-700">Social Selling Index score measuring network and visibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinkedInOptimization;
