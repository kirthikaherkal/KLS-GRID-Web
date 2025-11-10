import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { ApplicationModal } from '../components/ApplicationModal';

export function Events() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'register' | 'propose'>('register');

  const handleRegister = () => {
    setModalType('register');
    setShowModal(true);
  };

  const handlePropose = () => {
    setModalType('propose');
    setShowModal(true);
  };

  const currentEvents = [
    {
      title: 'Startup Pitch Night',
      date: 'November 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'KLS GRID Auditorium',
      attendees: '150+ Expected',
      description: 'Watch 10 promising startups pitch their ideas to a panel of investors and industry experts. Network with fellow entrepreneurs and investors.',
      category: 'Networking',
      status: 'Registration Open',
    },
    {
      title: 'Product Development Workshop',
      date: 'November 20, 2025',
      time: '10:00 AM - 5:00 PM',
      location: 'Online & KLS Campus',
      attendees: '80+ Registered',
      description: 'Learn the fundamentals of building an MVP with industry veterans. Hands-on sessions covering design thinking, prototyping, and user testing.',
      category: 'Workshop',
      status: 'Few Spots Left',
    },
    {
      title: 'Investor Connect Meetup',
      date: 'November 22, 2025',
      time: '4:00 PM - 7:00 PM',
      location: 'GRID Innovation Hub',
      attendees: '50 Startups',
      description: 'Exclusive networking event connecting early-stage startups with angel investors and VCs. One-on-one pitch sessions available.',
      category: 'Investor Meet',
      status: 'Registration Open',
    },
  ];

  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Bootcamp',
      date: 'December 5-7, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'KLS GRID Tech Lab',
      attendees: 'Limited to 40',
      description: '3-day intensive bootcamp on integrating AI/ML into your startup. Expert-led sessions on practical applications and implementation strategies.',
      category: 'Bootcamp',
      badge: 'Premium Event',
    },
    {
      title: 'Women Entrepreneurs Summit',
      date: 'December 12, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Campus',
      attendees: '200+ Expected',
      description: 'Celebrating and empowering women in entrepreneurship. Keynote speakers, panel discussions, and networking opportunities.',
      category: 'Summit',
      badge: 'Free Entry',
    },
    {
      title: 'Fundraising Masterclass',
      date: 'December 18, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Online Webinar',
      attendees: 'Unlimited',
      description: 'Learn the art of fundraising from successful founders who have raised millions. Cover pitch decks, term sheets, and investor negotiations.',
      category: 'Masterclass',
      badge: 'Registration Required',
    },
    {
      title: 'GRID Annual Startup Expo',
      date: 'January 15, 2026',
      time: 'Full Day Event',
      location: 'KLS Convention Center',
      attendees: '500+ Expected',
      description: 'Our biggest event of the year! Showcase your startup, meet investors, attend workshops, and connect with the entire startup ecosystem.',
      category: 'Expo',
      badge: 'Flagship Event',
    },
    {
      title: 'Legal & Compliance for Startups',
      date: 'January 25, 2026',
      time: '3:00 PM - 6:00 PM',
      location: 'GRID Seminar Hall',
      attendees: '60 Seats',
      description: 'Navigate the legal landscape of startups. Learn about incorporation, compliance, intellectual property, and legal documentation.',
      category: 'Workshop',
      badge: 'Expert Led',
    },
  ];

  const pastEvents = [
    {
      title: 'GRID Inauguration Ceremony',
      date: 'September 2024',
      description: 'Official launch of KLS GRID with 200+ attendees including industry leaders, investors, and students.',
      highlights: '5 keynote speakers, 15+ startups showcased',
    },
    {
      title: 'First Cohort Demo Day',
      date: 'October 2024',
      description: 'Inaugural batch of 12 startups presented their MVPs to a panel of investors and mentors.',
      highlights: '₹2Cr funding commitments, 100% placement',
    },
    {
      title: 'TechCrunch Bangalore Meetup',
      date: 'October 2024',
      description: 'Hosted regional tech community meetup with discussions on emerging technologies and startup trends.',
      highlights: '150+ tech enthusiasts, 3 panel discussions',
    },
    {
      title: 'Hackathon 2024',
      date: 'August 2024',
      description: '48-hour coding marathon with 50 teams building innovative solutions for real-world problems.',
      highlights: '₹1L prize pool, 10 prototype developed',
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
              Events & <span className="text-orange-500">Workshops</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Join our community events, workshops, and networking sessions designed to accelerate your startup journey.
            </p>
          </motion.div>

          {/* Current Events */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white mb-8 flex items-center gap-2"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              <div className="w-2 h-8 bg-orange-500 rounded-full" />
              Current Events
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs">
                        {event.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs animate-pulse">
                        {event.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white mb-4 group-hover:text-orange-500 transition-colors">
                      {event.title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-3 mb-4 text-sm">
                      <div className="flex items-center gap-3 text-neutral-400">
                        <Calendar size={16} className="text-orange-500 flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-400">
                        <Clock size={16} className="text-orange-500 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-400">
                        <MapPin size={16} className="text-orange-500 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-400">
                        <Users size={16} className="text-orange-500 flex-shrink-0" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm mb-6">{event.description}</p>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                      onClick={handleRegister}
                    >
                      <span>Register Now</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white mb-8 flex items-center gap-2"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              <div className="w-2 h-8 bg-orange-500 rounded-full" />
              Upcoming Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden"
                >
                  <div className="p-6">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs">
                        {event.category}
                      </span>
                      {event.badge && (
                        <span className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs">
                          {event.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-white mb-3">{event.title}</h4>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Calendar size={14} className="text-orange-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Clock size={14} className="text-orange-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400">
                        <MapPin size={14} className="text-orange-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm mb-4">{event.description}</p>

                    {/* CTA */}
                    <button className="w-full py-2 bg-neutral-800 text-white rounded-lg hover:bg-orange-500 transition-colors text-sm">
                      Set Reminder
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white mb-8 flex items-center gap-2"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              <div className="w-2 h-8 bg-orange-500 rounded-full" />
              Past Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden"
                >
                  <div className="p-6">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs">
                        {event.category}
                      </span>
                      {event.badge && (
                        <span className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs">
                          {event.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-white mb-3">{event.title}</h4>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <Calendar size={14} className="text-orange-500" />
                        <span>{event.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm mb-4">{event.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2 text-sm">
                      {event.highlights.split(', ').map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-neutral-400">
                          <CheckCircle2 size={14} className="text-orange-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Want to Host an <span className="text-orange-500">Event</span>?
            </h2>
            <p className="text-neutral-400 mb-8">
              GRID welcomes community-driven events. If you'd like to host a workshop, talk, or meetup at our space, get in touch!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              onClick={handlePropose}
            >
              Propose an Event
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
      />
    </div>
  );
}