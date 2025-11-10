import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TrendingUp, Users, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import inaugurationImage from 'figma:asset/0212fe4cf4f607350cc43e716f8055d99b055ee4.png';

export function Home() {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const letters = ['K', 'L', 'S', ' ', 'G', 'R', 'I', 'D'];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < letters.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Rocket, value: '50+', label: 'Startups Incubated' },
    { icon: Users, value: '200+', label: 'Entrepreneurs Mentored' },
    { icon: Award, value: '₹10Cr+', label: 'Funding Raised' },
    { icon: TrendingUp, value: '85%', label: 'Success Rate' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/40 to-neutral-900/60 z-10" />
          <img
            src={inaugurationImage}
            alt="KLS GRID Inauguration"
            className="w-full h-full object-cover object-center brightness-100 opacity-10"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <Logo size={120} animated={true} />
          </motion.div>

          {/* Animated Logo Text */}
          <div className="mb-8">
            <h1 className="inline-block">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index < visibleLetters ? 1 : 0,
                    y: index < visibleLetters ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block ${
                    index < 3 ? 'text-white' : index === 3 ? '' : 'text-orange-500'
                  }`}
                  style={{ 
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-neutral-200 mb-12"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            Where ideas turn into startups
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
              >
                Apply to GRID
              </motion.button>
            </Link>
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                Explore Programs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-colors"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <div className="text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                  {stat.value}
                </div>
                <p className="text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Why Choose <span className="text-orange-500">KLS GRID</span>?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Join a thriving ecosystem of innovators, mentors, and industry leaders dedicated to transforming your startup vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Mentorship',
                description: 'Get guidance from successful entrepreneurs and industry veterans.',
              },
              {
                title: 'Funding Support',
                description: 'Access to investors and funding opportunities for your startup.',
              },
              {
                title: 'Networking',
                description: 'Connect with like-minded founders and build lasting partnerships.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 bg-neutral-800 rounded-xl border border-neutral-700 hover:border-orange-500 transition-all"
              >
                <h3 className="text-white mb-4">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}