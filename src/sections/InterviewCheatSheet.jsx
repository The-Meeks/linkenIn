import { Users, HelpCircle, MessageSquare, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

function InterviewCheatSheet() {
  const questions = [
    {
      number: 1,
      question: 'Tell me about yourself',
      want: 'Clear career story + value proposition',
      guidance: 'Share your work journey, relevant skills, key results, and passions. Keep it under 2–3 minutes.',
      example: 'I\'m a digital marketing specialist with 5 years\' experience driving customer acquisition and revenue growth. In my current role, I\'ve led campaigns that increased lead conversion by 28% and reduced ad spend waste by 15%. I\'m now looking to apply my strategy and leadership skills in a growth-focused organization like yours.',
    },
    {
      number: 2,
      question: 'What is the hardest problem you\'ve tackled?',
      want: 'Judgment under pressure',
      guidance: 'Explain the Problem → Constraints → Decision → Outcome',
      example: 'We lost a major client two weeks before launch, cutting our budget by 40%. I re-scoped deliverables, renegotiated vendor costs, and redirected the campaign to high-ROI channels. The project still launched on time and recovered 75% of projected revenue.',
    },
    {
      number: 3,
      question: 'What are your main strengths?',
      rule: 'Strengths must be proven, not claimed',
      guidance: 'Highlight 3–5 strengths relevant to the role.',
      example: 'My top strengths are strategic thinking, execution, and stakeholder management. For example, I redesigned our campaign workflow, cutting turnaround time by 30% and improving client satisfaction scores.',
    },
    {
      number: 4,
      question: 'What are your weaknesses?',
      rule: 'Safe weakness + corrective action + progress',
      guidance: 'Share real weaknesses and how you improve.',
      example: 'I used to take on too much myself. I\'ve since learned to delegate more effectively using clear task ownership and checkpoints, which improved team productivity and reduced burnout.',
    },
    {
      number: 5,
      question: 'Why do you want to work for this company?',
      rule: 'Make it about them, not you',
      guidance: 'Show research, enthusiasm, and alignment with values.',
      example: 'Your focus on data-driven decision-making and regional expansion aligns with my experience scaling campaigns in competitive markets. I see a strong opportunity to contribute immediately while growing with the company.',
    },
    {
      number: 6,
      question: 'How do you deal with pressure?',
      want: 'Emotional control + prioritization',
      example: 'During a system outage on launch day, I prioritized client communication, reassigned tasks, and focused the team on recovery actions. We resolved the issue within hours and avoided revenue loss.',
    },
    {
      number: 7,
      question: 'What sets you apart from other candidates?',
      rule: 'Combination advantage',
      guidance: 'Highlight unique strengths and experience.',
      example: 'I bring both strategic insight and hands-on execution. I don\'t just design campaigns; I analyze performance data weekly and optimize based on results.',
    },
    {
      number: 8,
      question: 'Describe a situation with multiple priorities',
      example: 'I managed three campaigns across different markets with conflicting deadlines. I ranked tasks by revenue impact, automated reporting, and held daily stand-ups. All campaigns launched on schedule.',
    },
    {
      number: 9,
      question: 'Tell me about a time you missed a deadline',
      rule: 'Own it fast',
      example: 'I underestimated approval timelines for a client. I immediately communicated the delay, proposed a revised schedule, and implemented a buffer system that prevented future delays.',
    },
    {
      number: 10,
      question: 'Describe working with a difficult person',
      guidance: 'Show empathy and problem-solving.',
      example: 'I worked with a stakeholder who frequently changed direction. I introduced documented briefs and sign-off points, which reduced revisions and improved collaboration.',
    },
    {
      number: 11,
      question: 'Where do you see yourself in 5 years?',
      guidance: 'Focus on growth inside the organization.',
      example: 'I see myself in a senior leadership role, driving strategy, mentoring teams, and contributing to long-term business growth.',
    },
    {
      number: 12,
      question: 'How do you continue learning?',
      guidance: 'Show commitment to growth.',
      example: 'I regularly take industry courses, analyze competitor strategies, and apply new insights directly to my work.',
    },
    {
      number: 13,
      question: 'How do you handle rejection?',
      example: 'I seek feedback, adjust my approach, and apply lessons to future opportunities. Rejection helps refine my strategy.',
    },
    {
      number: 14,
      question: 'What is your leadership style?',
      example: 'I\'m a results-oriented but supportive leader. I set clear expectations, empower ownership, and remove obstacles for my team.',
    },
    {
      number: 15,
      question: 'How do you motivate a team?',
      guidance: 'Focus on recognition and goals.',
      example: 'I align individual goals with business outcomes, recognize performance publicly, and give regular, actionable feedback.',
    },
    {
      number: 16,
      question: 'How do you prioritize tasks?',
      guidance: 'Show planning and decision-making.',
      example: 'I prioritize based on urgency, business impact, and risk, then delegate or defer low-value tasks.',
    },
    {
      number: 17,
      question: 'How do you handle mistakes?',
      guidance: 'Show accountability and learning.',
      example: 'I take responsibility, fix the issue, and put systems in place to prevent recurrence.',
    },
    {
      number: 18,
      question: 'Give an example of creative problem-solving',
      example: 'I redesigned our content calendar based on audience behavior data, increasing engagement by 30%.',
    },
    {
      number: 19,
      question: 'Describe a project you are proud of',
      guidance: 'Focus on outcome and impact.',
      example: 'I led a multi-channel campaign that doubled engagement and increased donor contributions by 40%.',
    },
    {
      number: 20,
      question: 'How do you handle feedback?',
      example: 'I welcome feedback, apply it quickly, and follow up to confirm improvement.',
    },
    {
      number: 21,
      question: 'How do you approach teamwork?',
      example: 'I encourage open communication, respect diverse perspectives, and keep the team aligned on outcomes.',
    },
    {
      number: 22,
      question: 'How do you handle conflict at work?',
      example: 'I address issues early, focus on facts, and work toward solutions rather than blame.',
    },
    {
      number: 23,
      question: 'Tell me about a challenge at work',
      guidance: 'STAR method: Situation → Task → Action → Result',
      example: 'When requirements changed last minute, I reallocated resources and delivered within the revised scope without compromising quality.',
    },
    {
      number: 24,
      question: 'What motivates you?',
      example: 'Solving meaningful problems and delivering measurable business results.',
    },
    {
      number: 25,
      question: 'How do you adapt to change?',
      guidance: 'Show flexibility.',
      example: 'When a project\'s direction shifted, I quickly re-prioritized tasks and kept the team aligned.',
    },
    {
      number: 26,
      question: 'Describe a time you led a project',
      guidance: 'Emphasize leadership and outcome.',
      example: 'I coordinated a cross-functional team for a marketing campaign that increased leads by 25%.',
    },
    {
      number: 27,
      question: 'How do you set goals?',
      guidance: 'Be structured.',
      example: 'I define SMART goals, track progress weekly, and adjust strategies as needed.',
    },
    {
      number: 28,
      question: 'How do you stay organized?',
      guidance: 'Show system and consistency.',
      example: 'I rely on structured workflows, digital trackers, and weekly planning sessions.',
    },
    {
      number: 29,
      question: 'Tell me about a time you disagreed with a supervisor',
      guidance: 'Show diplomacy and communication.',
      example: 'I respectfully presented alternative ideas with supporting data, and we agreed on a hybrid approach.',
    },
    {
      number: 30,
      question: 'How do you research a company before interview?',
      example: 'I study company strategy, leadership priorities, recent news, and market positioning through the company website, LinkedIn page, news articles, and recent projects to understand mission and priorities.',
    },
    {
      number: 31,
      question: 'How do you handle tight deadlines?',
      example: 'I break tasks into smaller steps, delegate when possible, and communicate status updates.',
    },
    {
      number: 32,
      question: 'How do you stay motivated during repetitive tasks?',
      example: 'I set mini-goals, track progress, and remind myself of the bigger impact.',
    },
    {
      number: 33,
      question: 'How do you handle ambiguity?',
      example: 'I clarify objectives, research options, and propose solutions proactively.',
    },
    {
      number: 34,
      question: 'How do you approach learning a new skill?',
      example: 'I break the skill into small steps, practice regularly, and seek feedback from mentors.',
    },
    {
      number: 35,
      question: 'Do you have questions for us?',
      guidance: 'Ask 3–5 insightful questions about the role, team, or company.',
      example: 'What does success look like in this role in the first 6 months? What challenges is the team currently facing? How do you measure success in this role?',
    },
  ];

  return (
    <section id="interviews" className="relative mb-16">
      {/* Section Header */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 rounded-t-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80" 
            alt="Job interview" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Job Interview Cheat Sheet</h2>
            <p className="text-green-100 text-lg">35 common questions with expert guidance and examples</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-2xl shadow-xl p-8 md:p-12 border border-gray-200">
        {/* Introduction Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80" 
            alt="Job interview preparation" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Tips Section */}
        <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Success Tips</h3>
              <p className="text-gray-700">Prepare thoroughly, practice your answers, and remember to ask thoughtful questions. Confidence and preparation are key to interview success.</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-80 h-48">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Interview success" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid gap-6">
          {questions.map((q) => (
            <div
              key={q.number}
              className="group relative bg-gradient-to-br from-white to-green-50/30 rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-white font-bold text-lg">{q.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-gray-900">{q.question}</h3>
                  </div>

                  {q.want && (
                    <div className="mb-3 flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <span className="font-semibold">What they want:</span> {q.want}
                      </p>
                    </div>
                  )}

                  {q.rule && (
                    <div className="mb-3 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Rule:</span> {q.rule}
                      </p>
                    </div>
                  )}

                  {q.guidance && (
                    <div className="mb-3 flex items-start gap-2">
                      <MessageSquare className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <span className="font-semibold">Guidance:</span> {q.guidance}
                      </p>
                    </div>
                  )}

                  {q.example && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-gray-900">Example:</span>
                      </div>
                      <p className="text-gray-700 italic pl-7">{q.example}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterviewCheatSheet;
