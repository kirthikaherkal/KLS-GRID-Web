import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function JoinGrid() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startupName: '',
    startupStage: '',
    industry: '',
    teamSize: '',
    description: '',
    program: '',
    website: '',
    linkedin: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 via-orange-950/20 to-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
              Join <span className="text-orange-500">KLS GRID</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Take the first step towards transforming your startup idea into reality. Fill out the application form below and our team will get back to you within 48 hours.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800 p-8 md:p-12 shadow-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-orange-500 mx-auto mb-6" />
                <h3 className="text-white mb-4">Application Submitted Successfully!</h3>
                <p className="text-neutral-400">
                  Thank you for applying to KLS GRID. Our team will review your application and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-white mb-6 pb-3 border-b border-neutral-800">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-300 mb-2 text-sm">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-2 text-sm">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-2 text-sm">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>
                </div>

                {/* Startup Information */}
                <div>
                  <h3 className="text-white mb-6 pb-3 border-b border-neutral-800">Startup Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-neutral-300 mb-2 text-sm">
                        Startup Name *
                      </label>
                      <input
                        type="text"
                        name="startupName"
                        value={formData.startupName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Enter your startup name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-neutral-300 mb-2 text-sm">
                          Startup Stage *
                        </label>
                        <select
                          name="startupStage"
                          value={formData.startupStage}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="">Select Stage</option>
                          <option value="idea">Idea Stage</option>
                          <option value="mvp">MVP/Prototype</option>
                          <option value="early">Early Stage</option>
                          <option value="growth">Growth Stage</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-neutral-300 mb-2 text-sm">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="">Select Industry</option>
                          <option value="saas">SaaS</option>
                          <option value="fintech">FinTech</option>
                          <option value="healthtech">HealthTech</option>
                          <option value="edtech">EdTech</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-neutral-300 mb-2 text-sm">
                          Team Size *
                        </label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="">Select Size</option>
                          <option value="1">Solo Founder</option>
                          <option value="2-5">2-5 Members</option>
                          <option value="6-10">6-10 Members</option>
                          <option value="10+">10+ Members</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-neutral-300 mb-2 text-sm">
                          Program of Interest *
                        </label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="">Select Program</option>
                          <option value="ideation">Ideation Lab</option>
                          <option value="mvp">MVP Sprint</option>
                          <option value="growth">Growth Accelerator</option>
                          <option value="incubation">Incubation Program</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-300 mb-2 text-sm">
                        Startup Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tell us about your startup, the problem you're solving, and your vision..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-neutral-300 mb-2 text-sm">
                          Website (Optional)
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder="https://example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-neutral-300 mb-2 text-sm">
                          LinkedIn Profile (Optional)
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Submit Application
                  </motion.button>
                  <p className="text-neutral-500 text-sm text-center mt-4">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Fast Review',
                description: 'Get feedback on your application within 48 hours',
              },
              {
                title: 'Expert Support',
                description: 'Access to mentors and industry veterans',
              },
              {
                title: 'No Equity',
                description: 'We don\'t take equity for our programs',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"
              >
                <h4 className="text-white mb-2">{benefit.title}</h4>
                <p className="text-neutral-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
