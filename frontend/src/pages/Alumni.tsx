import { motion } from 'motion/react';
import { Linkedin, Twitter, Briefcase, MapPin, GraduationCap, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState<number | null>(null);

  const alumni = [
    {
      name: 'Rahul Verma',
      batch: '2023',
      startup: 'TechFlow Solutions',
      role: 'Founder & CEO',
      currentCompany: 'TechFlow Solutions',
      location: 'Bangalore, India',
      bio: 'Founded TechFlow after graduating from GRID\'s first cohort. Successfully raised Series A funding and now serving 500+ enterprise clients with cloud-based SaaS solutions.',
      achievements: 'Series A Funded • ₹5Cr Revenue • 50+ Team',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Neha Gupta',
      batch: '2023',
      startup: 'HealthSync Pro',
      role: 'Co-Founder & CTO',
      currentCompany: 'HealthSync Pro',
      location: 'Mumbai, India',
      bio: 'Built India\'s leading telemedicine platform connecting rural patients with doctors. Featured in Forbes 30 Under 30 for revolutionary healthcare access.',
      achievements: '50K+ Users • Forbes 30U30 • Seed Funded',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Karan Malhotra',
      batch: '2023',
      startup: 'EduLearn Platform',
      role: 'Founder',
      currentCompany: 'EduLearn Platform',
      location: 'Delhi, India',
      bio: 'Created an AI-powered learning platform democratizing education. Reached profitability in 18 months with 1M+ active students across India.',
      achievements: '1M+ Students • Profitable • 200+ Courses',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Priya Reddy',
      batch: '2024',
      startup: 'GreenEnergy Solutions',
      role: 'Founder & CEO',
      currentCompany: 'GreenEnergy Solutions',
      location: 'Hyderabad, India',
      bio: 'Leading the renewable energy revolution with innovative solar solutions for rural India. Won multiple sustainability awards and government recognition.',
      achievements: 'Award Winner • 10K+ Installations • Growing',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Arjun Sharma',
      batch: '2024',
      startup: 'FinSecure',
      role: 'Co-Founder & CPO',
      currentCompany: 'FinSecure',
      location: 'Pune, India',
      bio: 'Revolutionizing financial security with blockchain-based solutions. Partnered with major banks and serving 100K+ users with secure digital transactions.',
      achievements: 'Bank Partnerships • 100K+ Users • Pre-Series A',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Ananya Patel',
      batch: '2024',
      startup: 'FoodHub',
      role: 'Founder',
      currentCompany: 'FoodHub',
      location: 'Ahmedabad, India',
      bio: 'Built a farm-to-table platform connecting local farmers directly with urban consumers. Promoting sustainable farming and reducing food waste.',
      achievements: '500+ Farmers • 20K+ Customers • Sustainable',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Vikram Joshi',
      batch: '2023',
      startup: 'LogiTrack',
      role: 'Co-Founder & CEO',
      currentCompany: 'LogiTrack',
      location: 'Chennai, India',
      bio: 'Transforming logistics with AI-powered route optimization. Helping businesses reduce costs by 30% and carbon footprint significantly.',
      achievements: '200+ B2B Clients • 30% Cost Reduction • Series A',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Meera Krishnan',
      batch: '2024',
      startup: 'SmartHome IoT',
      role: 'Founder & CTO',
      currentCompany: 'SmartHome IoT',
      location: 'Kochi, India',
      bio: 'Making smart home technology affordable for middle-class India. Developed indigenous IoT solutions with focus on energy efficiency.',
      achievements: '10K+ Homes • Energy Efficient • Seed Funded',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Rohan Das',
      batch: '2023',
      startup: 'DataViz Analytics',
      role: 'Founder',
      currentCompany: 'DataViz Analytics',
      location: 'Kolkata, India',
      bio: 'Created powerful data visualization tools for businesses. Helping companies make data-driven decisions with intuitive dashboards.',
      achievements: '150+ Enterprise Clients • Profitable • Growing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  ];

  const batches = ['All', '2023', '2024'];
  const [selectedBatch, setSelectedBatch] = useState('All');

  const filteredAlumni = selectedBatch === 'All' 
    ? alumni 
    : alumni.filter(a => a.batch === selectedBatch);

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
              Our <span className="text-orange-500">Alumni</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
              Meet the successful entrepreneurs who started their journey at KLS GRID and are now leading innovative startups across India.
            </p>

            {/* Batch Filter */}
            <div className="flex justify-center gap-4 flex-wrap">
              {batches.map((batch) => (
                <motion.button
                  key={batch}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBatch(batch)}
                  className={`px-6 py-2 rounded-lg transition-all ${
                    selectedBatch === batch
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Batch {batch}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: 'Total Alumni', value: '50+' },
              { label: 'Startups Founded', value: '45+' },
              { label: 'Jobs Created', value: '500+' },
              { label: 'Funding Raised', value: '₹50Cr+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"
              >
                <div className="text-orange-500 mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  {stat.value}
                </div>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumnus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden shadow-lg group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                  
                  {/* Batch Badge */}
                  <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                    Batch {alumnus.batch}
                  </div>

                  {/* Social Icons */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <motion.a
                      href={alumnus.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 bg-neutral-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                    >
                      <Linkedin size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={alumnus.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 bg-neutral-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                    >
                      <Twitter size={16} className="text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white mb-1 group-hover:text-orange-500 transition-colors">
                    {alumnus.name}
                  </h3>
                  <p className="text-orange-500 text-sm mb-4">{alumnus.role}</p>

                  {/* Current Company */}
                  <div className="flex items-center gap-2 text-neutral-400 text-sm mb-2">
                    <Briefcase size={14} className="text-orange-500" />
                    <span>{alumnus.currentCompany}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                    <MapPin size={14} className="text-orange-500" />
                    <span>{alumnus.location}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{alumnus.bio}</p>

                  {/* Achievements */}
                  <div className="bg-neutral-800/50 rounded-lg p-3 mb-4">
                    <p className="text-orange-500 text-xs">{alumnus.achievements}</p>
                  </div>

                  {/* View Profile Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedAlumni(index)}
                    className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <span>View Full Profile</span>
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Want to Join Our <span className="text-orange-500">Alumni Network</span>?
            </h2>
            <p className="text-neutral-400 mb-8">
              Start your entrepreneurial journey with KLS GRID and become part of this successful community
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
