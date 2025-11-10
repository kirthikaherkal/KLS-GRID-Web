import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import directorImage from "figma:asset/73357ed3d5c6f7540f676f318b4bda4928a68c8b.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const teamMembers = [
    {
      name: "Priya Deshmukh",
      role: "Program Manager",
      bio: "Managing all incubation programs and startup operations. Former startup founder with successful exit.",
      image: "business woman manager",
    },
    {
      name: "Rahul Patil",
      role: "Technical Advisor",
      bio: "Guiding technical development and product strategy. Ex-Google engineer with 15+ years experience.",
      image: "tech advisor man",
    },
    {
      name: "Sneha Kulkarni",
      role: "Community Manager",
      bio: "Building and nurturing the GRID community. Expert in ecosystem development and networking.",
      image: "community manager woman",
    },
    {
      name: "Vikram Shah",
      role: "Investment Liaison",
      bio: "Connecting startups with investors and funding opportunities. Strong network in VC ecosystem.",
      image: "investment man",
    },
    {
      name: "Anjali Rao",
      role: "Marketing Head",
      bio: "Managing brand and outreach initiatives. Former marketing lead at successful startup.",
      image: "marketing head woman",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
            <h1
              className="text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Get in{" "}
              <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Have questions? Want to learn more about GRID?
              We're here to help. Reach out to us and we'll get
              back to you as soon as possible.
            </p>
          </motion.div>

          {/* Director Section - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-orange-500/10 via-neutral-900 to-neutral-900 rounded-2xl border-2 border-orange-500/30 overflow-hidden shadow-2xl shadow-orange-500/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-auto">
                  <img
                    src={directorImage}
                    alt="Director of KLS GRID"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm mb-4">
                      Director, KLS GRID
                    </div>
                    <h2
                      className="text-white mb-4"
                      style={{
                        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                      }}
                    >
                      GAJENDRA TRIPATHI
                    </h2>
                    <p className="text-neutral-300 mb-6 leading-relaxed">
                      Leading the vision of transforming KLS
                      into a premier startup hub. With over 20
                      years of experience in academia and
                      entrepreneurship , GAJENDRA TRIPATHI is
                      committed to nurturing the next generation
                      of innovators.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.linkedin.com/in/gajendratripathi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        <Linkedin size={20} />
                        <span>Connect on LinkedIn</span>
                      </a>
                      <a
                        href="mailto:director@klsgrid.com"
                        className="w-12 h-12 bg-neutral-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
                      >
                        <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-8">
                <h2 className="text-white mb-6">
                  Send us a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-neutral-300 mb-2 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-2 text-sm">
                      Email Address
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
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-8">
                <h3 className="text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Email</h4>
                      <p className="text-neutral-400 text-sm">
                        info@klsgrid.com
                      </p>
                      <p className="text-neutral-400 text-sm">
                        support@klsgrid.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Phone</h4>
                      <p className="text-neutral-400 text-sm">
                        +91 (836) 224-5678
                      </p>
                      <p className="text-neutral-400 text-sm">
                        Mon-Fri, 9AM-6PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">
                        Address
                      </h4>
                      <p className="text-neutral-400 text-sm">
                        KLS Gogte Institute of Technology
                      </p>
                      <p className="text-neutral-400 text-sm">
                        Belagavi, Karnataka, India - 590008
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-8">
                <h3 className="text-white mb-6">Follow Us</h3>

                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                  >
                    <Twitter className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20 p-8">
                <h3 className="text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-neutral-300">
                    <span>Monday - Friday</span>
                    <span className="text-orange-500">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Saturday</span>
                    <span className="text-orange-500">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Sunday</span>
                    <span className="text-neutral-500">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Meet Our{" "}
              <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              The dedicated team behind KLS GRID, working
              tirelessly to support and empower the next
              generation of entrepreneurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-neutral-950 rounded-xl border border-neutral-800 hover:border-orange-500 transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-square bg-neutral-800 relative overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-neutral-400 text-sm mb-4">
                    {member.bio}
                  </p>

                  <button className="text-orange-500 hover:text-orange-400 transition-colors">
                    <Linkedin size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-white mb-2">Find Us Here</h3>
              <p className="text-neutral-400">
                KLS Gogte Institute of Technology, Belagavi
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}