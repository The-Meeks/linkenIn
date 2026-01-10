import { Check, Star, Download, Video, CheckCircle2, Linkedin, Briefcase, MessageSquare, DollarSign, Mail, Users, Target, Award } from 'lucide-react';

const SimpleProductDetail = ({ product }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LinkedIn Profile Optimization Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=300&fit=crop&crop=center" 
              alt="LinkedIn Profile Optimization" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Image failed to load:', e.target.src);
              }}
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              LinkedIn Profile Optimization and Checklist
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why LinkedIn Profile Optimization Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Optimizing your LinkedIn profile is one of the easiest and most powerful ways to grow your career, business, or personal brand online. With over 1 billion users, LinkedIn is now the top platform for professionals, job seekers, freelancers, and business owners.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    This guide provides step-by-step instructions, checklists, free tools, and expert tips to help your profile stand out, get more views, and build trust with visitors.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center" 
                    alt="LinkedIn Growth" 
                    className="rounded-xl shadow-lg w-full"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.error('Image failed to load:', e.target.src);
                    }}
                  />
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">A strong LinkedIn profile:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Shows up in search results (LinkedIn & Google)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gets more profile views and connection requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Builds trust and credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Brings in job offers, clients, and business leads</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step LinkedIn Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Profile Photo", desc: "Use a clear, friendly, professional headshot. Smile and look approachable. Keep background simple." },
                    { title: "Background Banner", desc: "Add a banner image that fits your industry or personal brand. Use Canva to create a simple design." },
                    { title: "Headline", desc: "Go beyond your job title. Include keywords showing what you do and how you help." },
                    { title: "About Section", desc: "Write in first person ('I' and 'my'). Share what you do, who you help, and your biggest wins." },
                    { title: "Experience", desc: "Focus on results, not duties. Use bullet points. Include numbers when possible." },
                    { title: "Featured Section", desc: "Add links, videos, or files showcasing your work. Include blog posts, interviews, case studies." }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">{index + 1}. {item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center" 
                    alt="Professional Profile" 
                    className="rounded-xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Skills & Endorsements", desc: "Pick 10–15 top skills. Match them to your job and goals. Ask for endorsements." },
                  { title: "Recommendations", desc: "Get 3–5 short recommendations from past clients or managers. Shows proof of your work." },
                  { title: "Education & Certifications", desc: "List degrees, certifications, and relevant online courses." },
                  { title: "Custom LinkedIn URL", desc: "Make it clean and easy to share: linkedin.com/in/yourname" },
                  { title: "Open to Work", desc: "Turn on if job hunting or freelancing." },
                  { title: "Add Keywords", desc: "Use job titles and skill terms in headline, About section, experience, and skills." }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{index + 7}. {item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced LinkedIn Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Post weekly with career tips or personal stories",
                    "Upload short videos to build connection",
                    "Join LinkedIn groups in your industry",
                    "Comment on others' posts to grow network",
                    "Use 2–5 hashtags per post",
                    "Turn on Creator Mode for extra visibility"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center" 
                    alt="LinkedIn Engagement" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free LinkedIn Audit Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Resume Worded", desc: "Profile score and tips" },
                  { name: "Jobscan", desc: "Compares profile to job listings" },
                  { name: "Teal", desc: "AI-based suggestions" },
                  { name: "Zopto", desc: "Profile visibility analysis" },
                  { name: "SkillSyncer", desc: "Matches profile to job descriptions" }
                ].map((tool, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-600 mb-1">{tool.name}</h4>
                    <p className="text-sm text-gray-600">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common LinkedIn Mistakes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Blurry or no photo",
                  "Weak headline",
                  "Blank About section",
                  "Listing duties instead of results",
                  "Not using keywords",
                  "Ignoring profile views & engagement stats"
                ].map((mistake, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">!</span>
                    </div>
                    <span className="text-gray-700">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h3>
              <div className="space-y-4">
                {[
                  { q: "How to improve my profile fast?", a: "Update photo, headline, and About section first." },
                  { q: "How often to update?", a: "Every 3–6 months or after big projects." },
                  { q: "Can freelancers benefit?", a: "Yes, clients search LinkedIn for services directly." },
                  { q: "What keywords to use?", a: "Job titles, skills, tools from real job listings." },
                  { q: "Is connecting with strangers okay?", a: "Yes, add a short message." },
                  { q: "What is Creator Mode?", a: "Feature for extra visibility and follow button." },
                  { q: "What is SSI?", a: "Social Selling Index score measuring network and visibility." }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Job Market Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=300&fit=crop&crop=center" 
              alt="Hidden Job Market" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tips on How to Access the Hidden Job Market
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Did you know that only 5–15% of hiring happens through job boards, while up to 80% of positions are never publicly advertised?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    If you rely solely on online applications, you are competing for smallest and most crowded portion of opportunities. The majority of hiring occurs quietly through referrals, internal promotions, and direct outreach.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Learning how to access the hidden job market drastically increases your chances of being noticed and advancing to interviews.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1559028012-cdad4366f6a2?w=400&h=300&fit=crop&crop=center" 
                    alt="Hidden Job Market" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Track Growth Before Jobs Exist</h3>
              <p className="text-gray-700 mb-4">Hidden roles are created when companies experience change or growth.</p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-600 mb-2">What to track:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Company expansion or scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Mergers and acquisitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">New leadership appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">New products or services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Awards, funding, or major contracts</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-2 italic">Growth creates problems. Problems create jobs. By identifying these early, you can position yourself before a role is advertised.</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Contact Decision Makers Directly</h3>
              <p className="text-gray-700 mb-4">When you spot growth opportunities, do not wait for a job posting. Reach out directly to:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Department heads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Directors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Senior managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Executives involved in growth</span>
                </li>
              </ul>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>Approach tip:</strong> Send a short, contextual message that congratulates or references company's news and positions yourself as a solution, not just a job seeker. This reduces competition and makes your outreach memorable.</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Focus on Growth Companies</h3>
              <p className="text-gray-700 mb-4">Hidden jobs rarely exist in stagnant organizations.</p>
              <p className="text-gray-700 mb-4">Target companies that are:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scaling operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reorganizing teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Entering new markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Launching new initiatives</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">These companies often hire quietly to move fast and avoid public competition.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Use Social Media Strategically</h3>
              <p className="text-gray-700 mb-4">Social platforms are tools for visibility, intelligence, and engagement, not just profile storage.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">LinkedIn</h4>
                  <p className="text-sm text-gray-700">Engage daily by commenting thoughtfully, sharing insights, and liking posts. This builds familiarity and credibility.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Twitter</h4>
                  <p className="text-sm text-gray-700">Follow recruiters and search firms in your industry; monitor informal job postings.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Facebook</h4>
                  <p className="text-sm text-gray-700">Companies post openings and network opportunities. Join relevant groups and ask for referrals or advice.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">Consistency in engagement creates awareness and opportunity.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Replace Applications with Conversations</h3>
              <p className="text-gray-700 mb-4">Applications feel productive, but conversations get hired.</p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-600 mb-2">High-value actions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Schedule informational interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seek advisory conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Request insights or industry perspective</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">These conversations often reveal roles that do not yet exist, internal hiring plans, or referral opportunities. Most hidden jobs are filled before they reach the public.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Spend Less Time Applying Online</h3>
              <p className="text-gray-700 mb-4">Limit online applications to about 20% of your effort. Focus remaining 80% on networking, research, and direct outreach.</p>
              <p className="text-sm text-gray-600 italic">This is where majority of hidden opportunities exist.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Build a Target Employer List</h3>
              <p className="text-gray-700 mb-4">A structured approach beats random applications.</p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-600 mb-2">Steps:</h4>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">1.</span>
                    <span className="text-gray-700">List 30–40 target companies you want to work for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">2.</span>
                    <span className="text-gray-700">Research culture, leadership, and strategic direction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">3.</span>
                    <span className="text-gray-700">Identify internal contacts on LinkedIn or other professional networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-purple-600">4.</span>
                    <span className="text-gray-700">Track outreach, responses, and follow-ups</span>
                  </li>
                </ol>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">This approach turns job searching from random guessing into a systematic, proactive strategy.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Leverage Alumni and Warm Networks</h3>
              <p className="text-gray-700 mb-4">Warm connections dramatically increase your chances of success.</p>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-orange-600 mb-2">Actionable steps:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tap into college or university alumni networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reach out to former colleagues or industry peers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ask for information and introductions, not direct jobs</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">People are far more likely to respond positively when there's a shared connection.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Stay Visible Through Small Daily Actions</h3>
              <p className="text-gray-700 mb-4">You don't need hours every day — small actions compound.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">5 minutes:</h4>
                  <p className="text-sm text-gray-700">Like posts, comment on connections' content, send a LinkedIn request</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">10 minutes:</h4>
                  <p className="text-sm text-gray-700">Email a contact, write a LinkedIn update, follow a company page</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">30 minutes:</h4>
                  <p className="text-sm text-gray-700">Write a LinkedIn article, conduct an informational interview, follow up on applications</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">Consistency builds familiarity, credibility, and opportunities.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Be Proactive, Not Passive</h3>
              <p className="text-gray-700 mb-4">Hidden jobs reward initiative.</p>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-bold text-red-600 mb-2">Strong candidates:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Start conversations early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Follow up professionally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Position themselves as problem-solvers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Stay visible without appearing desperate</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <p className="text-lg mb-4">The hidden job market favors those who:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Identify growth opportunities before roles exist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Build and engage networks proactively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Reduce competition by avoiding mass online applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Position themselves as solutions, not just applicants</span>
                  </li>
                </ul>
                <p className="text-lg mt-4 italic">Remember: Somewhere, someone is already looking for exactly what you offer. The difference is whether you are visible to them or lost in a pile of applications.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bonus: Quick Daily Actions Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-600 mb-2">5 minutes:</h4>
                  <p className="text-sm text-gray-700">Like posts, comment on connections' content, send a LinkedIn request</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-600 mb-2">10 minutes:</h4>
                  <p className="text-sm text-gray-700">Email a contact, write a LinkedIn update, follow a company page</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-600 mb-2">30 minutes:</h4>
                  <p className="text-sm text-gray-700">Write a LinkedIn article, conduct an informational interview, follow up on applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Interview Cheat Sheet Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1551434675678-0f2e7338b5a?w=800&h=300&fit=crop&crop=center" 
              alt="Job Interview" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Job Interview Cheat Sheet
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551434675678-0f2e7338b5a?w=400&h=300&fit=crop&crop=center" 
                  alt="Interview Success" 
                  className="rounded-xl shadow-lg w-full mb-6"
                />
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Interview Success Tips:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Research the company thoroughly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Prepare specific examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Practice your answers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  {
                    question: "1. Tell me about yourself",
                    guidance: "Interviewers want clear career story + value proposition",
                    example: "I'm a digital marketing specialist with 5 years' experience driving customer acquisition and revenue growth. In my current role, I've led campaigns that increased lead conversion by 28% and reduced ad spend waste by 15%. I'm now looking to apply my strategy and leadership skills in a growth-focused organization like yours."
                  },
                  {
                    question: "2. What is the hardest problem you've tackled?",
                    guidance: "What they want: Judgment under pressure",
                    example: "We lost a major client two weeks before launch, cutting our budget by 40%. I re-scoped deliverables, renegotiated vendor costs, and redirected the campaign to high-ROI channels. The project still launched on time and recovered 75% of projected revenue."
                  },
                  {
                    question: "3. What are your main strengths?",
                    guidance: "Rule: Strengths must be proven, not claimed",
                    example: "My top strengths are strategic thinking, execution, and stakeholder management. For example, I redesigned our campaign workflow, cutting turnaround time by 30% and improving client satisfaction scores."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{item.question}</h4>
                    {item.guidance && (
                      <p className="text-sm text-gray-600 mb-3 italic">{item.guidance}</p>
                    )}
                    <p className="text-gray-700 mb-3">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=200&fit=crop&crop=center" 
                alt="Professional Interview" 
                className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  question: "1. Tell me about yourself",
                  guidance: "Interviewers want clear career story + value proposition",
                  example: "I'm a digital marketing specialist with 5 years' experience driving customer acquisition and revenue growth. In my current role, I've led campaigns that increased lead conversion by 28% and reduced ad spend waste by 15%. I'm now looking to apply my strategy and leadership skills in a growth-focused organization like yours."
                },
                {
                  question: "2. What is the hardest problem you've tackled?",
                  guidance: "What they want: Judgment under pressure",
                  example: "We lost a major client two weeks before launch, cutting our budget by 40%. I re-scoped deliverables, renegotiated vendor costs, and redirected the campaign to high-ROI channels. The project still launched on time and recovered 75% of projected revenue."
                },
                {
                  question: "3. What are your main strengths?",
                  guidance: "Rule: Strengths must be proven, not claimed",
                  example: "My top strengths are strategic thinking, execution, and stakeholder management. For example, I redesigned our campaign workflow, cutting turnaround time by 30% and improving client satisfaction scores."
                },
                {
                  question: "4. What are your weaknesses?",
                  guidance: "Rule: Safe weakness + corrective action + progress",
                  example: "I used to take on too much myself. I've since learned to delegate more effectively using clear task ownership and checkpoints, which improved team productivity and reduced burnout."
                },
                {
                  question: "5. Why do you want to work for this company?",
                  guidance: "Rule: Make it about them, not you",
                  example: "Your focus on data-driven decision-making and regional expansion aligns with my experience scaling campaigns in competitive markets. I see a strong opportunity to contribute immediately while growing with the company."
                },
                {
                  question: "6. How do you deal with pressure?",
                  guidance: "What they want: Emotional control + prioritization",
                  example: "During a system outage on launch day, I prioritized client communication, reassigned tasks, and focused the team on recovery actions. We resolved the issue within hours and avoided revenue loss."
                },
                {
                  question: "7. What sets you apart from other candidates?",
                  guidance: "Rule: Combination advantage",
                  example: "I bring both strategic insight and hands-on execution. I don't just design campaigns; I analyze performance data weekly and optimize based on results."
                },
                {
                  question: "8. Describe a situation with multiple priorities",
                  example: "I managed three campaigns across different markets with conflicting deadlines. I ranked tasks by revenue impact, automated reporting, and held daily stand-ups. All campaigns launched on schedule."
                },
                {
                  question: "9. Tell me about a time you missed a deadline",
                  guidance: "Rule: Own it fast",
                  example: "I underestimated approval timelines for a client. I immediately communicated the delay, proposed a revised schedule, and implemented a buffer system that prevented future delays."
                },
                {
                  question: "10. Describe working with a difficult person",
                  guidance: "Show empathy and problem-solving",
                  example: "I worked with a stakeholder who frequently changed direction. I introduced documented briefs and sign-off points, which reduced revisions and improved collaboration."
                },
                {
                  question: "11. Where do you see yourself in 5 years?",
                  guidance: "Focus on growth inside the organization",
                  example: "I see myself in a senior leadership role, driving strategy, mentoring teams, and contributing to long-term business growth."
                },
                {
                  question: "12. How do you continue learning?",
                  guidance: "Show commitment to growth",
                  example: "I regularly take industry courses, analyze competitor strategies, and apply new insights directly to my work."
                },
                {
                  question: "13. How do you handle rejection?",
                  example: "I seek feedback, adjust my approach, and apply lessons to future opportunities. Rejection helps refine my strategy."
                },
                {
                  question: "14. What is your leadership style?",
                  example: "I'm a results-oriented but supportive leader. I set clear expectations, empower ownership, and remove obstacles for my team."
                },
                {
                  question: "15. How do you motivate a team?",
                  guidance: "Focus on recognition and goals",
                  example: "I align individual goals with business outcomes, recognize performance publicly, and give regular, actionable feedback."
                },
                {
                  question: "16. How do you prioritize tasks?",
                  guidance: "Show planning and decision-making",
                  example: "I prioritize based on urgency, business impact, and risk, then delegate or defer low-value tasks."
                },
                {
                  question: "17. How do you handle mistakes?",
                  guidance: "Show accountability and learning",
                  example: "I take responsibility, fix the issue, and put systems in place to prevent recurrence."
                },
                {
                  question: "18. Give an example of creative problem-solving",
                  example: "I redesigned our content calendar based on audience behavior data, increasing engagement by 30%."
                },
                {
                  question: "19. Describe a project you are proud of",
                  guidance: "Focus on outcome and impact",
                  example: "I led a multi-channel campaign that doubled engagement and increased donor contributions by 40%."
                },
                {
                  question: "20. How do you handle feedback?",
                  example: "I welcome feedback, apply it quickly, and follow up to confirm improvement."
                },
                {
                  question: "21. How do you approach teamwork?",
                  example: "I encourage open communication, respect diverse perspectives, and keep the team aligned on outcomes."
                },
                {
                  question: "22. How do you handle conflict at work?",
                  example: "I address issues early, focus on facts, and work toward solutions rather than blame."
                },
                {
                  question: "23. Tell me about a challenge at work",
                  guidance: "STAR method: Situation → Task → Action → Result",
                  example: "When requirements changed last minute, I reallocated resources and delivered within the revised scope without compromising quality."
                },
                {
                  question: "24. What motivates you?",
                  example: "Solving meaningful problems and delivering measurable business results."
                },
                {
                  question: "25. How do you adapt to change?",
                  guidance: "Show flexibility",
                  example: "When a project's direction shifted, I quickly re-prioritized tasks and kept the team aligned."
                },
                {
                  question: "26. Describe a time you led a project",
                  guidance: "Emphasize leadership and outcome",
                  example: "I coordinated a cross-functional team for a marketing campaign that increased leads by 25%."
                },
                {
                  question: "27. How do you set goals?",
                  guidance: "Be structured",
                  example: "I define SMART goals, track progress weekly, and adjust strategies as needed."
                },
                {
                  question: "28. How do you stay organized?",
                  guidance: "Show system and consistency",
                  example: "I rely on structured workflows, digital trackers, and weekly planning sessions."
                },
                {
                  question: "29. Tell me about a time you disagreed with a supervisor",
                  guidance: "Show diplomacy and communication",
                  example: "I respectfully presented alternative ideas with supporting data, and we agreed on a hybrid approach."
                },
                {
                  question: "30. How do you research a company before interview?",
                  example: "I study company strategy, leadership priorities, recent news, and market positioning through the company website, LinkedIn page, news articles, and recent projects to understand mission and priorities."
                },
                {
                  question: "31. How do you handle tight deadlines?",
                  example: "I break tasks into smaller steps, delegate when possible, and communicate status updates."
                },
                {
                  question: "32. How do you stay motivated during repetitive tasks?",
                  example: "I set mini-goals, track progress, and remind myself of the bigger impact."
                },
                {
                  question: "33. How do you handle ambiguity?",
                  example: "I clarify objectives, research options, and propose solutions proactively."
                },
                {
                  question: "34. How do you approach learning a new skill?",
                  example: "I break the skill into small steps, practice regularly, and seek feedback from mentors."
                },
                {
                  question: "35. Do you have questions for us?",
                  guidance: "Ask 3–5 insightful questions about the role, team, or company",
                  example: "What does success look like in this role in the first 6 months?\nWhat challenges is the team currently facing?\nHow do you measure success in this role?"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                  {item.guidance && (
                    <p className="text-sm text-gray-600 mb-3 italic">{item.guidance}</p>
                  )}
                  <p className="text-gray-700 mb-3">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 18 Strategic Questions Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307be889dab?w=800&h=300&fit=crop&crop=center" 
              alt="Strategic Interview Questions" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              18 Strategic Questions You Can Ask During the Interview Process
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6 italic">
                Position Yourself as a High-Value Hire, Not a Desperate Candidate
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Job interviews are not interrogations. They are strategic conversations. The questions you ask signal how you think, how you work, and the level at which you operate.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SECTION 1: ROLE PURPOSE & EXPECTATIONS</h3>
              <div className="space-y-4">
                {[
                  "How long has this position been open, and what prompted the need to fill it now?",
                  "Is this a new role or a replacement? If it is a replacement, what led to the previous person's departure?",
                  "What are the most critical outcomes you expect from this role in the first 90 days?",
                  "What problems or challenges would you like the person in this role to solve first?"
                ].map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{index + 1}. {question}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SECTION 2: PERFORMANCE & SUCCESS</h3>
              <div className="space-y-4">
                {[
                  "How will success be measured for this position?",
                  "What specific results would indicate that hiring me was the right decision?",
                  "What skills or capabilities would make the biggest immediate impact in this role?",
                  "What distinguishes high performers in this role from average performers?"
                ].map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{index + 5}. {question}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SECTION 3: TEAM, LEADERSHIP & MANAGEMENT STYLE</h3>
              <div className="space-y-4">
                {[
                  "Can you describe the team I would be working with and how this role fits within it?",
                  "How would you describe your management or leadership style?",
                  "What type of employee tends to thrive under your leadership?",
                  "Are there any current weaknesses or gaps within the department you are looking to improve?"
                ].map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{index + 9}. {question}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SECTION 4: CULTURE & WORKING ENVIRONMENT</h3>
              <div className="space-y-4">
                {[
                  "What values or behaviours are most rewarded within the organisation?",
                  "How are feedback, accountability, and performance conversations handled?",
                  "How does the organisation support collaboration and decision-making across teams?"
                ].map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{index + 13}. {question}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SECTION 5: GROWTH, FIT & NEXT STEPS</h3>
              <div className="space-y-4">
                {[
                  "What opportunities for growth or advancement exist within the organisation?",
                  "Is there anything in my background or experience that gives you hesitation about my fit for this role?",
                  "What are the next steps in the interview or selection process, and when should I expect feedback?"
                ].map((question, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{index + 16}. {question}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Salary Negotiation Script Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1554224154-260325c0572e?w=800&h=300&fit=crop&crop=center" 
              alt="Salary Negotiation" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Salary Negotiation Script
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1554224154-260325c0572e?w=400&h=300&fit=crop&crop=center" 
                  alt="Salary Negotiation Success" 
                  className="rounded-xl shadow-lg w-full mb-6"
                />
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-600 mb-2">Negotiation Success Factors:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Research market rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Document your value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Practice your approach</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Preparation (Non-Negotiable)</h3>
                  <p className="text-gray-700 mb-4">You are not negotiating "needs". You are negotiating risk reduction and value creation.</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-600 mb-2">Guidance:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Research industry salary ranges.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Know your value: experience, skills, achievements.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=200&fit=crop&crop=center" 
                alt="Professional Success" 
                className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
              />
            </div>
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Preparation (Non-Negotiable)</h3>
                <p className="text-gray-700 mb-4">You are not negotiating "needs". You are negotiating risk reduction and value creation.</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Research industry salary ranges.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Know your value: experience, skills, achievements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Decide your minimum acceptable salary and ideal range.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Prepare examples showing your impact and results.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700">"I researched market data and found the typical range for this role is $60K–$75K. Based on my experience leading campaigns that increased engagement by 50% and delivered measurable ROI, I feel a salary at the higher end of this range is justified."</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Opening the Conversation</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Be polite and confident.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Express enthusiasm for the role.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">State you'd like to discuss compensation.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700">"Thank you for the offer. I'm very excited about the role and the team. Before accepting, I'd like to discuss the salary to ensure it aligns with my experience and the market."</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Presenting Your Case</h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Focus on value, achievements, and skills.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Use market research.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Be specific and concise.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700">"Based on my six years managing multi-platform campaigns and achieving measurable results—like a 40% increase in engagement and media coverage in 10+ outlets—combined with market research, I feel a salary in the $70K–$75K range is appropriate."</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Responding to Pushback</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Listen carefully.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stay professional and calm.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Reiterate value.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700">"I understand budget constraints. Considering my track record and the scope of responsibilities, is there flexibility to meet $70K, or can we explore other benefits to bridge the gap?"</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Negotiating Other Benefits</h3>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">If salary is fixed, negotiate bonuses, vacation, remote work, training, or professional development.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700">"If the base salary is fixed, could we discuss additional vacation days or a performance-based bonus structure?"</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Closing the Conversation</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stay positive, whatever the outcome.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Confirm next steps in writing.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700">"Thank you for considering my request. I'm excited to join the team and contribute to the projects we discussed. I look forward to receiving the updated offer."</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Tips for Success</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Tips for Success:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Practice your script aloud.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Avoid ultimatums.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Be clear about your minimum acceptable offer.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stay professional, calm, and confident.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Time the discussion after the official offer is made.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Templates Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=300&fit=crop&crop=center" 
              alt="Thank You Templates" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Thank You Templates
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Interview Thank You Email</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Send 24 hours after interview.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Express appreciation, enthusiasm, and reiterate your value.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Keep it concise and professional.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700 mb-2"><strong>Subject:</strong> Thank You – (Position Title) Interview</p>
                  <p className="text-gray-700 mb-2">Dear (Interviewer's Name),</p>
                  <p className="text-gray-700 mb-2">Thank you for taking the time to speak with me about the (Position Title) role at (Company Name). I enjoyed learning more about your upcoming projects, particularly (specific project or goal).</p>
                  <p className="text-gray-700 mb-2">I'm very excited about the opportunity to contribute my experience in (key skill/experience), which has (specific result, e.g., "led campaigns that increased engagement by 35%"), and (another key skill/experience). I'm confident I can help (Company Name) achieve (specific objective or outcome).</p>
                  <p className="text-gray-700 mb-2">Please don't hesitate to reach out if you need any additional information. I look forward to the possibility of working together.</p>
                  <p className="text-gray-700 mb-2">Best regards,</p>
                  <p className="text-gray-700">(Your Full Name)</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Post-Meeting / Networking Thank You</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Use after professional meetings, informational interviews, or networking sessions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Highlight what you gained from the interaction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Include a next step to keep the relationship active.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700 mb-2"><strong>Subject:</strong> Thank You – (Meeting Topic)</p>
                  <p className="text-gray-700 mb-2">Hi (Name),</p>
                  <p className="text-gray-700 mb-2">Thank you for meeting with me today and sharing your insights about (topic/industry). I found our discussion on (specific point) particularly helpful and it gave me a clearer perspective on (relevant takeaway).</p>
                  <p className="text-gray-700 mb-2">I plan to (specific next step/action) based on your advice, and I'd love to stay in touch as I move forward.</p>
                  <p className="text-gray-700 mb-2">Best regards,</p>
                  <p className="text-gray-700">(Your Full Name)</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Thank You After Receiving an Offer</h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Express gratitude and excitement.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Reconfirm interest in the role.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Optional: subtly reinforce your value.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700 mb-2"><strong>Subject:</strong> Thank You – Job Offer</p>
                  <p className="text-gray-700 mb-2">Dear (Hiring Manager's Name),</p>
                  <p className="text-gray-700 mb-2">Thank you sincerely for the offer for the (Position Title) role at (Company Name). I'm thrilled about the opportunity to contribute my experience in (specific skills/responsibilities), which I believe can (specific impact, e.g., "streamline operations and improve team performance").</p>
                  <p className="text-gray-700 mb-2">I appreciate your confidence in me and look forward to (next step, e.g., starting date/signing paperwork/joining the team).</p>
                  <p className="text-gray-700 mb-2">Best regards,</p>
                  <p className="text-gray-700">(Your Full Name)</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. General Professional Thank You</h3>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-600 mb-2">Guidance:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Use for colleagues, mentors, or professional favors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Keep it short, genuine, and forward-looking.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700"><strong>Example:</strong></p>
                  <p className="text-gray-700 mb-2">Hi (Name),</p>
                  <p className="text-gray-700 mb-2">Thank you so much for your support with (specific help). Your guidance and time made a real difference.</p>
                  <p className="text-gray-700 mb-2">I look forward to keeping in touch and hopefully collaborating again in the future.</p>
                  <p className="text-gray-700 mb-2">Best,</p>
                  <p className="text-gray-700">(Your Name)</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Tips for All Thank You Notes</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-600 mb-2">Tips for All Thank You Notes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Send within 24–48 hours for interviews or meetings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Keep it concise and professional.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Personalize with specific details from the interaction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Highlight your value, impact, or insight gained.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Always proofread before sending.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Use a confident and enthusiastic tone, without overdoing formality.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn and Email Networking Templates Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1515189021221-c5e4ff5cc094?w=800&h=300&fit=crop&crop=center" 
              alt="LinkedIn and Email Networking" 
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              LinkedIn and Email Networking Templates
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. LinkedIn Connection Request (No Message)</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Use when connecting casually with someone new.</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">Hi (Name),</p>
                    <p className="text-gray-700 mb-2">I'd like to connect here on LinkedIn to follow your insights and learn from your experience in (industry/field).</p>
                    <p className="text-gray-700 mb-2">Best regards,</p>
                    <p className="text-gray-700">(Your Name)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. LinkedIn Connection Request (With Message)</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-600 mb-2">Use when: You want to add context or increase acceptance rate.</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">Hi (Name),</p>
                    <p className="text-gray-700 mb-2">I came across your profile while exploring work in (specific area), and I found your experience in (specific role/project/industry) insightful. I'm expanding my network in (industry/field) and would be glad to connect and learn from your journey.</p>
                    <p className="text-gray-700 mb-2">Best regards,</p>
                    <p className="text-gray-700">(Your Name)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. LinkedIn Message After Connection</h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-600 mb-2">Use when: Starting a professional conversation after connecting.</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">Hi (Name),</p>
                    <p className="text-gray-700 mb-2">Thank you for connecting. I'm currently exploring (topic/industry) and noticed your background in (specific area). I'd appreciate hearing your perspective on (specific topic) when you have time.</p>
                    <p className="text-gray-700 mb-2">Best regards,</p>
                    <p className="text-gray-700">(Your Name)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. LinkedIn Follow-Up Message</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-600 mb-2">Use when: There's no response after the first message.</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2">Hi (Name),</p>
                    <p className="text-gray-700 mb-2">I hope you're doing well. I just wanted to follow up on my earlier message regarding (topic). I'd appreciate any insights you're able to share when convenient.</p>
                    <p className="text-gray-700 mb-2">Thank you,</p>
                    <p className="text-gray-700">(Your Name)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Email Networking Template</h3>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-bold text-orange-600 mb-2">Use when: Reaching out professionally via email for advice or informational networking.</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2"><strong>Subject:</strong> Seeking Your Advice on (Topic/Industry)</p>
                    <p className="text-gray-700 mb-2">Dear (Name),</p>
                    <p className="text-gray-700 mb-2">I hope you're well. My name is (Your Name), and I currently work as (your role/experience). I've followed your work in (industry/company) and would value your perspective on (specific topic).</p>
                    <p className="text-gray-700 mb-2">Would you be open to a brief 15–20 minute conversation at your convenience? I'd truly appreciate any guidance you're willing to share.</p>
                    <p className="text-gray-700 mb-2">Thank you for your time and consideration.</p>
                    <p className="text-gray-700 mb-2">Best regards,</p>
                    <p className="text-gray-700">(Your Name)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Follow-Up Email after Meeting/Conversation</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-bold text-red-600 mb-2">Use when: Maintaining the relationship after a discussion.</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-2"><strong>Subject:</strong> Thank You – (Topic/Meeting)</p>
                    <p className="text-gray-700 mb-2">Hi (Name),</p>
                    <p className="text-gray-700 mb-2">Thank you for taking the time to speak with me about (topic). I found your insights on (specific point) particularly valuable and plan to apply them moving forward. I appreciate your time and hope we can stay in touch.</p>
                    <p className="text-gray-700 mb-2">Best regards,</p>
                    <p className="text-gray-700">(Your Name)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Tips for Networking</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-600 mb-2">Tips for Networking:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Personalize every message (mention name, context, or shared interest)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Keep messages short and professional.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Avoid asking for a job directly on first contact.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Follow up politely after 5–7 days if no response.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Always show gratitude and professionalism.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleProductDetail;
