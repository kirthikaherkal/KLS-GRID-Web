import { motion } from 'motion/react';
import { Calendar, Clock, Users, Lightbulb, Code, TrendingUp } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: Lightbulb,
      title: 'Ideation Lab',
      duration: '4 Weeks',
      participants: '30 Teams',
      description: 'Transform your raw ideas into viable business concepts with structured workshops and mentorship.',
      features: ['Idea Validation', 'Market Research', 'Business Model Canvas', 'Pitch Preparation'],
    },
    {
      icon: Code,
      title: 'MVP Sprint',
      duration: '8 Weeks',
      participants: '20 Teams',
      description: 'Build your Minimum Viable Product with technical guidance and rapid prototyping support.',
      features: ['Technical Mentorship', 'Product Development', 'User Testing', 'Iteration Cycles'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Accelerator',
      duration: '12 Weeks',
      participants: '15 Startups',
      description: 'Scale your startup with advanced growth strategies, funding access, and market expansion support.',
      features: ['Growth Hacking', 'Investor Connects', 'Marketing Strategy', 'Team Building'],
    },
    {
      icon: Users,
      title: 'Incubation Program',
      duration: '6 Months',
      participants: '10 Startups',
      description: 'Comprehensive support for early-stage startups including workspace, mentorship, and funding.',
      features: ['Co-working Space', 'Legal Support', 'Financial Planning', 'Network Access'],
    },
  ];

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
              Our <span className="text-orange-500">Programs</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From ideation to scaling, we offer comprehensive programs tailored to every stage of your startup journey.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <program.icon className="w-8 h-8 text-orange-500" />
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                  >
                    {program.title}
                  </motion.h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Clock size={16} className="text-orange-500" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Users size={16} className="text-orange-500" />
                      <span>{program.participants}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 mb-6">{program.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-neutral-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Application <span className="text-orange-500">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', desc: 'Submit your application through our portal' },
              { step: '02', title: 'Initial Review', desc: 'Our team evaluates your proposal' },
              { step: '03', title: 'Interview', desc: 'Present your idea to our panel' },
              { step: '04', title: 'Onboarding', desc: 'Join the program and start building' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-white mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
