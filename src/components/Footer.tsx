import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-orange-500 mb-4">KLS GRID</h3>
            <p className="text-neutral-400 text-sm">
              Where ideas turn into startups. Empowering the next generation of entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-neutral-400 hover:text-orange-500 text-sm transition-colors">
                Home
              </Link>
              <Link to="/programs" className="block text-neutral-400 hover:text-orange-500 text-sm transition-colors">
                Programs
              </Link>
              <Link to="/startups" className="block text-neutral-400 hover:text-orange-500 text-sm transition-colors">
                Startups
              </Link>
              <Link to="/mentors-alumni" className="block text-neutral-400 hover:text-orange-500 text-sm transition-colors">
                Mentors & Alumni
              </Link>
              <Link to="/events" className="block text-neutral-400 hover:text-orange-500 text-sm transition-colors">
                Events
              </Link>
              <Link to="/contact" className="block text-neutral-400 hover:text-orange-500 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-neutral-400">
                <Mail size={16} className="text-orange-500" />
                <span>info@klsgrid.com</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Phone size={16} className="text-orange-500" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin size={16} className="text-orange-500" />
                <span>KLS Campus, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KLS GRID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}