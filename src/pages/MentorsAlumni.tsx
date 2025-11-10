import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Star, ChevronLeft, ChevronRight, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function MentorsAlumni() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null);

  const mentors = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Tech Entrepreneur',
      expertise: 'SaaS & Product Development',
      bio: '15+ years in building scalable tech products. Former CTO at multiple unicorns.',
      image: 'mentor tech',
      sessions: '50+ Sessions',
      startups: '25 Startups Mentored',
    },
    {
      name: 'Priya Sharma',
      title: 'Venture Capitalist',
      expertise: 'Funding & Growth Strategy',
      bio: 'Managing Partner at leading VC firm. Invested in 50+ startups across India.',
      image: 'business woman',
      sessions: '40+ Sessions',
      startups: '30 Startups Funded',
    },
    {
      name: 'Amit Patel',
      title: 'Serial Entrepreneur',
      expertise: 'E-commerce & Marketing',
      bio: 'Built and exited 3 successful startups. Expert in growth hacking.',
      image: 'entrepreneur man',
      sessions: '60+ Sessions',
      startups: '20 Startups Mentored',
    },
    {
      name: 'Dr. Sneha Reddy',
      title: 'Academic & Researcher',
      expertise: 'AI/ML & Innovation',
      bio: 'Professor at IIT. Leading researcher in artificial intelligence applications.',
      image: 'professor woman',
      sessions: '35+ Sessions',
      startups: '15 Startups Guided',
    },
    {
      name: 'Vikram Singh',
      title: 'Business Strategist',
      expertise: 'Operations & Scaling',
      bio: 'Ex-McKinsey consultant. Helped 100+ startups scale their operations.',
      image: 'consultant man',
      sessions: '70+ Sessions',
      startups: '40 Startups Scaled',
    },
    {
      name: 'Ananya Desai',
      title: 'Marketing Expert',
      expertise: 'Brand & Digital Marketing',
      bio: 'Former CMO at Fortune 500 company. Digital marketing thought leader.',
      image: 'marketing woman',
      sessions: '45+ Sessions',
      startups: '28 Brands Built',
    },
  ];

  const testimonials = [
    {
      name: 'Rahul Verma',
      company: 'TechFlow Solutions',
      role: 'Founder & CEO',
      text: 'KLS GRID provided us with the perfect launchpad. The mentorship and resources helped us go from idea to Series A in just 18 months.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Neha Gupta',
      company: 'HealthSync Pro',
      role: 'Co-Founder',
      text: 'The network I built at GRID was invaluable. I found my co-founder, first investors, and key team members all through the program.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Karan Malhotra',
      company: 'EduLearn Platform',
      role: 'Founder',
      text: 'What sets GRID apart is the quality of mentorship. Having experienced entrepreneurs guide you makes all the difference.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              Our <span className="text-orange-500">Mentors</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Learn from the best. Our mentors are successful entrepreneurs, industry veterans, and thought leaders committed to your success.
            </p>
          </motion.div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                onHoverStart={() => setHoveredMentor(index)}
                onHoverEnd={() => setHoveredMentor(null)}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden shadow-lg hover:shadow-orange-500/20">
                  {/* Image with Gradient Overlay */}
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop`}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                    
                    {/* Floating Stats */}
                    <AnimatePresence>
                      {hoveredMentor === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm rounded-lg p-3 text-white text-xs"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase size={12} />
                            <span>{mentor.sessions}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap size={12} />
                            <span>{mentor.startups}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expertise Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-lg px-3 py-2">
                        <p className="text-orange-500 text-sm text-center">{mentor.expertise}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-white mb-1 group-hover:text-orange-500 transition-colors">{mentor.name}</h3>
                    <p className="text-orange-500/80 text-sm mb-3">{mentor.title}</p>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{mentor.bio}</p>
                    
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="text-sm">Connect</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Alumni <span className="text-orange-500">Success Stories</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Hear from founders who have successfully built their startups with GRID's support
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl border-2 border-orange-500/20 p-12 shadow-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Avatar */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30" />
                        <img
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].name}
                          className="relative w-40 h-40 rounded-full object-cover border-4 border-orange-500/30"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-3">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2">
                      {/* Stars */}
                      <div className="flex gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-neutral-300 mb-6 text-lg leading-relaxed italic">
                        "{testimonials[currentTestimonial].text}"
                      </p>

                      {/* Author */}
                      <div className="border-t border-neutral-800 pt-6">
                        <h4 className="text-white mb-1">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-orange-500 text-sm mb-1">{testimonials[currentTestimonial].role}</p>
                        <p className="text-neutral-400 text-sm">{testimonials[currentTestimonial].company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg shadow-orange-500/30"
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg shadow-orange-500/30"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all ${
                      index === currentTestimonial 
                        ? 'bg-orange-500 w-10 h-3' 
                        : 'bg-neutral-700 w-3 h-3 hover:bg-neutral-600'
                    } rounded-full`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Ready to Join Our <span className="text-orange-500">Community</span>?
            </h2>
            <p className="text-neutral-400 mb-8">
              Become part of a thriving ecosystem of innovators and entrepreneurs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
            >
              Apply to GRID Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
