import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications'; // <--- Added import
import { ContactModal } from '@/components/ContactModal';
import { Footer } from '@/components/Footer';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-navy-900 dark:text-white transition-colors duration-300">
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main>
        <Hero onContactClick={() => setContactOpen(true)} />
        <Metrics />
        <Experience />
        <Skills />
        <Education />
        <Certifications /> {/* <--- Added component */}
      </main>

      <Footer onContactClick={() => setContactOpen(true)} />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default App;