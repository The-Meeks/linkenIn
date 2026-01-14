import { MessageSquare, Mail, CheckCircle, FileText, Users, Copy, Sparkles } from 'lucide-react';

function ThankYouTemplates() {
  const templates = [
    {
      icon: MessageSquare,
      title: 'Interview Thank You Email',
      color: 'from-blue-500 to-blue-600',
      guidance: [
        'Send 24 hours after the interview.',
        'Express appreciation, enthusiasm, and reiterate your value.',
        'Keep it concise and professional.',
      ],
      subject: 'Thank You – (Position Title) Interview',
      content: `Dear (Interviewer's Name),

Thank you for taking the time to speak with me about the (Position Title) role at (Company Name). I enjoyed learning more about your upcoming projects, particularly (specific project or goal).

I'm very excited about the opportunity to contribute my experience in (key skill/experience), which has (specific result, e.g., "led campaigns that increased engagement by 35%"), and (another key skill/experience). I'm confident I can help (Company Name) achieve (specific objective or outcome).

Please don't hesitate to reach out if you need any additional information. I look forward to the possibility of working together.

Best regards,
(Your Full Name)`,
    },
    {
      icon: Users,
      title: 'Post-Meeting / Networking Thank You',
      color: 'from-purple-500 to-purple-600',
      guidance: [
        'Use after professional meetings, informational interviews, or networking sessions.',
        'Highlight what you gained from the interaction.',
        'Include a next step to keep the relationship active.',
      ],
      subject: 'Thank You – (Meeting Topic)',
      content: `Hi (Name),

Thank you for meeting with me today and sharing your insights about (topic/industry). I found our discussion on (specific point) particularly helpful and it gave me a clearer perspective on (relevant takeaway).

I plan to (specific next step/action) based on your advice, and I'd love to stay in touch as I move forward.

Best regards,
(Your Full Name)`,
    },
    {
      icon: CheckCircle,
      title: 'Thank You After Receiving an Offer',
      color: 'from-green-500 to-green-600',
      guidance: [
        'Express gratitude and excitement.',
        'Reconfirm interest in the role.',
        'Optional: subtly reinforce your value.',
      ],
      subject: 'Thank You – Job Offer',
      content: `Dear (Hiring Manager's Name),

Thank you sincerely for the offer for the (Position Title) role at (Company Name). I'm thrilled about the opportunity to contribute my experience in (specific skills/responsibilities), which I believe can (specific impact, e.g., "streamline operations and improve team performance").

I appreciate your confidence in me and look forward to (next step, e.g., starting date/signing paperwork/joining the team).

Best regards,
(Your Full Name)`,
    },
    {
      icon: FileText,
      title: 'General Professional Thank You',
      color: 'from-orange-500 to-orange-600',
      guidance: [
        'Use for colleagues, mentors, or professional favors.',
        'Keep it short, genuine, and forward-looking.',
      ],
      subject: '',
      content: `Hi (Name),

Thank you so much for your support with (specific help). Your guidance and time made a real difference.

I look forward to keeping in touch and hopefully collaborating again in the future.

Best,
(Your Name)`,
    },
  ];

  const tips = [
    'Send within 24–48 hours for interviews or meetings.',
    'Keep it concise and professional.',
    'Personalize with specific details from the interaction.',
    'Highlight your value, impact, or insight gained.',
    'Always proofread before sending.',
    'Use a confident and enthusiastic tone, without overdoing formality.',
  ];

  return (
    <section id="thank-you" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80" 
            alt="Professional communication" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <MessageSquare className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Thank You Templates</h2>
            <p className="text-indigo-100 text-lg">Professional templates for every scenario</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction */}
        <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <Sparkles className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A well-crafted thank you note can make a lasting impression and set you apart from other candidates. Use these templates as a starting point, but always personalize them with specific details from your interaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" 
                alt="Professional thank you" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Visual Break */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" 
            alt="Professional communication" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Templates */}
        <div className="space-y-8 mb-12">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{template.title}</h3>
                      <div className="mb-4">
                        <p className="font-semibold text-gray-900 mb-2">Guidance:</p>
                        <ul className="space-y-2">
                          {template.guidance.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Email Template */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-300">
                    {template.subject && (
                      <div className="mb-4 pb-4 border-b border-gray-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-5 h-5 text-indigo-600" />
                          <span className="font-semibold text-gray-900">Subject:</span>
                        </div>
                        <p className="text-gray-700 font-medium">{template.subject}</p>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-4">
                      <Copy className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold text-gray-900">Email Template:</span>
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
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900">Tips for All Thank You Notes</h3>
          </div>
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32a7?w=1200&q=80" 
              alt="Professional communication tips" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYouTemplates;
