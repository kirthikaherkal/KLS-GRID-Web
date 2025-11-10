import { motion } from 'motion/react';
import { ExternalLink, TrendingUp } from 'lucide-react';

export function Startups() {
  // Mock startup logos - in production, these would be actual startup logos
  const startups = [
    { name: 'TechFlow', category: 'SaaS', status: 'Active' },
    { name: 'HealthSync', category: 'HealthTech', status: 'Funded' },
    { name: 'EduLearn', category: 'EdTech', status: 'Active' },
    { name: 'GreenEnergy', category: 'CleanTech', status: 'Growing' },
    { name: 'FinSecure', category: 'FinTech', status: 'Active' },
    { name: 'FoodHub', category: 'Food & Bev', status: 'Funded' },
    { name: 'LogiTrack', category: 'Logistics', status: 'Active' },
    { name: 'SmartHome', category: 'IoT', status: 'Growing' },
    { name: 'DataViz', category: 'Analytics', status: 'Active' },
    { name: 'CloudNet', category: 'Cloud Services', status: 'Funded' },
    { name: 'MobileFirst', category: 'Mobile Apps', status: 'Active' },
    { name: 'AIAssist', category: 'AI/ML', status: 'Growing' },
  ];

  const successStories = [
    {
      name: 'TechFlow Solutions',
      description: 'Started as a college project, now serving 500+ enterprise clients.',
      achievement: '₹5Cr+ Revenue',
      growth: '300% YoY Growth',
    },
    {
      name: 'HealthSync Pro',
      description: 'Revolutionizing healthcare access across rural India.',
      achievement: '50K+ Users',
      growth: 'Series A Funded',
    },
    {
      name: 'EduLearn Platform',
      description: 'Making quality education accessible to millions.',
      achievement: '1M+ Students',
      growth: 'Profitable in 18 months',
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
              Our <span className="text-orange-500">Startups</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Meet the innovative companies that have been incubated at KLS GRID and are making waves in their respective industries.
            </p>
          </motion.div>

          {/* Startup Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all p-8 flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                {/* Logo Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white">{startup.name.charAt(0)}</span>
                </div>
                
                <h3 className="text-white mb-2">{startup.name}</h3>
                <p className="text-neutral-400 text-sm mb-2">{startup.category}</p>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs">
                  {startup.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-orange-500/10 rounded-xl p-8 border border-orange-500/20"
          >
            {[
              { value: '50+', label: 'Startups Incubated' },
              { value: '₹10Cr+', label: 'Total Funding Raised' },
              { value: '500+', label: 'Jobs Created' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                  {stat.value}
                </div>
                <p className="text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Success <span className="text-orange-500">Stories</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Inspiring journeys of startups that began their journey at KLS GRID
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-neutral-950 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all p-8"
              >
                <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-white mb-4">{story.name}</h3>
                <p className="text-neutral-400 mb-6">{story.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500">Achievement</span>
                    <span className="text-orange-500">{story.achievement}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500">Growth</span>
                    <span className="text-orange-500">{story.growth}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Read More</span>
                  <ExternalLink size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
