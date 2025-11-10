import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'apply' | 'register' | 'propose';
}

export function ApplicationModal({ isOpen, onClose, type }: ApplicationModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === 'apply') {
      navigate('/join');
    } else {
      alert('Thank you! We will get back to you soon.');
      onClose();
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'apply':
        return 'Apply to KLS GRID';
      case 'register':
        return 'Register for Event';
      case 'propose':
        return 'Propose an Event';
      default:
        return 'Get Started';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'apply':
        return 'Start your entrepreneurial journey with us. Fill out the details below and we\'ll redirect you to our full application form.';
      case 'register':
        return 'Register for this event and we\'ll send you all the details via email.';
      case 'propose':
        return 'Have an event idea? Share it with us and let\'s make it happen!';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-md w-full p-8 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <X size={20} className="text-neutral-400" />
              </button>

              {/* Content */}
              <h2 className="text-white mb-2">{getTitle()}</h2>
              <p className="text-neutral-400 text-sm mb-6">{getDescription()}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-neutral-300 mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+91 1234567890"
                  />
                </div>

                {type === 'propose' && (
                  <div>
                    <label className="block text-neutral-300 mb-2 text-sm">
                      Event Details *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      placeholder="Tell us about your event idea..."
                    />
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  {type === 'apply' ? 'Continue to Application' : 'Submit'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
