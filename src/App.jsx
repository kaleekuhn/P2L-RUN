import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Dashboard from './pages/Dashboard';
import JobBoard from './pages/JobBoard';
import LearningHub from './pages/LearningHub';
import Events from './pages/Events';
import Community from './pages/Community';
import Mentorship from './pages/Mentorship';
import AISupport from './pages/AISupport';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <Router basename="/P2L-RUN">
      <div className="min-h-screen bg-dark-bg">
        <Header 
          onMobileMenuToggle={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Navigation 
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
        <main className="lg:ml-64 mt-16 min-h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="/learning" element={<LearningHub />} />
              <Route path="/events" element={<Events />} />
              <Route path="/community" element={<Community />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/ai-support" element={<AISupport />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App
