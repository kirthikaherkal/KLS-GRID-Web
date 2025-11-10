import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Programs } from './pages/Programs';
import { Startups } from './pages/Startups';
import { MentorsAlumni } from './pages/MentorsAlumni';
import { Alumni } from './pages/Alumni';
import { JoinGrid } from './pages/JoinGrid';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <Router>
          <div className="min-h-screen bg-neutral-900 text-white transition-colors duration-300">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/startups" element={<Startups />} />
              <Route path="/mentors-alumni" element={<MentorsAlumni />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<JoinGrid />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}