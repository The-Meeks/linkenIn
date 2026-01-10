import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      company: "Tech Startup",
      content: "The LinkedIn optimization guide helped me triple my profile views and land interviews at companies I never thought possible. The step-by-step checklist was exactly what I needed!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      company: "Fortune 500 Company",
      content: "I went from 0 to 15+ recruiter messages per week after implementing the SEO strategies. This guide paid for itself within the first month.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Product Designer",
      company: "Design Agency",
      content: "The EEAT section alone helped me understand how to build real authority on LinkedIn. My profile now ranks for my target keywords.",
      rating: 5,
      avatar: "EJ"
    },
    {
      name: "David Kim",
      role: "Sales Director",
      company: "SaaS Company",
      content: "As a sales professional, the LinkedIn optimization strategies helped me generate 40% more inbound leads. Best investment I've made in my career.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Jessica Taylor",
      role: "HR Manager",
      company: "Healthcare Organization",
      content: "I recommend this guide to all job seekers. The common mistakes section alone will save you hours of trial and error.",
      rating: 5,
      avatar: "JT"
    },
    {
      name: "Robert Anderson",
      role: "Financial Analyst",
      company: "Investment Firm",
      content: "The free tools section is worth the price alone. I now audit my profile monthly using the recommended tools.",
      rating: 5,
      avatar: "RA"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how professionals transformed their LinkedIn presence and career opportunities
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50,000+</div>
            <div className="text-gray-600">Profiles Optimized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">300%</div>
            <div className="text-gray-600">Average Profile Views Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-primary-200" />
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Instant Download</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">30-Day Guarantee</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Lifetime Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
