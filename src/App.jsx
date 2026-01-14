import { Briefcase, TrendingUp, Users, Target, Award, MessageSquare, Mail } from 'lucide-react';
import './App.css';
import LinkedInOptimization from './sections/LinkedInOptimization';
import HiddenJobMarket from './sections/HiddenJobMarket';
import InterviewCheatSheet from './sections/InterviewCheatSheet';
import StrategicQuestions from './sections/StrategicQuestions';
import SalaryNegotiation from './sections/SalaryNegotiation';
import ThankYouTemplates from './sections/ThankYouTemplates';
import NetworkingTemplates from './sections/NetworkingTemplates';

function App() {
  const sections = [
    { id: 'linkedin', icon: Briefcase, title: 'LinkedIn Optimization', color: 'from-blue-500 to-blue-600' },
    { id: 'hidden-jobs', icon: TrendingUp, title: 'Hidden Job Market', color: 'from-purple-500 to-purple-600' },
    { id: 'interviews', icon: Users, title: 'Interview Guide', color: 'from-green-500 to-green-600' },
    { id: 'questions', icon: Target, title: 'Strategic Questions', color: 'from-orange-500 to-orange-600' },
    { id: 'salary', icon: Award, title: 'Salary Negotiation', color: 'from-red-500 to-red-600' },
    { id: 'thank-you', icon: MessageSquare, title: 'Thank You Templates', color: 'from-indigo-500 to-indigo-600' },
    { id: 'networking', icon: Mail, title: 'Networking Templates', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-800/90"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" 
            alt="Professional networking" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Career Success Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your complete roadmap to LinkedIn optimization, job searching, interviews, and career growth
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.id}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          <LinkedInOptimization />
          <HiddenJobMarket />
          <InterviewCheatSheet />
          <StrategicQuestions />
          <SalaryNegotiation />
          <ThankYouTemplates />
          <NetworkingTemplates />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-lg font-semibold text-white mb-2">Career Success Guide</p>
            <p className="text-gray-400">Your trusted resource for professional growth and career advancement</p>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500">© 2024 Career Success Guide. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
