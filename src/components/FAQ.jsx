import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can I expect to see results after optimizing my LinkedIn profile?",
      answer: "Most users see immediate improvements in profile views within the first week. Many report increased recruiter outreach within 2-3 weeks of implementing the optimization strategies."
    },
    {
      question: "Is this guide suitable for freelancers and business owners?",
      answer: "Absolutely! The guide covers strategies for professionals, job seekers, freelancers, and business owners. LinkedIn optimization works for anyone looking to build their professional brand."
    },
    {
      question: "What format is the guide delivered in?",
      answer: "The LinkedIn Profile Optimization guide is delivered as a digital PDF download, making it accessible on any device. You'll receive instant access after purchase."
    },
    {
      question: "Are the free audit tools really free?",
      answer: "Yes! All the recommended audit tools like Resume Worded, Jobscan, Teal, Zopto, and SkillSyncer offer free versions that provide valuable profile insights."
    },
    {
      question: "How often should I update my LinkedIn profile?",
      answer: "We recommend updating your profile every 3-6 months or after completing major projects. The guide includes a maintenance checklist for regular updates."
    },
    {
      question: "Will this help me show up in Google searches?",
      answer: "Yes! The SEO optimization section teaches you how to use keywords and strategies that help your LinkedIn profile rank in both LinkedIn and Google search results."
    },
    {
      question: "What is Creator Mode and should I enable it?",
      answer: "Creator Mode is a LinkedIn feature that gives you extra visibility and a follow button. It's recommended for professionals looking to build their personal brand and audience."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via email. Our team typically responds within 24 hours to help with any LinkedIn optimization questions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Optimization FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about optimizing your LinkedIn profile for maximum visibility
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Still have questions about LinkedIn optimization?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our customer support team is here to help you succeed. Reach out anytime and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Support
            </button>
            <button className="btn-secondary">
              Download Free Checklist Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
