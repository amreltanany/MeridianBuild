import { useState, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Timeline } from '@/components/Timeline';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { ParallaxBackground } from '@/components/ParallaxBackground';

function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = useCallback(() => {
    setVideoEnded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <ParallaxBackground />

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-bg"
      >
        Skip to main content
      </a>

      <Navbar visible={videoEnded} />

      <main id="main" className="relative z-10">
        <Hero onVideoEnded={handleVideoEnded} videoEnded={videoEnded} />
        <Projects />
        <Services />
        <Timeline />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
