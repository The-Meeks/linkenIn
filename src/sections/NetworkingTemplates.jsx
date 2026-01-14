import { Mail, MessageSquare, Send, Copy, Users, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

function NetworkingTemplates() {
  const templates = [
    {
      icon: Users,
      title: 'LinkedIn Connection Request (No Message)',
      color: 'from-blue-500 to-blue-600',
      useWhen: 'Use when connecting casually with someone new.',
      content: `Hi (Name),

I'd like to connect here on LinkedIn to follow your insights and learn from your experience in (industry/field).

Best regards,
(Your Name)`,
    },
    {
      icon: MessageSquare,
      title: 'LinkedIn Connection Request (With Message)',
      color: 'from-indigo-500 to-indigo-600',
      useWhen: 'Use when: You want to add context or increase acceptance rate.',
      content: `Hi (Name),

I came across your profile while exploring work in (specific area), and I found your experience in (specific role/project/industry) insightful. I'm expanding my network in (industry/field) and would be glad to connect and learn from your journey.

Best regards,
(Your Name)`,
    },
    {
      icon: Send,
      title: 'LinkedIn Message After Connection',
      color: 'from-purple-500 to-purple-600',
      useWhen: 'Use when: Starting a professional conversation after connecting.',
      content: `Hi (Name),

Thank you for connecting. I'm currently exploring (topic/industry) and noticed your background in (specific area). I'd appreciate hearing your perspective on (specific topic) when you have time.

Best regards,
(Your Name)`,
    },
    {
      icon: ArrowRight,
      title: 'LinkedIn Follow-Up Message',
      color: 'from-pink-500 to-pink-600',
      useWhen: 'Use when: There\'s no response after the first message.',
      content: `Hi (Name),

I hope you're doing well. I just wanted to follow up on my earlier message regarding (topic). I'd appreciate any insights you're able to share when convenient.

Thank you,
(Your Name)`,
    },
    {
      icon: Mail,
      title: 'Email Networking Template',
      color: 'from-teal-500 to-teal-600',
      useWhen: 'Use when: Reaching out professionally via email for advice or informational networking.',
      subject: 'Seeking Your Advice on (Topic/Industry)',
      content: `Dear (Name),

I hope you're well. My name is (Your Name), and I currently work as (your role/experience). I've followed your work in (industry/company) and would value your perspective on (specific topic).

Would you be open to a brief 15–20 minute conversation at your convenience? I'd truly appreciate any guidance you're willing to share.

Thank you for your time and consideration.

Best regards,
(Your Name)`,
    },
    {
      icon: CheckCircle,
      title: 'Follow-Up Email after Meeting/Conversation',
      color: 'from-green-500 to-green-600',
      useWhen: 'Use when: Maintaining the relationship after a discussion.',
      subject: 'Thank You – (Topic/Meeting)',
      content: `Hi (Name),

Thank you for taking the time to speak with me about (topic). I found your insights on (specific point) particularly valuable and plan to apply them moving forward. I appreciate your time and hope we can stay in touch.

Best regards,
(Your Name)`,
    },
  ];

  const tips = [
    'Personalize every message (mention name, context, or shared interest)',
    'Keep messages short and professional',
    'Avoid asking for a job directly on first contact',
    'Follow up politely after 5–7 days if no response',
    'Always show gratitude and professionalism',
  ];

  return (
    <section id="networking" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32a7?w=1920&q=80" 
            alt="Professional networking" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Mail className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">LinkedIn and Email Networking Templates</h2>
            <p className="text-teal-100 text-lg">Professional templates to expand your network effectively</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction */}
        <div className="mb-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <Sparkles className="w-12 h-12 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Effective networking requires thoughtful communication. These templates help you reach out professionally, build relationships, and expand your network without coming across as pushy or desperate.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" 
                alt="Networking communication" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Visual Break */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" 
            alt="Networking strategies" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Templates */}
        <div className="space-y-8 mb-12">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{template.title}</h3>
                      <div className="flex items-start gap-2 p-3 bg-teal-50 rounded-lg border border-teal-200 mb-4">
                        <ArrowRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{template.useWhen}</p>
                      </div>
                    </div>
                  </div>

                  {/* Template Content */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-300">
                    {template.subject && (
                      <div className="mb-4 pb-4 border-b border-gray-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-5 h-5 text-teal-600" />
                          <span className="font-semibold text-gray-900">Subject:</span>
                        </div>
                        <p className="text-gray-700 font-medium">{template.subject}</p>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-4">
                      <Copy className="w-5 h-5 text-teal-600" />
                      <span className="font-semibold text-gray-900">Template:</span>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-300">
                      <pre className="whitespace-pre-wrap text-gray-700 font-sans text-sm leading-relaxed">
                        {template.content}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-teal-600" />
            <h3 className="text-2xl font-bold text-gray-900">Tips for Networking</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32a7?w=1200&q=80" 
              alt="Networking success" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-teal-200 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetworkingTemplates;
