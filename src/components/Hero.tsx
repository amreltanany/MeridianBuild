import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onVideoEnded: () => void;
  videoEnded: boolean;
}

export function Hero({ onVideoEnded, videoEnded }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [skipVideo, setSkipVideo] = useState(false);

  // If the user prefers reduced motion, skip the video lifecycle and show the
  // static hero immediately.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setSkipVideo(true);
      onVideoEnded();
    }
  }, [onVideoEnded]);

  const handleSkip = useCallback(() => {
    const v = videoRef.current;
    if (v) v.pause();
    setSkipVideo(true);
    onVideoEnded();
  }, [onVideoEnded]);

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Video / static background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnded}
          onError={onVideoEnded}
          aria-hidden="true"
        >
          <source src="/house-building-video_(1).mp4" type="video/mp4" />
        </video>

        {/* Dark overlay — intensifies after video ends */}
        <div
          className="absolute inset-0 bg-black/30 transition-colors duration-1000"
          style={
            videoEnded || skipVideo
              ? { backgroundColor: 'rgba(17,17,17,0.55)' }
              : undefined
          }
        />
      </div>

      {/* Skip-to-content control while video plays */}
      {!videoEnded && !skipVideo && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Play size={14} className="fill-current" />
          Skip Intro
        </button>
      )}

      {/* Hero content — revealed post-video */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center ${videoEnded || skipVideo ? '' : 'pointer-events-none'}`}
      >
        <p
          className={`hero-reveal mb-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-accent ${videoEnded || skipVideo ? 'is-visible' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          Precision Engineering &amp; Architecture
        </p>
        <h1
          className={`hero-reveal font-display max-w-4xl text-4xl font-bold leading-[1.1] text-text sm:text-5xl md:text-6xl lg:text-7xl ${videoEnded || skipVideo ? 'is-visible' : ''}`}
          style={{
            transitionDelay: '400ms',
            textWrap: 'balance',
          }}
        >
          From Ground Up to{' '}
          <span className="text-accent">Architectural Perfection</span>
        </h1>
        <p
          className={`hero-reveal mt-6 max-w-2xl text-lg text-text/80 md:text-xl ${videoEnded || skipVideo ? 'is-visible' : ''}`}
          style={{
            transitionDelay: '600ms',
            textWrap: 'pretty',
          }}
        >
          Crafting high-end residential and commercial structures with
          precision engineering.
        </p>
        <div
          className={`hero-reveal mt-10 flex flex-col gap-4 sm:flex-row ${videoEnded || skipVideo ? 'is-visible' : ''}`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            View Portfolio
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-text/60 px-8 py-4 text-base font-semibold text-text transition-colors duration-200 hover:bg-text hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {(videoEnded || skipVideo) && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-text/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-accent" />
          </div>
        </div>
      )}
    </section>
  );
}
