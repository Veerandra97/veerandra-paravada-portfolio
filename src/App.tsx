/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { NatureBackground } from './components/NatureBackground';
import { Journey } from './components/Journey';
import { Resume } from './components/Resume';
import { ConfirmITModal } from './components/ConfirmITModal';

export default function App() {
  const [showResume, setShowResume] = useState(false);
  const [isConfirmITOpen, setIsConfirmITOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setShowResume(window.location.hash === '#resume');
    };
    
    // Check initially
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (showResume) {
    return <Resume />;
  }

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-moss-500/30 selection:text-white">
      <NatureBackground />
      
      <div className="relative z-10 flex-grow">
        <Navbar
          onOpenConfirmIT={() => setIsConfirmITOpen(true)}
          isConfirmITActive={isConfirmITOpen}
        />
        <main>
          <Hero />
          <About />
          <Journey />
          <Experience />
          <Skills />
          <Education />
          <Projects />
        </main>
        <Contact />
      </div>

      {/* ConfirmIT Floating Modal Window */}
      <ConfirmITModal
        isOpen={isConfirmITOpen}
        onClose={() => setIsConfirmITOpen(false)}
      />
    </div>
  );
}

